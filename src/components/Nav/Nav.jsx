import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Lightbulb, LogIn, LogOut, UserPlus, Menu, X } from 'lucide-react'

export default function Nav() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navigate = useNavigate()

  // Função para descriptografar os dados de login
  function decryptData(encryptedData) {
    return encryptedData.slice(32)
  }

  // Verifica se há uma sessão ativa ao carregar o componente
  useEffect(() => {
    const encryptedSession = sessionStorage.getItem('userSession')
    if (encryptedSession) {
      const [email, password] = decryptData(encryptedSession).split(':')
      setIsLoggedIn(true)
    } else {
      setIsLoggedIn(false)
    }
  }, [])

  // Função de logout
  const handleLogout = () => {
    setIsLoggedIn(false)
    sessionStorage.removeItem('userSession') // Remove a sessão
    navigate('/') // Redireciona para a página inicial
  }

  // Função para alternar o menu mobile
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // Definindo as rotas de navegação
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Solução', path: '/solucao' },
    { name: 'Sobre', path: '/sobre' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 bg-slate-500/50 backdrop-blur-md z-50 text-white shadow-md">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="bg-green-500 p-2 rounded-full">
              <Lightbulb className="h-6 w-6 text-white" />
            </div>
            <span className="font-bold text-xl">Synthica</span>
          </Link>

          {/* Botão de menu mobile */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-300 hover:text-white focus:outline-none transition duration-200 ease-in-out transform hover:scale-105"
          >
            {isMenuOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
          </button>

          {/* Navegação desktop */}
          <div className="hidden md:flex items-center justify-center flex-1 mx-4 space-x-8">
            {navLinks.map((link, idx) => (
              <Link
                key={idx}
                to={link.path}
                className="group relative text-gray-100 hover:text-white px-3 py-2 text-sm font-medium"
              >
                {link.name}
                <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-white transition-all duration-300 ease-in-out transform -translate-x-1/2 group-hover:w-full"></span>
              </Link>
            ))}
          </div>




          {/* Botões de login/logout */}
          <div className="hidden md:flex items-center space-x-4">
            {isLoggedIn ? (
              <button
                onClick={handleLogout}
                className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 text-sm font-medium"
              >
                <LogOut className="h-4 w-4 inline mr-2" />
                Logout
              </button>
            ) : (
              <div className="flex items-center space-x-3">
                <Link
                  to="/login"
                  className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 text-sm font-medium"
                >
                  <LogIn className="h-4 w-4 inline mr-2" />
                  Login
                </Link>
                <Link
                  to="/cadastrar"
                  className="bg-gray-700 text-white px-4 py-2 rounded-full hover:bg-gray-600 text-sm font-medium"
                >
                  <UserPlus className="h-4 w-4 inline mr-2" />
                  Cadastrar
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Navegação mobile */}
        {isMenuOpen && (
          <div className="md:hidden pb-6">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link, idx) => (
                <Link
                  key={idx}
                  to={link.path}
                  className="text-gray-100 hover:text-white px-3 py-2 text-sm font-medium"
                  onClick={toggleMenu}
                >
                  {link.name}
                </Link>
              ))}
              {isLoggedIn ? (
                <button
                  onClick={() => {
                    handleLogout()
                    toggleMenu()
                  }}
                  className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-cyan-900 text-sm font-medium"
                >
                  <LogOut className="h-4 w-4 inline mr-2" />
                  Logout
                </button>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-cyan-900 text-sm font-medium"
                    onClick={toggleMenu}
                  >
                    <LogIn className="h-4 w-4 inline mr-2" />
                    Login
                  </Link>
                  <Link
                    to="/cadastrar"
                    className="bg-gray-700 text-white px-4 py-2 rounded-full hover:bg-gray-600 text-sm font-medium"
                    onClick={toggleMenu}
                  >
                    <UserPlus className="h-4 w-4 inline mr-2" />
                    Cadastrar
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}