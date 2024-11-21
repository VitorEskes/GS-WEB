import { useRef, useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const usuario = useRef();
  const senha = useRef();
  const [usuarios, setUsuarios] = useState([]);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  // Função para criptografar os dados de login usando operações matemáticas e strings aleatórias
  function encryptData(data) {
    // Adiciona uma transformação matemática simples ao dado original
    const encodedData = Array.from(data)
      .map((char) => char.charCodeAt(0) * 3 + 7) // Multiplica o código ASCII por 3 e adiciona 7
      .join("-");

    // Gera strings aleatórias antes e depois do dado transformado
    const randomPrefix = Math.random().toString(36).substring(2, 8);
    const randomSuffix = Math.random().toString(36).substring(2, 8);

    // Retorna o dado "criptografado" com prefixo e sufixo
    return `${randomPrefix}-${encodedData}-${randomSuffix}`;
  }


  function validar() {
    for (let i = 0; i < usuarios.length; i++) {
      if (
        usuarios[i].email === usuario.current.value &&
        usuarios[i].senha === senha.current.value
      ) {
        return true;
      }
    }
    return false;
  }

  const logar = (e) => {
    e.preventDefault();
    if (validar()) {
      // Criptografa os dados de login antes de salvar no sessionStorage
      const encryptedToken = encryptData(`${usuario.current.value}:${senha.current.value}`);
      sessionStorage.setItem("userSession", encryptedToken);
      navigate("/"); // Navega para a página inicial
      window.location.reload(); // Recarrega a página para resetar o estado
    } else {
      alert("Usuário/senha inválidos");
    }
  };
  


  useEffect(() => {
    fetch("http://localhost:5000/usuarios")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setUsuarios(res);
      });
  }, []);

  return (
    <div className=" min-h-screen flex ">
      <div className="flex-1 flex items-center justify-center">
        <div className="max-w-md w-full px-8 py-12">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Bem-vindo de volta!</h1>
            <p className="text-gray-600">Por favor, faça login na sua conta</p>
          </div>

          <form onSubmit={logar} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <div className="relative">
                <input
                  ref={usuario}
                  type="email"
                  required
                  className="appearance-none block w-full px-3 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Digite seu email"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Senha
              </label>
              <div className="relative">
                <input
                  ref={senha}
                  type={showPassword ? "text" : "password"}
                  required
                  className="appearance-none block w-full px-3 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Digite sua senha"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? (
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  ) : (
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-green-600 focus:ring-green-600 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                  Lembrar-me
                </label>
              </div>

              <div className="text-sm">
                <p
                  className="font-medium text-green-600 hover:text-green-500 cursor-pointer"
                >
                  Esqueceu sua senha?
                </p>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
              >
                Entrar
              </button>
            </div>

            <div className="text-center">
              <span className="text-sm text-gray-600">Ainda não tem uma conta? </span>
              <Link
                to="/cadastrar"
                className="font-medium text-green-600 hover:text-green-500"
              >
                Cadastre-se
              </Link>
            </div>
          </form>

          <div className="mt-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Ou continue com</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <button className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z" />
                </svg>
              </button>
              <button className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.615,3.184c-3.604-0.246-11.631-0.246-15.23,0C0.488,3.45,0.029,5.804,0,12c0.029,6.185,0.484,8.549,4.385,8.816c3.6,0.245,11.626,0.246,15.23,0C23.512,20.55,23.971,18.196,24,12C23.971,5.815,23.516,3.451,19.615,3.184z M9,16V8l8,4L9,16z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Image */}
      <div className="hidden lg:block lg:w-1/2 relative">
        <img
          src="https://images.unsplash.com/photo-1617269778723-73a40cf299bd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Login illustration"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center p-12">
          <div className=" backdrop-blur-sm p-8 rounded-xl">
            <h2 className="text-4xl font-bold mb-4 text-center text-black">
              Transforme o mundo
            </h2>
            <p className="text-lg text-center max-w-md text-black">
              Faça login para acessar sua conta e comece a explorar todas as possibilidades.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Login;