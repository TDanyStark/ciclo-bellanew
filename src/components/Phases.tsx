import { useState } from "react";
import Header from "./Header";
import { getPhaseConfig } from "@/utils/Utilities";
import componentMap from "@/utils/componentMap";
import { URL_BASE } from "@/config";

interface Props {
  dia: number;
  setPhase: (value: boolean) => void;
}

const Phases = ({ dia, setPhase }: Props) => {
  const [pageActive, setPageActive] = useState<
    "characteristics" | "symptoms" | "food" | "advice" | "info" | null
  >(null);
  const phaseConfig = getPhaseConfig(dia);
  const faseKey = phaseConfig.phaseName as keyof typeof componentMap;
  const ActiveComponent = pageActive
    ? componentMap[faseKey]?.[pageActive]
    : null;

  const handleClickHome = () => {
    if (pageActive !== null) {
      setPageActive(null);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    setPhase(false);
  };

  return (
    <main
      className="min-h-screen font-brandon flex flex-col main-phases relative"
      style={{
        backgroundImage: `url(${phaseConfig.imgUrl})`, // Cambia la imagen de fondo según el día
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: `rgba(0, 0, 0, ${phaseConfig.opacity})`, // Overlay with dynamic transparency
        }}
      ></div>
      <div className="flex-1 flex relative" style={{ zIndex: 2 }}>
        <div className="container mx-auto w-full p-4 md:p-6 lg:p-8">
          <div className="flex flex-col gap-4 lg:gap-8 h-full justify-between relative pb-12 lg:pb-0">
            <Header color={phaseConfig.headerColor} />
            <div className="flex flex-col lg:flex-row gap-8 justify-center mt-8">
              <div
                className={`w-full lg:w-2/5 flex flex-col items-center gap-8 lg:border-r-2 ${
                  phaseConfig.titleColor === "color"
                    ? "border-purple-heading"
                    : "border-white"
                }`}
              >
                <h1
                  className={`${
                    phaseConfig.titleColor === "color"
                      ? "text-pink"
                      : "text-white"
                  } text-4xl lg:text-5xl`}
                >
                  FASE
                  <span
                    className={`uppercase font-bold block ${
                      phaseConfig.titleColor === "color"
                        ? "text-purple-heading"
                        : "text-white"
                    }`}
                  >
                    {phaseConfig.name}
                  </span>
                </h1>
                <div className="flex-1 flex flex-col w-full">
                  <div className="w-full lg:aspect-[9/10] relative"></div>
                </div>
              </div>
              <div
                className="w-full lg:w-3/5 flex flex-col gap-4 lg:gap-8 text-white py:py-4 lg:py-8"
                role="tablist"
              >
                <h2
                  className={`text-3xl ${
                    phaseConfig.titleColor === "color"
                      ? "text-purple-heading"
                      : "text-white"
                  }`}
                >
                  <span className="font-bold">DÍA {dia}</span> DE TU CICLO
                </h2>
                {ActiveComponent ? (
                  <ActiveComponent />
                ) : (
                  <ul
                    className={`flex-1 px-4 pb-px lg:px-8 lg:pb-px space-y-6 text-2xl ${
                      phaseConfig.titleColor === "color"
                        ? "text-purple-heading"
                        : "text-white"
                    }`}
                  >
                    <li role="presentation">
                      <button
                        className={`px-4 py-1 border-2  cursor-pointer text-left
                          ${
                            phaseConfig.titleColor === "color"
                              ? "border-white hover:bg-purple-heading hover:text-white hover:border-purple-heading"
                              : "border-purple-heading hover:bg-white hover:text-purple-heading hover:border-white"
                          }
                          `}
                        role="tab"
                        aria-selected="true"
                        onClick={() => {
                          setPageActive("characteristics");
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        }}
                      >
                        <span className="font-bold">CARACTERÍSTICAS</span> DE LA
                        FASE {phaseConfig.name.toUpperCase()}
                      </button>
                    </li>
                    <li role="presentation">
                      <button
                        className={`px-4 py-1 border-2  cursor-pointer text-left
                          ${
                            phaseConfig.titleColor === "color"
                              ? "border-white hover:bg-purple-heading hover:text-white hover:border-purple-heading"
                              : "border-purple-heading hover:bg-white hover:text-purple-heading hover:border-white"
                          }
                          `}
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
                        className={`px-4 py-1 border-2  cursor-pointer text-left
                          ${
                            phaseConfig.titleColor === "color"
                              ? "border-white hover:bg-purple-heading hover:text-white hover:border-purple-heading"
                              : "border-purple-heading hover:bg-white hover:text-purple-heading hover:border-white"
                          }
                          `}
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
                        className={`px-4 py-1 border-2  cursor-pointer text-left
                          ${
                            phaseConfig.titleColor === "color"
                              ? "border-white hover:bg-purple-heading hover:text-white hover:border-purple-heading"
                              : "border-purple-heading hover:bg-white hover:text-purple-heading hover:border-white"
                          }
                          `}
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
                        className={`px-4 py-1 border-2  cursor-pointer text-left
                          ${
                            phaseConfig.titleColor === "color"
                              ? "border-white hover:bg-purple-heading hover:text-white hover:border-purple-heading"
                              : "border-purple-heading hover:bg-white hover:text-purple-heading hover:border-white"
                          }
                          `}
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
                <div className="flex">
                  <button
                    className="ml-auto cursor-pointer"
                    onClick={handleClickHome}
                  >
                    <img
                      className="w-10"
                      src={URL_BASE + "/img/home.webp"}
                      alt="Icono de home"
                    />
                  </button>
                </div>
              </div>
            </div>
            <footer className="text-sm" style={{ color: phaseConfig.footerColor }}>
              <p>PARA USO EXCLUSIVO DEL PROFESIONAL MÉDICO</p>
            </footer>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Phases;
