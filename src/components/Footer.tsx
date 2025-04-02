interface Props {
  color?: string;
}

const Footer = ({ color = "black" }: Props) => {
  return  (
    <footer className="text-sm" style={{color}}>PARA USO EXCLUSIVO DEL PROFESIONAL MÉDICO</footer>
  )
}

export default Footer;