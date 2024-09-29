import Hello from './containers/demo/Hello'
import Car from './containers/demo/car';
import Login from './containers/demo/Login';
import { Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
<Hello/>
<Car/>
<Login/>
<Route/>
    </div>
  );
}

export default App;



