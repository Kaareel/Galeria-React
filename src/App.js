import Header from './Header';
import Cartas from './Cartas';
import Footer from './footer';
import './App.css';

const gato = 'https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_960_720.jpg'
const lobo = 'https://media.istockphoto.com/photos/grey-wolf-with-a-black-background-picture-id1362862791?k=20&m=1362862791&s=612x612&w=0&h=WEbpo7YJ24KjuURjqiJqjJdanRVdKF4E-9JTK9h9DrA='
const ciervo = 'https://cdn.pixabay.com/photo/2017/08/12/17/11/roe-deer-2634729_960_720.jpg'

function App() {
  return (
    <div className="container">
       <Header title='galeria de imagenes con react'/>

       <div className='cartas'>
        <Cartas img={gato} nombre="Gato" description="Omnivero" alt="gato" />
        <Cartas img={lobo} nombre="Lobo" description="Carnivoro" alt="lobo"/>
        <Cartas img={ciervo} nombre="Ciervo" description="Herviboro" alt="ciervo"/>
      </div>

      <Footer text="Todos los derechos reservados"/>
    
    </div>
  );
}

export default App;
