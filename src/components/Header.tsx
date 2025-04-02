import { URL_BASE } from "@/config";

interface Props {
  color?: string;
}

const Header = ({ color = "black" }: Props) => {
  return (
    <header className="flex gap-4 justify-between">
      {color === "black" && (
        <>
          <a href={URL_BASE}>
            <img
              className="h-10 md:h-12 w-auto"
              src={`${URL_BASE}/img/logos/abbott_black.webp`}
              alt="Logo abbott en negro"
            />
          </a>
          <img
            className="h-10 md:h-12 w-auto"
            src={`${URL_BASE}/img/logos/bellanew.webp`}
            alt="Logo abbott en negro"
          />
        </>
      )}
      {color === "white" && (
        <>
          <a href={URL_BASE}>
            <img
              className="h-10 md:h-12 w-auto"
              src={`${URL_BASE}/img/logos/abbott_white.webp`}
              alt="Logo abbott en blanco"
            />
          </a>
          <img
            className="h-10 md:h-12 w-auto"
            src={`${URL_BASE}/img/logos/bellanew_white.webp`}
            alt="Logo abbott en blanco"
          />
        </>
      )}
    </header>
  );
};
export default Header;
