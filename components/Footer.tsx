export default function Footer() {
  return (
    <footer
      style={{
        marginTop: '40px',
        padding: '20px',
        background: '#050b1a',
        color: '#7aaedb',
        textAlign: 'center',
        fontSize: '0.9rem'
      }}
    >
      © {new Date().getFullYear()} Filexa · Comunidad APK & Software
    </footer>
  )
}
