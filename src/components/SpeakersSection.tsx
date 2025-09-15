import { useState, useRef, useEffect } from 'react';
import { X } from 'lucide-react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import christianPasquel from '@/assets/speaker-photo.jpeg';
import ignacioVelasquez from '@/assets/ignacio-velasquez.jpg';
import diegoRodriguez from '@/assets/diego-rodriguez.png';
import wilsonCcopa from '@/assets/wilson-ccopa.png';
import julioCesarGuc from '@/assets/julio-cesar-guc.png';
import javierFlores from '@/assets/javier-flores.png';
import fabrizioSilva from '@/assets/fabrizio-silva.png';

// Custom hook for Intersection Observer
function useInView(ref) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.5 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);
  return inView;
}

function SpeakerCard({ speaker }) {
  const cardRef = useRef(null);
  const inView = useInView(cardRef);
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div
          ref={cardRef}
          className="bg-white rounded-xl overflow-hidden shadow-sm hover-lift cursor-pointer group speaker-card"
        >
          <div className="relative overflow-hidden">
            <img
              src={speaker.image}
              alt={speaker.name}
              className={`w-full h-64 object-cover grayscale-[60%] transition-all duration-500 speaker-image
                ${inView ? 'grayscale-0' : ''}
                md:group-hover:grayscale-0`
              }
            />
          </div>
          <div className="p-6">
            <h3 className="font-bold text-lg text-secondary mb-1">{speaker.name}</h3>
            <p className="text-primary font-medium">{speaker.company}</p>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-2xl mx-auto">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/3 flex justify-center">
            <img
              src={speaker.image}
              alt={speaker.name}
              className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-full"
            />
          </div>
          <div className="md:w-2/3">
            <h3 className="font-bold text-xl text-secondary mb-2">{speaker.name}</h3>
            <p className="text-primary font-medium mb-4">{speaker.company}</p>
            <p className="text-muted-foreground mb-4">{speaker.bio}</p>
            {speaker.participation && (
              <div>
                <h4 className="font-semibold text-secondary mb-2">Participación:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  {speaker.participation.map((item, index) => (
                    <li key={index}>• {item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

const speakers = [
  {
    name: 'Christian Pasquel',
    company: 'Wasap Market',
    image: christianPasquel,
    bio: 'Fundador de Wasap Market, emprendedor serial con experiencia en productos digitales y herramientas No Code. Especialista en microtools y estrategias para indie builders en LATAM.',
    participation: [
      'Workshop – "Profitable Microtools desde LATAM" (Lunes 29/09)',
      'Mentor de la Hackathon',
      'Lightning Talk – "Muerte al PowerPoint: Presentaciones con Vibe Coding" (Miércoles 01/10)'
    ]
  },
  {
    name: 'Ignacio Velásquez',
    company: 'GPT Chain',
    image: ignacioVelasquez,
    bio: 'Co-fundador de GPT Chain, experto en inteligencia artificial y automatización. Enfocado en frameworks para indie hackers y desarrollo de productos con IA.',
    participation: [
      'Workshop - "Indie Hacker Frameworks para construir desde LATAM" (Lunes 29/09)',
      'Mentor de la Hackathon'
    ]
  },
  {
    name: 'Diego Rodríguez',
    company: 'Perú Game Jam',
    image: diegoRodriguez,
    bio: 'Founder & CEO de Perú Game Jam, desarrollador indie y especialista en game development. Experiencia en creación de productos digitales desde la ideación hasta el lanzamiento.',
    participation: [
      'Lightning Talk – "Game Jams: de la idea al producto indie" (Miércoles 01/10)'
    ]
  },
  {
    name: 'Wilson Ccopa',
    company: 'Cachimboz',
    image: wilsonCcopa,
    bio: 'Fundador de Cachimboz, primera app peruana en llegar al #1 del Play Store. Forbes 30 Under 30. Emprendedor enfocado en productos móviles y escalamiento de startups.',
    participation: [
      'Lightning Talk – "#1 en Play Store desde los Andes" (Viernes 03/10)'
    ]
  },
  {
    name: 'Julio Cesar Guc',
    company: 'Notion Perú',
    image: julioCesarGuc,
    bio: 'Director de la comunidad Notion Perú, desarrollador de soluciones digitales, embajador Notion. Experto en productividad y herramientas colaborativas. Especialista en construcción de comunidades de alto impacto.',
    participation: [
      'Lightning Talk – "¿Cómo crear una comunidad de alto impacto en Perú?" (Viernes 03/10)'
    ]
  },
  {
    name: 'Javier Flores',
    company: 'Núcleo Lab',
    image: javierFlores,
    bio: 'CTO & Co-founder NúcleoLab, No Code builder, embajador de Notion, automation developer.',
    participation: [
      'Lightning Talk – "Scaling con Automatización + NoCode" (Viernes 03/10)'
    ]
  },
  {
    name: 'Fabrizio Silva',
    company: 'Núcleo Lab',
    image: fabrizioSilva,
    bio: 'Co-fundador de Núcleo Lab, especialista en automatización y herramientas No Code. Experto en scaling de productos digitales y procesos de negocio.',
    participation: [
      'Lightning Talk – "Scaling con Automatización + NoCode" (Viernes 03/10)'
    ]
  }
];

const SpeakersSection = () => {
  return (
    <section id="speakers" className="section-padding bg-muted">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
            Conoce a nuestros speakers
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto my-4 rounded-full"></div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {speakers.map((speaker, index) => (
            <SpeakerCard key={index} speaker={speaker} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpeakersSection;