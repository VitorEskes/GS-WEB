// src/components/Footer.jsx
import { Facebook, Instagram, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-6">
      <div className="container mx-auto flex justify-center space-x-6">
        <a href="#" className="hover:text-blue-400"><Facebook size={24} /></a>
        <a href="#" className="hover:text-pink-400"><Instagram size={24} /></a>
        <a href="#" className="hover:text-blue-600"><Linkedin size={24} /></a>
        <a href="mailto:contact@example.com" className="hover:text-red-400"><Mail size={24} /></a>
      </div>
      <div className="text-center mt-4">
        <p>&copy; 2024 Synthica - Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}