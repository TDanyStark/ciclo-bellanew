import { getHexColor } from "@/utils/Utilities";

export function drawArrow(
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

export function dibujarCirculo(
  ctx: CanvasRenderingContext2D,
  canvas: HTMLCanvasElement,
  img: HTMLImageElement,
  diaSeleccionado: number | null,
  centerX: number,
  centerY: number,
  outerRadius: number,
  innerRadius: number,
  daysTotal: number
) {
  if (!canvas || !ctx || diaSeleccionado === null) return;

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
