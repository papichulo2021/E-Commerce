import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'

import './App.css'

function App() {

  return (
    <>
      <Header />
      <main>
        <Container className='py-3'>
          <h1>Welcomer To Proshop</h1>
        </Container>
      </main>
      <Footer />
    </>
  )
}

export default App
