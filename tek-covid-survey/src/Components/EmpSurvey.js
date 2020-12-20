import React, { Component } from 'react';
import EmpNav from './EmpNav';
import SurveyForm from './Survey'
class EmpSurvey extends Component {
    state = {}
    render() {
        return (
            <div>
                <EmpNav />
                <SurveyForm />
                
            </div>
        );
    }
}

export default EmpSurvey;