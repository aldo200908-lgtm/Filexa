import { useParams, Link } from 'react-router-dom'

const apps = [
  {
    slug: 'spotify-premium',
    title: 'Spotify Premium',
    description: 'APK modificado sin anuncios',
    category: 'APK'
  },
  {
    slug: 'minecraft',
    title: 'Minecraft',
    description: 'Juego completo con todas las funciones',
    category: 'Juegos'
  },
  {
    slug: 'photoshop',
    title: 'Photoshop',
    description: 'Software profesional para edición',
    category: 'Programas'
  }
]

export default function AppDetail() {
  const { slug } = useParams<{ slug: string }>()

  const app = apps.find(a => a.slug === slug)

  if (!app) {
    return (
      <div
        style={{
          minHeight: '100vh',
          background: '#050b1a',
          color: '#fff',
          padding: '40px'
        }}
      >
        <h2>App no encontrada</h2>
        <Link to="/" style={{ color: '#00b3ff' }}>
          Volver
        </Link>
      </div>
    )
  }

  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#050b1a',
        color: '#fff',
        padding: '60px 40px'
      }}
    >
      <Link to="/" style={{ color: '#00b3ff' }}>
        ← Volver
      </Link>

      <p style={{ color: '#00b3ff', marginTop: '20px' }}>
        {app.category}
      </p>

      <h1 style={{ margin: '12px 0' }}>{app.title}</h1>

      <p style={{ maxWidth: '600px', opacity: 0.9 }}>
        {app.description}
      </p>

      <button
        style={{
          marginTop: '30px',
          padding: '14px 24px',
          borderRadius: '12px',
          border: 'none',
          background: '#00b3ff',
          color: '#000',
          fontWeight: 600,
          cursor: 'pointer'
        }}
      >
        Descargar
      </button>
    </div>
  )
}
