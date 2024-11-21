import React, { useRef } from 'react';
import { ChevronRight, ArrowRight, ExternalLink, Info } from 'lucide-react';

export default function Solucao() {
  const solucoesRef = useRef(null);

  const scrollToSolucoes = () => {
    solucoesRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const solucoes = [
    {
      titulo: "Lorem ipsum dolor sit amet",
      descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo earum facere alias, voluptas praesentium, nesciunt, dolorem necessitatibus perspiciatis.",
      imagemGrande: "/api/placeholder/800/600",
      imagemPequena: "/api/placeholder/400/300",
      beneficios: [
        "Lorem ipsum dolor sit",
        "Lorem ipsum dolor sit",
        "Lorem ipsum dolor sit",
        "Lorem ipsum dolor sit"
      ],
      tecnologias: ["Lorem ipsum", "Lorem ipsum", "Lorem ipsum"]
    },
    {
      titulo: "Lorem ipsum dolor sit amet",
      descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo earum facere alias, voluptas praesentium, nesciunt, dolorem necessitatibus perspiciatis.",
      imagemGrande: "/api/placeholder/800/600",
      imagemPequena: "/api/placeholder/400/300",
      beneficios: [
        "Lorem ipsum dolor sit",
        "Lorem ipsum dolor sit",
        "Lorem ipsum dolor sit",
        "Lorem ipsum dolor sit"
      ],
      tecnologias: ["Lorem ipsum", "Lorem ipsum", "Lorem ipsum"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-950">
      {/* Hero section with overlay */}
      <section className="relative h-[80vh] flex items-center justify-center">
        <img
          src="https://plus.unsplash.com/premium_photo-1679917152317-170f1613fbfe?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/90 via-gray-900/50 to-gray-900/90"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-green-400">Soluções</span> Inovadoras
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto mb-8">
            Transformando ideias em realidade através da tecnologia sustentável
          </p>
          <button 
            onClick={scrollToSolucoes}
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-semibold 
                     flex items-center gap-2 mx-auto transition-all transform hover:scale-105"
          >
            Explore Agora 
            <ChevronRight className="group-hover:animate-bounce" />
          </button>
        </div>
        
        {/* Scroll Indicator */}
        <div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={scrollToSolucoes}
        >
          <div className="animate-bounce">
            <ChevronRight 
              size={32} 
              className="text-green-400" 
              style={{ transform: 'rotate(90deg)' }}
            />
          </div>
        </div>
      </section>

      {/* Solutions section */}
      <div ref={solucoesRef} className="container mx-auto py-20 px-4 max-w-6xl scroll-mt-8">
        <div className="text-center mb-16">
          <span className="text-green-400 text-sm font-semibold tracking-wider uppercase mb-2 block">
            Nosso Portfólio
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Soluções que Transformam
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            Desenvolvemos soluções pioneiras que unem inovação e sustentabilidade,
            criando um impacto positivo para nossos clientes e para o planeta.
          </p>
        </div>

        {solucoes.map((solucao, index) => (
          <section
            key={index}
            className={`mb-32 ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            } flex flex-col md:flex-row items-stretch gap-12`}
          >
            {/* Image Container */}
            <div className="md:w-1/2 relative group">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={solucao.imagemGrande}
                  alt={solucao.titulo}
                  className="w-full h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <img
                src={solucao.imagemPequena}
                alt={`${solucao.titulo} detail`}
                className="absolute -bottom-6 -right-6 w-32 h-32 rounded-lg shadow-xl border-4 border-gray-950 object-cover
                         transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500"
              />
            </div>

            {/* Content Container */}
            <div className="md:w-1/2 flex flex-col justify-center">
              <h3 className="text-3xl font-bold text-white mb-6">
                {solucao.titulo}
              </h3>
              <p className="text-gray-400 text-lg mb-8">
                {solucao.descricao}
              </p>

              {/* Benefits */}
              <div className="bg-gray-900 rounded-xl p-6 shadow-lg mb-6 border border-gray-800">
                <h4 className="text-green-400 font-semibold mb-4 flex items-center gap-2">
                  <Info size={20} />
                  Benefícios Principais
                </h4>
                <ul className="space-y-3">
                  {solucao.beneficios.map((beneficio, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-300">
                      <ArrowRight size={16} className="text-green-400" />
                      {beneficio}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {solucao.tecnologias.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-gray-900 text-green-400 px-4 py-2 rounded-full text-sm font-medium border border-gray-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <button className="mt-8 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold 
                               flex items-center gap-2 w-fit transition-all transform hover:scale-105">
                Saiba Mais <ExternalLink size={18} />
              </button>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}