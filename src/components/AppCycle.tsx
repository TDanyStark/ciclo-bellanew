import { useState } from "react";
import Calculator from "./Calculator";
import Header from "./Header";
import Footer from "./Footer";
import Phases from "./Phases";

const AppCycle = () => {
  const [dia, setDia] = useState<null | number>(null);
  const [phase, setPhase] = useState(false);

  return (
    <>
      {phase && dia ? (
        <Phases dia={dia} setPhase={setPhase} />
      ) : (
        <main className="min-h-screen font-brandon flex flex-col">
          <div className="flex-1 flex">
            <div className="max-w-7xl mx-auto w-full p-4 md:p-6 lg:p-8 flex flex-col">
              <div className="flex-1 flex flex-col gap-4 lg:gap-8 justify-between">
                <Header />
                <Calculator
                  dia={dia}
                  setDia={setDia}
                  setPhase={setPhase}
                />
                <Footer />
              </div>
              
            </div>
          </div>
        </main>
      )}
    </>
  );
};

export default AppCycle;
