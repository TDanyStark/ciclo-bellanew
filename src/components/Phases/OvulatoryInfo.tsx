const OvulatoryInfo = () => {
  return (
    <div className="container_info_phases">
      <h2 className="text-3xl md:text-4xl pt-1 font-light text-pink">
        <span className="font-bold">INFORMACIÓN</span> MÉDICA
      </h2>

      <ul className="list-disc pl-5 space-y-2 ml-2 leading-relaxed mt-4">
        <li className="pl-2">
          Se produce un aumento de la secreción de LH, cuyos
          niveles se multiplican por 10, acompañados de aumentos menores en las
          concentraciones de FSH.
          <sup className="text-sm">1</sup>
        </li>
        <li className="pl-2">
          El folículo maduro segrega activador del plasminógeno{" "}
          y otras citocinas, lo que provoca la ruptura del folículo y la
          liberación del ovocito.<sup className="text-sm">1</sup>
        </li>
        <li className="pl-2">
          La ovulación suele producirse entre 36 y 44 horas{" "}
          después del inicio del pico de LH.<sup className="text-sm">1</sup>
        </li>
        <li className="pl-2">
          Al final de la ovulación, disminuyen los niveles de{" "}
          17-β estradiol.<sup className="text-sm">1</sup>
        </li>
      </ul>

      <p className="mt-4 text-sm">
        *FSH: hormona foliculoestimulante; LH:{" "}
        hormona luteinizante.
      </p>

      <h3 className="mt-8 font-light text-2xl uppercase text-purple-heading">
        <span className="font-bold">
          ¿Cómo actúa 17-β Estradiol + Dienogest
        </span>
        <span className="block">para conservar el equilibrio hormonal?</span>
      </h3>

      <ul className="list-disc pl-5 space-y-2 ml-2 leading-relaxed mt-4">
        <li className="pl-2">
          Las combinaciones hormonales que contienen{" "}
          17-β estradiol logran una inhibición eficaz de la
          ovulación y, por lo tanto, una alta efectividad anticonceptiva.
          <sup className="text-sm">2</sup>
        </li>
        <li className="pl-2">
          Dienogest ha demostrado la inhibición de la ovulación
          en dosis de 2 mg por día. Además, reduce el grosor
          del endometrio y tiene una débil actividad antigonadotrófica, por lo
          que no ejerce efectos centrales sobre el eje hipotálamo-hipofisario.
          <sup className="text-sm">2,3</sup>
        </li>
      </ul>

      <p className="mt-10 text-sm">
        <strong>Referencias:</strong>
        <span className="font-bold"> 1.</span> Thiyagarajan DK, Basit H,
        Jeanmonod R. Physiology, Menstrual Cycle. [Updated 2024 Sep 27]. In:
        StatPearls [Internet]. Treasure Island (FL): StatPearls Publishing; 2025
        Jan. <span className="font-bold"> 2.</span> Jensen J, Bitzer J, Serrani
        M. Comparison of the pharmacologic and clinical profiles of new combined
        oral contraceptives containing estradiol. Journal of Contraception.
        2013;4:39-50. <span className="font-bold"> 3.</span> Mahapatra PC,
        Khandke DA, Patil D. Ethinyl Estradiol + Dienogest. The Indian
        Practitioner. 2019;72(11):29-31.
      </p>
    </div>
  );
};

export default OvulatoryInfo;
