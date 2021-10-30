import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/Pages/home';
import AddContact from './Components/Pages/AddContact';
import About from './Components/Pages/about';


function App() {
  return (
    <div className="App">
      <Router>
         <Navbar />
         <Switch>
          <Route exact path='/'  component={Home} /> 
          <Route  path='/AddContact'  component={AddContact} /> 
          <Route  path='/About'  component={About} /> 
      </Switch>
       </Router>
    </div>
  );
}

export default App;
