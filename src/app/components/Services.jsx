"use client";

import Image from "next/image";

/* eslint-disable react/no-unescaped-entities */
export default function Services() {
  const services = [
    {
      src: "/images/service1.jpg",
      alt: "Création de jardin",
      title: "Création de jardin",
      subtitle: "Conception sur mesure de jardins adaptés à vos envies et à votre terrain.",
    },
    {
      src: "/images/service2.jpg",
      alt: "Entretien d'espaces verts",
      title: "Entretien d'espaces verts",
      subtitle: "Tonte, taille, élagage,débroussaillage... pour un extérieur toujours soigné.",
    },
    {
      src: "/images/service3.jpg",
      alt: "Aménagement extérieur",
      title: "Aménagement extérieur",
      subtitle: "Terrasses, allées, clotures, massifs et murets pour valoriser votre espace.",
    },
    {
      src: "/images/service4.jpg",
      alt: "Bassins et fontaines",
      title: "Bassins et fontaines",
      subtitle: "Apportez une touche de sérénité à votre jardin avec un point d'eau naturel.",
    },
    {
      src: "/images/service5.jpg",
      alt: "Conseils et suivi",
      title: "Conseils et suivi",
      subtitle: "Un accompagnement personnalisé du premier rendez-vous à l'entretien annuel.",
    },
  ];

  return (
    <div className="w-full flex justify-center bg-gray-200" id="services">
      <div className="xl:w-[90%] w-full flex lg:flex-row flex-col  text-black py-5">
        <div className="lg:w-[20%] w-full h-fit p-5 flex flex-col gap-3">
          <h2 className="uppercase flex gap-2 items-center text-[#33A266]">
             nos services
          </h2>
          <h3 className="text-3xl font-bold">
            Des prestations complètes pour tous vos projets
          </h3>
          <p>
            De la conception à l'entretien, nous vous accompagnons à chaque
            étape pour créer et maintenir des espaces verts durables et
            esthétiques.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-5 flex-1 gap-5  lg:w-[70%] w-full  p-5 2xl:pr-0">
          {services.map((service, index) => (
            <div key={index} className="">
              <div
                className="w-auto h-full relative overflow-hidden rounded-lg group flex flex-col"
              >
                <Image
                  width={0}
                  height={0}
                  unoptimized
                  alt={service.alt}
                  src={service.src}
                  className="object-cover group-hover:scale-105 transition-transform duration-300 h-full w-auto"
                />
                <div className="bg-white z-10 flex-1 p-2">
                  <h3 className="font-bold">{service.title}</h3>
                  <p className="text-gray-400 text-sm">{service.subtitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
