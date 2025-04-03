const OvulatoryCharacteristics = () => {
    return (
      <div className="container_info_phases">
        <h2 className="text-3xl md:text-4xl pt-1 font-light text-pink">
          <span className="font-bold">CARACTERÍSTICAS</span> DE LA FASE OVULATORIA
        </h2>
        <p className="mt-4 leading-relaxed">
          El fuego simboliza la acción y el movimiento, es el elemento que aviva nuestras 
          pasiones, la expresión máxima de energía transformadora, tal como ocurre 
          durante la fase ovulatoria.<sup className="text-sm">1,2</sup>
        </p>
  
        <h3 className="characteristicsh3">
          <span className="font-bold">Características:<sup className="text-sm">2</sup></span>
        </h3>
        <ul className="list-disc pl-5 space-y-2 leading-relaxed mt-2">
          <li className="pl-2">
            Ocurre el día 14, cuando se produce un aumento de la hormona luteinizante, 
            lo cual provoca la ovulación.<sup className="text-sm">2</sup>
          </li>
          <li className="pl-2">
            Es el proceso mediante el cual el folículo predominante se rompe y el óvulo 
            maduro es liberado a la trompa de Falopio, donde podrá ser fecundado por 
            un espermatozoide.<sup className="text-sm">2</sup>
          </li>
          <li className="pl-2">
            Si la fecundación no sucede dentro de las 24 horas después de la 
            ovulación, el óvulo envejece y ya no es posible que se fecunde.<sup className="text-sm">2</sup>
          </li>
        </ul>
  
        <p className="mt-10 text-sm">
          <strong>Referencias:</strong>
          <span className="font-bold"> 1.</span> Crystal Cave. Elemento Fuego [Internet]. Disponible en:{" "}
          <a
            href="https://n9.cl/7ou58"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            https://n9.cl/7ou58
          </a>
          .
          <span className="font-bold"> 2.</span> Barranquero M, Rogel S, Salvador Z. El ciclo menstrual: ¿qué 
          ocurre en cada una de sus fases? Reproducción Asistida ORG. 2023. Disponible en:{" "}
          <a
            href="https://www.reproduccionasistida.org/fases-del-ciclo-menstrual/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            https://www.reproduccionasistida.org/fases-del-ciclo-menstrual/
          </a>
          .
        </p>
      </div>
    );
  };
  
  export default OvulatoryCharacteristics;
  