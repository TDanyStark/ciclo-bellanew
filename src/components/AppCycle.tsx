import { useState } from "react";
import Calculator from "./Calculator";
import Header from "./Header";
import Footer from "./Footer";
import MenstrualPhase from "./MenstrualPhase";

const AppCycle = () => {
  const [dia, setDia] = useState<null | number>(null);
  const [menstrualPhase, setMenstrualPhase] = useState(false);

  return (
    <>
      {menstrualPhase && dia ? (
        <MenstrualPhase dia={dia} />
      ) : (
        <main className="h-screen font-brandon">
          <div className="max-w-7xl mx-auto p-4 md:p-6 lg:p-8 h-full">
            <div className="flex flex-col gap-4 lg:gap-8 h-full justify-between">
              <Header />
              <Calculator
                dia={dia}
                setDia={setDia}
                setMenstrualPhase={setMenstrualPhase}
              />
              <Footer />
            </div>
          </div>
        </main>
      )}
    </>
  );
};

export default AppCycle;
