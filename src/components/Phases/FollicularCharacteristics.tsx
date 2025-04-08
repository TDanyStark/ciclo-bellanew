const FollicularCharacteristics = () => {
  return (
    <div className="container_info_phases">
      <h2 className="text-3xl md:text-4xl pt-1 font-light text-pink">
        <span className="font-bold">CARACTERÍSTICAS</span> DE LA FASE FOLICULAR
      </h2>
      <p className="mb-4">
        La tierra es el elemento de la estabilidad, los cimientos, el
        crecimiento y el cuerpo. Al igual que los procesos germinativos de la
        tierra, la fase folicular es el período de enraizamiento donde sientan
        las bases para la ovulación.
        <sup className="text-sm">1-3</sup>
      </p>
      <h3 className="characteristicsh3 text-purple-heading">
        CARACTERÍSTICAS:<sup className="text-sm">2,3</sup>
      </h3>
      <ul className="list-disc pl-5 space-y-2 leading-relaxed">
        <li className="pl-2">Puede durar entre 6 y 13 días.</li>
        <li className="pl-2">
          Los estrógenos son las hormonas ováricas predominantes.
        </li>
        <li className="pl-2">Los folículos ováricos y el endometrio crecen.</li>
        <li className="pl-2">
          Aparece un moco cervical más acuoso y elástico, para favorecer la
          entrada de espermatozoides.
        </li>
      </ul>
      <p className="mt-10 text-sm">
        <strong>Referencias:</strong>
        <span className="font-bold"> 1.</span> Crystal Cave. Elemento Tierra
        [Internet]. Disponible en:
        <a
          href="https://n9.cl/1f4xse"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          https://n9.cl/1f4xse
        </a>
        .<span className="font-bold"> 2.</span> Moreno-Gómez E, Jáuregui-Lobera
        I. Variables emocionales y food craving: influencia del ciclo menstrual.
        JONNPR. 2022;7(1):28-63.
        <span className="font-bold"> 3.</span> Barranquero M, Rogel S, Salvador
        Z. El ciclo menstrual: ¿qué ocurre en cada una de sus fases?
        Reproducción Asistida ORG. 2023. Disponible en:
        <a
          href="https://www.reproduccionasistida.org/fases-del-ciclo-menstrual"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          https://www.reproduccionasistida.org/fases-del-ciclo-menstrual
        </a>
        .
      </p>
    </div>
  );
};

export default FollicularCharacteristics;
