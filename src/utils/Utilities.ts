import { URL_BASE } from "@/config";

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

const fases = {
  agua: "Menstrual",
  tierra: "Folicular",
  fuego: "Ovulatoria",
  aire: "Lútea",
}

const phases = {
  agua: "Menstrual",
  tierra: "Follicular",
  fuego: "Ovulatory",
  aire: "Luteal",
}

const footer_color = {
  agua: "black",
  tierra: "white",
  fuego: "white",
  aire: "white",
}

const color_title = {
  agua: "color",
  tierra: "white",
  fuego: "white",
  aire: "color",
}

export function getHexColor(dia: number): string {
  const fase = getFaseColor(dia);
  return colores[fase];
}

export function getFaseName(dia: number): string {
  const fase = getFaseColor(dia);
  return fases[fase];
}

export function getPhaseName(dia: number): string {
  const fase = getFaseColor(dia);
  return phases[fase];
}

export function getImgUrl(dia: number): string {
  const fase = getFaseColor(dia);
  return `${URL_BASE}/img/users_cycles/${fase}.webp`;
}

export function getFooterColor(dia: number): string {
  const fase = getFaseColor(dia);
  return footer_color[fase];
}

export function getColorTitle(dia: number): string {
  const fase = getFaseColor(dia);
  return color_title[fase];
}