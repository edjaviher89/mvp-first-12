import { MapPin, Mail } from 'lucide-react';
import logoUtec from '@/assets/logo-utec.png';
import logoCursor from '@/assets/logo-cursor.png';
import peruTechWeekLogo from '@/assets/peru-tech-week-logo.png';
import logoUtecVentures from '@/assets/logo-utec-ventures.png';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'hsl(var(--footer-bg))' }} className="text-white section-padding">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Logos Section */}
          <div className="col-span-full bg-white py-8 rounded-lg mb-8">
            <div className="flex flex-wrap items-center justify-center gap-8">
              <img src={logoUtec} alt="UTEC" className="h-12 w-auto" />
              <img src={logoCursor} alt="Cursor" className="h-12 w-auto" />
              <img src={peruTechWeekLogo} alt="Perú Tech Week" className="h-14 w-auto" />
              <img src={logoUtecVentures} alt="UTEC Ventures" className="h-12 w-auto" />
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div>
              <h3 className="font-semibold mb-4">Contacto</h3>
                <div className="space-y-1 text-white/80">
                  <span className="flex items-center gap-2 mt-1">
                    <MapPin className="w-4 h-4 text-primary" />
                    Jr. Medrano Silva 165, Barranco, Lima, Perú
                  </span>
                  <span className="flex items-center gap-2 mt-1">
                    <Mail className="w-4 h-4 text-primary" />
                    ehernandez@utec.edu.pe
                  </span>
                </div>
            </div>

            {/* Additional Info */}
            <div>
              <h3 className="font-semibold mb-4">MVP First 2025</h3>
              <p className="text-white/80">
                Evento organizado por el Departamento de Administración y Negocios Digitales
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 mt-8 text-center">
          <p className="text-white/60">
            © 2025 UTEC. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;