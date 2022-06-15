
import './App.css';

function App() {
  const list = ['James', 'John', 'Jim', 'Jack', 'Jason', 'Jacob', 'Jerry'];
  let result = [];
  list.map((elem, index) => {
    result.push(<li key={index}>{elem}</li>);
  });
  return (
    <div className="App">
      <ul>
        {result}
      </ul>
    </div>
  );
}


export default App;
