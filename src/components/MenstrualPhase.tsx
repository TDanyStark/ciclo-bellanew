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
        <div className="max-w-7xl mx-auto w-full p-4 md:p-6 lg:p-8">
          <div className="flex flex-col gap-4 lg:gap-8 h-full justify-between">
            <Header color={colorHeaderAndFooter} />
            <div className="flex flex-col lg:flex-row gap-8 items-center justify-center">
              <div>
                <img
                  src={urlImg}
                  alt={`Imagen de ${faseName}`}
                  className="h-96"
                />
              </div>
              <div></div>
            </div>
            <Footer color={colorHeaderAndFooter} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default MenstrualPhase;
