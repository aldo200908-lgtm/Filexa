import FeaturedApps from '../components/FeaturedApps'

export default function Home() {
  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#050b1a',
        padding: '40px'
      }}
    >
      <h1 style={{ color: '#00b3ff', marginBottom: '30px' }}>
        Filexa
      </h1>

      <FeaturedApps />
    </div>
  )
}
