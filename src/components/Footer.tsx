interface Props {
  color?: string;
}

const Footer = ({ color = "black" }: Props) => {
  return (
    <footer className="text-sm" style={{ color }}>
      <p>PARA USO EXCLUSIVO DEL PROFESIONAL MÉDICO</p>
    </footer>
  );
};

export default Footer;
