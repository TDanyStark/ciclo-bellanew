const LutealCharacteristics = () => {
  return (
    <div className="container_info_phases">
      <h2 className="text-3xl md:text-4xl pt-1 font-light text-pink">
        <span className="font-bold">CARACTERÍSTICAS</span> DE LA FASE LÚTEA
      </h2>

      <p className="mt-4 leading-relaxed">
        El aire es cambiante, no tiene forma permanente, su naturaleza es más
        reflexiva y espiritual. Así mismo, la fase lútea es una época de cambios
        hormonales que pueden influir en el estado de ánimo.
        <sup className="text-sm">1,2</sup>
      </p>

      <h3 className="characteristicsh3">
        CARACTERÍSTICAS:<sup className="text-sm">2</sup>
      </h3>

      <ul className="list-disc pl-5 space-y-2 ml-2 leading-relaxed mt-4">
        <li className="pl-2">
          Comprende los días que ocurren desde la ovulación hasta una nueva
          menstruación.
        </li>
        <li className="pl-2">
          La hormona predominante es la <strong>progesterona</strong>.
        </li>
        <li className="pl-2">
          Los niveles de <strong>estrógeno</strong> fluctúan y tienden a
          disminuir.
        </li>
        <li className="pl-2">
          El <strong>endometrio</strong> aumenta su espesor.
        </li>
      </ul>

      <p className="mt-10 text-sm">
        <strong>Referencias:</strong>
        <span className="font-bold"> 1.</span> Crystal Cave. Elemento Aire
        [Internet]. Disponible en:{" "}
        <a
          href="https://n9.cl/31irg"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          https://n9.cl/31irg
        </a>
        . <span className="font-bold"> 2.</span> Moreno-Gómez E, Jáuregui-Lobera
        I. Variables emocionales y food craving: influencia del ciclo menstrual.
        JONNPR. 2022;7(1):28-63.
      </p>
    </div>
  );
};

export default LutealCharacteristics;
