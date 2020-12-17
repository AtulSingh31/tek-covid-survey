import './App.css';
import Login from './Components/Login';
import EmpNav from './Components/EmpNav';
import { BrowserRouter as Router, Route } from "react-router-dom";
import AdminNav from './Components/AdminNav';
import EmpSurvey from './Components/EmpSurvey';
import EmpGuidelines from './Components/EmpGuidelines';
import AdminTable from './Components/AdminTable';
function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Login} />
        <Route path="/empnav" component={EmpNav} />
        <Route path="/empsurvey" component={EmpSurvey} />
        <Route path="/empguidelines" component={EmpGuidelines} />
        <Route path="/adminnav" component={AdminNav} />
        <Route path="/admintable" component={AdminTable} />
      </div>
    </Router>
  );
}

export default App;