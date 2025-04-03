import { useEffect, useRef, useState } from "react";
import { URL_BASE } from "@/config";
import Modal from "./Modal";
import { getHexColor } from "@/utils/Utilities";

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
    console.log("useEffect canvas", animatedDia);
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Configuración
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const outerRadius = Math.min(centerX, centerY) - 85;
    const innerRadius = outerRadius * 0.73;
    const daysTotal = 28;
    const img = new Image();
    img.src = `${URL_BASE}/img/cycle.webp`;

    img.onload = function () {
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      dibujarCirculo(animatedDia);
    };

    function drawArrow(
      ctx: CanvasRenderingContext2D,
      fromX: number,
      fromY: number,
      toX: number,
      toY: number,
      color = "black"
    ) {
      const headLength = 35;
      const separacion = 10;
      toX -= separacion * Math.cos(Math.atan2(toY - fromY, toX - fromX));
      toY -= separacion * Math.sin(Math.atan2(toY - fromY, toX - fromX));
      const angle = Math.atan2(toY - fromY, toX - fromX);

      ctx.beginPath();
      ctx.moveTo(toX, toY);
      ctx.lineTo(
        toX - headLength * Math.cos(angle - Math.PI / 6),
        toY - headLength * Math.sin(angle - Math.PI / 6)
      );
      ctx.lineTo(
        toX - headLength * Math.cos(angle + Math.PI / 6),
        toY - headLength * Math.sin(angle + Math.PI / 6)
      );
      ctx.lineTo(toX, toY);
      ctx.fillStyle = color;
      ctx.fill();
      ctx.closePath();
    }

    // Función para dibujar el círculo
    function dibujarCirculo(diaSeleccionado: number | null) {
      if (!canvas) return; // Verificar si canvas es null
      if (!ctx) return; // Verificar si ctx es null
      // si el dia es null, no dibujar nada
      if (diaSeleccionado === null) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpiar todo el lienzo
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height); // Volver a dibujar la imagen de fondo

      const anglePerDay = (Math.PI * 2) / daysTotal;
      const startAngle = (diaSeleccionado - 1) * anglePerDay - Math.PI / 2;
      const endAngle = diaSeleccionado * anglePerDay - Math.PI / 2;

      // Reiniciar estilos
      ctx.strokeStyle = "white";
      ctx.lineWidth = 4;
      ctx.fillStyle = "white";

      // Dibujar línea inicial
      ctx.beginPath();
      ctx.moveTo(
        centerX + innerRadius * Math.cos(startAngle),
        centerY + innerRadius * Math.sin(startAngle)
      );
      ctx.lineTo(
        centerX + outerRadius * Math.cos(startAngle),
        centerY + outerRadius * Math.sin(startAngle)
      );
      ctx.stroke();

      // Dibujar línea final
      ctx.beginPath();
      ctx.moveTo(
        centerX + innerRadius * Math.cos(endAngle),
        centerY + innerRadius * Math.sin(endAngle)
      );
      ctx.lineTo(
        centerX + outerRadius * Math.cos(endAngle),
        centerY + outerRadius * Math.sin(endAngle)
      );
      ctx.stroke();

      // Unir las líneas exteriores
      ctx.beginPath();
      ctx.moveTo(
        centerX + outerRadius * Math.cos(startAngle - 0.01),
        centerY + outerRadius * Math.sin(startAngle - 0.01)
      );
      ctx.lineTo(
        centerX + outerRadius * Math.cos(endAngle + 0.01),
        centerY + outerRadius * Math.sin(endAngle + 0.01)
      );
      ctx.stroke();

      // Dibujar flecha hacia el día seleccionado
      const arrowAngle = startAngle + anglePerDay / 2;
      drawArrow(
        ctx,
        centerX,
        centerY,
        centerX + innerRadius * Math.cos(arrowAngle),
        centerY + innerRadius * Math.sin(arrowAngle),
        getHexColor(diaSeleccionado)
      );
    }
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
      setFecha("");
      return;
    }

    // si la fecha es menor a el dia actual que se muestre el modal
    const fechaSeleccionada = new Date(fecha + "T00:00:00");
    const fechaActual = new Date();
    fechaActual.setHours(0, 0, 0, 0);
    if (fechaSeleccionada < fechaActual) {
      setMessage("La fecha seleccionada es menor a la fecha actual");
      setOpen(true);
      setFecha("");
      return;
    }

    // calcular el ciclo
    const timeDifference =
      Math.abs(fechaSeleccionada.getTime() - fechaActual.getTime()) /
      (1000 * 60 * 60 * 24);
    console.log(timeDifference);
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
                  <span className="block">ESTÁS EN EL</span>
                  <span className="block text-6xl">DIA {dia}</span>
                  <span className="block">DE TU CICLO</span>
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
