import { useState } from "react";
import Header from "./Header";
import {
  getFaseName,
  getHexColor,
  getImgUrl,
  getPhaseName,
} from "@/utils/Utilities";
import componentMap from "@/utils/componentMap";
import { URL_BASE } from "@/config";

interface Props {
  dia: number;
}

const Phases = ({ dia }: Props) => {
  const [pageActive, setPageActive] = useState<
    "characteristics" | "symptoms" | "food" | "advice" | "info" | null
  >(null);
  const colorBg = pageActive === null ? getHexColor(dia) : "white";
  const colorHeaderAndFooter = pageActive === null ? "white" : "black";
  const urlImg = getImgUrl(dia);
  const faseName = getFaseName(dia);
  const faseKey = getPhaseName(dia) as keyof typeof componentMap;
  const ActiveComponent = pageActive
    ? componentMap[faseKey]?.[pageActive]
    : null;

  return (
    <main
      className="min-h-screen font-brandon flex flex-col"
      style={{ backgroundColor: colorBg }}
    >
      <div className="flex-1 flex">
        <div className="container mx-auto w-full p-4 md:p-6 lg:p-8 pb-0 md:pb-0 lg:pb-0 relative">
          <div className="flex flex-col gap-4 lg:gap-8 h-full justify-between relative">
            <Header color={colorHeaderAndFooter} />
            <div className="flex flex-col lg:flex-row gap-8 justify-center mt-8">
              <div
                className={`w-full lg:w-2/5 order-2 lg:order-1 flex flex-col items-center gap-8 lg:border-r-2 ${
                  colorBg === "white" ? "border-purple-heading" : "border-white"
                }`}
              >
                <h1
                  className={`${
                    colorBg === "white" ? "text-pink" : "text-white"
                  } text-4xl lg:text-5xl`}
                >
                  FASE
                  <span
                    className={`uppercase font-bold block ${
                      colorBg === "white" ? "text-purple-heading" : "text-white"
                    }`}
                  >
                    {faseName}
                  </span>
                </h1>
                <div className="flex-1 flex flex-col">
                  <div className="w-full aspect-[96/100] relative">
                    <img
                      src={urlImg}
                      alt={`Imagen de ${faseName}`}
                      width={1200}
                      height={1249}
                      className="max-w-full max-h-full object-contain object-bottom mt-auto"
                    />
                  </div>
                </div>
              </div>
              <div
                className="w-full lg:w-3/5 flex flex-col gap-4 lg:gap-8 order-1 lg:order-2 text-white py:py-4 lg:py-8"
                role="tablist"
              >
                <h2
                  className={`text-3xl ${
                    colorBg === "white" ? "text-purple-heading" : "text-white"
                  }`}
                >
                  <span className="font-bold">DÍA {dia}</span> DE TU CICLO
                </h2>
                {ActiveComponent ? (
                  <ActiveComponent />
                ) : (
                  <ul className="flex-1 px-4 pb-px lg:px-8 lg:pb-px space-y-6 text-2xl">
                    <li role="presentation">
                      <button
                        className="px-4 py-1 border-2 border-purple-heading cursor-pointer text-left hover:bg-white hover:text-purple-heading hover:border-white"
                        role="tab"
                        aria-selected="true"
                        onClick={() => {
                          setPageActive("characteristics");
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        }}
                      >
                        <span className="font-bold">CARACTERÍSTICAS</span> DE LA
                        FASE {faseName.toUpperCase()}
                      </button>
                    </li>
                    <li role="presentation">
                      <button
                        className="px-4 py-1 border-2 border-purple-heading cursor-pointer text-left hover:bg-white hover:text-purple-heading hover:border-white"
                        role="tab"
                        aria-selected="false"
                        onClick={() => {
                          setPageActive("symptoms");
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        }}
                      >
                        <span className="font-bold">SÍNTOMAS</span> QUE PUEDES
                        PRESENTAR
                      </button>
                    </li>
                    <li role="presentation">
                      <button
                        className="px-4 py-1 border-2 border-purple-heading cursor-pointer text-left hover:bg-white hover:text-purple-heading hover:border-white"
                        role="tab"
                        aria-selected="false"
                        onClick={() => {
                          setPageActive("food");
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        }}
                      >
                        <span className="font-bold">ALIMENTOS</span>{" "}
                        RECOMENDADOS
                      </button>
                    </li>
                    <li role="presentation">
                      <button
                        className="px-4 py-1 border-2 border-purple-heading cursor-pointer text-left hover:bg-white hover:text-purple-heading hover:border-white"
                        role="tab"
                        aria-selected="false"
                        onClick={() => {
                          setPageActive("advice");
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        }}
                      >
                        <span className="font-bold">CONSEJOS</span> DE BIENESTAR
                      </button>
                    </li>
                    <li role="presentation">
                      <button
                        className="px-4 py-1 border-2 border-purple-heading cursor-pointer text-left hover:bg-white hover:text-purple-heading hover:border-white"
                        role="tab"
                        aria-selected="false"
                        onClick={() => {
                          setPageActive("info");
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        }}
                      >
                        <span className="font-bold">INFORMACIÓN</span> MÉDICA
                      </button>
                    </li>
                  </ul>
                )}
                {pageActive && (
                  <div className="flex">
                    <button
                      className="ml-auto cursor-pointer"
                      onClick={() => {
                        setPageActive(null);
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                    >
                      <img
                        className="w-10"
                        src={URL_BASE + "/img/home.webp"}
                        alt="Icono de home"
                      />
                    </button>
                  </div>
                )}
              </div>
            </div>
            <footer
              className="text-sm absolute bottom-0 py-4 md:py-6 lg:py-8"
              style={{ color: colorHeaderAndFooter }}
            >
              <p>PARA USO EXCLUSIVO DEL PROFESIONAL MÉDICO</p>
            </footer>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Phases;
