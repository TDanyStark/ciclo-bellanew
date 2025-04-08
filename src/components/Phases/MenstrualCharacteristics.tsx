const MenstrualCharacteristics = () => {
  return (
    <div className="container_info_phases">
      <h2 className="text-3xl md:text-4xl pt-1 font-light text-pink">
      <span className="font-bold">CARACTERÍSTICAS</span>{" "}
        DE LA FASE MENSTRUAL
      </h2>
      <p className="mt-4">
        El agua es el elemento que significa purificación, renovación y
        liberación. Por ello, se relaciona con la fase menstrual, en la que el
        cuerpo se libera y purifica para empezar un nuevo ciclo.
        <sup className="text-sm">1,2</sup>
      </p>
      <h2 className="characteristicsh3 text-purple-heading">
        CARACTERÍSTICAS:<sup className="text-sm">1,2</sup>
      </h2>
      <ul className="mt-4 list-disc pl-5 space-y-2 leading-relaxed">
        <li>Ocurre en los primeros 5 días del ciclo</li>
        <li>Desprendimiento de la capa funcional del endometrio</li>
        <li>Sangrado como consecuencia de la no fecundación</li>
        <li>
          El sangrado que se libera es una mezcla de flujo vaginal, sangre y
          tejido endometrial
        </li>
      </ul>
      <p className="mt-10 text-sm">
        <strong>Referencias:</strong> <span className="font-bold">1.</span> Ferro P. La dimensión sagrada, simbólica y
        mística del agua. Rev Semillas. 2006;28/29. <span className="font-bold">2.</span> Moreno-Gómez E,
        Jáuregui-Lobera I. Variables emocionales y food craving: influencia del
        ciclo menstrual. JONNPR. 2022;7(1):28-63. <span className="font-bold">3.</span> Izquierdo E, Quea G,
        Barranquero M, et al. La menstruación: síntomas y características del
        sangrado. Reproducción Asistida ORG. 2023. Disponible en:
        <a
          href="https://www.reproduccionasistida.org/menstruacion/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          https://www.reproduccionasistida.org/menstruacion/
        </a>
        .
      </p>
    </div>
  );
};

export default MenstrualCharacteristics;
