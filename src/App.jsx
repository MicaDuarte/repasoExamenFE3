
import './App.css'
import Card from './components/card.jsx';

function App() {

let x = false;
  return (
    <>
     
      <h1>Primer proyecto con react</h1>
      <h3> Hola {x ?'carlos' : 'micaela'}</h3>
      <form></form>
      <Card />
    </>
  )
}

export default App
