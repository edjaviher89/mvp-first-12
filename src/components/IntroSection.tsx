import { ArrowRight } from 'lucide-react';
import { Rocket, Wrench, Zap } from 'lucide-react';

const IntroSection = () => {
  const scrollToAgenda = () => {
    const element = document.getElementById('agenda');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToHackathon = () => {
    const element = document.getElementById('hackathon');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="section-padding bg-muted">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* First Column */}
          <div className="space-y-6 flex flex-col items-center text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary leading-tight">
              ¡Vive una semana intensa de inspiración, creación y acción!
            </h2>
            <div className="inline-block bg-white px-6 py-3 rounded-full shadow-sm">
              <span className="text-primary font-bold">29 de setiembre - 3 de octubre</span>
            </div>
          </div>

          {/* Second Column */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-secondary mb-6">Elige cómo quieres participar</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div 
                className="bg-white p-6 rounded-xl shadow-sm hover-lift cursor-pointer group transition-all duration-300 border-2 border-transparent"
                onClick={scrollToHackathon}
              >
                <Rocket className="mb-3 text-primary" size={40} strokeWidth={2.2} />
                <h4 className="text-lg font-bold text-secondary mb-2">Hackathon</h4>
                <p className="text-body text-sm">No Code + AI</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm hover-lift cursor-pointer group transition-all duration-300 border-2 border-transparent">
                <Wrench className="mb-3 text-primary" size={40} strokeWidth={2.2} />
                <h4 className="text-lg font-bold text-secondary mb-2">Workshops</h4>
                <p className="text-body text-sm">con expertos</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm hover-lift cursor-pointer group transition-all duration-300 border-2 border-transparent">
                <Zap className="mb-3 text-primary" size={40} strokeWidth={2.2} />
                <h4 className="text-lg font-bold text-secondary mb-2">Lightning Talks</h4>
                <p className="text-body text-sm">con founders y developers</p>
              </div>
            </div>

            <button 
              onClick={scrollToAgenda}
              className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium group"
            >
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              Ver agenda completa
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
