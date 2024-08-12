
import './App.css'
import Componente from './componente';

function App() {

let x = false;
  return (
    <>
     
      <h1>Primer proyecto con react</h1>
      <h3> Hola {x ?'carlos' : 'micaela'}</h3>

      <Componente/>
    </>
  )
}

export default App
