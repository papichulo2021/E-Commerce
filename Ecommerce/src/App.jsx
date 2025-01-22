import { Container } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import './App.css'

function App() {

  return (
    <>
      <Header />
      <main>
        <Container className='py-3'>
          <Outlet />
        </Container>
      </main>
      <Footer />
    </>
  )
}

export default App
