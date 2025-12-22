function Servicios() {
  const servicios = [
    {
      titulo: "Terapia Individual",
      descripcion:
        "Sesiones personalizadas para abordar tus necesidades específicas de salud mental",
      icon: "💜",
      detalles: [
        "Ansiedad y estrés",
        "Depresión",
        "Autoestima",
        "Crecimiento personal", 
      ],
    },
    {
      titulo: "Terapia de Pareja",
      descripcion:
        "Fortalece tu relación y mejora la comunicación con tu pareja",
      icon: "💕",
      detalles: [
        "Comunicación efectiva",
        "Resolución de conflictos",
        "Intimidad emocional",
        "Crisis de pareja",
      ],
    },
    {
      titulo: "Terapia Infanto-Juvenil",
      descripcion: "Mejora los vínculos y la dinámica familiar",
      icon: "🧒",
      detalles: [
        "Evalución emocional",
        "Dificultades de aprendizaje",
        "Regulación conductual",
        "Apoyo socioemocional",
      ],
    },
    {
      titulo: "Terapia  en personas mayoress",
      descripcion: "Apoyo especializado para afrontar los desafíos de la tercera edad",
      icon: "🧓",
      detalles: ["Autonomía", "Envejecimiento activo", "Apoyo familiar", "Bienestar emocional"],
    },
    {
      titulo: "Mindfulness y Meditación",
      descripcion: "Técnicas de atención plena para reducir el estrés",
      icon: "🧘",
      detalles: [
        "Reducción de estrés",
        "Atención plena",
        "Relajación",
        "Bienestar emocional",
      ],
    },
    
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-textPrimary text-center mb-4">
            Servicios Terapéuticos
          </h1>
          <p className="text-textSecondary text-xl text-center max-w-2xl mx-auto">
            Ofrecemos una amplia gama de servicios especializados para tu
            bienestar emocional
          </p>
        </div>
      </div>

      {/* Servicios Grid */}
      <div className="container mx-auto px-4 py-16">
        {/* Primera fila: 3 tarjetas */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-8">
          {servicios.slice(0, 3).map((servicio, index) => (
            <div
              key={index}
              className="bg-surface p-8 rounded-2xl shadow-lg border border-border hover:shadow-2xl hover:-translate-y-2 transition duration-300"
            >
              <div className="text-5xl mb-4">{servicio.icon}</div>
              <h3 className="text-2xl font-semibold text-textPrimary mb-3">
                {servicio.titulo}
              </h3>
              <p className="text-textSecondary mb-6">{servicio.descripcion}</p>
              <ul className="space-y-2">
                {servicio.detalles.map((detalle, idx) => (
                  <li
                    key={idx}
                    className="text-textSecondary flex items-center"
                  >
                    <span className="text-primary mr-2">✓</span>
                    {detalle}
                  </li>
                ))}
              </ul>
              <button className="mt-6 w-full bg-primary/10 hover:bg-primary hover:text-white text-primary font-semibold py-3 rounded-lg transition duration-300">
                Más información
              </button>
            </div>
          ))}
        </div>

        {/* Segunda fila: 2 tarjetas centradas */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {servicios.slice(3, 5).map((servicio, index) => (
            <div
              key={index + 3}
              className="bg-surface p-8 rounded-2xl shadow-lg border border-border hover:shadow-2xl hover:-translate-y-2 transition duration-300"
            >
              <div className="text-5xl mb-4">{servicio.icon}</div>
              <h3 className="text-2xl font-semibold text-textPrimary mb-3">
                {servicio.titulo}
              </h3>
              <p className="text-textSecondary mb-6">{servicio.descripcion}</p>
              <ul className="space-y-2">
                {servicio.detalles.map((detalle, idx) => (
                  <li
                    key={idx}
                    className="text-textSecondary flex items-center"
                  >
                    <span className="text-primary mr-2">✓</span>
                    {detalle}
                  </li>
                ))}
              </ul>
              <button className="mt-6 w-full bg-primary/10 hover:bg-primary hover:text-white text-primary font-semibold py-3 rounded-lg transition duration-300">
                Más información
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Servicios;
