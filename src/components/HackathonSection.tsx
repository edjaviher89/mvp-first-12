import { Medal, Trophy, Award } from 'lucide-react';
import { useRef, useEffect, useState } from 'react';
import { useCountUp } from '@/hooks/useCountUp';
import { Button } from '@/components/ui/button';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from '@/components/ui/accordion';

const HackathonSection = () => {
  // Animación de conteo para el primer premio
  const premiosRef = useRef(null);
  const [triggerCount, setTriggerCount] = useState(false);
  const count = useCountUp({ end: 1000, duration: 1800, start: 0, trigger: triggerCount });

  useEffect(() => {
    const handleScroll = () => {
      if (!premiosRef.current) return;
      const rect = premiosRef.current.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        setTriggerCount(true);
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <section id="hackathon" className="section-padding bg-muted">
      <div className="container mx-auto max-w-2xl">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-body mb-2">Postula a la</p>
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
            Hackathon No Code - AI
          </h2>
          <p className="text-xl text-primary font-semibold">¡Construye tu MVP en 5 días, sin programar!</p>
        </div>
        
        {/* Bloque 1 – Requisitos */}
        <div className="mt-8">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-2">Requisitos</h3>
          <div className="w-16 h-1 bg-primary mx-auto my-2 rounded-full"></div>
          <div className="flex flex-row md:flex-row justify-between items-stretch md:gap-8 gap-2 px-2 md:px-0">
            {/* Requisito 1 */}
            <div className="flex-1 flex flex-col items-center">
              <span className="text-xl md:text-2xl font-bold">25</span>
              <span className="text-xs md:text-base text-primary">años de edad máximo</span>
            </div>
            {/* Requisito 2 */}
            <div className="flex-1 flex flex-col items-center">
              <span className="text-xl md:text-2xl font-bold">2-4</span>
              <span className="text-xs md:text-base text-primary">integrantes</span>
            </div>
            {/* Requisito 3 */}
            <div className="flex-1 flex flex-col items-center">
              <span className="text-xl md:text-2xl font-bold">1+</span>
              <span className="text-xs md:text-base text-primary">integrante UTEC</span>
            </div>
          </div>
        </div>

        {/* Bloque 2 – Premios */}
        <div className="mt-10 mb-10" ref={premiosRef}>
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-2">Premios</h3>
          <div className="w-16 h-1 bg-primary mx-auto my-2 rounded-full"></div>
          <div className="flex flex-row justify-center items-stretch md:gap-8 gap-1 px-1 md:px-0 max-w-full">
            {/* Segundo lugar */}
            <div className="flex-1 flex flex-col items-center min-w-0 justify-end">
              <Medal className="w-8 h-8 md:w-16 md:h-16 text-[#C0C0C0] mb-2" />
              <span className="text-base md:text-2xl font-bold">S/. 500</span>
              <span className="text-xs md:text-base text-black">+ USD 50 Cursor</span>
              <span className="text-xs md:text-base text-primary mt-1">2° lugar</span>
            </div>
            {/* Primer lugar */}
            <div className="flex-1 flex flex-col items-center min-w-0 justify-end">
              <Trophy className="w-12 h-12 md:w-28 md:h-28 text-primary mb-2 transition-transform duration-300 hover:scale-110 hover:drop-shadow-[0_0_10px_#00b3ff]" />
              <span className="text-lg md:text-4xl font-bold">
                S/. {count}
              </span>
              <span className="text-xs md:text-base text-black">+ USD 100 Cursor</span>
              <span className="text-xs md:text-base text-primary mt-1">1° lugar</span>
            </div>
            {/* Tercer lugar */}
            <div className="flex-1 flex flex-col items-center min-w-0 justify-end">
              <Medal className="w-8 h-8 md:w-16 md:h-16" style={{ color: '#B87333' }} />
              <span className="text-base md:text-2xl font-bold">USD 50</span>
              <span className="text-xs md:text-base text-black">créditos Cursor</span>
              <span className="text-xs md:text-base text-primary mt-1">3° lugar</span>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center my-8">
          <a
            href="https://forms.zohopublic.com/ehernandezut1/form/EventRegistration/formperma/wOPlPZf0Zb1W9HhR1rYA-jtg4OmRzMayBoYTryKwCPo"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-lg px-8 py-3 rounded-lg hover:bg-yellow-500 transition-colors"
          >
            Postula ahora
          </a>
        </div>

        {/* Bloque 3 – FAQ */}
        <div className="mb-8">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-2">Preguntas Frecuentes</h3>
          <div className="w-16 h-1 bg-primary mx-auto my-2 rounded-full"></div>
          <div className="bg-white rounded-xl shadow p-4 max-w-2xl w-full mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-base font-medium text-secondary bg-transparent px-0 py-2 border-none focus:outline-none focus:ring-0">
                  ¿Puedo llevar una idea ya pensada?
                </AccordionTrigger>
                <AccordionContent className="text-body text-sm px-0 pb-4">
                  Sí, pero no se permite código o desarrollo previo. El MVP debe construirse desde cero esa semana.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-base font-medium text-secondary bg-transparent px-0 py-2 border-none focus:outline-none focus:ring-0">
                  ¿Necesito saber programar?
                </AccordionTrigger>
                <AccordionContent className="text-body text-sm px-0 pb-4">
                  ¡No! La hackathon está enfocada en el uso de herramientas No Code y Low Code, así que no necesitas ser programador.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-base font-medium text-secondary bg-transparent px-0 py-2 border-none focus:outline-none focus:ring-0">
                  ¿Habrá mentoría durante el evento?
                </AccordionTrigger>
                <AccordionContent className="text-body text-sm px-0 pb-4">
                  Sí, habrá mentorías y acompañamiento de expertos durante toda la semana.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-base font-medium text-secondary bg-transparent px-0 py-2 border-none focus:outline-none focus:ring-0">
                  ¿Cuándo es la presentación final?
                </AccordionTrigger>
                <AccordionContent className="text-body text-sm px-0 pb-4">
                  La presentación final será el último día de la semana, en el demo day.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger className="text-base font-medium text-secondary bg-transparent px-0 py-2 border-none focus:outline-none focus:ring-0">
                  ¿Qué se espera como resultado final del hackathon?
                </AccordionTrigger>
                <AccordionContent className="text-body text-sm px-0 pb-4">
                  Se espera que los equipos presenten un MVP funcional construido con herramientas No Code o AI.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6">
                <AccordionTrigger className="text-base font-medium text-secondary bg-transparent px-0 py-2 border-none focus:outline-none focus:ring-0 text-left">
                  ¿Qué herramientas recomiendan para construir el MVP?
                </AccordionTrigger>
                <AccordionContent className="text-body text-sm px-0 pb-4 text-left">
                  Herramientas como Bubble, Glide, Webflow, Zapier, y plataformas de AI recomendadas por los mentores.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div> {/* cierre del card FAQ */}
          <div className="mt-2 w-full max-w-2xl mx-auto px-4">
            <a href="https://drive.google.com/file/d/1Q__TiaSj4vo707hr-1zErIFSG7L-HFBG/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-primary text-sm font-medium flex items-center gap-2">
              <span>&rarr;</span> Descarga las bases de la hackaton
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HackathonSection;