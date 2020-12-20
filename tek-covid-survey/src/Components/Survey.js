import React, { Component } from "react";
import { Field, reduxForm,formValueSelector } from "redux-form";
import {Control, LocalForm, Errors} from 'react-redux-form'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Checkbox from '@material-ui/core/Checkbox';
import { compose } from 'redux'
import { connect } from 'react-redux'
import { Typography,Button} from '@material-ui/core';
import {validators} from './validators'
import FormHelperText from '@material-ui/core/FormHelperText';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import {postSurvey} from '../reducers/ActionCreators'
const questions_array=["Mode of Transportation"];
var selectordisease={
    diabetes:false,
    asthma:false,
    bloodPressure:false,
    None:false
}
const mapDispatchToProps = (dispatch)=>({
  postSurvey:(q1,q2,q3,q4,q5,q6,q7) =>
  dispatch(postSurvey(q1,q2,q3,q4,q5,q6,q7)
)
})

const state = { selected: "credit" };
 const handleRadioChange = ev => {
   console.log("radio button was hit")
  state.selected = ev.target.value ;
};


const handleChange = (event) => {
    console.log(selectordisease)
    
    
    selectordisease[event.target.name]=!selectordisease[event.target.name] ;
  };
const Q1 = ({ input, meta: { touched, error },...rest }) => (
    
        
<FormControl>
    <FormLabel component="legend"><span style={{ fontSize: '1.5rem' }}>  Mode of Transportation</span></FormLabel>
      <RadioGroup {...input} {...rest} onChange={handleRadioChange} value={state}>
        <FormControlLabel value="1" control={<Radio />} label="Public transport" />
        <FormControlLabel value="4" control={<Radio />} label="Private transport" />
        <FormControlLabel value="2" control={<Radio />} label="Taxi" />
        {touched && error && (
       <span style={{ fontSize: "10px", color: "red" }}>{error}</span>
      )}
      </RadioGroup>
</FormControl>
  
    
  )

  const Q2 = ({ input, meta: { touched, error }, ...rest }) => (

        
    <FormControl>
        <FormLabel component="legend"><span style={{ fontSize: '1.5rem' }}>  Where do you usually have your lunch?</span></FormLabel>
          <RadioGroup {...input} {...rest}>
            <FormControlLabel value="1" control={<Radio />} label="Restaurant or Some Other External Place"/>
            <FormControlLabel value="2" control={<Radio />} label="Office Canteen." />
            <FormControlLabel value="4" control={<Radio />} label="Bring your own food." />
            {touched && error && (
       <span style={{ fontSize: "10px", color: "red" }}>{error}</span>
      )}
          </RadioGroup>
    </FormControl>)
    const Q3 = ({ input, meta: { touched, error },...rest }) => (
    
        
        <FormControl>
            <FormLabel component="legend"><span style={{ fontSize: '1.5rem' }}>  Number of cases in 500m of your house</span></FormLabel>
              <RadioGroup {...input} {...rest}>
                <FormControlLabel value="4" control={<Radio />} label="Less than 5" />
                <FormControlLabel value="3" control={<Radio />} label="Between 5 - 10" />
                <FormControlLabel value="2" control={<Radio />} label="Between 10 - 20" />
                <FormControlLabel value="1" control={<Radio />} label="More than 20" />
                {touched && error && (
               <span style={{ fontSize: "10px", color: "red" }}>{error}</span>
              )}
              </RadioGroup>
        </FormControl>)
    
    const Q4 = ({ input, meta: { touched, error },...rest }) => (
    
        
        <FormControl>
            <FormLabel component="legend"><span style={{ fontSize: '1.5rem' }}>  Have you or any of your family member been tested positive for Covid 19?</span></FormLabel>
              <RadioGroup {...input} {...rest}>
                <FormControlLabel value="4" control={<Radio />} label="Yes" />
                <FormControlLabel value="1" control={<Radio />} label="No" />
                
                {touched && error && (
               <span style={{ fontSize: "10px", color: "red" }}>{error}</span>
              )}
              </RadioGroup>
        </FormControl>)
    
    const Q5 = ({ input, meta: { touched, error },...rest }) => (
    
        
        <FormControl>
            <FormLabel component="legend"><span style={{ fontSize: '1.5rem' }}>  How many people do you usually interact with in a day?</span></FormLabel>
              <RadioGroup {...input} {...rest}>
                <FormControlLabel value="4" control={<Radio />} label="Less than 5" />
                <FormControlLabel value="3" control={<Radio />} label="Between 5 - 10" />
                <FormControlLabel value="2" control={<Radio />} label="Between 10 - 20" />
                <FormControlLabel value="1" control={<Radio />} label="More than 20" />
                
                {touched && error && (
               <span style={{ fontSize: "10px", color: "red" }}>{error}</span>
              )}
              </RadioGroup>
        </FormControl>)
     const Q6 = ({ input, meta: { touched, error },...rest }) => (
    
        
        <FormControl>
            <FormLabel component="legend"><span style={{ fontSize: '1.5rem' }}>  Age </span></FormLabel>
              <RadioGroup {...input} {...rest}>
                <FormControlLabel value="4" control={<Radio />} label="Between 18 - 30" />
                <FormControlLabel value="3" control={<Radio />} label="Between 31 - 40" />
                <FormControlLabel value="2" control={<Radio />} label="Between 41 - 50" />
                <FormControlLabel value="1" control={<Radio />} label="Greater than 50" />
                
                {touched && error && (
               <span style={{ fontSize: "10px", color: "red" }}>{error}</span>
              )}
              </RadioGroup>
        </FormControl>)
    const Q7 = ({ input, meta: { touched, error },...rest }) => (
        <div >
        <FormControl component="fieldset" >
          <FormLabel component="legend"><span style={{ fontSize: '1.5rem' }}>  Do you have any of the following diseases?</span></FormLabel>
          <FormGroup {...input} {...rest}>
            <FormControlLabel 
             
              control={<Checkbox  name="diabetes" 
                onChange={handleChange}
              />}
              label="Diabetes" 
            />
            <FormControlLabel 
              control={<Checkbox  name="asthma" onChange={handleChange} />}
              label="Asthma"
            />
            <FormControlLabel
              control={<Checkbox name="bloodPressure" onChange={handleChange} />}
              label="Blood Pressure"
            />
            <FormControlLabel
              control={<Checkbox name="None" onChange={handleChange} />}
              label="None"
            />
          </FormGroup>
          
        </FormControl>
      
      </div>
    )
    
  


class SurveyForm extends Component{
 
    constructor(props){
        super(props);
    
    this.handleSubmit=this.handleSubmit.bind(this)
    }
 
handleSubmit(values){
    alert(JSON.stringify(values))
}

render(){
    const { handleSubmit, reset, pristine, submitting, valid } = this.props;
    return(
        <div>
        <Typography><h3>Covid-19 Employee Survey</h3></Typography>
      
        <hr/>
        
        <form  className="surveyForm" onSubmit={handleSubmit(values =>{ 
            values.q7=selectordisease
            console.log(values);
            this.props.postSurvey(values.q1,values.q2,values.q3,values.q4,values.q5,values.q6,values.q7)
        })}>   
        <div>
        <List>
        <ListItem divider={true}>
        <ListItemText>
        <Field name="q1" component={Q1}></Field></ListItemText></ListItem>
        <ListItem divider={true}>
        <ListItemText>
        <Field  name="q2" component={Q2}></Field></ListItemText></ListItem>
        <ListItem divider={true}>
        <ListItemText>
          <Field  name="q3" component={Q3}></Field></ListItemText></ListItem>
          <ListItem divider={true}>
          <ListItemText>
          <Field  name="q4" component={Q4}></Field></ListItemText></ListItem>
          <ListItem divider={true}>
          <ListItemText>
          <Field  name="q5" component={Q5}>
          
          </Field>
          </ListItemText></ListItem>
          <ListItem divider={true}>
          <ListItemText>
          <Field  name="q6" component={Q6}>
          
          </Field>
          </ListItemText></ListItem>
          <ListItem divider={true}>
          <ListItemText>
          <Field  name="q7" component={Q7}>
          
          </Field>
          </ListItemText></ListItem></List>
      </div> 
      <div style={{textAlign:"center"}}>
        <Button   type="submit" variant="contained" color="primary" disabled={!valid || pristine || submitting}>Submit</Button>
        </div>
        </form>
        </div>
    )
}
}
const selector = formValueSelector('SurveyForm')
SurveyForm=connect(
  mapDispatchToProps
)(SurveyForm)
export default 
  
        reduxForm({
    form: 'SurveyForm',
    validate: validators
  })(SurveyForm)
