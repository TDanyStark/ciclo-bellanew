const FollicularInfo = () => {
    return (
      <div className="container_info_phases">
        <h2 className="text-3xl md:text-4xl pt-1 font-light text-pink">
          <span className="font-bold">INFORMACIÓN</span> MÉDICA
        </h2>
        <ul className="mt-4 list-disc pl-5 space-y-2 leading-relaxed">
          <li className="pl-2">
            La <strong>FSH</strong> estimula la maduración de los folículos primordiales y la producción de 
            <strong> 17-β estradiol</strong> e <strong>inhibina B</strong>.<sup className="text-sm">1</sup>
          </li>
          <li className="pl-2">
            El folículo dominante desarrolla más receptores de <strong>FSH</strong> y crece hasta 
            alcanzar 18-29 mm. Además, desarrolla receptores de <strong>LH</strong>, preparándose para 
            la ovulación.<sup className="text-sm">1</sup>
          </li>
          <li className="pl-2">
            El endometrio alcanza su máximo desarrollo.<sup className="text-sm">1</sup>
          </li>
          <li className="pl-2">
            El <strong>17-β estradiol</strong> modifica la elasticidad y el contenido proteico del moco cervical.
            <sup className="text-sm">1</sup>
          </li>
        </ul>
        <p className="mt-4 text-sm italic">
          *FSH: hormona foliculoestimulante; LH: hormona luteinizante.
        </p>
  
        <h3 className="mt-8 font-light text-2xl uppercase text-purple-heading">
          <span className="font-bold">¿Cómo actúa 17β Estradiol + Dienogest</span>
          <span className="block">para conservar el equilibrio hormonal?</span>
        </h3>
        <ul className="list-disc pl-5 space-y-2 leading-relaxed mt-2">
          <li className="pl-2">
            El <strong>17-β estradiol</strong> tiene una influencia mínima sobre los parámetros 
            homeostáticos, lipídicos y del metabolismo de los hidratos de carbono, así 
            como en la síntesis de proteínas hepáticas, incluyendo la <strong>SHBG</strong> y el 
            angiotensinógeno. Además, no altera la densidad mineral ósea.
            <sup className="text-sm">2-4</sup>
          </li>
          <li className="pl-2">
            Dado que el <strong>dienogest</strong> no tiene actividad glucocorticoide, 
            antimineralocorticoide ni estrogénica parcial, no se contrarrestan los cambios 
            positivos inducidos por los estrógenos en las proteínas hepáticas.
            <sup className="text-sm">5</sup>
          </li>
        </ul>
        <p className="mt-4 text-sm italic">
          *SHBG: globulina fijadora de hormonas sexuales.
        </p>
  
        <p className="mt-10 text-sm">
          <strong>Referencias:</strong>
          <span className="font-bold"> 1.</span> Thiyagarajan DK, Basit H, Jeanmonod R. Physiology, Menstrual Cycle. [Updated 2024 Sep 27]. In: StatPearls [Internet]. Treasure Island (FL): 
          StatPearls Publishing; 2025 Jan.
          <span className="font-bold"> 2.</span> Jensen J, Bitzer J, Serrani M. Comparison of the pharmacologic and clinical profiles of new combined oral contraceptives 
          containing estradiol. Journal of Contraception. 2013;4:39-50.
          <span className="font-bold"> 3.</span> Fruzzetti F, Trémollieres F, Bitzer J. An overview of the development of combined oral 
          contraceptives containing estradiol: focus on estradiol valerate/dienogest. Gynecol Endocrinol. 2012;28(5):400-8.
          <span className="font-bold"> 4.</span> Sørdal T, Grob P, Verhoeven C. Effects on 
          bone mineral density of a monophasic combined oral contraceptive containing nomegestrol acetate/17β-estradiol in comparison to levonorgestrel/ethinylestradiol. 
          Acta Obstet Gynecol Scand. 2012;91(11):1279-85.
          <span className="font-bold"> 5.</span> Regidor PA, Schindler AE. Antiandrogenic and antimineralocorticoid health benefits of COC containing 
          newer progestogens: dienogest and drospirenone. Oncotarget. 2017;8(47):83334-83342.
        </p>
      </div>
    );
  };
  
  export default FollicularInfo;
  