const MenstrualInfo = () => {
  return (
    <div className="container_info_phases">
      <h2 className="text-3xl md:text-4xl pt-1 font-light text-pink">
        <span className="font-bold">INFORMACIÓN</span> MÉDICA
      </h2>
      <ul className="mt-4 list-disc pl-5 space-y-2 leading-relaxed">
        <li className="pl-2">
          Al inicio del ciclo menstrual, los niveles de progesterona y estradiol
          están en estado basal, es decir, en una concentración mínima que
          desencadena el desprendimiento del endometrio, conocido como
          menstruación.
          <sup className="text-sm">1,2</sup>
        </li>
        <li className="pl-2">
          Los niveles bajos de progesterona y estradiol durante la menstruación
          estimulan la secreción de <strong>GnRH</strong>, lo que indica a la
          hipófisis que libere <strong>FSH</strong>, seguida de un aumento en
          los niveles de <strong>LH</strong>.<sup className="text-sm">2</sup>
        </li>
      </ul>
      <p className="mt-4 text-sm italic">
        *GnRH: hormona hipotalámica liberadora de gonadotropina; FSH: hormona
        foliculoestimulante; LH: hormona luteinizante.
      </p>
      <h3 className="mt-8 font-light text-2xl uppercase text-purple-heading">
        <span className="font-bold">
          ¿Cómo actúa 17-β Estradiol + Dienogest
        </span>
        <span className="block">para conservar el equilibrio hormonal?</span>
      </h3>
      <ul className="list-disc pl-5 space-y-2 leading-relaxed mt-2">
        <li className="pl-2">
          El 17-β estradiol administrado de forma exógena es químicamente
          idéntico al estradiol endógeno, por lo tanto, provoca una respuesta
          igual a la inducida por los estrógenos secretados por el ovario de
          manera natural.<sup className="text-sm">3,4</sup>
        </li>
        <li className="pl-2">
          Las acciones conjuntas del 17-β estradiol y el dienogest inducen un
          sangrado menstrual, en forma de sangrado por deprivación hormonal.
          <sup className="text-sm">3-5</sup>
        </li>
        <li className="pl-2">
          El dienogest mejora el dolor menstrual y reduce la cantidad y duración
          del sangrado.<sup className="text-sm">6</sup>
        </li>
      </ul>
      <p className="mt-10 text-sm">
        <strong>Referencias:</strong>
        <span className="font-bold"> 1.</span> Barranquero M, Rogel S, Salvador
        Z. El ciclo menstrual: ¿qué ocurre en cada una de sus fases?
        Reproducción Asistida ORG. 2023. Disponible en:
        <a
          href="https://www.reproduccionasistida.org/fases-del-ciclo-menstrual/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          https://www.reproduccionasistida.org/fases-del-ciclo-menstrual/
        </a>
        .<span className="font-bold"> 2.</span> Thiyagarajan DK, Basit H,
        Jeanmonod R. Physiology, Menstrual Cycle. [Updated 2024 Sep 27]. In:
        StatPearls [Internet]. Treasure Island (FL): StatPearls Publishing; 2025
        Jan.
        <span className="font-bold"> 3.</span> Bajares M, Pizzi R. Aspectos
        farmacológicos de la anticoncepción hormonal. Rev Obstet Ginecol Venez.
        2024;84(sup 1):5-26.
        <span className="font-bold"> 4.</span> Alsina JC. After 50 years of
        ethinylestradiol, another oestrogen in combined oral contraceptives. The
        European Journal of Contraception and Reproductive Health Care.
        2010;15:1–3.
        <span className="font-bold"> 5.</span> Regidor PA, Schindler AE.
        Antiandrogenic and antimineralocorticoid health benefits of COC
        containing newer progestogens: dienogest and drospirenone. Oncotarget.
        2017;8(47):83334-83342.
        <span className="font-bold"> 6.</span> Xholli A, Biasioli A, Grandi G,
        et al. Dienogest-based hormonal contraception induced changes in the
        ultrasound presentation of the uterus and menstrual pain. Clin. Exp.
        Obstet. Gynecol. 2021;48(5):1186–1192.
      </p>
    </div>
  );
};

export default MenstrualInfo;
