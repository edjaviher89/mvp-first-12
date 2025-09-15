import { Button } from '@/components/ui/button';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from '@/components/ui/accordion';

const FAQSection = () => {
  return (
    <section id="faq" className="section-padding bg-white">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-secondary text-center">FAQ</h2>
        <div className="w-16 h-1 bg-primary mx-auto my-4 rounded-full"></div>
        <div className="bg-white rounded-xl shadow p-4 max-w-2xl w-full mx-auto">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-base font-medium text-secondary bg-transparent px-0 py-2 border-none focus:outline-none focus:ring-0 text-left">
                ¿Qué es la Semana de MVP First y cuál es su objetivo?
              </AccordionTrigger>
              <AccordionContent className="text-body text-sm px-0 pb-4">
                Es una semana de workshops, hackathon y charlas donde aprenderás a construir un MVP (Minimum Viable Product) usando herramientas No Code + AI, con acompañamiento de expertos y un demo day final para presentar tu proyecto.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-base font-medium text-secondary bg-transparent px-0 py-2 border-none focus:outline-none focus:ring-0 text-left">
                ¿Quiénes pueden participar?
              </AccordionTrigger>
              <AccordionContent className="text-body text-sm px-0 pb-4">
                Está dirigido a estudiantes de UTEC (todas las carreras), pero también se pueden sumar egresados y miembros de la comunidad emprendedora interesados en innovación digital.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-base font-medium text-secondary bg-transparent px-0 py-2 border-none focus:outline-none focus:ring-0 text-left">
                ¿Necesito tener conocimientos de programación para unirme?
              </AccordionTrigger>
              <AccordionContent className="text-body text-sm px-0 pb-4">
                ¡No! La semana está enfocada en el uso de herramientas No Code y Low Code, por lo que no necesitas ser programador.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-base font-medium text-secondary bg-transparent px-0 py-2 border-none focus:outline-none focus:ring-0 text-left">
                ¿Debo participar en todas las actividades o puedo escoger?
              </AccordionTrigger>
              <AccordionContent className="text-body text-sm px-0 pb-4">
                Puedes elegir. Recomendamos unirte a la hackathon + workshops para vivir la experiencia completa, pero los workshops y charlas son abiertos, incluso si no participas en la hackathon.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-base font-medium text-secondary bg-transparent px-0 py-2 border-none focus:outline-none focus:ring-0 text-left">
                ¿Dónde se realizará el evento?
              </AccordionTrigger>
              <AccordionContent className="text-body text-sm px-0 pb-4">
                El evento será principalmente presencial en UTEC, con algunas mentorías de la hackathon virtuales.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger className="text-base font-medium text-secondary bg-transparent px-0 py-2 border-none focus:outline-none focus:ring-0 text-left">
                ¿Necesito inscribirme?
              </AccordionTrigger>
              <AccordionContent className="text-body text-sm px-0 pb-4">
                Sí, la participación es gratuita pero requiere registro previo para asegurar tu lugar en la hackathon y talleres.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div> {/* cierre del card FAQ */}
        <div className="mt-2 w-full max-w-2xl mx-auto px-4">
          <span className="text-sm text-gray-500">
            ¿Tienes más dudas?{' '}
            <a 
              href="mailto:ehernandez@utec.edu.pe"
              className="text-primary hover:text-primary/80 underline transition-colors font-medium"
            >
              Escríbenos
            </a>
          </span>
        </div>
        <div className="text-center mt-12">
          <p className="text-lg text-body mb-6">
            ¡Asegura tu lugar hoy mismo!
          </p>
          <Button 
            variant="utec"
            size="lg"
            asChild
          >
            <a 
              href="https://admin.eventplus.app/eventInfoThree?eventId=556168"
              target="_blank"
              rel="noopener noreferrer"
            >
              Inscribirme
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;