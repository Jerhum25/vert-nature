import Image from "next/image";

/* eslint-disable react/no-unescaped-entities */
export default function Avis() {
  const avis = [
    {
      src: "/images/profil1.jpg",
      alt: "profil1",
      opinion:
        "Une équipe à l'écoute, un travail soigné et un résultat au-delà de nos attentes.",
      name: "Sophie L.",
      country: "Besançon",
    },
    {
      src: "/images/profil5.jpg",
      alt: "profil2",
      opinion:
        "Très professionnels, reactifs et de bons conseils. Notre jardin est magnifique!",
      name: "Thomas R.",
      country: "Chalezeule",
    },
    {
      src: "/images/profil3.jpg",
      alt: "profil3",
      opinion:
        "Un véritable plaisir de travailler avec Vert & Nature. Je recommande sans hésiter!",
      name: "Isabelle M.",
      country: "Besançon",
    },
    {
      src: "/images/profil4.jpg",
      alt: "profil14",
      opinion:
        "Un excellent rapport qualité prix et une équipe très sympathique.",
      name: "Maxime D.",
      country: "Marchaux",
    },
  ];
  return (
    <div className="w-full flex justify-center  bg-gray-200" id="Services">
      <div className="xl:w-[90%] w-full flex   lg:flex-row flex-col items-center text-black py-5">
        <div className="lg:w-[20%] w-full h-fit p-5 flex flex-1 flex-col gap-3">
          {" "}
          <h2 className="uppercase flex gap-2 items-center text-[#33A266]">
            avis clients
          </h2>
          <h3 className="text-3xl font-bold">Ce qu'ils disent de nous</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full lg:w-[70%] gap-5 p-5 lg:p-0 ">
          {avis.map((item, index) => (
            <div key={index} className="flex flex-col gap-3">
              <p className="">
                <span className="-scale-x-100 w-fit inline-block">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#33A266"
                      d="M6.938 4.501c2-.053 4.172 1.435 4.523 4.6l.027.313l.001.006c.191 3.319-2.124 7.857-7.181 10.039a.5.5 0 0 1-.631-.209l-1.11-1.919a.5.5 0 0 1 .188-.686c1.71-.962 3.043-2.471 3.845-4.302c-1.19-.21-2.045-.703-2.618-1.36c-.667-.766-.905-1.7-.905-2.517c0-2.214 1.703-4.005 3.86-3.965m10 0c2-.053 4.172 1.435 4.523 4.6l.027.313l.001.006c.191 3.319-2.124 7.857-7.181 10.039a.5.5 0 0 1-.631-.209l-1.11-1.919a.5.5 0 0 1 .188-.686c1.71-.962 3.043-2.471 3.845-4.302c-1.19-.21-2.045-.703-2.618-1.36c-.667-.766-.905-1.7-.905-2.517c0-2.214 1.704-4.005 3.86-3.965"
                    />
                  </svg>
                </span>
                {item.opinion}
                <span className="w-fit inline-block">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#33A266"
                      d="M6.938 4.501c2-.053 4.172 1.435 4.523 4.6l.027.313l.001.006c.191 3.319-2.124 7.857-7.181 10.039a.5.5 0 0 1-.631-.209l-1.11-1.919a.5.5 0 0 1 .188-.686c1.71-.962 3.043-2.471 3.845-4.302c-1.19-.21-2.045-.703-2.618-1.36c-.667-.766-.905-1.7-.905-2.517c0-2.214 1.703-4.005 3.86-3.965m10 0c2-.053 4.172 1.435 4.523 4.6l.027.313l.001.006c.191 3.319-2.124 7.857-7.181 10.039a.5.5 0 0 1-.631-.209l-1.11-1.919a.5.5 0 0 1 .188-.686c1.71-.962 3.043-2.471 3.845-4.302c-1.19-.21-2.045-.703-2.618-1.36c-.667-.766-.905-1.7-.905-2.517c0-2.214 1.704-4.005 3.86-3.965"
                    />
                  </svg>
                </span>
              </p>
              <div className="profile flex gap-3 items-center">
                <div className="w-10 h-10 rounded-full overflow-hidden">
                  <Image width={40} height={40} src={item.src} alt={item.alt} />
                </div>
                <div>
                  <p className="font-bold">{item.name}</p>
                  <p>{item.country}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
