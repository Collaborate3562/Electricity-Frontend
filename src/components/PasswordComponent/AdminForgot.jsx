import axios from 'axios';
import React, { Component } from 'react';
import Nav from '../Header'
class AdminForgot extends Component {
    adminData;
    constructor(props) {
        super(props);
        this.state = {
            adminEmail: '',
            newPassword: '',
            rePassword: '',
            errors: {}
        }

        this.emailHandler = this.emailHandler.bind(this);
        this.changeNewPasswordHandler = this.changeNewPasswordHandler.bind(this);
        this.changeRePasswordHandler = this.changeRePasswordHandler.bind(this);
        this.AdminForgot = this.AdminForgot.bind(this);

    }

    emailHandler = (event) => {
        this.setState({ adminEmail: event.target.value });
    }

    changeNewPasswordHandler = (event) => {
        this.setState({ newPassword: event.target.value });
    }

    changeRePasswordHandler = (event) => {
        this.setState({ rePassword: event.target.value });
    }

    validateForm() {

        let errors = {};

        let formIsValid = true;

        if (!this.state.adminEmail) {

            formIsValid = false;

            errors["adminEmail"] = "*Please enter your email-ID.";

        }

        if (typeof this.state.adminEmail !== "undefined") {

            var pattern = new RegExp(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/i);

            if (!pattern.test(this.state.adminEmail)) {

                formIsValid = false;

                errors["adminEmail"] = "*Please enter valid email-ID.";

            }

        }


        if (!this.state.newPassword) {

            formIsValid = false;

            errors["newPassword"] = "*Please enter your password.";

        }

        else if (typeof this.state.newPassword !== "undefined") {

            if (!this.state.newPassword.match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {

                formIsValid = false;

                errors["newPassword"] = "*Please enter secure and strong password.";

            }

        }
        if (!this.state.rePassword) {

            formIsValid = false;

            errors["rePassword"] = "*Please enter your password.";

        }

        else if (typeof this.state.rePassword !== "undefined") {

            if (!this.state.rePassword.match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {

                formIsValid = false;

                errors["newPassword"] = "*Please enter secure and strong password.";

            }

        }

        if (this.state.newPassword !== this.state.rePassword) {
            formIsValid = false;
            errors["notEqual"] = "*Password do not match."
        }

        this.setState({

            errors: errors

        });

        return formIsValid;
    }



    AdminForgot(e) {
        e.preventDefault();

        if (this.validateForm()) {
            var apiBaseUrl = "http://localhost:8081/springfox/api/AdminForgotPassword/" + this.state.newPassword;

            var data = {

                "adminEmail": this.state.adminEmail,

            }

            var headers = {

                'Content-Type': 'application/json',

            }

            axios.post(apiBaseUrl, data, { headers: headers }).then(function (response) {
                alert("New Password set successfully");

                window.location = "/login";

            }).catch(function (error) {


                alert("Email is incorrect.")
            });
        }
    }

    cancel() {
        this.props.history.push('/login');
    }

    render() {
        return (
            <div>
                <Nav /><br />
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Forgot Password ?</h3>
                            <div className="card-body">
                                <fieldset>
                                    <form>
                                        <div className="form-group">
                                            <label>Enter email</label>
                                            <input placeholder="Email" type="adminEmail"
                                                name="email"
                                                className="form-control"
                                                value={this.state.adminEmail}
                                                onChange={this.emailHandler} required />
                                        </div>
                                        <div className="errorMsg">{this.state.errors.adminEmail}</div>

                                        <div className="form-group">
                                            <label>Enter new password</label>
                                            <input placeholder="New Password" type="password"
                                                name="password"
                                                className="form-control"
                                                value={this.state.newPassword}
                                                onChange={this.changeNewPasswordHandler} required />
                                        </div>
                                        <div className="errorMsg">{this.state.errors.newPassword}</div>

                                        <div className="form-group">
                                            <label>Re-enter the password</label>
                                            <input placeholder="New Password" type="password"
                                                name="password"
                                                className="form-control"
                                                value={this.state.rePassword}
                                                onChange={this.changeRePasswordHandler} required />
                                        </div>
                                        <div className="errorMsg">{this.state.errors.rePassword}</div>
                                        <div className="errorMsg">{this.state.errors.notEqual}</div>

                                        <button className="btn btn-primary" onClick={this.AdminForgot}>Save</button>
                                        <button className="btn btn-basic" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancel</button>
                                    </form>
                                </fieldset>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }

}

export default AdminForgot;