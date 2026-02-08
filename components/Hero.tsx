export default function Hero() {
  return (
    <section
      style={{
        minHeight: '70vh',
        background:
          'radial-gradient(circle at top, #0b1d3a 0%, #050b1a 60%)',
        color: '#ffffff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '40px'
      }}
    >
      <div style={{ maxWidth: '720px' }}>
        <h1
          style={{
            fontSize: '3rem',
            fontWeight: '800',
            color: '#00b3ff',
            marginBottom: '20px'
          }}
        >
          Filexa
        </h1>

        <p
          style={{
            fontSize: '1.2rem',
            color: '#bcdcff',
            marginBottom: '32px',
            lineHeight: 1.6
          }}
        >
          Comunidad para descubrir, compartir y recomendar
          <br />
          <strong>APK, juegos y software</strong>
        </p>

        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
          <button
            style={{
              background: '#00b3ff',
              color: '#000',
              border: 'none',
              padding: '14px 22px',
              borderRadius: '10px',
              fontWeight: '600',
              cursor: 'pointer'
            }}
          >
            Explorar apps
          </button>

          <button
            style={{
              background: 'transparent',
              color: '#00b3ff',
              border: '1px solid #00b3ff',
              padding: '14px 22px',
              borderRadius: '10px',
              fontWeight: '600',
              cursor: 'pointer'
            }}
          >
            Unirme a la comunidad
          </button>
        </div>
      </div>
    </section>
  )
}
