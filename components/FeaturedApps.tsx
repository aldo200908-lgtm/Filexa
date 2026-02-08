type App = {
  id: number
  title: string
  description: string
  category: string
}

const apps: App[] = [
  {
    id: 1,
    title: 'Spotify Premium',
    description: 'APK modificado sin anuncios',
    category: 'APK'
  },
  {
    id: 2,
    title: 'Minecraft',
    description: 'Juego completo con todas las funciones',
    category: 'Juegos'
  },
  {
    id: 3,
    title: 'Photoshop',
    description: 'Software profesional para edición',
    category: 'Programas'
  },
  {
    id: 4,
    title: 'Netflix Mod',
    description: 'Contenido desbloqueado',
    category: 'APK'
  }
]

export default function FeaturedApps() {
  return (
    <section
      style={{
        padding: '60px 40px',
        background: '#050b1a',
        color: '#ffffff'
      }}
    >
      <h2
        style={{
          fontSize: '2rem',
          marginBottom: '32px',
          color: '#00b3ff'
        }}
      >
        Apps destacadas
      </h2>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '24px'
        }}
      >
        {apps.map(app => (
          <div
            key={app.id}
            style={{
              background: '#0b1d3a',
              borderRadius: '16px',
              padding: '20px',
              border: '1px solid #102a52',
              transition: 'transform 0.2s ease'
            }}
          >
            <span
              style={{
                fontSize: '0.75rem',
                color: '#00b3ff',
                textTransform: 'uppercase'
              }}
            >
              {app.category}
            </span>

            <h3 style={{ margin: '12px 0 8px' }}>{app.title}</h3>

            <p style={{ color: '#bcdcff', fontSize: '0.95rem' }}>
              {app.description}
            </p>

            <button
              style={{
                marginTop: '16px',
                background: '#00b3ff',
                color: '#000',
                border: 'none',
                padding: '10px 14px',
                borderRadius: '8px',
                fontWeight: '600',
                cursor: 'pointer'
              }}
            >
              Ver detalles
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}
