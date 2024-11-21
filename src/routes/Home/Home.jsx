import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom'

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const slides = [
    {
      image: "https://images.unsplash.com/photo-1617269778723-73a40cf299bd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Energia Solar",
      description: "Transformando a luz solar em energia limpa"
    },
    {
      image: "https://images.unsplash.com/photo-1710075705516-8aaf8f31d773?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Energia Eólica",
      description: "Aproveitando a força dos ventos"
    },
    {
      image: "https://blog.imtab.com.br/wp-content/uploads/2024/10/energia-de-biomassa.jpg",
      title: "Biomassa",
      description: "Convertendo resíduos em energia sustentável"
    },
    {
      image: "https://images.unsplash.com/photo-1606050309588-741702cceb9b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Hidrelétrica",
      description: "O poder das águas gerando energia limpa"
    },
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  const solutions = [
    {
      id: 1,
      title: 'Energia Solar Residencial',
      subtitle: 'Soluções para sua casa',
      description: 'Sistemas fotovoltaicos de alta eficiência para residências, proporcionando economia e sustentabilidade para seu lar.',
      icon: '🏠'
    },
    {
      id: 2,
      title: 'Projetos Industriais',
      subtitle: 'Soluções corporativas',
      description: 'Implementação de sistemas de energia renovável em larga escala para indústrias e grandes empresas.',
      icon: '🏭'
    },
    {
      id: 3,
      title: 'Consultoria Energética',
      subtitle: 'Análise e planejamento',
      description: 'Assessoria especializada para otimização do consumo e implementação de soluções energéticas sustentáveis.',
      icon: '📊'
    },
    {
      id: 4,
      title: 'Manutenção Preventiva',
      subtitle: 'Cuidado contínuo',
      description: 'Serviços de manutenção e monitoramento para garantir a máxima eficiência dos seus sistemas energéticos.',
      icon: '🔧'
    }
  ];

  const features = [
    {
      id: 1,
      image: "",
      title: "Soluções para Energia Solar",
      description: "Implementação de painéis solares residenciais e comerciais para economia e eficiência.",
      buttonText: "Saiba Mais"
    },
    {
      id: 2,
      image: "",
      title: "Tecnologia de Energia Eólica",
      description: "Instalações e manutenção de turbinas eólicas para geração de energia limpa.",
      buttonText: "Saiba Mais"
    },
    {
      id: 3,
      image: "",
      title: "Soluções em Biomassa",
      description: "Conversão de resíduos em energia sustentável, ajudando a reduzir o desperdício.",
      buttonText: "Saiba Mais"
    },
  ];

  return (
    <main className="font-poppins overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen w-full">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1633353083168-ea5682b17781?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/90 via-gray-900/50 to-gray-900/90"></div>
        </div>

        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                <span className="text-green-400">Green</span> Energy Solutions
              </h1>
              <h2 className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
                Transformando o futuro com soluções energéticas sustentáveis e inovadoras
                para empresas e residências.
              </h2>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/solucao">
                  <button className="px-8 py-3 bg-green-500 hover:bg-green-600 text-white rounded-full font-semibold transition-all transform hover:scale-105">
                    Começar Agora
                  </button>
                </Link>

                <button className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white rounded-full font-semibold backdrop-blur-sm transition-all">
                  Saiba Mais
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-gray-950">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-green-400 text-sm font-semibold tracking-wider uppercase mb-2 block">
              Transformando o Futuro
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Inovação em Energia Sustentável
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
              Desenvolvemos soluções pioneiras em energia renovável, combinando tecnologia
              avançada com sustentabilidade. Nossa missão é capacitar empresas e residências
              a fazerem parte da revolução energética verde.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {solutions.map((solution) => (
              <div key={solution.id} className="bg-gray-900 rounded-xl p-6 transform hover:scale-105 transition-all duration-300">
                <div className="text-4xl mb-4">{solution.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {solution.title}
                </h3>
                <p className="text-green-400 text-sm mb-3">{solution.subtitle}</p>
                <p className="text-gray-400 text-sm">
                  {solution.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Slideshow Section */}
      <section className="relative h-screen bg-gray-900">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${currentSlide === index ? 'opacity-100' : 'opacity-0'
              }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60"></div>

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  {slide.title}
                </h2>
                <p className="text-xl text-gray-200">
                  {slide.description}
                </p>
              </div>
            </div>
          </div>
        ))}

        <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-4">
          <button
            onClick={prevSlide}
            className="p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={nextSlide}
            className="p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'
                } items-center gap-12 mb-20 last:mb-0`}
            >
              <div className="lg:w-1/2">
                <img
                  src={feature.image}
                  alt={`Feature ${feature.id}`}
                  className="rounded-2xl shadow-2xl w-full h-[300px] md:h-[400px] object-cover"
                />
              </div>
              <div className="lg:w-1/2">
                <div className="bg-green-500 text-white text-sm font-semibold px-4 py-1 rounded-full inline-block mb-4">
                  {feature.title}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {feature.description}
                </p>
                <button className="px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white rounded-full transition-all">
                  {feature.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}