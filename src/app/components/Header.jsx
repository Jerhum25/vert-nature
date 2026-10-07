import Image from "next/image";

export default function Header() {
  return (
    <div className="w-full flex justify-center text-white relative z-100 ">
      <div className=" w-full h-full flex justify-between gap-3 bg-transparent px-5 py-2">
        <div className="w-auto h-auto flex items-center ">
          <Image
                    width={50}
                    height={50}
                    unoptimized
                    alt="fond hero"
                    src="/images/logo.png"
                    style={{ objectFit: "cover", objectPosition: "70%" }}
                  />
          <h1 className=" flex flex-col font-bold text-xl">Vert & Nature <span className="font-normal text-sm">Paysagiste à Besançon</span></h1>
        </div>
        <div className="  lg:flex items-center hidden absolute top-[50%] left-[50%] translate-[-50%]">
          <nav>
            <ul className="flex gap-3 capitalize text-md 2xl:text-lg font-semibold">
              <li>accueil</li>
              <li><a href="#apropos">à propos</a></li>
              <li><a href="#services">services</a></li>
              <li><a href="#realisations">réalisations</a></li>
              <li><a href="#avis">avis</a></li>
              <li><a href="#contact">contact</a></li>
            </ul>
          </nav>
        </div>
        <div className="flex items-center">
          <button className="bg-[#33A266] rounded-full md:px-5 md:py-3 px-2 py-1 flex items-center gap-2 text-white text-sm sm:text-md
          ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M19.95 21q-3.125 0-6.175-1.362t-5.55-3.863t-3.862-5.55T3 4.05q0-.45.3-.75t.75-.3H8.1q.35 0 .625.238t.325.562l.65 3.5q.05.4-.025.675T9.4 8.45L6.975 10.9q.5.925 1.187 1.787t1.513 1.663q.775.775 1.625 1.438T13.1 17l2.35-2.35q.225-.225.588-.337t.712-.063l3.45.7q.35.1.575.363T21 15.9v4.05q0 .45-.3.75t-.75.3"
              />
            </svg>
            <a href="tel:0622334455" className="text-nowrap">06 22 33 44 55</a>
          </button>
        </div>
      </div>
    </div>
  );
}
