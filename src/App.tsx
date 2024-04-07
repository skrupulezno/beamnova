import './App.css';
import Planet from './Planet';
import Button from './Button';

function App() {
  return (
    <div className="App">
      <div className="PlanetConteiner">
        <Planet/>
      </div>
      <div className="main">
        <header className='header'>
          <div className="header-container">
            <Button title='О нас' style='about'/>
            <Button title='Наши проекты' style='project'/>
          </div>
          <div className="header-container">
            <Button title='Следите за нами' style='blog'/>
            <Button title='Вход' style='auth'/>
          </div>
        </header>
        <div className="main-content">
          <div className="card">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quia rem nobis voluptas nostrum, autem minus beatae ratione labore qui praesentium, dicta id sunt voluptatem quo!
              Quaerat quas deleniti ab doloribus quae sunt consequuntur eos eaque iste modi minima, qui voluptates?
              Veniam ad ea aliquam eius magni soluta dolor atque quaerat.
            </p>
          </div>

          <div className="card">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quia rem nobis voluptas nostrum, autem minus beatae ratione labore qui praesentium, dicta id sunt voluptatem quo!
              Quaerat quas deleniti ab doloribus quae sunt consequuntur eos eaque iste modi minima, qui voluptates?
              Veniam ad ea aliquam eius magni soluta dolor atque quaerat.
            </p>
          </div>
          
          <div className="card">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quia rem nobis voluptas nostrum, autem minus beatae ratione labore qui praesentium, dicta id sunt voluptatem quo!
              Quaerat quas deleniti ab doloribus quae sunt consequuntur eos eaque iste modi minima, qui voluptates?
              Veniam ad ea aliquam eius magni soluta dolor atque quaerat.
            </p>
            <div className="card">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quia rem nobis voluptas nostrum, autem minus beatae ratione labore qui praesentium, dicta id sunt voluptatem quo!
              Quaerat quas deleniti ab doloribus quae sunt consequuntur eos eaque iste modi minima, qui voluptates?
              Veniam ad ea aliquam eius magni soluta dolor atque quaerat.
            </p>
          </div>
          </div>
        </div>
        <footer className='footer'>
          <div className="container"><p>Copyright &copy; 2024 beamnova</p></div>        
        </footer>
      </div>
    </div>
  );
}

export default App;
