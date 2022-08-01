import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container } from 'react-bootstrap';
import Charts from './components/Charts';

function App() {
  return (
    <div className="App">
      <Navbar className='navbar'>
        <Container>
        <img src={require('./assets/logo.png')} height="30" className="d-inline-block align-top" alt="Igift Logo"/>
        </Container>
      </Navbar>
      <Charts />
    </div>
  );
}

export default App;
