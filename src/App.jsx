import React, { useState, useEffect } from 'react';
import {
  ChevronRight,
  MapPin,
  MessageCircle,
  User,
  Target,
  TrendingUp,
  Search,
  ShieldCheck,
  Menu,
  X,
  FileText,
  BarChart3,
  Globe
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ramiroProfile from './assets/ramiro.jpeg';
import prop1 from './assets/prop1.jpeg';
import prop2 from './assets/prop2.jpeg';
import prop3 from './assets/prop3.jpeg';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#home' },
    { name: 'Sobre Mí', href: '#about' },
    { name: 'Servicios', href: '#services' },
    { name: 'Método RB', href: '#method' },
    { name: 'Cobertura', href: '#coverage' },
    { name: 'Análisis', href: '#analysis' },
  ];

  const servicesProprietors = [
    "Tasación estratégica",
    "Análisis comparativo de mercado",
    "Definición estratégica de valor",
    "Estrategia de comunicación",
    "Optimización de publicación",
    "Difusión segmentada",
    "Filtrado de compradores",
    "Negociación y cierre"
  ];

  const methodSteps = [
    { id: 1, title: "Análisis real de mercado", desc: "Estudio exhaustivo del entorno y competencia directa." },
    { id: 2, title: "Definición estratégica", desc: "Determinamos el valor óptimo basado en datos y percepción." },
    { id: 3, title: "Comunicación profesional", desc: "Narrativa estratégica y posicionamiento de valor." },
    { id: 4, title: "Difusión y segmentación", desc: "Llegamos al público específico que valora su propiedad." },
    { id: 5, title: "Negociación y cierre", desc: "Gestión experta con respaldo jurídico de Ignacio Campodónico." }
  ];

  const zones = {
    "Pilar": ["Ayres del Pilar", "La Lomada", "Highland Park", "Martindale", "Mayling", "Laguna del Sol", "Campo Grande", "Pilar Centro", "Manzanares", "La Lonja", "Fátima"],
    "Nordelta / Tigre": ["Nordelta", "Santa Bárbara", "Villanueva", "Rincón de Milberg"],
    "San Isidro": ["Acassuso", "Martínez", "Beccar", "La Horqueta", "San Isidro Centro"],
    "Escobar": ["Puertos", "El Cantón", "San Matías", "El Naudir"]
  };

  const blogPosts = [
    { title: "Tendencias inmobiliarias 2024", date: "Marzo 2024", tag: "TENDENCIAS", image: prop1 },
    { title: "Movimiento de tasas y crédito", date: "Febrero 2024", tag: "FINANZAS", image: prop2 },
    { title: "Valor del m² en Zona Norte", date: "Enero 2024", tag: "ESTADÍSTICAS", image: prop3 }
  ];

  return (
    <div className="min-h-screen bg-[#FBFBFB] text-[#1D1D1F] font-sans selection:bg-[#2F4F4F] selection:text-white">

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent py-4'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-16">
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tight text-[#1D1D1F]">RB PROPIEDADES</span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#2F4F4F] font-semibold">Ramiro Villafañe</span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-sm font-medium hover:text-[#2F4F4F] transition-colors uppercase tracking-widest">
                {link.name}
              </a>
            ))}
            <a href="#contact" className="bg-[#2F4F4F] text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-[#1D1D1F] transition-all">
              Solicitar Tasación
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} onClick={() => setIsMenuOpen(false)} className="text-2xl font-semibold border-b border-gray-100 pb-4">
                  {link.name}
                </a>
              ))}
              <a href="#contact" onClick={() => setIsMenuOpen(false)} className="bg-[#2F4F4F] text-white text-center py-4 rounded-xl text-lg font-medium">
                Solicitar Tasación
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 -right-20 w-96 h-96 bg-[#2F4F4F]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-[#556B2F]/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h2 className="text-[#2F4F4F] font-semibold tracking-widest uppercase mb-4 text-sm">Venta inmobiliaria estratégica en Zona Norte</h2>
            <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-8 tracking-tight">
              La diferencia no está en publicar más, sino en <span className="text-[#2F4F4F]">comunicar mejor.</span>
            </h1>
            <p className="text-xl text-gray-500 mb-10 leading-relaxed font-light">
              Comunicación, criterio y respaldo profesional. No publicamos propiedades. Las posicionamos bajo una narrativa estratégica que maximiza su valor.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="bg-[#2F4F4F] text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-[#1D1D1F] transition-all flex items-center justify-center group">
                Solicitar Tasación
                <ChevronRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="https://wa.me/5491134553693" className="border border-gray-300 px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-50 transition-all flex items-center justify-center">
                Contactar por WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            <div className="aspect-[4/5] bg-gray-100 rounded-3xl overflow-hidden relative glass-card">
              <img
                src={ramiroProfile}
                alt="Ramiro Villafañe"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/70 backdrop-blur-md rounded-2xl border border-white/40">
                <p className="font-bold text-lg mb-1">Ramiro Villafañe</p>
                <p className="text-sm text-[#2F4F4F]">Lic. en Publicidad | Asesor Estratégico</p>
              </div>
            </div>
          </div>

          <div>
            <span className="text-[#2F4F4F] font-semibold tracking-widest uppercase text-sm mb-4 block">Sobre Mí</span>
            <h3 className="text-4xl font-bold mb-6 tracking-tight">Estrategia antes que apuro.</h3>
            <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
              <p>
                Soy <span className="text-[#1D1D1F] font-semibold text-base">Licenciado en Publicidad</span>, y aplico las herramientas del marketing y la comunicación al mercado de Real Estate.
              </p>
              <p>
                RB Propiedades no es una inmobiliaria tradicional. Es un proyecto personal basado en el <strong>análisis, la percepción de valor y la narrativa estratégica</strong>.
              </p>
              <p>
                Trabajo en alianza con <strong>Ignacio Campodónico Propiedades</strong>, lo que me permite ofrecer respaldo jurídico y operativo integral manteniendo un trato directo y personalizado.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-[#FBFBFB]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#2F4F4F] font-semibold tracking-widest uppercase text-sm mb-4 block">Servicios</span>
            <h3 className="text-4xl font-bold tracking-tight">Soluciones para un mercado exigente</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Proprietors */}
            <div className="bg-white p-10 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[#2F4F4F]/10 rounded-xl flex items-center justify-center text-[#2F4F4F] mb-6">
                <Target size={24} />
              </div>
              <h4 className="text-2xl font-bold mb-6">Para Propietarios</h4>
              <ul className="grid grid-cols-1 gap-4">
                {servicesProprietors.map((s, i) => (
                  <li key={i} className="flex items-center text-gray-600">
                    <div className="w-1.5 h-1.5 bg-[#2F4F4F] rounded-full mr-3"></div>
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            {/* Buyers */}
            <div className="bg-[#1D1D1F] p-10 rounded-3xl text-white shadow-xl">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-white mb-6">
                <Search size={24} />
              </div>
              <h4 className="text-2xl font-bold mb-6">Para Compradores</h4>
              <ul className="grid grid-cols-1 gap-6">
                {[
                  { title: "Búsqueda personalizada", icon: <Globe size={18} /> },
                  { title: "Análisis real de valor", icon: <TrendingUp size={18} /> },
                  { title: "Evaluación de oportunidades", icon: <BarChart3 size={18} /> },
                  { title: "Acompañamiento en negociación", icon: <ShieldCheck size={18} /> }
                ].map((item, i) => (
                  <li key={i} className="flex items-center group cursor-default">
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mr-4 group-hover:bg-[#2F4F4F] transition-colors">
                      {item.icon}
                    </div>
                    <span className="text-gray-300 group-hover:text-white transition-colors">{item.title}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Method Section - 5 Steps */}
      <section id="method" className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20">
            <span className="text-[#2F4F4F] font-semibold tracking-widest uppercase text-sm mb-4 block">El Método RB</span>
            <h3 className="text-4xl font-bold tracking-tight">Una hoja de ruta estratégica</h3>
          </div>

          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 -translate-y-1/2 z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12 relative z-10">
              {methodSteps.map((step) => (
                <div key={step.id} className="flex flex-col items-center lg:items-start text-center lg:text-left">
                  <div className="w-16 h-16 rounded-2xl bg-[#2F4F4F] text-white flex items-center justify-center text-2xl font-bold mb-6 shadow-lg shadow-[#2F4F4F]/20">
                    {step.id}
                  </div>
                  <h5 className="text-lg font-bold mb-3">{step.title}</h5>
                  <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Section */}
      <section id="coverage" className="py-24 bg-[#1D1D1F] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-[#2F4F4F] font-semibold tracking-widest uppercase text-sm mb-4 block">Presencia</span>
              <h3 className="text-4xl font-bold tracking-tight">Zonas de Cobertura</h3>
            </div>
            <p className="text-gray-400 max-w-md">
              Especialistas en los desarrollos y barrios privados más exclusivos de Zona Norte.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            {Object.entries(zones).map(([category, items]) => (
              <div key={category}>
                <h6 className="text-[#2F4F4F] font-bold text-sm uppercase tracking-widest mb-6 border-b border-white/10 pb-2">{category}</h6>
                <ul className="space-y-3">
                  {items.map((item, idx) => (
                    <li key={idx} className="text-gray-400 hover:text-white transition-colors cursor-default flex items-center text-sm">
                      <MapPin size={12} className="mr-2 text-[#2F4F4F]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Analysis / Blog */}
      <section id="analysis" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-16">
            <div>
              <span className="text-[#2F4F4F] font-semibold tracking-widest uppercase text-sm mb-4 block">Conocimiento</span>
              <h3 className="text-4xl font-bold tracking-tight">Análisis de Mercado</h3>
            </div>
            <button className="hidden md:flex items-center text-[#2F4F4F] font-bold uppercase tracking-widest text-xs group">
              Ver todos los artículos <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="aspect-video bg-gray-100 rounded-2xl mb-6 overflow-hidden relative">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-md text-[10px] font-bold text-[#2F4F4F] tracking-widest">
                    {post.tag}
                  </div>
                </div>
                <span className="text-xs text-gray-400 uppercase tracking-widest mb-2 block">{post.date}</span>
                <h4 className="text-xl font-bold group-hover:text-[#2F4F4F] transition-colors">{post.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / Form */}
      <section id="contact" className="py-24 bg-[#F5F5F7]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h3 className="text-5xl font-bold mb-8 tracking-tight">Hablemos de su propiedad.</h3>
              <p className="text-xl text-gray-500 mb-12 leading-relaxed">
                Complete el formulario para solicitar una tasación estratégica. Analizaré personalmente su caso para definir el mejor camino comercial.
              </p>

              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-[#2F4F4F] shadow-sm mr-6 shrink-0">
                    <FileText size={20} />
                  </div>
                  <div>
                    <h5 className="font-bold mb-1">Tasación Estratégica</h5>
                    <p className="text-gray-500 text-sm">No es solo un número. Es una definición de posicionamiento.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-[#2F4F4F] shadow-sm mr-6 shrink-0">
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <h5 className="font-bold mb-1">Respaldo Profesional</h5>
                    <p className="text-gray-500 text-sm">Alianza operativa con Ignacio Campodónico Propiedades.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-gray-100">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2 ml-1">Nombre</label>
                    <input type="text" className="w-full bg-[#FBFBFB] border-none rounded-xl p-4 focus:ring-2 focus:ring-[#2F4F4F]/20 transition-all outline-none" placeholder="Su nombre" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2 ml-1">WhatsApp</label>
                    <input type="tel" className="w-full bg-[#FBFBFB] border-none rounded-xl p-4 focus:ring-2 focus:ring-[#2F4F4F]/20 transition-all outline-none" placeholder="+54 9..." />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2 ml-1">Barrio / Zona</label>
                  <input type="text" className="w-full bg-[#FBFBFB] border-none rounded-xl p-4 focus:ring-2 focus:ring-[#2F4F4F]/20 transition-all outline-none" placeholder="Ej: Nordelta, Pilar..." />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2 ml-1">Tipo de Propiedad</label>
                    <select className="w-full bg-[#FBFBFB] border-none rounded-xl p-4 focus:ring-2 focus:ring-[#2F4F4F]/20 transition-all outline-none appearance-none">
                      <option>Casa</option>
                      <option>Departamento</option>
                      <option>Lote / Terreno</option>
                      <option>Comercial</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2 ml-1">Rango Estimado</label>
                    <input type="text" className="w-full bg-[#FBFBFB] border-none rounded-xl p-4 focus:ring-2 focus:ring-[#2F4F4F]/20 transition-all outline-none" placeholder="USD" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2 ml-1">Email</label>
                  <input type="email" className="w-full bg-[#FBFBFB] border-none rounded-xl p-4 focus:ring-2 focus:ring-[#2F4F4F]/20 transition-all outline-none" placeholder="nombre@ejemplo.com" />
                </div>

                <button type="submit" className="w-full bg-[#2F4F4F] text-white py-5 rounded-2xl font-bold text-lg hover:bg-[#1D1D1F] transition-all shadow-lg shadow-[#2F4F4F]/20">
                  Solicitar Tasación Estratégica
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
            <div>
              <div className="flex flex-col mb-4">
                <span className="text-xl font-bold tracking-tight text-[#1D1D1F]">RB PROPIEDADES</span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#2F4F4F] font-semibold">Ramiro Villafañe</span>
              </div>
              <p className="text-sm text-gray-400 max-w-xs">
                Asesoramiento inmobiliario estratégico. Licenciado en Publicidad.
              </p>
            </div>

            <div className="flex space-x-12">
              <div>
                <h6 className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-4">Seguinos</h6>
                <div className="flex space-x-4">
                  <a href="https://www.instagram.com/ramirovillafane.propiedades" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-gray-400 hover:text-[#2F4F4F] hover:bg-[#2F4F4F]/5 transition-all">
                    <span className="sr-only">Instagram</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                  </a>
                </div>
              </div>

              <div className="text-right">
                <h6 className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-4">Respaldo</h6>
                <p className="text-sm font-medium">Alianza estratégica con</p>
                <p className="text-sm text-gray-500 italic">Ignacio Campodónico Propiedades</p>
              </div>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-gray-50 flex flex-col md:flex-row justify-between gap-4 text-[10px] font-bold uppercase tracking-widest text-gray-400">
            <p>&copy; 2024 RB PROPIEDADES. TODOS LOS DERECHOS RESERVADOS.</p>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-[#2F4F4F]">Privacidad</a>
              <a href="#" className="hover:text-[#2F4F4F]">Términos</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/5491134553693"
        className="fixed bottom-8 right-8 w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform z-50"
      >
        <MessageCircle size={32} />
      </a>

      <style>{`
        .glass-card {
          background: rgba(255, 255, 255, 0.4);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
};

export default App;
