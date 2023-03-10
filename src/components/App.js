import { useState } from "react";
import "../styles/App.scss";

function App() {
  const [numberOfErrors, setNumberOfErrors] = useState(0);
  const [lastLetter, setLastLetter] = useState("");
  const [error, setError] = useState("");
  const [word, setWord] = useState("katakroker");
  const [userLetters, setUserLetters] = useState([]);

  const handleInput = (ev) => {
    const esValido = /^[a-zA-Z\s]*$/.test(ev.target.value);
    if (esValido) {
      setLastLetter(ev.target.value);
      if (ev.target.value !== "") {
        userLetters.push(ev.target.value);
        setUserLetters([...userLetters]);
        setError("");
      }
    } else {
      setLastLetter("");
      setError("El valor ingresado no es válido");
    }
  };

  const getNumberError = () => {
    return userLetters.filter((letter) => {
      if (word.includes(letter) ? "" : letter) return letter;
    }).length;
  };

  console.log(getNumberError());

  const renderSolutionLetters = () => {
    const wordLetters = word.split("");
    return wordLetters.map((letter, index) => (
      <li key={index} className='letter'>
        {userLetters.includes(letter) ? letter : ""}
      </li>
    ));
  };

  const renderErrorLetters = () => {
    return userLetters
      .filter((letter) => {
        if (word.includes(letter) ? "" : letter) return letter;
      })
      .map((letter, index) => {
        return (
          <li key={index} className='letter'>
            {letter}
          </li>
        );
      });
  };

  return (
    <div className='page'>
      <header>
        <h1 className='header__title'>Juego del ahorcado</h1>
      </header>
      <main className='main'>
        <section>
          <div className='solution'>
            <h2 className='title'>Solución:</h2>

            <ul className='letters'> {renderSolutionLetters()} </ul>
          </div>
          <div className='error'>
            <h2 className='title'>Letras falladas:</h2>
            <ul className='letters'> {renderErrorLetters()}</ul>
          </div>
          <form className='form'>
            <label className='title' htmlFor='last-letter'>
              Escribe una letra:
            </label>
            <input
              autoComplete='off'
              className='form__input'
              maxLength='1'
              type='text'
              name='last-letter'
              id='last-letter'
              value={lastLetter}
              onChange={handleInput}
            />
          </form>
          <p>{error}</p>
        </section>
        <section className={`dummy error-${getNumberError()}`}>
          <span className='error-13 eye'></span>
          <span className='error-12 eye'></span>
          <span className='error-11 line'></span>
          <span className='error-10 line'></span>
          <span className='error-9 line'></span>
          <span className='error-8 line'></span>
          <span className='error-7 line'></span>
          <span className='error-6 head'></span>
          <span className='error-5 line'></span>
          <span className='error-4 line'></span>
          <span className='error-3 line'></span>
          <span className='error-2 line'></span>
          <span className='error-1 line'></span>
        </section>
      </main>
    </div>
  );
}

export default App;
