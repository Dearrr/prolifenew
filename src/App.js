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
      <Router>
        <Switch>
          <Route path="/" component={Index} exact></Route>
          
        </Switch>
       
      </Router>
        
      </>
  );
}

export default App;
