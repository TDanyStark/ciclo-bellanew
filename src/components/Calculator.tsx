import { useEffect, useRef, useState } from "react";
import { URL_BASE } from "@/config";
import Modal from "./Modal";
import { getHexColor } from "@/utils/Utilities";
import { dibujarCirculo } from "@/utils/CanvasUtils";

interface Props {
  dia: number | null;
  setDia: (dia: number | null) => void;
  setPhase: (view: boolean) => void;
}

const obtenerFechaActual = () => {
  const hoy = new Date();
  hoy.setHours(0, 0, 0, 0);
  return hoy.toISOString().split("T")[0];
};

const Calculator = ({ dia, setDia, setPhase }: Props) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [fecha, setFecha] = useState<string>(obtenerFechaActual());
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [animatedDia, setAnimatedDia] = useState<number | null>(null);

  useEffect(() => {
    if (dia === null) return;

    let currentDay = 1;
    const step = 1; // Incremento por cuadro de animación
    const animationSpeed = 30; // Velocidad en milisegundos por cuadro

    const animate = () => {
      if (currentDay <= dia) {
        setAnimatedDia(currentDay);
        currentDay += step;
        setTimeout(() => requestAnimationFrame(animate), animationSpeed);
      }
    };

    setAnimatedDia(1); // Reiniciar la animación desde el día 1
    requestAnimationFrame(animate);
  }, [dia]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const outerRadius = Math.min(centerX, centerY) - 85;
    const innerRadius = outerRadius * 0.73;
    const daysTotal = 28;
    const img = new Image();
    img.src = `${URL_BASE}/img/cycle.webp`;

    img.onload = function () {
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      dibujarCirculo(
        ctx,
        canvas,
        img,
        animatedDia,
        centerX,
        centerY,
        outerRadius,
        innerRadius,
        daysTotal
      );
    };
  }, [animatedDia]);

  const handleDiaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedDate = e.target.value;
    setFecha(selectedDate);
  };

  const handleOnClick = () => {
    // si no hay fecha seleccionada, mostrar el modal
    if (!fecha) {
      setMessage("Por favor selecciona una fecha");
      setOpen(true);
      setFecha(obtenerFechaActual());
      return;
    }

    // si la fecha es menor a el dia actual que se muestre el modal
    const fechaSeleccionada = new Date(fecha + "T00:00:00");
    const fechaActual = new Date();
    fechaActual.setHours(0, 0, 0, 0);
    if (fechaSeleccionada > fechaActual) {
      setMessage("La fecha seleccionada no puede ser mayor a la actual");
      setOpen(true);
      setFecha(obtenerFechaActual());
      return;
    }

    // calcular el ciclo
    const timeDifference =
      Math.abs(fechaSeleccionada.getTime() - fechaActual.getTime()) /
      (1000 * 60 * 60 * 24);
    let cycleDay = Math.ceil(timeDifference) + 1;
    if (cycleDay > 28) {
      cycleDay = 28;
    }
    setDia(cycleDay);
  };

  const onClose = () => {
    setOpen(false);
  };

  const color = dia !== null ? getHexColor(dia) : "white";

  return (
    <>
      <div className="flex flex-col lg:flex-row gap-8 items-center justify-center">
        <div>
          <canvas
            ref={canvasRef}
            width="700"
            height="700"
            className="max-w-full"
          ></canvas>
        </div>
        <div className="flex flex-col gap-2 lg:gap-4 w-80 min-w-80 max-w-80 items-center">
          {dia === null && (
            <>
              <h2 className="text-pink text-2xl lg:text-3xl font-bold text-center">
                FECHA ÚLTIMA MENSTRUACIÓN
              </h2>
              <input
                type="date"
                id="startDate"
                value={fecha}
                onChange={handleDiaChange}
                className="block max-w-56 bg-purple text-white px-4 py-1 text-lg"
              />
              <button
                className="mt-4 text-2xl border-2 border-purple px-4 py-1 cursor-pointer"
                onClick={handleOnClick}
              >
                CALCULAR
              </button>
            </>
          )}
          {
            // si hay dia seleccionado, mostrar el día y el botón de reiniciar
            dia !== null && (
              <>
                <h2 className="text-purple-heading text-2xl lg:text-3xl font-bold">
                  <span className="block">ESTÁ EN EL</span>
                  <span className="block text-6xl">DIA {dia}</span>
                  <span className="block">DE SU CICLO</span>
                </h2>
                <button
                  className={`mt-2 text-2xl text-white font-bold px-4 py-1 cursor-pointer`}
                  style={{ backgroundColor: color }}
                  onClick={() => setPhase(true)}
                >
                  MÁS INFORMACIÓN
                </button>
                <button
                  className="text-lg border-2 border-purple px-4 py-1 cursor-pointer"
                  onClick={() => {
                    setDia(null);
                    setAnimatedDia(null);
                    setFecha(obtenerFechaActual());
                  }}
                >
                  REINICIAR
                </button>
              </>
            )
          }
        </div>
      </div>
      <Modal isOpen={open} onClose={onClose} message={message} />
    </>
  );
};

export default Calculator;
