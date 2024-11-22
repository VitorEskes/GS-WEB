// src/components/Footer.jsx
import { Facebook, Instagram, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-6">
      <div className="container mx-auto flex justify-center space-x-6">
        <a className="hover:text-blue-400 cursor-pointer"><Facebook size={24} /></a>
        <a className="hover:text-pink-400 cursor-pointer"><Instagram size={24} /></a>
        <a className="hover:text-blue-600 cursor-pointer"><Linkedin size={24} /></a>
        <a className="hover:text-red-400 cursor-pointer"><Mail size={24} /></a>
      </div>
      <div className="text-center mt-4">
        <p>&copy; 2024 Synthica - Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}