import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Grid } from '@mui/material';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Index from './Pages/index'


function App() {
  return (
      <>
      
      <Router basename={window.location.pathname || ''}>
        <Switch>
          <Route path="/" exact component={Index} ></Route>
          
        </Switch>
       
      </Router>
        
      </>
  );
}

export default App;

