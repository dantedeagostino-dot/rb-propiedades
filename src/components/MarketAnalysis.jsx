import React from 'react';
import { motion } from 'framer-motion';
import {
    TrendingUp,
    DollarSign,
    BarChart3,
    ArrowLeft,
    Calendar,
    Building,
    Percent
} from 'lucide-react';
import { Link } from 'react-router-dom';

const MarketAnalysis = () => {
    const analysisData = [
        {
            id: 1,
            title: "Tendencias Inmobiliarias 2026",
            icon: <TrendingUp className="w-8 h-8 text-[#2F4F4F]" />,
            summary: "Recuperación y estabilización del mercado.",
            content: [
                "El mercado inmobiliario argentino proyecta un escenario de recuperación y estabilización para 2026.",
                "Se anticipa un crecimiento moderado en los precios de venta, impulsado por la estabilidad macroeconómica.",
                "El perfil del comprador será más racional y selectivo, buscando rentabilidad y eficiencia en proyectos bien ubicados.",
                "El corredor norte bonaerense (Campana, Zárate, Exaltación de la Cruz) se posiciona como una zona atractiva para la inversión."
            ]
        },
        {
            id: 2,
            title: "Créditos Hipotecarios y Tasas",
            icon: <Percent className="w-8 h-8 text-[#2F4F4F]" />,
            summary: "Reactivación impulsada por créditos UVA.",
            content: [
                "Se espera una reactivación del mercado impulsada por el regreso de los créditos hipotecarios UVA.",
                "Las tasas de interés se sitúan entre UVA + 6% y UVA + 13%, con expectativas de baja gradual si la inflación desciende.",
                "La inflación proyectada para 2026 muestra una tendencia a la baja, lo que favorece el acceso al crédito.",
                "Bancos públicos y privados están ajustando sus ofertas para competir, con tasas preferenciales para clientes."
            ]
        },
        {
            id: 3,
            title: "Valor del m² en Zona Norte",
            icon: <Building className="w-8 h-8 text-[#2F4F4F]" />,
            summary: "Estabilidad y crecimiento en barrios cerrados.",
            content: [
                "Los valores del metro cuadrado en barrios cerrados muestran tendencias de ajuste y crecimiento moderado.",
                "El precio medio del m² en Zona Norte se mantiene estable en torno a los US$ 2.368, con una suba interanual del 6.6%.",
                "Barrios como Manzanares, Villa Adelina y General Pacheco han experimentado un crecimiento significativo en sus valores.",
                "Los altos costos de construcción hacen que la reventa de propiedades terminadas sea competitiva frente a la construcción desde cero."
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-[#FBFBFB] text-[#1D1D1F] font-sans selection:bg-[#2F4F4F] selection:text-white pt-20 pb-12">
            <div className="max-w-7xl mx-auto px-6">

                <Link to="/" className="inline-flex items-center text-[#2F4F4F] font-medium mb-8 hover:opacity-80 transition-opacity">
                    <ArrowLeft size={20} className="mr-2" />
                    Volver al Inicio
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-16"
                >
                    <span className="text-[#2F4F4F] font-semibold tracking-widest uppercase text-sm mb-4 block">Proyecciones 2026</span>
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Análisis de Mercado Inmobiliario</h1>
                    <p className="text-xl text-gray-500 max-w-3xl leading-relaxed">
                        Un panorama detallado sobre las tendencias, valores y oportunidades que definirán el mercado en el próximo ciclo. Información estratégica para la toma de decisiones.
                    </p>
                </motion.div>

                <div className="grid gap-12">
                    {analysisData.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white p-8 md:p-12 rounded-[2rem] shadow-sm border border-gray-100"
                        >
                            <div className="flex flex-col md:flex-row gap-8 md:items-start">
                                <div className="w-16 h-16 bg-[#2F4F4F]/10 rounded-2xl flex items-center justify-center shrink-0">
                                    {item.icon}
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                                    <p className="text-[#2F4F4F] font-medium mb-6">{item.summary}</p>
                                    <ul className="space-y-4">
                                        {item.content.map((point, idx) => (
                                            <li key={idx} className="flex items-start text-gray-600 leading-relaxed">
                                                <div className="w-1.5 h-1.5 bg-[#2F4F4F] rounded-full mt-2.5 mr-3 shrink-0"></div>
                                                <span>{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 bg-[#1D1D1F] rounded-[2.5rem] p-12 text-center text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#2F4F4F]/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                    <div className="relative z-10">
                        <h3 className="text-3xl font-bold mb-6">¿Busca asesoramiento personalizado?</h3>
                        <p className="text-gray-400 max-w-2xl mx-auto mb-8">
                            Analicemos juntos su propiedad o proyecto de inversión con datos reales y una estrategia a medida.
                        </p>
                        <Link to="/#contact" className="inline-block bg-white text-[#1D1D1F] px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors">
                            Solicitar Tasación
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default MarketAnalysis;
