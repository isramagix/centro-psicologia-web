import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section con diseño más dinámico */}
      <section className="relative bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 py-24 relative">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block bg-primary/10 text-primary px-6 py-2 rounded-full text-sm font-semibold mb-6">
              ✨ Centro de Psicología Profesional
            </span>

            <h1 className="text-6xl md:text-7xl font-bold text-textPrimary mb-6 leading-tight">
              Tu bienestar es nuestra
              <span className="text-primary"> prioridad</span>
            </h1>

            <p className="text-textSecondary text-xl md:text-2xl mb-10 leading-relaxed max-w-3xl mx-auto">
              Acompañamiento profesional y personalizado para tu salud
              emocional. Un espacio seguro donde encontrar equilibrio y
              crecimiento personal.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contacto"
                className="bg-primary hover:bg-primary-dark text-white px-10 py-5 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition duration-300 transform hover:-translate-y-1"
              >
                Agendar primera cita
              </Link>
              <Link
                to="/servicios"
                className="bg-surface hover:bg-gray-50 text-textPrimary border-2 border-border hover:border-primary px-10 py-5 rounded-full font-semibold text-lg shadow-lg transition duration-300"
              >
                Ver servicios
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Servicios Destacados */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-textPrimary mb-4">
            Nuestros servicios
          </h2>
          <p className="text-textSecondary text-xl max-w-2xl mx-auto">
            Terapias especializadas adaptadas a tus necesidades
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div className="bg-surface p-8 rounded-2xl shadow-lg border border-border hover:shadow-2xl hover:-translate-y-2 transition duration-300 group">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-light rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition duration-300">
              <span className="text-4xl">💜</span>
            </div>
            <h3 className="text-2xl font-semibold text-textPrimary mb-3">
              Psicología Clínica y de la Salud
            </h3>
            <p className="text-textSecondary mb-6 leading-relaxed">
              Evaluación y diagnóstico, tratamiento psicológico y promoción del bienestar emocional
            </p>
            <Link
              to="/servicios"
              className="text-primary font-semibold hover:text-primary-dark transition flex items-center gap-2"
            >
              Conoce más <span>→</span>
            </Link>
          </div>

          <div className="bg-surface p-8 rounded-2xl shadow-lg border border-border hover:shadow-2xl hover:-translate-y-2 transition duration-300 group">
            <div className="w-16 h-16 bg-gradient-to-br from-secondary to-secondary-light rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition duration-300">
              <span className="text-4xl">💕</span>
            </div>
            <h3 className="text-2xl font-semibold text-textPrimary mb-3">
              Terapia de Pareja
            </h3>
            <p className="text-textSecondary mb-6 leading-relaxed">
              Fortalece tu relación mejorando la comunicación y resolviendo
              conflictos de manera saludable.
            </p>
            <Link
              to="/servicios"
              className="text-secondary font-semibold hover:text-secondary-dark transition flex items-center gap-2"
            >
              Conoce más <span>→</span>
            </Link>
          </div>

          <div className="bg-surface p-8 rounded-2xl shadow-lg border border-border hover:shadow-2xl hover:-translate-y-2 transition duration-300 group">
            <div className="w-16 h-16 bg-gradient-to-br from-accent to-orange-200 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition duration-300">
              <span className="text-4xl">🧓</span>
            </div>
            <h3 className="text-2xl font-semibold text-textPrimary mb-3">
              Psicogerontología
            </h3>
            <p className="text-textSecondary mb-6 leading-relaxed">
            Atención psicológica a personas mayores promoviendo autonomía, envejecimiento activo y apoyo familiar continuo.
            </p>
            <Link
              to="/servicios"
              className="text-accent font-semibold hover:text-orange-700 transition flex items-center gap-2"
            >
              Conoce más <span>→</span>
            </Link>
          </div>

          <div className="bg-surface p-8 rounded-2xl shadow-lg border border-border hover:shadow-2xl hover:-translate-y-2 transition duration-300 group">
            <div className="w-16 h-16 bg-gradient-to-br from-accent to-orange-200 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition duration-300">
              <span className="text-4xl">🧠</span>
            </div>
            <h3 className="text-2xl font-semibold text-textPrimary mb-3">
            Ansiedad, Depresión y Procesos de aprendizaje
            </h3>
            <p className="text-textSecondary mb-6 leading-relaxed">
            Intervenciones terapéuticas para manejar la ansiedad, superar la depresión y mejorar los procesos de aprendizaje.
            </p>
            <Link
              to="/servicios"
              className="text-accent font-semibold hover:text-orange-700 transition flex items-center gap-2"
            >
              Conoce más <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Sección ¿Por qué elegirnos? */}
      <section className="bg-gradient-to-br from-primary/5 to-secondary/5 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-textPrimary mb-6">
                  ¿Por qué elegirnos?
                </h2>
                <p className="text-textSecondary text-lg mb-8 leading-relaxed">
                  Somos un equipo de profesionales comprometidos con tu
                  bienestar emocional, ofreciendo un enfoque personalizado y
                  basado en evidencia científica.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">✓</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-textPrimary mb-1">
                        Profesionales experimentados
                      </h4>
                      <p className="text-textSecondary">
                        Equipo multidisciplinar con amplia trayectoria en
                        psicología clínica
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">✓</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-textPrimary mb-1">
                        Atención personalizada
                      </h4>
                      <p className="text-textSecondary">
                        Cada persona es única, adaptamos nuestro enfoque a tus
                        necesidades
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">✓</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-textPrimary mb-1">
                        Ambiente acogedor
                      </h4>
                      <p className="text-textSecondary">
                        Un espacio seguro y confidencial donde sentirte cómodo/a
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="bg-surface rounded-3xl shadow-2xl p-12 border border-border">
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full mb-4">
                      <span className="text-4xl">🌟</span>
                    </div>
                    <h3 className="text-2xl font-bold text-textPrimary mb-2">
                      Reserva tu primera consulta
                    </h3>
                  </div>

                  <Link
                    to="/contacto"
                    className="block w-full bg-gradient-to-r from-primary to-secondary hover:from-primary-dark hover:to-secondary-dark text-white text-center px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1"
                  >
                    Solicitar cita ahora
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Testimonios */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-textPrimary mb-4">
            Lo que dicen nuestros pacientes
          </h2>
          <p className="text-textSecondary text-xl max-w-2xl mx-auto">
            Tu confianza es nuestro mayor logro
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-surface p-8 rounded-2xl shadow-lg border border-border">
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-xl">
                  ★
                </span>
              ))}
            </div>
            <p className="text-textSecondary mb-6 italic leading-relaxed">
              "Encontré un espacio seguro donde pude expresarme sin juicios. La
              terapia me ayudó a recuperar mi confianza y autoestima."
            </p>
            <p className="text-textPrimary font-semibold">María L.</p>
            <p className="text-textSecondary text-sm">Terapia individual</p>
          </div>

          <div className="bg-surface p-8 rounded-2xl shadow-lg border border-border">
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-xl">
                  ★
                </span>
              ))}
            </div>
            <p className="text-textSecondary mb-6 italic leading-relaxed">
              "Profesionales muy cercanos y empáticos. Nos ayudaron a mejorar
              nuestra comunicación y fortalecer nuestra relación."
            </p>
            <p className="text-textPrimary font-semibold">Carlos y Ana</p>
            <p className="text-textSecondary text-sm">Terapia de pareja</p>
          </div>

          <div className="bg-surface p-8 rounded-2xl shadow-lg border border-border">
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-xl">
                  ★
                </span>
              ))}
            </div>
            <p className="text-textSecondary mb-6 italic leading-relaxed">
              "El equipo nos brindó un apoyo invaluable durante el proceso de
              envejecimiento de mi padre. Gracias a ellos, ha mejorado su calidad
              de vida."
            </p>
            <p className="text-textPrimary font-semibold">Familia García</p>
            <p className="text-textSecondary text-sm"> Psicogerontología</p>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-gradient-to-r from-primary to-secondary py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Da el primer paso hacia tu bienestar
          </h2>
          <p className="text-white/90 text-xl mb-8 max-w-2xl mx-auto">
            Estamos aquí para acompañarte en tu proceso de cambio y crecimiento
            personal
          </p>
          <Link
            to="/contacto"
            className="inline-block bg-white hover:bg-gray-100 text-primary px-10 py-5 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition duration-300 transform hover:-translate-y-1"
          >
            Contáctanos ahora
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
