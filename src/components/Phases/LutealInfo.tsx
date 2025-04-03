const LutealInfo = () => {
  return (
    <div className="container_info_phases">
      <h2 className="text-3xl md:text-4xl pt-1 font-light text-pink">
        <span className="font-bold">INFORMACIÓN</span> MÉDICA
      </h2>

      <ul className="list-disc pl-5 space-y-2 leading-relaxed mt-4">
        <li className="pl-2">
          La producción de progesterona es estimulada por la LH.
          <sup className="text-sm">1</sup>
        </li>
        <li className="pl-2">
          La progesterona induce la maduración del endometrio, favorece el
          desarrollo de glándulas complejas, aumenta la acumulación de glucógeno
          e incrementa la superficie de las arterias espirales.
          <sup className="text-sm">1</sup>
        </li>
        <li className="pl-2">
          Los niveles de estrógenos fluctúan, con tendencia a la baja.
          <sup className="text-sm">1</sup>
        </li>
        <li className="pl-2">
          Sin un óvulo fecundado, se produce un rápido descenso de los niveles
          de progesterona y estradiol al final de la fase.
          <sup className="text-sm">1</sup>
        </li>
      </ul>

      <p className="mt-4 text-sm">LH: hormona luteinizante.</p>

      <h3 className="mt-8 font-light text-2xl uppercase text-purple-heading">
        <span className="font-bold">¿Cómo actúa 17β Estradiol + Dienogest</span>
        <span className="block">para conservar el equilibrio hormonal?</span>
      </h3>

      <ul className="list-disc pl-5 space-y-2 leading-relaxed mt-2">
        <li className="pl-2">
          El 17-β estradiol mantiene los niveles endógenos estables a lo largo
          del ciclo e induce menos cambios metabólicos que el etinilestradiol.
          <sup className="text-sm">2</sup>
        </li>
        <li className="pl-2">
          El dienogest tiene actividad antiproliferativa, antiandrogénica,
          antinflamatoria y antiangiogénica, que se traduce en beneficios extra,
          como la mejoría del aspecto de la piel grasa.
          <sup className="text-sm">3-5</sup>
        </li>
        <li className="pl-2">
          Dado el bajo impacto hormonal, una vez se suspende el uso de 17-β
          estradiol + dienogest, se obtiene un rápido retorno a la fertilidad.
          <sup className="text-sm">2,5</sup>
        </li>
      </ul>

      <p className="mt-10 text-sm">
        <strong>Referencias:</strong>
        <span className="font-bold"> 1.</span> Thiyagarajan DK, Basit H,
        Jeanmonod R. Physiology, Menstrual Cycle. [Updated 2024 Sep 27]. In:
        StatPearls [Internet]. Treasure Island (FL): StatPearls Publishing; 2025
        Jan. <span className="font-bold"> 2.</span> Sitruk-Ware R, Nath A.
        Characteristics and metabolic effects of estrogen and progestins
        contained in oral contraceptive pills. Best Pract Res Clin Endocrinol
        Metab. 2013;27(1):13-24. <span className="font-bold"> 3.</span> Bajares
        M, Pizzi R. Aspectos farmacológicos de la anticoncepción hormonal. Rev
        Obstet Ginecol Venez. 2024;84(sup 1):5-26.{" "}
        <span className="font-bold"> 4.</span> Regidor PA, Schindler AE.
        Antiandrogenic and antimineralocorticoid health benefits of COC
        containing newer progestogens: dienogest and drospirenone. Oncotarget.
        2017;8(47):83334-83342. <span className="font-bold"> 5.</span>{" "}
        Pérez-Campos EF. Ethinylestradiol/dienogest in oral contraception.
        Drugs. 2010;70(6):681-9.
      </p>
    </div>
  );
};

export default LutealInfo;
