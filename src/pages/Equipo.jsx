function Equipo() {
  const miembros = [
    {
      nombre: "Dra. María González",
      especialidad: "Psicóloga Clínica",
      foto: "👩‍⚕️",
      descripcion:
        "Especialista en terapia cognitivo-conductual con 15 años de experiencia",
      educacion: [
        "Doctorado en Psicología Clínica",
        "Máster en Terapia Familiar",
      ],
      areas: ["Ansiedad", "Depresión", "Terapia de pareja"],
    },
    {
      nombre: "Dr. Carlos Ramírez",
      especialidad: "Psicólogo Infantil",
      foto: "👨‍⚕️",
      descripcion: "Experto en desarrollo infantil y terapia de juego",
      educacion: [
        "Licenciatura en Psicología",
        "Especialización en Psicología Infantil",
      ],
      areas: ["Terapia infantil", "TDAH", "Desarrollo emocional"],
    },
    {
      nombre: "Lic. Ana Martínez",
      especialidad: "Terapeuta Familiar",
      foto: "👩‍🏫",
      descripcion:
        "Especializada en dinámica familiar y resolución de conflictos",
      educacion: [
        "Máster en Terapia Familiar Sistémica",
        "Certificación en Mediación",
      ],
      areas: ["Terapia familiar", "Mediación", "Crianza positiva"],
    },
    {
      nombre: "Dr. Luis Herrera",
      especialidad: "Psicoterapeuta",
      foto: "👨‍💼",
      descripcion: "Enfoque humanista e integrador en psicoterapia",
      educacion: ["Doctorado en Psicoterapia", "Certificación en Mindfulness"],
      areas: ["Desarrollo personal", "Mindfulness", "Estrés laboral"],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-secondary/10 to-primary/10 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-textPrimary text-center mb-4">
            Nuestro Equipo
          </h1>
          <p className="text-textSecondary text-xl text-center max-w-2xl mx-auto">
            Profesionales comprometidos con tu bienestar emocional
          </p>
        </div>
      </div>

      {/* Equipo Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {miembros.map((miembro, index) => (
            <div
              key={index}
              className="bg-surface p-8 rounded-2xl shadow-lg border border-border hover:shadow-2xl transition duration-300"
            >
              <div className="flex items-start gap-6">
                <div className="text-6xl flex-shrink-0">{miembro.foto}</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-textPrimary mb-1">
                    {miembro.nombre}
                  </h3>
                  <p className="text-primary font-medium mb-3">
                    {miembro.especialidad}
                  </p>
                  <p className="text-textSecondary mb-4">
                    {miembro.descripcion}
                  </p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-textPrimary mb-2">
                      Formación:
                    </h4>
                    <ul className="space-y-1">
                      {miembro.educacion.map((edu, idx) => (
                        <li
                          key={idx}
                          className="text-textSecondary text-sm flex items-start"
                        >
                          <span className="text-secondary mr-2">•</span>
                          {edu}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-textPrimary mb-2">
                      Áreas de especialización:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {miembro.areas.map((area, idx) => (
                        <span
                          key={idx}
                          className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-primary/5 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-textPrimary mb-4">
            ¿Listo para comenzar tu proceso?
          </h2>
          <p className="text-textSecondary text-lg mb-8 max-w-2xl mx-auto">
            Nuestro equipo está aquí para acompañarte en cada paso de tu camino
            hacia el bienestar
          </p>
          <button className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
            Agendar cita
          </button>
        </div>
      </div>
    </div>
  );
}

export default Equipo;
