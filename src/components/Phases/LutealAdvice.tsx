const LutealAdvice = () => {
    return (
      <div className="container_info_phases">
        <h2 className="text-3xl md:text-4xl pt-1 font-light text-pink">
          <span className="font-bold">CONSEJOS</span> DE BIENESTAR<sup className="text-sm align-super">1</sup>
        </h2>
  
        <ul className="list-disc pl-5 space-y-2 leading-relaxed mt-4">
          <li className="pl-2">
            Ejercicios de baja intensidad para adaptarse a las posibles fluctuaciones de 
            energía, escuchando siempre al cuerpo y atendiendo a sus necesidades.
          </li>
          <li className="pl-2">
            Priorizar el sueño, la hidratación y la relajación para mejorar el estado de 
            ánimo y aliviar el estrés, incorporando estrategias como la meditación y 
            ejercicios de atención plena.
          </li>
          <li className="pl-2">
            Enfocar la mente en actividades que produzcan paz y alegría.
          </li>
        </ul>
  
        <p className="mt-10 text-sm">
          <strong>Referencias:</strong>
          <span className="font-bold"> 1.</span> Koch J. How to Treat your Body During your Luteal Phase [Internet]. Disponible en:{" "}
          <a
            href="https://n9.cl/astl4"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            https://n9.cl/astl4
          </a>
          .
        </p>
      </div>
    );
  };
  
  export default LutealAdvice;
  