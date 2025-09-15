import heroBg from '@/assets/mvp-first-header.png';

const Hero = () => {
  return (
    <section className="relative w-full">
      <div className="w-full">
        <img 
          src={heroBg} 
          alt="MVP First - ¿No Code?, ¿No Capital?, ¡No Problem!"
          className="w-full h-auto object-contain max-w-full"
          style={{
            minHeight: '400px',
            maxHeight: '100vh'
          }}
        />
      </div>
    </section>
  );
};

export default Hero;