const MenstrualCharacteristics = () => {
  return (
    <div className="container_info_phases">
      <h1 className="text-3xl md:text-4xl font-bold text-pink">
        CARACTERÍSTICAS{" "}
        <span className="font-light">DE LA FASE MENSTRUAL</span>
      </h1>
      <p className="mt-4 text-lg">
        El agua es el elemento que significa purificación, renovación y
        liberación. Por ello, se relaciona con la fase menstrual, en la que el
        cuerpo se libera y purifica para empezar un nuevo ciclo.
        <sup className="text-sm">1,2</sup>
      </p>
      <h2 className="mt-6 text-2xl font-bold text-purple-heading">
        CARACTERÍSTICAS:<sup className="text-sm">1,2</sup>
      </h2>
      <ul className="mt-4 list-disc list-inside text-lg space-y-2">
        <li>Ocurre en los primeros 5 días del ciclo</li>
        <li>Desprendimiento de la capa funcional del endometrio</li>
        <li>Sangrado como consecuencia de la no fecundación</li>
        <li>
          El sangrado que se libera es una mezcla de flujo vaginal, sangre y
          tejido endometrial
        </li>
      </ul>
      <p className="mt-6 text-sm">
        <strong>Referencias:</strong> <span className="font-bold">1.</span> Ferro P. La dimensión sagrada, simbólica y
        mística del agua. Rev Semillas. 2006;28/29. <span className="font-bold">2.</span> Moreno-Gómez E,
        Jáuregui-Lobera I. Variables emocionales y food craving: influencia del
        ciclo menstrual. JONNPR. 2022;7(1):28-63. <span className="font-bold">3.</span> Izquierdo E, Quea G,
        Barranquero M, et al. La menstruación: síntomas y características del
        sangrado. Reproducción Asistida ORG. 2023. Disponible en:
        https://www.reproduccionasistida.org/menstruacion/
      </p>
    </div>
  );
};

export default MenstrualCharacteristics;
