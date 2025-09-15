import { useState } from 'react';
import { ChevronLeft, ChevronRight, Zap, Wrench, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const AgendaSection = () => {
  const [activeFilter, setActiveFilter] = useState('General');
  const [currentDay, setCurrentDay] = useState(0);

  const filters = ['General', 'Hackathon', 'Workshops', 'Lightning Talks'];

  const agenda = [
    {
      date: 'Lunes 29/09',
      location: 'Utec Ventures',
      activities: [
        {
          time: '16:00',
          type: 'Workshops',
          title: 'Profitable Microtools desde LATAM',
          speaker: 'Christian Pasquel',
          category: 'workshop'
        },
        {
          time: '16:00',
          type: 'Workshops', 
          title: 'Indie Hacker Frameworks para construir desde LATAM',
          speaker: 'Ignacio Velásquez',
          category: 'workshop'
        },
        {
          time: '17:00',
          type: 'Hackathon',
          title: 'Kickoff Hackathon No Code + AI',
          speaker: '',
          category: 'hackathon'
        }
      ]
    },
    {
      date: 'Martes 30/09',
      location: 'Garage Concept',
      activities: [
        {
          time: '09:00 – 13:00',
          type: 'Hackathon',
          title: 'Indie builder office hours: Espacio de trabajo presencial, con mentoría 1:1 para equipos de la hackathon',
          speaker: 'Christian Pasquel & Ignacio Velásquez',
          category: 'hackathon'
        }
      ]
    },
    {
      date: 'Miércoles 01/10',
      location: 'Utec Ventures',
      activities: [
        {
          time: '16:00',
          type: 'Lightning talks',
          title: 'Muerte al PowerPoint: Presentaciones con Vibe Coding',
          speaker: 'Christian Pasquel',
          category: 'lightning'
        },
        {
          time: '16:00',
          type: 'Lightning talks',
          title: 'Game Jams: de la idea al producto indie',
          speaker: 'Diego Rodríguez',
          category: 'lightning'
        }
      ]
    },
    {
      date: 'Jueves 02/10',
      location: 'Via Zoom',
      activities: [
        {
          time: '09:00 – 11:00',
          type: 'Hackathon',
          title: 'Indie builder office hours: Espacio de mentoría virtual para equipos de la hackathon',
          speaker: 'Christian Pasquel & Ignacio Velásquez',
          category: 'hackathon'
        }
      ]
    },
    {
      date: 'Viernes 03/10',
      location: 'Utec Ventures',
      activities: [
        {
          time: '10:00 – 13:00',
          type: 'Hackathon',
          title: 'Demo day: Elección del producto ganador de la hackathon',
          speaker: '',
          category: 'hackathon'
        },
        {
          time: '14:00 – 16:00',
          type: 'Lightning talks',
          title: 'Scaling con Automatización + NoCode',
          speaker: 'Javier Flores & Fabrizio Silva',
          category: 'lightning'
        },
        {
          time: '14:00 – 16:00',
          type: 'Lightning talks',
          title: '#1 en Play Store desde los Andes',
          speaker: 'Wilson Ccopa',
          category: 'lightning'
        },
        {
          time: '14:00 – 16:00',
          type: 'Lightning talks',
          title: '¿Cómo crear una comunidad de alto impacto en Perú?',
          speaker: 'Julio Guc',
          category: 'lightning'
        }
      ]
    }
  ];

  const getFilteredActivities = (activities: any[]) => {
    if (activeFilter === 'General') return activities;
    if (activeFilter === 'Hackathon') return activities.filter(a => a.category === 'hackathon');
    if (activeFilter === 'Workshops') return activities.filter(a => a.category === 'workshop');
    if (activeFilter === 'Lightning Talks') return activities.filter(a => a.category === 'lightning');
    return activities;
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'hackathon': return 'bg-secondary text-white';
      case 'workshop': return 'bg-white text-primary border border-primary/20';
      case 'lightning': return 'bg-accent text-accent-foreground';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'hackathon': return <Rocket size={16} />;
      case 'workshop': return <Wrench size={16} />;
      case 'lightning': return <Zap size={16} />;
      default: return null;
    }
  };

  return (
    <section id="agenda" className="section-padding bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
            Agenda de la semana
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto my-4 rounded-full"></div>
          <p className="text-lg text-body">Participa a tu manera: inscríbete en la hackathon y/o disfruta de workshops y charlas</p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {filters.map((filter) => (
            <Button
              key={filter}
              variant={activeFilter === filter ? "default" : "outline"}
              onClick={() => setActiveFilter(filter)}
              className={`${activeFilter === filter ? 'bg-primary text-primary-foreground' : ''}`}
            >
              {filter}
            </Button>
          ))}
        </div>

        {/* Desktop View */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-5 gap-4">
            {agenda.map((day, index) => {
              const filteredActivities = getFilteredActivities(day.activities);
              if (filteredActivities.length === 0 && activeFilter !== 'General') return null;
              
              return (
                <Card key={index} className="hover-lift">
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-secondary mb-2 text-center">{day.date}</h3>
                    <p className="text-xs text-highlight text-center mb-4">{day.location}</p>
                    <div className="space-y-3">
                      {filteredActivities.map((activity, actIndex) => (
                        <div key={actIndex} className="space-y-2">
                          <div className={`inline-flex items-center gap-2 px-2 py-1 rounded-full text-xs ${getCategoryColor(activity.category)}`}>
                            {getCategoryIcon(activity.category)}
                            {activity.type}
                          </div>
                          <div className="text-sm">
                            <div className="font-medium text-secondary">{activity.time}</div>
                            <div className="text-xs text-body mt-1">{activity.title}</div>
                            {activity.speaker && (
                              <div className="text-xs text-highlight mt-1">{activity.speaker}</div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Mobile View */}
        <div className="lg:hidden">
          <div className="flex items-center justify-between mb-4">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setCurrentDay(Math.max(0, currentDay - 1))}
              disabled={currentDay === 0}
            >
              <ChevronLeft size={20} />
            </Button>
            
            <div className="text-center">
              <h3 className="font-semibold text-secondary">{agenda[currentDay].date}</h3>
              <p className="text-sm text-highlight">{agenda[currentDay].location}</p>
            </div>
            
            <Button
              variant="outline"
              size="icon"
              onClick={() => setCurrentDay(Math.min(agenda.length - 1, currentDay + 1))}
              disabled={currentDay === agenda.length - 1}
            >
              <ChevronRight size={20} />
            </Button>
          </div>

          <Card>
            <CardContent className="p-6">
              <div className="space-y-4">
                {getFilteredActivities(agenda[currentDay].activities).map((activity, index) => (
                  <div key={index} className="border-b border-border last:border-b-0 pb-4 last:pb-0">
                    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm mb-2 ${getCategoryColor(activity.category)}`}>
                      {getCategoryIcon(activity.category)}
                      {activity.type}
                    </div>
                    <div className="font-medium text-secondary">{activity.time} - {activity.title}</div>
                    {activity.speaker && (
                      <div className="text-sm text-highlight mt-1">{activity.speaker}</div>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <Button 
            variant="utec"
            size="lg"
            asChild
            className="px-12"
          >
            <a 
              href="https://admin.eventplus.app/eventInfoThree?eventId=556168"
              target="_blank"
              rel="noopener noreferrer"
            >
              ¡Inscríbete gratis!
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AgendaSection;