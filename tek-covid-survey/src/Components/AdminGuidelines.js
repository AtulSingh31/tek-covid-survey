import React, { Component } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import CheckboxGroup from 'react-checkbox-group'
import './AdminMasterTable.css';
import AdminNav from './AdminNav';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FormGroup from '@material-ui/core/FormGroup';
import { tsImportEqualsDeclaration } from '@babel/types';
import axios from 'axios';

var id;

class AdminGuidelines extends Component {
    constructor() {
        super();
        this.state = {
            guidelines: [],
            g1: false,
            g2: false,
            g3: false,
            g4: false,
            g5: false,
            g6: false,
            g7: false,
            g8: false,
            g9: false,
            g10: false,
            g11: false,
            g12: false
        }

        this.onHandleChange = this.onHandleChange.bind(this)
        this.submit = this.submit.bind(this)
    }
  

    onHandleChange = (event) => {
        console.log(event.target.checked)
        var s = event.target.name
        this.setState({
            ...this.state,
            [event.target.name]: event.target.checked
        })
        if(event.target.checked){
            this.state.guidelines.push(event.target.value)
        }
        else{
            this.state.guidelines.splice(this.state.guidelines.indexOf(event.target.value),1)
        }
        // event.target.checked = !event.target.checked
        console.log("afterrrrrrrrrrr" + typeof (s) + " " + typeof (g4))
    }

    submit(e){
        e.preventDefault()
        console.log(this.state.guidelines)
        console.log(id)
        axios.post('http://localhost:8080/api/setGuidelines/'+id, this.state.guidelines)
        .then(response => {
            console.log("Sent: "+this.state.guidelines)
          })
          .catch(error => {
            console.log(error)
          })
      }

    componentDidMount() {
        var url = window.location.pathname
        id = url.substring(url.lastIndexOf('/') + 1)
        console.log(id)
        fetch('http://localhost:8080/api/getGuidelines/' + id)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    guidelines: data
                }, () => {
                    console.log(data)
                })

                for (const [i, res] of this.state.guidelines.entries()) {
                    if (res === "Reduce the use of public transport.") {
                        this.setState({
                            g1: true
                        })
                    }
                    if (res === "Keep the use of shared cabs to minimum.") {
                        this.setState({
                            g2: true
                        })
                    }
                    if (res === "Avoid eating in external places.") {
                        this.setState({
                            g3: true
                        })
                    }
                    if (res === "Follow social distancing norms while in office canteen.") {
                        this.setState({
                            g4: true
                        })
                    }
                    if (res === "Avoid going to walks in parks near your house.") {
                        this.setState({
                            g5: true
                        })
                    }
                    if (res === "Avoid interacting with people in your neighborhood.") {
                        this.setState({
                            g6: true
                        })
                    }
                    if (res === "Avoid shaking hands with people, avoid hugging and kissing people.") {
                        this.setState({
                            g7: true
                        })
                    }
                    if (res === "Maintain at least 1 metre (3 feet) distance with everyone.") {
                        this.setState({
                            g8: true
                        })
                    }
                    if (res === "Please be responsible and wear masks while going out.") {
                        this.setState({
                            g9: true
                        })
                    }
                    if (res === "Do not go for gatherings with friends and family and stay away from large gatherings.") {
                        this.setState({
                            g10: true
                        })
                    }
                    if (res === "Do not come in close contact with those who are sick/ not well.") {
                        this.setState({
                            g11: true
                        })
                    }
                    if (res === "Please come to office only when it is necessary") {
                        this.setState({
                            g12: true
                        })
                    }
                }
            })
        


    }
    render() {
        const { guidelines } = this.state




        return (<div>
            <AdminNav />

            <div className="admin-table">
                <form onSubmit={this.submit}>
                    <div className="heading-center">
                        <h2 className="h22">Guidelines</h2>
                    </div>
                    <div className="b2">
                        <div className="border">
                            <Checkbox name="g1" id="g1" checked={this.state.g1} value="Reduce the use of public transport."
                                onChange={this.onHandleChange}
                            /><label>Reduce the use of public transport.</label>
                            <br />
                            <Checkbox name="g2" id="g2" checked={this.state.g2} value="Keep the use of shared cabs to minimum."
                                onChange={this.onHandleChange}
                            /><label>Keep the use of shared cabs to minimum.</label>
                            <br />

                            <Checkbox name="g3" id="g3" checked={this.state.g3} value="Avoid eating in external places."
                                onChange={this.onHandleChange}
                            /><label>Avoid eating in external places.</label>
                            <br />

                            <Checkbox name="g4" id="g4" checked={this.state.g4} onChange={this.onHandleChange}
                                value="Follow social distancing norms while in office canteen."
                            /><label>Follow social distancing norms while in office canteen.</label>
                            <br />
                            <Checkbox name="g5" id="g5" checked={this.state.g5}
                            value="Avoid going to walks in parks near your house."
                                onChange={this.onHandleChange}
                            /><label>Avoid going to walks in parks near your house.</label>
                            <br />
                            <Checkbox name="g6" id="g6" checked={this.state.g6}
                            value="Avoid interacting with people in your neighborhood."
                                onChange={this.onHandleChange}
                            /><label>Avoid interacting with people in your neighborhood.</label>
                            <br />
                            <Checkbox name="g7" id="g7" checked={this.state.g7}
                            value="Avoid shaking hands with people, avoid hugging and kissing people."
                                onChange={this.onHandleChange}
                            /><label>Avoid shaking hands with people, avoid hugging and kissing people.</label>
                            <br />
                            <Checkbox name="g8" id="g8" checked={this.state.g8}
                            value="Maintain at least 1 metre (3 feet) distance with everyone."
                                onChange={this.onHandleChange}
                            /><label>Maintain at least 1 metre (3 feet) distance with everyone.</label>
                            <br />

                            <Checkbox name="g9" id="g9" checked={this.state.g9}
                            value="Please be responsible and wear masks while going out."
                                onChange={this.onHandleChange}
                            /><label>Please be responsible and wear masks while going out.</label>
                            <br />

                            <Checkbox name="g10" id="g10" checked={this.state.g10}
                            value="Do not go for gatherings with friends and family and stay away from large gatherings."
                                onChange={this.onHandleChange}
                            /><label>Do not go for gatherings with friends and family and stay away from large gatherings.</label>
                            <br />

                            <Checkbox name="g11" id="g11" checked={this.state.g11}
                            value="Do not come in close contact with those who are sick/ not well."
                                onChange={this.onHandleChange}
                            /><label>Do not come in close contact with those who are sick/ not well.</label>
                            <br />
                            <Checkbox name="g12" id="g12" checked={this.state.g12}
                            value="Please come to office only when it is necessary."
                                onChange={this.onHandleChange}
                            /><label>Please come to office only when it is necessary.</label>
                            <br />
                            <div style={{ paddingLeft: "50%" }}>
                                <button className="button">Submit</button>
                            </div>

                        </div>
                    </div>
                </form>
            </div>
        </div>);
    }
}

export default AdminGuidelines;