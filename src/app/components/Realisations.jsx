"use client";

import Image from "next/image";
import { useState } from "react";

// Liste des projets pour simplifier le code et éviter la répétition
const projects = [
  {
    src: "/images/interieur.webp",
    alt: "Rénovation électrique",
    title: "Rénovation électrique",
    subtitle: "Maison individuelle",
  },
  {
    src: "/images/exterieur.webp",
    alt: "éclairage extérieur",
    title: "éclairage extérieur",
    subtitle: "Maison individuelle",
  },
  {
    src: "/images/tableau.webp",
    alt: "Tableau électrique",
    title: "Tableau électrique",
    subtitle: "Appartement",
  },
  {
    src: "/images/electromenager.webp",
    alt: "Branchement électroménager",
    title: "Branchement électroménager",
    subtitle: "Maison individuelle",
  },
];

export default function Realisations() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="w-full h-auto flex justify-center bg-white" id="realisations">
      <div className="xl:w-[70%] w-full flex flex-col  text-black px-5 py-10">
        <div className="flex flex-col gap-3">
          <h2 className="uppercase flex gap-2 items-center">
            <div className="h-1 w-10 bg-[#fcbd00]"></div> nos réalisations
          </h2>{" "}
          <h3 className="text-3xl font-bold">
            Quelques exemples de nos chantiers
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full gap-8 pt-8">
          {projects.map((project, index) => (
            <div key={index} className="flex flex-col gap-3 w-full sm:w-full">
              <div
                className="w-auto h-44 relative cursor-pointer overflow-hidden rounded-lg group"
                onClick={() => setSelectedImage(project)}
              >
                <Image
                  fill
                  unoptimized
                  alt={project.alt}
                  src={project.src}
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              <div className="absolute bottom-0 left-0 text-white w-full p-2">
                <div className="bg-black left-0 bottom-0 opacity-60 absolute h-full w-full"></div>
                <p className="capitalize relative">{project.title}</p>
                <p className="relative">{project.subtitle}</p>
              </div>
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* Modale Plein Écran */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4 cursor-zoom-out"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-5 right-5 text-white text-3xl font-bold hover:opacity-75 z-10"
            onClick={() => setSelectedImage(null)}
          >
            ✕
          </button>

          <div
            className="relative w-full h-full max-w-5xl max-h-[85vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()} // Évite la fermeture si on clique sur le texte sous l'image
          >
            <div className="relative w-full h-full">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                unoptimized
                className="object-contain"
                priority
              />
            </div>
            <p className="text-white text-center mt-4 text-lg font-medium">
              {selectedImage.title} - {selectedImage.subtitle}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
