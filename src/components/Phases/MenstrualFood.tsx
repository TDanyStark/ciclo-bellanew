const MenstrualFood = () => {
    return (
      <div className="container_info_phases">
        <h2 className="text-3xl md:text-4xl pt-1 font-light text-pink">
          <span className="font-bold">ALIMENTOS</span> RECOMENDADOS
          <sup className="text-sm align-super">1</sup>
        </h2>
        <ul className="mt-4 list-disc pl-5 space-y-2 ml-2 leading-relaxed">
          <li>
            <span className="font-bold">
              Alimentos ricos en hierro, que ayudan a reponer el hierro perdido en el sangrado:
            </span>{" "}
            verduras de hoja verde, carne roja magra, fríjoles y lentejas.
          </li>
          <li>
            <span className="font-bold">
              Frutas y verduras ricas en vitamina C, que aumentan la absorción del hierro:
            </span>{" "}
            cítricos, guayaba, brócoli y pimentón.
          </li>
          <li>
            <span className="font-bold">
              Alimentos ricos en vitamina K, que ayudan a reducir los sangrados abundantes:
            </span>{" "}
            espinacas, arándanos, queso y huevo.
          </li>
          <li>
            <span className="font-bold">
              Ácidos grasos omega-3, que ayudan a reducir la inflamación y los cólicos:
            </span>{" "}
            pescados como el salmón, semillas de linaza y frutos secos.
          </li>
        </ul>
        <p className="mt-10 text-sm">
          <strong>Referencias:</strong> <span className="font-bold">1.</span>{" "}
          Nutrition and Exercise Throughout Your Menstrual Cycle. Cleveland Clinic; 2023. Disponible en:{" "}
          <a
            href="https://bit.ly/4iqxaVr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            https://bit.ly/4iqxaVr
          </a>
        </p>
      </div>
    );
  };
  
  export default MenstrualFood;
  