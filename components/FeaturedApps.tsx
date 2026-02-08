import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const apps = [
  {
    id: 1,
    title: 'Spotify Premium',
    description: 'APK modificado sin anuncios',
    category: 'APK',
    slug: 'spotify-premium',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg',
    image: 'https://i.imgur.com/8Km9tLL.jpg'
  },
  {
    id: 2,
    title: 'Minecraft',
    description: 'Juego completo',
    category: 'Juegos',
    slug: 'minecraft',
    logo: 'https://upload.wikimedia.org/wikipedia/en/5/51/Minecraft_cover.png',
    image: 'https://i.imgur.com/Z7AzH2c.jpg'
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
    borderRadius: '18px',
    overflow: 'hidden',
    cursor: 'pointer',
    transition: '0.3s',
    boxShadow: '0 0 0 transparent'
  }}
  onMouseEnter={e =>
    (e.currentTarget.style.boxShadow =
      '0 0 25px rgba(0,179,255,0.6)')
  }
  onMouseLeave={e =>
    (e.currentTarget.style.boxShadow = '0 0 0 transparent')
  }
>
  {/* Imagen */}
  <img
    src={app.image}
    alt={app.title}
    style={{
      width: '100%',
      height: '140px',
      objectFit: 'cover'
    }}
  />

  {/* Contenido */}
  <div style={{ padding: '16px', color: '#fff' }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <img
        src={app.logo}
        alt="logo"
        style={{
          width: '36px',
          height: '36px',
          borderRadius: '50%'
        }}
      />
      <h3 style={{ margin: 0 }}>{app.title}</h3>
    </div>

    <p style={{ fontSize: '14px', opacity: 0.8, marginTop: '8px' }}>
      {app.description}
    </p>
  </div>
</div>
  )
}
