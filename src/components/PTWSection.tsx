import peruTechWeekLogo from '@/assets/peru-tech-week-logo.png';

const PTWSection = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
          ¡Somos parte del Perú Tech Week 2025!
        </h2>
        <div className="flex justify-center mb-4">
          <img 
            src={peruTechWeekLogo} 
            alt="Perú Tech Week 2025" 
            className="h-20 md:h-24 w-auto"
          />
        </div>
        <p className="text-lg text-body">
          El mayor encuentro del ecosistema digital y emprendedor del país
        </p>
      </div>
    </section>
  );
};

export default PTWSection;
