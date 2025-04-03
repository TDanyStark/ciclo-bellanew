const MenstrualSymptoms = () => {
  return (
    <div className="container_info_phases">
      <h1 className="text-3xl md:text-4xl leading-14 font-light text-pink">
        <span className="font-bold">SÍNTOMAS</span> QUE PUEDES PRESENTAR
        <sup className="text-sm align-super">1</sup>
      </h1>
      <ul className="mt-4 list-disc pl-5 text-lg space-y-2 leading-relaxed">
        <li>Dolor e hinchazón de los senos</li>
        <li>Dolor tipo cólico</li>
        <li>Dolor en la zona de los riñones</li>
        <li>Dolor de cabeza</li>
        <li>Acné</li>
        <li>Cambios de humor</li>
        <li>Cansancio</li>
        <li>
          Alteraciones gastrointestinales: náuseas, gases, diarrea o
          estreñimiento.
        </li>
      </ul>
      <p className="mt-10 text-sm">
        <strong>Referencias:</strong> <span className="font-bold">1.</span>{" "}
        Izquierdo E, Quea G, Barranquero M, et al. La menstruación: síntomas y
        características del sangrado. Reproducción Asistida ORG. 2023.
        Disponible en:{" "}
        <a
          href="https://www.reproduccionasistida.org/menstruacion/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          https://www.reproduccionasistida.org/menstruacion/
        </a>
      </p>
    </div>
  );
};

export default MenstrualSymptoms;
