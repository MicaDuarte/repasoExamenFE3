import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import Card from './components/Card';
import ErrorMessage from './components/ErrorMessage';

function App() {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [error, setError] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validateInputs = () => {
    if (input1.length < 3 || input1.trim().length < input1.length) {
      return false;
    }
    if (input2.length < 6) {
      return false;
    }
    return true;
  };

  const handleSubmit = () => {
    if (!validateInputs()) {
      setError(true);
      setSubmitted(false);
      return;
    }
    setError(false);
    setSubmitted(true);
  };
let x = false;
  return (
    <>
      <div className="body">
      <h1 className='titulo'>Primer proyecto con React</h1>
      <h3>Hola, soy {x ? 'Carlos' : 'Micaela'} y este es mi examen de FE3</h3>
      <Form
        input1={input1}
        input2={input2}
        setInput1={setInput1}
        setInput2={setInput2}
        handleSubmit={handleSubmit}
      />
      {error && <ErrorMessage message="Por favor chequea que la información sea correcta" />}
      {submitted && !error && <Card input1={input1} input2={input2} />}
      </div>
    </>
  );
}

export default App;
