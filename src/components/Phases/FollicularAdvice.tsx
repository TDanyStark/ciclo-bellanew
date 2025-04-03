const FollicularAdvice = () => {
    return (
      <div className="container_info_phases">
        <h2 className="text-3xl md:text-4xl pt-1 font-light text-pink">
          <span className="font-bold">CONSEJOS</span> DE BIENESTAR
          <sup className="text-sm align-super">1</sup>
        </h2>
        <ul className="list-disc pl-5 space-y-2 leading-relaxed mt-2">
          <li className="pl-2">
            <strong>Integrar el autocuidado, la gestión del estrés y las prácticas de
            atención plena en la rutina diaria:</strong> elegir actividades alegres y
            relajantes, como dedicar tiempo a los hobbies.
          </li>
          <li className="pl-2">
            <strong>Realizar actividades cardiovasculares para aprovechar el aumento de
            los niveles de energía:</strong> caminar, correr o montar bicicleta ayuda a
            estimular la circulación, mientras que el yoga o los ejercicios de
            resistencia ayudan a mejorar el tono muscular.
          </li>
        </ul>
        <p className="mt-10 text-sm">
          <strong>Referencias:</strong>
          <span className="font-bold"> 1.</span> Koch J. How to Treat your Body
          During your Follicular Phase [Internet]. Disponible en:
          <a
            href="https://n9.cl/ofqv9"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            https://n9.cl/ofqv9
          </a>
          .
        </p>
      </div>
    );
  };
  
  export default FollicularAdvice;
  