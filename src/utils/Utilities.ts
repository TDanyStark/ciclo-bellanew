import { URL_BASE } from "@/config";

export function getFaseColor(dia: number): "agua" | "tierra" | "fuego" | "aire" {
  if (dia >= 1 && dia <= 5) return "agua";
  if (dia >= 6 && dia <= 11) return "tierra";
  if (dia >= 12 && dia <= 15) return "fuego";
  return "aire";
}

const phaseConfig = {
  agua: {
    name: "Menstrual",
    phaseName: "Menstrual",
    color: "#5dc5ed",
    footerColor: "black",
    headerColor: "black",
    titleColor: "color",
    imgUrl: `${URL_BASE}/img/users_cycles/agua.webp`,
    opacity: 0.1,
  },
  tierra: {
    name: "Folicular",
    phaseName: "Follicular",
    color: "#00a127",
    footerColor: "white",
    headerColor: "white",
    titleColor: "white",
    imgUrl: `${URL_BASE}/img/users_cycles/tierra.webp`,
    opacity: 0.2,
  },
  fuego: {
    name: "Ovulatoria",
    phaseName: "Ovulatory",
    color: "#fe5800",
    footerColor: "white",
    headerColor: "white",
    titleColor: "white",
    imgUrl: `${URL_BASE}/img/users_cycles/fuego.webp`,
    opacity: 0.3,
  },
  aire: {
    name: "Lútea",
    phaseName: "Luteal",
    color: "#7ec9cd",
    footerColor: "white",
    headerColor: "white",
    titleColor: "color",
    imgUrl: `${URL_BASE}/img/users_cycles/aire.webp`,
    opacity: 0.1,
  },
};

export function getPhaseConfig(dia: number) {
  const phaseKey = getFaseColor(dia);
  return phaseConfig[phaseKey];
}

export function getHexColor(dia: number): string {
  const phaseKey = getFaseColor(dia);
  return phaseConfig[phaseKey].color;
}