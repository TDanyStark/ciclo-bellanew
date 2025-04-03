const LutealSymptoms = () => {
  return (
    <div className="container_info_phases">
      <h2 className="text-3xl md:text-4xl pt-1 font-light text-pink">
        <span className="font-bold">SÍNTOMAS</span> QUE PUEDES PRESENTAR <sup className="text-sm align-super">1,2</sup>
      </h2>

      <ul className="list-disc pl-5 space-y-2 leading-relaxed mt-4">
        <li className="pl-2">
          Las fluctuaciones hormonales pueden aumentar la{" "}
          <strong>sensibilidad emocional</strong> y la{" "}
          <strong>irritabilidad</strong>.
        </li>
        <li className="pl-2">
          Síntomas relacionados con la <strong>retención de líquidos</strong>:
          distensión abdominal, hinchazón, leve aumento de peso, tensión
          mamaria.
        </li>
        <li className="pl-2">
          Fluctuaciones de energía, <strong>cansancio o fatiga</strong>.
        </li>
        <li className="pl-2">
          Aumento del apetito o <strong>antojos</strong>.
        </li>
        <li className="pl-2">
          Aumento del grosor y de la consistencia pegajosa del flujo.
        </li>
        <li className="pl-2">
          <strong>Trastornos del sueño</strong>.
        </li>
        <li className="pl-2">
          <strong>Acné</strong>.
        </li>
        <li className="pl-2">
          <strong>Estreñimiento</strong>.
        </li>
      </ul>

      <p className="mt-10 text-sm">
        <strong>Referencias:</strong>
        <span className="font-bold"> 1.</span> Koch J. How to Treat your Body
        During your Luteal Phase [Internet]. Disponible en:{" "}
        <a
          href="https://n9.cl/astl4"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          https://n9.cl/astl4
        </a>
        . <span className="font-bold"> 2.</span> Nutrition for Optimal Health
        During the Menstrual Cycle [Internet]. Disponible en:{" "}
        <a
          href="https://n9.cl/j2qkh6"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          https://n9.cl/j2qkh6
        </a>
        .
      </p>
    </div>
  );
};

export default LutealSymptoms;
