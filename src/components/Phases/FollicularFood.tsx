const FollicularFood = () => {
    return (
      <div className="container_info_phases">
        <h2 className="text-3xl md:text-4xl pt-1 font-light text-pink">
          <span className="font-bold">ALIMENTOS</span> RECOMENDADOS
        </h2>
        <h3 className="text-2xl font-semibold mt-4">
          Alimentos que ayudan a equilibrar el estrógeno:
          <sup className="text-sm">1</sup>
        </h3>
        <ul className="list-disc pl-5 space-y-2 ml-2 leading-relaxed mt-2">
          <li className="pl-2">
            Verduras crucíferas (brócoli, repollo, coliflor, coles).
          </li>
          <li className="pl-2">
            Fermentados (chucrut, kimchi, kéfir, yogurt).
          </li>
          <li className="pl-2">
            Grasas saludables (aguacate, semillas de linaza, semillas de
            calabaza).
          </li>
          <li className="pl-2">Verduras de hoja verde.</li>
        </ul>
        <h3 className="text-2xl font-semibold mt-4">
          Alimentos que ayudan a mejorar la calidad de los óvulos y a regular las
          hormonas:
          <sup className="text-sm">1,2</sup>
        </h3>
        <ul className="list-disc pl-5 space-y-2 ml-2 leading-relaxed mt-2">
          <li className="pl-2">Pescados ricos en omega-3 (salmón, atún, trucha).</li>
          <li className="pl-2">Nueces.</li>
          <li className="pl-2">Quinoa.</li>
          <li className="pl-2">Arroz o trigo integral.</li>
        </ul>
        <p className="mt-10 text-sm">
          <strong>Referencias:</strong>
          <span className="font-bold"> 1.</span> Nutrition and Exercise Throughout
          Your Menstrual Cycle. Cleveland Clinic; 2023. Disponible en:
          <a
            href="https://bit.ly/4iqxaVr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            https://bit.ly/4iqxaVr
          </a>
          .<span className="font-bold"> 2.</span> Regenera. Fases del ciclo
          menstrual: Días, Hormonas y Síntomas [Internet]. Disponible en:
          <a
            href="https://n9.cl/5u2wk"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            https://n9.cl/5u2wk
          </a>
          .
        </p>
      </div>
    );
  };
  
  export default FollicularFood;
  