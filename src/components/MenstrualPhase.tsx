import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { getHexColor } from "@/utils/Utilities";

interface Props {
  dia: number;
}

const MenstrualPhase = ({dia}: Props) => {
  const [pageActive, setPageActive] = useState(null);
  const colorBg = pageActive === null ? getHexColor(dia) : "white";
  const colorHeaderAndFooter = pageActive === null ? "white" : "black";

  return (
    <main className="h-screen font-brandon" style={{ backgroundColor: colorBg }}>
      <div className="max-w-7xl mx-auto p-4 md:p-6 lg:p-8 h-full">
        <div className="flex flex-col gap-4 lg:gap-8 h-full justify-between">
          <Header color={colorHeaderAndFooter} />
            
          <Footer color={colorHeaderAndFooter} />
        </div>
      </div>
    </main>
  );
};

export default MenstrualPhase;
