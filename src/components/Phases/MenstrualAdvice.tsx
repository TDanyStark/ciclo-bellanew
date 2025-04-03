const MenstrualAdvice = () => {
  return (
    <div className="container_info_phases">
      <h1 className="text-3xl md:text-4xl leading-14 font-light text-pink">
        <span className="font-bold">CONSEJOS</span> DE BIENESTAR
      </h1>
      <ul className="mt-4 list-disc pl-5 text-lg space-y-2 leading-relaxed">
        <li>
          Durante esta fase el cuerpo tiene menos energía, así que las
          actividades físicas recomendadas son las de baja intensidad, como
          caminar, hacer estiramientos o pilates.
          <sup className="text-sm">1</sup>
        </li>
        <li>
          <span className="font-bold">
            Elección consciente de productos de cuidado menstrual:
          </span>{" "}
          las opciones sostenibles ayudan a reducir el impacto ambiental y son
          amigables con la salud femenina.
          <sup className="text-sm">2</sup>
        </li>
        <li>
          <span className="font-bold">Higiene adecuada de la zona íntima:</span>{" "}
          una higiene con agua tibia, sin jabones con fragancia, y el cambio
          frecuente de los productos de cuidado menstrual es clave para prevenir
          infecciones.
          <sup className="text-sm">2</sup>
        </li>
        <li>
          <span className="font-bold">Cuidado emocional:</span> incorporar
          prácticas de meditación o respiración consciente ayuda a gestionar el
          estrés y mejorar el bienestar emocional.
          <sup className="text-sm">2</sup>
        </li>
      </ul>
      <p className="mt-8 text-sm">
        <strong>Referencias:</strong> <span className="font-bold">1.</span>{" "}
        Nutrition and Exercise Throughout Your Menstrual Cycle. Cleveland
        Clinic; 2023. Disponible en:{" "}
        <a
          href="https://bit.ly/4iqxaVr"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          https://bit.ly/4iqxaVr
        </a>
        <br />
        <span className="font-bold">2.</span> Consejos Prácticos de Ginecología
        para el Cuidado Menstrual: Bienestar a lo Largo del Ciclo. CentroLab;
        2024. Disponible en:{" "}
        <a
          href="https://n9.cl/pd029"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          https://n9.cl/pd029
        </a>
      </p>
    </div>
  );
};

export default MenstrualAdvice;
