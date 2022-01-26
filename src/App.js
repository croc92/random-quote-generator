import { useState, useEffect } from 'react'
import Wrapper from './components/Wrapper'

let quotes = [];

const colors = ['#faebd7', '#b1fde4', '#bcf4f8', '#d0ffd0', '#f5f5f5', '#ececbc', '#dfb8b8', '#e6c5e9', '#d1aaf5', '#8ed2ff', '#fffd8e']

const getRandomQuote = () => {
  const randomIndex = Math.floor(Math.random() * quotes.length)
  return quotes[randomIndex]
}

const getRandomColor = () => {
  const randomIndex = Math.floor(Math.random() * colors.length)
  return colors[randomIndex]
}

const App = () => {
  console.log('render')
  const [randomQuote, setRandomQuote] = useState(null);
  const [randomColor, setRandomColor] = useState(getRandomColor());
  const [animation, setAnimation] = useState(false);

  const changeQuote = () => {
    setRandomQuote(getRandomQuote());
    setRandomColor(getRandomColor());
    setAnimation(!animation)
  }

  useEffect(() => {

    fetch('https://type.fit/api/quotes')
      .then(response => response.json())
      .then(data => {
        quotes = data
        changeQuote()
      })
      
  }, [])

  if (randomQuote == null) {
    return null
  } 

  return <div>
    <Wrapper 
      randomQuote={randomQuote.text}
      randomAuthor={randomQuote.author}
      randomColor={randomColor}
      changeQuote={changeQuote}
      animation={animation}
    />
  </div>;
};

export default App;

