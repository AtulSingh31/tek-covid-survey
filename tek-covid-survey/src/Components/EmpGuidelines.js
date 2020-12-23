import React, { Component } from 'react';
import EmpNav from './EmpNav';
import axios from 'axios';
class EmpGuidelines extends Component {
    state = {
        guidelines: []
    }
    componentDidMount() {
        axios.get('http://localhost:8080/api/getGuidelines/1').then(response => {
            console.log(response.data)
            this.setState({
                guidelines: response.data
            })
            console.log(this.state.guidelines)
        })
            .catch(error => {
                console.log(error)
            })
    }
    render() {
        const { guidelines } = this.state.guidelines
        return (<div>
            <EmpNav />
            <div id="guidelineContainer">
                <div className="container">
                    <h1 id="guidelineH1">Guidelines Page</h1>
                </div>
            </div>
            <div className="container">
                <div className="row" >
                    <div className="col-md-2"></div>
                    <div className="col-md-6" id="guidelines">
                        <ul>
                            {
                                this.state.guidelines.map(post => <li id="gl">{post}</li>)
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>);
    }
}

export default EmpGuidelines;