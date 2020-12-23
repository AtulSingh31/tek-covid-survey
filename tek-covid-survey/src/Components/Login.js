import React, { Component } from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import tekbackground from '../tekbackground.jpg';
import Snackbar from '@material-ui/core/Snackbar';
import axios from 'axios';
class Login extends Component {
  state = {
    email: '',
    password: '',
    open:false
  };
  loginform={
    email:'',
    password:''
  }

  myemailChangeHandler = (event) => {
    this.setState({ email: event.target.value });
  }
  myChangepasswordHandler = (event) => {
    this.setState({ password: event.target.value });
  }
  submitHandler = e => {
    e.preventDefault()
      this.loginform.email=this.state.email;
      this.loginform.password=this.state.password;
    console.log(this.loginform)

    axios.post('http://localhost:8080/api/emplogin', this.loginform)
      .then(response => {
        if (response.data === true) {
          this.props.history.push("/empsurvey");
        }
        else {
          axios.post('http://localhost:8080/api/adminlogin', this.loginform)
            .then(response => {
              if (response.data === true) {
                this.props.history.push("/admintables");
              }
              else{
                this.setState({ open: true});
                console.log(this.state.open)
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
  handleClose = () => this.setState({ open: false })
  render() {
    const emailRegex = new RegExp('^\w{5,}$');
    const email_length = this.state.email.length > 2 || this.state.email.length == 0 ? false : true;
    const password_length = this.state.password.length < 2 ? true : false;
    const passwordRegex = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}');
    

    const disabled = this.state.email.length > 2 && this.state.password.match(passwordRegex) ? false : true;
    const regex = this.state.password.match(passwordRegex) || this.state.password.length == 0 ? false : true;
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
                    label="Username"
                    name="email"
                    required
                    onChange={this.myemailChangeHandler}
                    validations={{ matchRegexp: emailRegex }}
                    error={email_length} />
                  <br />
                  <TextField id="standard-basic2" margin="normal"
                    required
                    fullWidth
                    type="Password"
                    label="Password"
                    name="password"
                    required
                    error={regex}
                    onChange={this.myChangepasswordHandler} />
                  <br />
                  <Button
                    type="submit"
                    variant="contained"
                    id="submit"
                    disabled={disabled}
                    color="primary" >
                    Submit
                                </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <Snackbar
        open={this.state.open}
        autoHideDuration={2000}
        onClose={this.handleClose}
        message="Incorrect Username or Password"
        action={
          <React.Fragment>
            <Button color="secondary" size="small" onClick={this.handleClose}>
              Retry
            </Button>
          </React.Fragment>
        }
      />
      </div>
    );
  }
}

export default Login;