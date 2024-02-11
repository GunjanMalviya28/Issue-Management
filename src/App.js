import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Todolist from './Todolist';
import Home from './Home';
import Services from './Services';
import About from './About';
import Contact from './Contact';
import Login from './Login';
import Signup from './Signup';


function App() {
  return (
    <div className="App">
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
        </Switch>
      </div>
    </Router>  
     <Todolist/>
    </div>
  );
}

export default App;
