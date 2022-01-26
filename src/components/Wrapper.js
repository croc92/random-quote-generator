
import { FaTwitter } from 'react-icons/fa'

const Wrapper = ({randomQuote, randomAuthor, changeQuote, animation, randomColor}) => {
  return (
    
    <section id="box" 

    style={{backgroundColor: `${randomColor}`}}
    >
      <div id="quote-box">
        <h3 id="text" className={`${animation ? 'fadeInAndOut' : 'fadeInAndOut2'}`}>
          {randomQuote}
        </h3>
        <p id="author" className={`${animation ? 'fadeInAndOut' : 'fadeInAndOut2'}`}>
          - {randomAuthor}
        </p>
        <button 
          onClick={changeQuote}
          style={{backgroundColor: `${randomColor}`}}
          id="new-quote">
            Next Quote
        </button>
        <a 
          href="twitter.com/intent/tweet" 
          id="tweet-quote" target="_blank"><FaTwitter />
        </a>
      </div>
    </section>
  );
};

export default Wrapper;
