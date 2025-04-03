const OvulatoryFood = () => {
    return (
      <div className="container_info_phases">
        <h2 className="text-3xl md:text-4xl pt-1 font-light text-pink">
          <span className="font-bold">ALIMENTOS</span> RECOMENDADOS <sup className="text-sm align-super">1</sup>
        </h2>
  
        <h3 className="text-2xl font-semibold mt-4">
          Alimentos que favorecen el equilibrio hormonal y ayudan a reducir la inflamación:
        </h3>
        <ul className="list-disc pl-5 space-y-2 ml-2 leading-relaxed mt-2">
          <li className="pl-2">Arándanos, frambuesas, verduras de colores, té verde.</li>
          <li className="pl-2">Pescados ricos en omega-3 (salmón, atún, trucha).</li>
          <li className="pl-2">Nueces.</li>
          <li className="pl-2">Semillas de chía.</li>
        </ul>
  
        <h3 className="text-2xl font-semibold mt-4">
          Alimentos que ayudan a regular la retención de líquidos:
        </h3>
        <ul className="list-disc pl-5 space-y-2 ml-2 leading-relaxed mt-2">
          <li className="pl-2">Quinoa, cebada, cereales integrales.</li>
          <li className="pl-2">Frutas y verduras.</li>
        </ul>
  
        <p className="mt-10 text-sm">
          <strong>Referencias:</strong> 
          <span className="font-bold"> 1.</span> Nutrition for Optimal Health During the Menstrual Cycle [Internet]. Disponible en:{" "}
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
  
  export default OvulatoryFood;
  