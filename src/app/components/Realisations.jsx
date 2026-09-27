"use client";

import Image from "next/image";
import { useState } from "react";

// Liste des projets pour simplifier le code et éviter la répétition
const realisations = [
  {
    src: "/images/realisation1.jpg",
    alt: "Jardin contemporain",
    title: "Jardin contemporain",
    subtitle: "Besançon",
  },
  {
    src: "/images/realisation2.jpg",
    alt: "Terrasse en bois",
    title: "Terrasse en bois",
    subtitle: "Franois",
  },
  {
    src: "/images/realisation3.jpg",
    alt: "Bassin naturel",
    title: "Bassin naturel",
    subtitle: "Boussière",
  },
  {
    src: "/images/realisation4.jpg",
    alt: "Aménagement paysager",
    title: "Aménagement paysager",
    subtitle: "Thise",
  },
];

export default function Realisations() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="w-full h-auto flex justify-center bg-white" id="realisations">
      <div className="xl:w-[90%] w-full flex lg:flex-row flex-col  text-black py-5">
        <div className="lg:w-[20%] w-full h-fit p-5 flex flex-col gap-3">
          <h2 className="uppercase flex gap-2 items-center text-[#33A266]">
             nos réalisations
          </h2>
          <h3 className="text-3xl font-bold">
            Ils nous ont fait confiance
          </h3>
          <p>
            Découvrez quelques unes de nos réalisations afin de vous en inspirer pour votre propre projet.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full flex-1 gap-8 pt-8 lg:w-[70%] p-5 2xl:pr-0">
          {realisations.map((realisation, index) => (
            <div key={index} className="flex flex-col gap-3 w-full sm:w-full">
              <div
                className="w-auto h-44 relative cursor-pointer overflow-hidden rounded-lg group"
                onClick={() => setSelectedImage(realisation)}
              >
                <Image
                  fill
                  unoptimized
                  alt={realisation.alt}
                  src={realisation.src}
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              <div className="absolute bottom-0 left-0 text-white w-full p-2">
                <div className="bg-black left-0 bottom-0 opacity-60 absolute h-full w-full"></div>
                <p className="capitalize relative">{realisation.title}</p>
                <p className="relative flex gap-1 text-gray-300"><span><svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="#33A266" d="M13.413 11.413Q14 10.825 14 10t-.587-1.412T12 8t-1.412.588T10 10t.588 1.413T12 12t1.413-.587M12 19.35q3.05-2.8 4.525-5.087T18 10.2q0-2.725-1.737-4.462T12 4T7.738 5.738T6 10.2q0 1.775 1.475 4.063T12 19.35M12 22q-4.025-3.425-6.012-6.362T4 10.2q0-3.75 2.413-5.975T12 2t5.588 2.225T20 10.2q0 2.5-1.987 5.438T12 22m0-12" /></svg></span>{realisation.subtitle}</p>
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
