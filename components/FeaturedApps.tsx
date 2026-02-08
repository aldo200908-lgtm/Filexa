import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const apps = [
  {
    id: 1,
    title: 'Spotify Premium',
    description: 'APK modificado sin anuncios',
    category: 'APK',
    slug: 'spotify-premium'
  },
  {
    id: 2,
    title: 'Minecraft',
    description: 'Juego completo',
    category: 'Juegos',
    slug: 'minecraft'
  },
  {
    id: 3,
    title: 'Photoshop',
    description: 'Software profesional',
    category: 'Programas',
    slug: 'photoshop'
  }
]

const categories = ['Todas', 'APK', 'Juegos', 'Programas']

export default function FeaturedApps() {
  const [category, setCategory] = useState('Todas')
  const navigate = useNavigate()

  const filteredApps =
    category === 'Todas'
      ? apps
      : apps.filter(app => app.category === category)

  return (
    <div>
      {/* Categorías */}
      <div style={{ marginBottom: '30px' }}>
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            style={{
              marginRight: '10px',
              marginBottom: '10px',
              padding: '8px 14px',
              borderRadius: '20px',
              border: 'none',
              background:
                category === cat ? '#00b3ff' : '#0b1d3a',
              color: category === cat ? '#000' : '#fff',
              cursor: 'pointer'
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
          gap: '20px'
        }}
      >
        {filteredApps.map(app => (
          <div
            key={app.id}
            onClick={() => navigate(`/app/${app.slug}`)}
            style={{
              background: '#0b1d3a',
              borderRadius: '16px',
              padding: '20px',
              cursor: 'pointer',
              transition: '0.3s',
              color: '#fff'
            }}
            onMouseEnter={e =>
              (e.currentTarget.style.boxShadow =
                '0 0 20px #00b3ff')
            }
            onMouseLeave={e =>
              (e.currentTarget.style.boxShadow = 'none')
            }
          >
            <small style={{ color: '#00b3ff' }}>
              {app.category}
            </small>

            <h3 style={{ margin: '10px 0' }}>
              {app.title}
            </h3>

            <p style={{ fontSize: '14px', opacity: 0.8 }}>
              {app.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
