export default function AppCard() {
  return (
    <div
      style={{
        background: '#050b1a',
        border: '1px solid #0b1d3a',
        borderRadius: '12px',
        padding: '20px',
        margin: '20px',
        color: '#ffffff'
      }}
    >
      <h3>App de prueba</h3>
      <p>APK / Programa / Juego</p>
      <button
        style={{
          marginTop: '10px',
          background: '#00b3ff',
          color: '#000',
          border: 'none',
          padding: '10px 16px',
          borderRadius: '8px',
          cursor: 'pointer'
        }}
      >
        Descargar
      </button>
    </div>
  )
}
