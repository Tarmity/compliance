import './App.css';
import Sidebar from './Components/SideBar/Sidebar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import {Reports, ReportsOne, ReportsTwo, ReportsThree} from './Pages/Reports'
// import Button from '@material-ui/core/Button'

function App() {
  return (
    <Router>
      <Sidebar />
      <Switch>
        <Route path="/dashboard" exact component={Dashboard}/>
        <Route path="/reports" exact component={Reports}/>
        <Route path="/reports/reports1" exact component={ReportsOne}/>
        <Route path="/reports/reports2" exact component={ReportsTwo}/>
        <Route path="/reports/reports3" exact component={ReportsThree}/>
      </Switch>
    </Router>
  );
}

export default App;
