const OvulatoryAdvice = () => {
    return (
      <div className="container_info_phases text-white">
        <h2 className="text-3xl md:text-4xl pt-1 font-light text-pink">
          <span className="font-bold">CONSEJOS</span> DE BIENESTAR<sup className="text-sm align-super">1</sup>
        </h2>
  
        <ul className="list-disc pl-5 space-y-2 ml-2 leading-relaxed mt-4 text-white">
          <li className="pl-2">
            Esta fase es ideal para hacer vida social y relacionarse con amigos.<sup className="text-sm">1</sup>
          </li>
          <li className="pl-2">
            Aprovechar los altos niveles de energía para hacer actividades diferentes, 
            como probar una nueva rutina de ejercicio.<sup className="text-sm">1</sup>
          </li>
          <li className="pl-2">
            Esta fase también es ideal para probar actividades creativas, como pintar.<sup className="text-sm">1</sup>
          </li>
        </ul>
  
        <p className="mt-10 text-sm text-white">
          <strong>Referencias:</strong> 
          <span className="font-bold"> 1.</span> ASAN. Self care tips for your ovulation phase [Internet]. Disponible en:{" "}
          <a
            href="https://n9.cl/2h3om"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink underline"
          >
            https://n9.cl/2h3om
          </a>
          .
        </p>
      </div>
    );
  };
  
  export default OvulatoryAdvice;
  