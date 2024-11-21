// src/routes/Error.jsx
import { useRouteError, Link } from 'react-router-dom'

export default function Error() {
  const error = useRouteError()

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Oops! Página não encontrada
        </h2>
        <p className="text-gray-600 mb-8">
          {error.statusText || error.message}
        </p>
        <Link
          to="/"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Voltar para Home
        </Link>
      </div>
    </div>
  )
}