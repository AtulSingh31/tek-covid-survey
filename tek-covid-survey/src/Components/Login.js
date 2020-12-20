import React, { Component } from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import tekbackground from '../tekbackground.jpg';
import axios from 'axios';
class Login extends Component {
  state = {
    email: '',
    password: ''
  };

  myemailChangeHandler = (event) => {
    this.setState({ email: event.target.value });
  }
  myChangepasswordHandler = (event) => {
    this.setState({ password: event.target.value });
  }
  submitHandler = e => {
    e.preventDefault()
    console.log(this.state)

    axios.post('http://localhost:8080/api/emplogin', this.state)
      .then(response => {
        if (response.data === true) {
          this.props.history.push("/empsurvey");
        }
        else {
          axios.post('http://localhost:8080/api/adminlogin', this.state)
            .then(response => {
              if (response.data === true) {
                this.props.history.push("/admintables");
              }
            })
            .catch(error => {
              console.log(error)
            })
        }
      })
      .catch(error => {
        console.log(error)
      })


  }
  render() {
    const emailRegex = new RegExp('/\S+@\S+\.\S+/');
    const passwordRegex = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}');
    return (
      <div className="background">
        <div className="container">
          <div className="row">
            <div className="col-md-6" id="image">
              <img src={tekbackground} alt="TGS" />
            </div>
            <div className="col-md-6">
              <div className="formfield">
                <h4>LOGIN</h4>
                <form noValidate autoComplete="off" onSubmit={this.submitHandler}>
                  <TextField id="standard-basic1"
                    margin="normal"
                    required
                    fullWidth
                    label="Email "
                    name="email"
                    required
                    onChange={this.myemailChangeHandler} />
                  <br />
                  <TextField id="standard-basic2" margin="normal"
                    required
                    fullWidth
                    type="Password"
                    label="Password"
                    name="password"
                    required
                    onChange={this.myChangepasswordHandler} />
                  <br />
                  <Button type="submit" variant="contained" id="submit" color="primary" >
                    Submit
                                </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;