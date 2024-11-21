import { useState } from 'react';
import { Info, Leaf, Cpu, ChevronDown, ChevronUp, MessageSquare, Github, Linkedin, Mail } from 'lucide-react';

export default function Sobre() {
  const [faqVisible, setFaqVisible] = useState(null);  
  const [chatInput, setChatInput] = useState('');
  const [chatLog, setChatLog] = useState([
    { user: 'bot', message: 'Olá! Como posso ajudar você?' },
  ]);
  const [currentCategory, setCurrentCategory] = useState('Geral');

  const teamMembers = [
    {
      name: "Vitor Eskes",
      role: "Desenvolvedora Full Stack",
      description: "Especialista em desenvolvimento web com foco em soluções sustentáveis.",
      image: "https://media.licdn.com/dms/image/v2/D4D03AQFqQnzENQEK_A/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1714952264248?e=1736985600&v=beta&t=LuBHVMzPPV2zuMX14Lr-qmNGDJ2_14SKAdjseFn6XwA",
      social: {
        github: "https://github.com/VitorEskes",
        linkedin: "https://www.linkedin.com/in/vitor-eskes-2727bb2b6/",
      }
    },
    {
      name: "Nathan Craveiro",
      role: "Especialista em Sustentabilidade",
      description: "Pesquisador com experiência em projetos de impacto ambiental.",
      image: "https://media.licdn.com/dms/image/v2/D5603AQGe57JAYfm5pg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1708611776916?e=1736985600&v=beta&t=fTLn2GA4FSVf3-wj-ml0evT0nIgxwLOjcjyL-i4sH60",
      social: {
        github: "https://github.com/Nacarama",
        linkedin: "https://www.linkedin.com/in/nathan-amin-6900462b6/",
      }
    },
    {
      name: "Gabriel Matias",
      role: "UX/UI Designer",
      description: "Designer com foco em criar experiências intuitivas e acessíveis.",
      image: "https://media.licdn.com/dms/image/v2/D4D03AQEIlmLFi17ZSQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1725762071728?e=1736985600&v=beta&t=9UOdfIn862KbygbICS5EiriqOOXzSnFSWrFS8BbqXs4",
      social: {
        github: "https://github.com/Modkii",
        linkedin: "https://www.linkedin.com/in/gabriel-matias-simoes-5a55562b7/",
      }
    }
  ];

  const faqData = {
    Geral: [
      { question: 'Qual é o objetivo do projeto?', answer: 'O objetivo é promover soluções sustentáveis e inovadoras.' },
      { question: 'Como posso participar?', answer: 'Você pode entrar em contato com nossa equipe para saber mais.' },
      { question: 'Quais são as áreas de atuação?', answer: 'Atuamos em energia renovável, tecnologia e sustentabilidade.' },
    ],
    Sustentabilidade: [
      { question: 'Qual é o impacto esperado?', answer: 'Esperamos um impacto significativo na comunidade e no meio ambiente.' },
      { question: 'Qual é a visão do projeto?', answer: 'Ser uma referência em inovação sustentável.' },
      { question: 'Quais são os principais desafios?', answer: 'Os principais desafios são a aceitação no mercado e a adaptação das tecnologias.' },
    ],
    Tecnologia: [
      { question: 'Como funciona o processo de desenvolvimento?', answer: 'Inclui pesquisa, design e implementação de soluções tecnológicas.' },
      { question: 'Onde o projeto está sendo desenvolvido?', answer: 'Estamos desenvolvendo em diversas cidades com foco em áreas urbanas.' },
      { question: 'Como posso contribuir para o sucesso do projeto?', answer: 'Você pode contribuir compartilhando conhecimento ou se tornando parceiro.' },
    ],
  };

  const responses = {
    'olá': 'Olá! Como posso ajudar você?',
    'qual é o objetivo do projeto?': 'O objetivo é promover soluções sustentáveis e inovadoras.',
    'como posso participar?': 'Você pode entrar em contato com nossa equipe para saber mais.',
    'quais são as áreas de atuação?': 'Atuamos em energia renovável, tecnologia e sustentabilidade.',
  };

  const handleChatSubmit = (e) => {
    e.preventDefault();
    if (chatInput.trim()) {
      setChatLog([...chatLog, { user: 'user', message: chatInput }]);
      setChatInput('');

      const lowerCaseInput = chatInput.toLowerCase();
      const botResponse = responses[lowerCaseInput] || 'Desculpe, não entendi a sua pergunta. Pode tentar de outra forma?';

      setTimeout(() => {
        setChatLog((prevLog) => [...prevLog, { user: 'bot', message: botResponse }]);
      }, 1000);
    }
  };

  const handleSuggestedQuestion = (question) => {
    setChatInput(question);
    handleChatSubmit({ preventDefault: () => {} });
  };


  return (
    <div className="min-h-screen bg-gray-950">
      {/* Hero section with overlay */}
      <section className="relative h-[80vh] flex items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1452179535021-368bb0edc3a8?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Technology and Sustainability"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/90 via-gray-900/50 to-gray-900/90"></div>
        
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-green-400">Sobre</span> Nós
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto mb-8">
            Uma equipe comprometida com a inovação e sustentabilidade
          </p>
        </div>
      </section>

      <div className="container mx-auto py-20 px-4 max-w-6xl">
        {/* Sobre Section */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <span className="text-green-400 text-sm font-semibold tracking-wider uppercase mb-2 block">
              Nossa História
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Quem Somos
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
              Este projeto foi criado por uma equipe de estudantes de Engenharia de Software da FIAP, 
              com o objetivo de explorar e aplicar soluções de sustentabilidade e inovação tecnológica 
              como parte de um trabalho acadêmico.
            </p>
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <span className="text-green-400 text-sm font-semibold tracking-wider uppercase mb-2 block">
              Nossa Equipe
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Time de Desenvolvedores
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-gray-900 rounded-xl p-6 shadow-lg border border-gray-800">
                <div className="relative group mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-48 h-48 rounded-full mx-auto object-cover mb-4 transform group-hover:scale-105 transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-green-400 opacity-0 group-hover:opacity-20 rounded-full transition-opacity duration-300"></div>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-2 text-center">{member.name}</h3>
                <p className="text-green-400 font-medium mb-2 text-center">{member.role}</p>
                <p className="text-gray-400 text-center mb-4 text-sm">{member.description}</p>
                
                <div className="flex justify-center space-x-4">
                  <a href={member.social.github} className="text-gray-400 hover:text-green-400 transition-colors">
                    <Github size={20} />
                  </a>
                  <a href={member.social.linkedin} className="text-gray-400 hover:text-green-400 transition-colors">
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <span className="text-green-400 text-sm font-semibold tracking-wider uppercase mb-2 block">
              FAQ
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Perguntas Frequentes
            </h2>
          </div>
          
          <div className="mb-6 flex justify-center space-x-4">
            <button 
              onClick={() => setCurrentCategory('Geral')} 
              className={`px-4 py-2 flex items-center space-x-2 rounded-full transition-all
                ${currentCategory === 'Geral' 
                  ? 'bg-green-500 text-white' 
                  : 'bg-gray-900 text-gray-400 hover:text-green-400 border border-gray-800'}`}
            >
              <Info size={20} /> <span>Geral</span>
            </button>
            <button 
              onClick={() => setCurrentCategory('Sustentabilidade')} 
              className={`px-4 py-2 flex items-center space-x-2 rounded-full transition-all
                ${currentCategory === 'Sustentabilidade' 
                  ? 'bg-green-500 text-white' 
                  : 'bg-gray-900 text-gray-400 hover:text-green-400 border border-gray-800'}`}
            >
              <Leaf size={20} /> <span>Sustentabilidade</span>
            </button>
            <button 
              onClick={() => setCurrentCategory('Tecnologia')} 
              className={`px-4 py-2 flex items-center space-x-2 rounded-full transition-all
                ${currentCategory === 'Tecnologia' 
                  ? 'bg-green-500 text-white' 
                  : 'bg-gray-900 text-gray-400 hover:text-green-400 border border-gray-800'}`}
            >
              <Cpu size={20} /> <span>Tecnologia</span>
            </button>
          </div>

          <div className="bg-gray-900 rounded-xl p-8 shadow-lg border border-gray-800">
            <ul className="space-y-4">
              {faqData[currentCategory].map((item, index) => (
                <li key={index} className="border-b border-gray-800 pb-4">
                  <button
                    onClick={() => setFaqVisible(faqVisible === index ? null : index)}
                    className="text-lg font-semibold text-left w-full flex justify-between items-center text-white"
                  >
                    {item.question}
                    <span className="text-green-400">
                      {faqVisible === index ? <ChevronUp /> : <ChevronDown />}
                    </span>
                  </button>
                  {faqVisible === index && <p className="text-gray-400 mt-2">{item.answer}</p>}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Chatbot Section */}
        <section className="bg-gray-900 rounded-xl p-8 shadow-lg border border-gray-800">
          <div className="flex items-center gap-4 mb-6">
            <MessageSquare size={24} className="text-green-400" />
            <h2 className="text-2xl font-semibold text-white">Chatbot</h2>
          </div>
          
          <div className="bg-gray-950 p-4 rounded-xl mb-4 max-h-60 overflow-y-auto">
            {chatLog.map((entry, index) => (
              <div
                key={index}
                className={`flex mb-2 ${entry.user === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`p-2 rounded-lg ${
                    entry.user === 'user' 
                      ? 'bg-green-500 text-white' 
                      : 'bg-gray-900 text-gray-300'
                  }`}
                >
                  {entry.message}
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={handleChatSubmit} className="flex space-x-2">
            <input
              type="text"
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              placeholder="Digite sua pergunta..."
              className="flex-1 p-2 rounded-lg bg-gray-950 border border-gray-800 text-white 
                       focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
            />
            <button type="submit" className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-semibold 
                                         transition-all transform hover:scale-105">
              Enviar
            </button>
          </form>

          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4 text-white">Perguntas sugeridas</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {Object.keys(responses).map((question, index) => (
                <button
                  key={index}
                  onClick={() => handleSuggestedQuestion(question)}
                  className="text-left py-2 px-4 rounded-lg bg-gray-950 text-gray-300 hover:text-green-400 
                           border border-gray-800 hover:border-green-400 focus:outline-none 
                           transition-all duration-300 ease-in-out"
                >
                  {question}
                </button>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}