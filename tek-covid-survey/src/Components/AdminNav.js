import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
class AdminNav extends Component {
    state = {  }
    render() { 
        return ( <AppBar position="static">
        <Toolbar>
            <div className="col-md-9">
                <h3 id="navlogo">TekSystems Covid Survey</h3>
            </div>
            <div className="col-md-3">
            <Link to="/admintable"><Button id="AdminSurvey" color="inherit">Survey Table</Button></Link> 
            <Link to="/"><Button id="logout" color="inherit">Logout</Button></Link> 
            </div>
        </Toolbar>

    </AppBar>);
    }
}
 
export default AdminNav;