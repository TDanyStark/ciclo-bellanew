import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { getFaseColor, getHexColor, getImgUrl } from "@/utils/Utilities";

interface Props {
  dia: number;
}

const MenstrualPhase = ({ dia }: Props) => {
  const [pageActive, setPageActive] = useState(null);
  const colorBg = pageActive === null ? getHexColor(dia) : "white";
  const colorHeaderAndFooter = pageActive === null ? "white" : "black";
  const urlImg = getImgUrl(dia);
  const faseName = getFaseColor(dia);

  return (
    <main
      className="min-h-screen font-brandon flex flex-col"
      style={{ backgroundColor: colorBg }}
    >
      <div className="flex-1 flex">
        <div className="max-w-7xl mx-auto w-full p-4 md:p-6 lg:p-8 pb-0 md:pb-0 lg:pb-0">
          <div className="flex flex-col gap-4 lg:gap-8 h-full justify-between relative">
            <Header color={colorHeaderAndFooter} />
            <div className="flex flex-col lg:flex-row gap-8 items-center justify-center">
              <div className="flex-1">
                <img
                  src={urlImg}
                  alt={`Imagen de ${faseName}`}
                  
                />
              </div>
              <div className="min-w-80">
                <ul>
                  <li>
                    <button>
                      INFORMACION
                    </button>
                  </li>
                  <li>
                    <button>
                      SINTOMAS
                    </button>
                  </li>
                  <li>
                    <button>
                      ALIMENTACION
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            <footer className="text-sm absolute bottom-0 py-4 md:py-6 lg:py-8" style={{color: colorHeaderAndFooter}}>PARA USO EXCLUSIVO DEL PROFESIONAL MÉDICO</footer>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MenstrualPhase;
