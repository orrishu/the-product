import { BrowserRouter as Router } from 'react-router-dom'
import RoutesTree from './RoutesTree';
import './App.css';

function App() {
  
  return (
    <div className="App">
      <Router>
        <RoutesTree />
      </Router>
    </div>
  );
}

export default App;
