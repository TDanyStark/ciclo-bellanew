export function getFaseColor(dia: number): "agua" | "tierra" | "fuego" | "aire" {
  if (dia >= 1 && dia <= 5) return "agua";
  if (dia >= 6 && dia <= 11) return "tierra";
  if (dia >= 12 && dia <= 15) return "fuego";
  return "aire";
}

type TypeColores = {
  agua: string;
  tierra: string;
  fuego: string;
  aire: string;
};

const colores: TypeColores = {
  agua: "#5dc5ed", // Fase menstrual (días 1-5)
  tierra: "#00a127", // Fase folicular (días 6-11)
  fuego: "#fe5800", // Fase ovulatoria (días 12-15)
  aire: "#7ec9cd", // Fase lútea (días 16-28)
};

export function getHexColor(dia: number): string {
  const fase = getFaseColor(dia);
  return colores[fase];
}