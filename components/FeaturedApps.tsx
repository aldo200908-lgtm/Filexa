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
  const [search, setSearch] = useState('')

  const categories = ['Todas', 'APK', 'Juegos', 'Programas']

  const filteredApps = apps.filter(app => {
    const matchesCategory =
      category === 'Todas' || app.category === category

    const matchesSearch = app.title
      .toLowerCase()
      .includes(search.toLowerCase())

    return matchesCategory && matchesSearch
  })

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
          marginBottom: '20px',
          color: '#00b3ff'
        }}
      >
        Apps destacadas
      </h2>

      {/* CATEGORÍAS */}
      <div style={{ display: 'flex', gap: '12px', marginBottom: '20px' }}>
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
              cursor: 'pointer',
              fontSize: '0.85rem'
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* BUSCADOR */}
      <input
        type="text"
        placeholder="Buscar apps..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        style={{
          width: '100%',
          maxWidth: '360px',
          marginBottom: '32px',
          padding: '10px 14px',
          borderRadius: '10px',
          border: '1px solid #102a52',
          background: '#050b1a',
          color: '#ffffff'
        }}
      />

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
              e.currentTarget.style.boxShadow =
                '0 0 0 rgba(0,179,255,0)'
            }}
          >
            <small
              style={{
                color: '#00b3ff',
                textTransform: 'uppercase',
                fontSize: '0.75rem'
              }}
            >
              {app.category}
            </small>

            <h3 style={{ margin: '10px 0' }}>{app.title}</h3>

            <p style={{ color: '#bcdcff', fontSize: '0.95rem' }}>
              {app.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
