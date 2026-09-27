/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Header from "./Header";

export default function Hero() {
  return (
    <div className="w-full h-screen  sm:h-screen flex flex-col justify-between relative">
      <div className=" w-screen flex h-screen z-0 absolute top-0 left-0">
        <Image
          fill
          unoptimized
          alt="fond hero"
          src="/images/hero.webp"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="w-full h-screen bg-linear-to-r from-black to-transparent  absolute top-0 left-0"></div>
      <div className="xl:w-[70%] w-full h-auto relative z-100 flex flex-col mx-auto ">
        <Header />
        <div className="lg:w-1/2 w-full h-full flex flex-1 flex-col justify-center gap-20 px-5 my-auto ">
          <h2 className="uppercase -mb-8 mt-5 text-[#33A266]">
            création & entretien de jardin à besançon
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold">
            Un extérieur à votre image
          </h3>
          <p>
            J'aménage et j'entretien vos espaces verts pour en faire un lieu de
            vie agréable, esthétique et durable.
          </p>
          <div className="flex items-center sm:justify-start justify-center">
            <button className="bg-[#33A266] rounded-full px-5 py-3 flex items-center gap-2 text-white mb-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.3em"
                height="1.3em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M19.95 21q-3.125 0-6.175-1.362t-5.55-3.863t-3.862-5.55T3 4.05q0-.45.3-.75t.75-.3H8.1q.35 0 .625.238t.325.562l.65 3.5q.05.4-.025.675T9.4 8.45L6.975 10.9q.5.925 1.187 1.787t1.513 1.663q.775.775 1.625 1.438T13.1 17l2.35-2.35q.225-.225.588-.337t.712-.063l3.45.7q.35.1.575.363T21 15.9v4.05q0 .45-.3.75t-.75.3"
                />
              </svg>
              <a href="tel:0622334455" className="font-semibold">
                Demander un devis gratuit
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
