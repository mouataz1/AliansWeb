
import './App.css';

import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Home from './pages';
import SigninPage from './pages/signin';
import SignupPage from './pages/signupform';
import Login from './pages/auth/login';
import Register from './pages/auth/register';
import Dash from './pages/Dash';
import Studies from './pages/studies';
import Work from './pages/work';
import Freelancing from './pages/freelancing';
import Currencies from './pages/currency';
import Fridge from './pages/fridge';
import Calendar from './pages/callendar';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/login" component={Login} exact />
        <Route path="/register" component={Register} exact />
        <Route path="/signin" component={SigninPage} exact />
        <Route path="/signupform" component={SignupPage} exact />
        <Route path="/dashboard" component={Dash}/>
        <Route path="/studies" component={Studies}/>
        <Route path="/work" component={Work}/>
        <Route path="/freelancing" component={Freelancing}/>
        <Route path="/currency" component={Currencies}/>
        <Route path="/fridge" component={Fridge}/>
        <Route path="/calendar" component={Calendar}/>
      </Switch>
    </Router>
  );
}

export default App;
