const LutealFood = () => {
    return (
      <div className="container_info_phases">
        <h2 className="text-3xl md:text-4xl pt-1 font-light text-pink">
          <span className="font-bold">ALIMENTOS</span> RECOMENDADOS<sup className="text-sm align-super">1</sup>
        </h2>
  
        <h3 className="text-2xl font-semibold mt-4">
          Proteínas para evitar la sensación de hambre y los antojos:
        </h3>
        <ul className="list-disc pl-5 space-y-2 leading-relaxed mt-2">
          <li className="pl-2">Carne magra, pescados y mariscos.</li>
          <li className="pl-2">Huevos, lácteos, productos a base de soya.</li>
        </ul>
  
        <h3 className="text-2xl font-semibold mt-4">
          Alimentos ricos en triptófano que ayudan a mejorar el estado de ánimo 
          y el sueño:
        </h3>
        <ul className="list-disc pl-5 space-y-2 leading-relaxed mt-2">
          <li className="pl-2">Pavo, leche descremada, soya, semillas de calabaza.</li>
        </ul>
  
        <h3 className="text-2xl font-semibold mt-4">
          Alimentos que favorecen la digestión, ayudan a regular los niveles de azúcar, 
          reducir la hinchazón y aliviar los síntomas del síndrome premenstrual:
        </h3>
        <ul className="list-disc pl-5 space-y-2 leading-relaxed mt-2">
          <li className="pl-2">Cereales integrales, legumbres, verduras de hoja verde, Proteínas magras, banano.</li>
        </ul>
        <h3 className="text-2xl font-semibold mt-4">
          Ácidos grasos esenciales:
        </h3>
        <ul className="list-disc pl-5 space-y-2 leading-relaxed mt-2">
          <li className="pl-2">Semillas de girasol, frutos secos, pescado, Aceite de oliva, aguacate.</li>
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
  
  export default LutealFood;
  