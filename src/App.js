import './App.css';
import ReactSelectNestedItemCreatable from './ReactSelectNestedItemCreatable';
import { options } from './data';

function App() {
  return (
    <div className="app">
      <div className="body">
        <ReactSelectNestedItemCreatable options={options} />
      </div>
    </div>
  );
}

export default App;
