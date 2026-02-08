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
    transition: 'all 0.25s ease',
    cursor: 'pointer',
    boxShadow: '0 0 0 rgba(0,179,255,0)'
  }}
  onMouseEnter={e => {
    e.currentTarget.style.transform = 'translateY(-6px)'
    e.currentTarget.style.boxShadow =
      '0 0 20px rgba(0,179,255,0.35)'
  }}
  onMouseLeave={e => {
    e.currentTarget.style.transform = 'translateY(0)'
    e.currentTarget.style.boxShadow = '0 0 0 rgba(0,179,255,0)'
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
