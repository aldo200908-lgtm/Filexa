import { useState } from 'react'

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
  const [category, setCategory] = useState('Todas')

  const categories = ['Todas', 'APK', 'Juegos', 'Programas']

  const filteredApps =
    category === 'Todas'
      ? apps
      : apps.filter(app => app.category === category)

  return (
    <section
      style={{
        padding: '60px 40px',
        background: '#050b1a',
        color: '#ffffff'
      }}
    >
      <h2 style={{ color: '#00b3ff', marginBottom: '20px' }}>
        Apps destacadas
      </h2>

      {/* BOTONES DE CATEGORÍA */}
      <div style={{ display: 'flex', gap: '12px', marginBottom: '32px' }}>
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            style={{
              background: category === cat ? '#00b3ff' : 'transparent',
              color: category === cat ? '#000' : '#00b3ff',
              border: '1px solid #00b3ff',
              padding: '8px 14px',
              borderRadius: '20px',
              cursor: 'pointer'
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* GRID */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '24px'
        }}
      >
        {filteredApps.map(app => (
          <div
            key={app.id}
            style={{
              background: '#0b1d3a',
              borderRadius: '16px',
              padding: '20px',
              border: '1px solid #102a52'
            }}
          >
            <small style={{ color: '#00b3ff' }}>{app.category}</small>
            <h3 style={{ margin: '10px 0' }}>{app.title}</h3>
            <p style={{ color: '#bcdcff' }}>{app.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
