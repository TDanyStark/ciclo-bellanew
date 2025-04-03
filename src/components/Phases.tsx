import { useState } from "react";
import Header from "./Header";
import { getFaseName, getHexColor, getImgUrl } from "@/utils/Utilities";

interface Props {
  dia: number;
}

const Phases = ({ dia }: Props) => {
  const [pageActive, setPageActive] = useState<string | null>(null);
  const colorBg = pageActive === null ? getHexColor(dia) : "white";
  const colorHeaderAndFooter = pageActive === null ? "white" : "black";
  const urlImg = getImgUrl(dia);
  const faseName = getFaseName(dia);

  return (
    <main
      className="min-h-screen font-brandon flex flex-col"
      style={{ backgroundColor: colorBg }}
    >
      <div className="flex-1 flex">
        <div className="max-w-7xl mx-auto w-full p-4 md:p-6 lg:p-8 pb-0 md:pb-0 lg:pb-0">
          <div className="flex flex-col gap-4 lg:gap-8 h-full justify-between relative">
            <Header color={colorHeaderAndFooter} />
            <div className="flex flex-col lg:flex-row gap-8 justify-center">
              <div className="flex-1 order-2 lg:order-1 flex flex-col items-center gap-8 border-r-2 border-white">
                <h1 className={`${colorBg === "white" ? "text-pink" : "text-white"} text-4xl lg:text-5xl`}>
                  FASE
                  <span className={`uppercase font-bold block ${colorBg === "white" ? "text-purple-heading" : "text-white"}`}>
                    {
                      faseName
                    }
                  </span>
                </h1>
                <img src={urlImg} alt={`Imagen de ${faseName}`} className="w-full object-contain object-bottom" />
              </div>
              <div className="flex-1 order-1 lg:order-2 text-white pt-16" role="tablist">
                <h2 className={`text-3xl ${colorBg === "white" ? "text-purple-heading" : "text-white"}`}>
                  <span className="font-bold">DÍA {dia}</span> DE TU CICLO 
                </h2>
                <ul className="p-8 space-y-6 text-2xl">
                  <li role="presentation">
                    <button className="px-4 py-1 border-2 border-purple-heading cursor-pointer text-left hover:bg-white hover:text-purple-heading hover:border-white" role="tab" aria-selected="true"
                    onClick={() => setPageActive("characteristics")}>
                      <span className="font-bold">CARACTERÍSTICAS</span> DE LA FASE MENSTRUAL
                    </button>
                  </li>
                  <li role="presentation">
                    <button className="px-4 py-1 border-2 border-purple-heading cursor-pointer text-left hover:bg-white hover:text-purple-heading hover:border-white" role="tab" aria-selected="false"
                    onClick={() => setPageActive("symptoms")}>
                      <span className="font-bold">SÍNTOMAS</span> QUE PUEDES PRESENTAR
                    </button>
                  </li>
                  <li role="presentation">
                    <button className="px-4 py-1 border-2 border-purple-heading cursor-pointer text-left hover:bg-white hover:text-purple-heading hover:border-white" role="tab" aria-selected="false"
                    onClick={() => setPageActive("food")}>
                      <span className="font-bold">ALIMENTOS</span> RECOMENDADOS
                    </button>
                  </li>
                  <li role="presentation">
                    <button className="px-4 py-1 border-2 border-purple-heading cursor-pointer text-left hover:bg-white hover:text-purple-heading hover:border-white" role="tab" aria-selected="false"
                    onClick={() => setPageActive("advice")}>
                      <span className="font-bold">CONSEJOS</span> DE BIENESTAR
                    </button>
                  </li>
                  <li role="presentation">
                    <button className="px-4 py-1 border-2 border-purple-heading cursor-pointer text-left hover:bg-white hover:text-purple-heading hover:border-white" role="tab" aria-selected="false"
                    onClick={() => setPageActive("info")}>
                      <span className="font-bold">INFORMACIÓN</span> MÉDICA
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            <footer
              className="text-sm absolute bottom-0 py-4 md:py-6 lg:py-8"
              style={{ color: colorHeaderAndFooter }}
            >
              <p>
                PARA USO EXCLUSIVO DEL PROFESIONAL MÉDICO
              </p>
            </footer>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Phases;
