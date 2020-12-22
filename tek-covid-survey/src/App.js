import './App.css';
import Login from './Components/Login';
import EmpNav from './Components/EmpNav';
import { BrowserRouter as Router, Route } from "react-router-dom";
import AdminNav from './Components/AdminNav';
import EmpSurvey from './Components/EmpSurvey';
import EmpGuidelines from './Components/EmpGuidelines';
import AdminTables from './Components/AdminTable';
import AdminGuidelines from './Components/AdminGuidelines';
function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Login} />
        <Route path="/empnav" component={EmpNav} />
        <Route path="/empsurvey" component={EmpSurvey} />
        <Route path="/empguidelines" component={EmpGuidelines} />
        <Route path="/adminnav" component={AdminNav} />
        <Route path="/admintables" component={AdminTables} />
        <Route path="/adminguidelines" component={AdminGuidelines} />
      </div>
    </Router>
  );
}

export default App;