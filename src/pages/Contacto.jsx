function Contacto() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-accent/10 to-secondary/10 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-textPrimary text-center mb-4">
            Contáctanos
          </h1>
          <p className="text-textSecondary text-xl text-center max-w-2xl mx-auto">
            Estamos aquí para ayudarte. Agenda tu primera cita o resuelve tus
            dudas
          </p>
        </div>
      </div>

      {/* Contact Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-surface p-8 rounded-2xl shadow-lg border border-border">
            <h2 className="text-2xl font-semibold text-textPrimary mb-6">
              Envíanos un mensaje
            </h2>
            <form className="space-y-5">
              <div>
                <label className="block text-textPrimary font-medium mb-2">
                  Nombre completo
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label className="block text-textPrimary font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label className="block text-textPrimary font-medium mb-2">
                  Teléfono
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 rounded-lg border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
                  placeholder="+34 600 000 000"
                />
              </div>

              <div>
                <label className="block text-textPrimary font-medium mb-2">
                  Motivo de consulta
                </label>
                <select className="w-full px-4 py-3 rounded-lg border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition">
                  <option>Selecciona una opción</option>
                  <option>Terapia Individual</option>
                  <option>Terapia de Pareja</option>
                  <option>Terapia Familiar</option>
                  <option>Terapia Infantil</option>
                  <option>Otra consulta</option>
                </select>
              </div>

              <div>
                <label className="block text-textPrimary font-medium mb-2">
                  Mensaje
                </label>
                <textarea
                  rows="4"
                  className="w-full px-4 py-3 rounded-lg border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition resize-none"
                  placeholder="Cuéntanos brevemente cómo podemos ayudarte..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary-dark text-white py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1"
              >
                Enviar mensaje
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <div className="bg-surface p-8 rounded-2xl shadow-lg border border-border">
              <h3 className="text-2xl font-semibold text-textPrimary mb-6">
                Información de contacto
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">📍</div>
                  <div>
                    <h4 className="font-semibold text-textPrimary mb-1">
                      Dirección
                    </h4>
                    <p className="text-textSecondary">
                      Calle Principal 123
                      <br />
                      28001 Madrid, España
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-3xl">📞</div>
                  <div>
                    <h4 className="font-semibold text-textPrimary mb-1">
                      Teléfono
                    </h4>
                    <p className="text-textSecondary">+34 912 345 678</p>
                    <p className="text-textSecondary">+34 600 123 456</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-3xl">📧</div>
                  <div>
                    <h4 className="font-semibold text-textPrimary mb-1">
                      Email
                    </h4>
                    <p className="text-textSecondary">
                      info@armoniapsicologia.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-3xl">🕐</div>
                  <div>
                    <h4 className="font-semibold text-textPrimary mb-1">
                      Horario
                    </h4>
                    <p className="text-textSecondary">
                      Lunes a Viernes: 9:00 - 20:00
                      <br />
                      Sábados: 10:00 - 14:00
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="bg-secondary/10 p-6 rounded-2xl border border-secondary/20">
              <h4 className="font-semibold text-textPrimary mb-2 flex items-center gap-2">
                <span className="text-2xl">🆘</span>
                En caso de emergencia
              </h4>
              <p className="text-textSecondary text-sm mb-3">
                Si necesitas ayuda inmediata, por favor contacta:
              </p>
              <p className="text-textPrimary font-semibold">
                Teléfono de urgencias: 112
              </p>
              <p className="text-textPrimary font-semibold">
                Teléfono de la Esperanza: 717 003 717
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacto;
