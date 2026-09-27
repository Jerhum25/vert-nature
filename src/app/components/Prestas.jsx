export default function Prestas(){
     return(
       <div>
      <div className="w-full p-5 bg-white z-100 text-black">
        <ul className="grid justify-between md:grid-cols-4 sm:grid-cols-2 grid-cols-1 sm:gap-10 gap-3 w-full xl:w-[70%] mx-auto">
          <li className="flex gap-1 items-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2em"
              height="2em"
              viewBox="0 0 12 12"
            >
              <path
                fill="#33A266"
                d="M2.707 10L.854 11.854a.5.5 0 0 1-.708-.708L2 9.293V5.5C2 2.462 5.5 0 11.5 0a.5.5 0 0 1 .5.5C12 6.497 9.538 10 6.5 10zM5 6.293L3.146 8.146a.5.5 0 1 0 .708.708L5.707 7H7.5a.5.5 0 0 0 0-1h-.793l2.147-2.146a.5.5 0 1 0-.708-.708L6 5.293V4.5a.5.5 0 0 0-1 0z"
              />
            </svg>
            <h3 className="text-sm font-bold flex flex-col">
              Création de jardins
              <span className="text-xs  opacity-60 font-normal">
                Conception sur mesure
              </span>
            </h3>
          </li>
          <li className="flex gap-1 items-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2em"
              height="2em"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="#33A266"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M12 22V9m3 8h1a5 5 0 0 0 .999-9.9C16.999 4.338 15 2 12 2S7.001 4.338 7.001 7.1A5.002 5.002 0 0 0 8 17h1m3-2l2.5-2.5M12 13l-2.5-2.5M10 22h4"
              />
            </svg>{" "}
            <h3 className="text-sm font-bold flex flex-col">
              Entretien
              <span className="text-xs  opacity-60 font-normal">
                Tonte, taille, élagage
              </span>
            </h3>{" "}
          </li>
          <li className="flex gap-1 items-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2em"
              height="2em"
              viewBox="0 0 24 24"
            >
              <path
                fill="#33A266"
                d="M3 21q-.825 0-1.412-.587T1 19v-2q0-.825.588-1.412T3 15h6q.825 0 1.413.588T11 17v2q0 .825-.587 1.413T9 21zm12 0q-.825 0-1.412-.587T13 19V5q0-.825.588-1.412T15 3h6q.825 0 1.413.588T23 5v14q0 .825-.587 1.413T21 21zM3 19h6v-2H3zm12 0h6V5h-6zm3-1q.425 0 .713-.288T19 17t-.288-.712T18 16t-.712.288T17 17t.288.713T18 18M3 13q-.825 0-1.412-.587T1 11V5q0-.825.588-1.412T3 3h6q.825 0 1.413.588T11 5v6q0 .825-.587 1.413T9 13zm4-5q.425 0 .713-.288T8 7t-.288-.712T7 6t-.712.288T6 7t.288.713T7 8m-4 2.675L5 8l2.25 3H9V5H3zM6 8"
              />
            </svg>{" "}
            <h3 className="text-sm font-bold flex flex-col">
              Aménagement extérieur
              <span className="text-xs  opacity-60 font-normal">
                Terrasses, allées, clotures
              </span>
            </h3>{" "}
          </li>
          <li className="flex gap-1 items-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2em"
              height="2em"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="#33A266"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 13c-4 0-5-3.333-5-5V4l2.5 2L12 3l2.5 3L17 4v4c0 1.667-1 5-5 5m0 0v8m1 0c5.6 0 7-4.667 7-7c-5.6 0-7 4.667-7 7m0 0h-1m-1 0c-5.6 0-7-4.667-7-7c5.6 0 7 4.667 7 7m0 0h1"
              />
            </svg>{" "}
            <h3 className="text-sm font-bold flex flex-col">
              Conseils personnalisés
              <span className="text-xs  opacity-60 font-normal">
                Un projet adapté à vos besoins
              </span>
            </h3>{" "}
          </li>
        </ul>
      </div>

       </div>
     );
}