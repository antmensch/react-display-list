
import './App.css';

function App() {
  const list = ['James', 'John', 'Jim', 'Jack', 'Jason', 'Jacob', 'Jerry'];
  return (
    <div className="App">
      <ul>
        {list.map( (elem, index) => <li key={index}>{elem}</li>)}
      </ul>
    </div>
  );
}


export default App;
