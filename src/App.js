import logo from './logo.svg';
import './App.css';
import HomeScreen from './component/HomeScreen';
import Headernav from './component/Headernav';
import {BrowserRouter, Switch, Route} from "react-router-dom"

function App() {
  return (
   <div>
     <BrowserRouter>
     <Headernav/>
     <Switch>
       <Route path="/" exact component={HomeScreen}/>
     </Switch>
     </BrowserRouter>
    
   </div>
  );
}

export default App;
