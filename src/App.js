import { useState } from 'react'
import Wrapper from './components/Wrapper'

const quotes = [
  {
    author: 'Steve Jobs',
    quote: "Your time is limited, so don't waste it living someone else's life.",
  },
  {
    author: 'Robert Louis Stevenson',
    quote: "Don't judge each day by the harvest you reap but by the seeds that you plant.",
  },
  {
    author: 'Benjamin Franklin',
    quote: 'Tell me and I forget. Teach me and I remember. Involve me and I learn.',
  },
  {
    author: 'Plato',
    quote: 'We can easily forgive a child who is afraid of the dark; the real tragedy of life is when men are afraid of the light.',
  },
  {
    author: 'Farrah Gray',
    quote: 'Build your own dreams, or someone else will hire you to build theirs.',
  },
];

const colors = ['#faebd7', '#b1fde4', '#bcf4f8', '#d0ffd0' , '#f5f5f5', '#ececbc' , '#dfb8b8', '#e6c5e9' , '#d1aaf5', '#8ed2ff', '#fffd8e']

const getRandomQuote = () => {
  const randomIndex = Math.floor(Math.random() * quotes.length)
  return quotes[randomIndex]
}

const getRandomColor = () => {
  const randomIndex = Math.floor(Math.random() * colors.length)
  return colors[randomIndex]
}


const App = () => {

  const [randomQuote, setRandomQuote] = useState(getRandomQuote());
  const [randomColor, setRandomColor] = useState(getRandomColor());
  const [animation, setAnimation] = useState(false);

  const changeQuote = () => {
    setRandomQuote(getRandomQuote());
    setRandomColor(getRandomColor());
    setAnimation(!animation)
    console.log(randomColor)
  }


  return <div>
    <Wrapper 
      randomQuote={randomQuote.quote}
      randomAuthor={randomQuote.author}
      randomColor={randomColor}
      changeQuote={changeQuote}
      animation={animation}
    />
  </div>;
};

export default App;

