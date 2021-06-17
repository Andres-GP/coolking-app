
import './App.css';
import Searchbar from './searchbar'
import './searchbar.css'
import CommunityCookbooks from './communityCookbooks'
import './communityCookbooks.css'

function App() {
  return (
    <div className="App">
      <Searchbar />
      <CommunityCookbooks />
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.aaaaaaaaaaaaaaa
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}


export default App;
