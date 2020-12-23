import React, {Component}from "react";
import './AdminMasterTable.css';

import Checkbox from '@material-ui/core/Checkbox';

class Guidelines extends Component{
    constructor(){
        super();
        this.state={}
    }

    render(){
        return(
            <div className="admin-table">
                <form>
                <div className="heading-center">
                    <h2 className="h22">Guidelines</h2>
                </div>
                <div className="b2">
                <div className="border">
                    <Checkbox /> <label>Reduce the use of public transport.</label>
                    <br/>
                    <Checkbox /> <label>Keep the use of shared cabs to minimum.</label>
                    <br/>
                    <Checkbox /> <label>Avoid eating in external places.</label>
                    <br/>
                    <Checkbox /> <label>Follow social distancing norms while in office canteen.</label>
                    <br />
                    <Checkbox /> <label>Avoid going to walks in parks near your house.</label>
                    <br />
                    <Checkbox /> <label>Avoid interacting with people in your neighborhood.</label>
                    <br />
                    <Checkbox /> <label>Avoid shaking hands with people, avoid hugging and kissing people.</label>
                    <br />
                    <Checkbox /> <label>Maintain at least 1 metre (3 feet) distance with everyone.</label>
                    <br />
                    <Checkbox /> <label>Please be responsible and wear masks while going out.</label>
                    <br />
                    <Checkbox /> <label>Do not go for gatherings with friends and family and stay away from large gatherings.</label>
                    <br />
                    <Checkbox /> <label>Do not come in close contact with those who are sick/ not well.</label>
                    <br />
                    <Checkbox /> <label>Please come to office only when it is necessary</label>
                    <br />
                    <div style={{paddingLeft: "50%"}}>
                    <button className="button">Submit</button>
                    </div>
                </div>
                </div>
                </form>
            </div>
        )
    }
}
export default Guidelines;