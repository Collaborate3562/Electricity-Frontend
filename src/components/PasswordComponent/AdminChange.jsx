import axios from 'axios';
import React, { Component } from 'react';
import Nav from '../Navbar';
class AdminChange extends Component {
    adminData;
    constructor(props) {
        super(props);
        this.state = {
            adminEmail: '',
            adminPassword: '',
            newPassword: '',
            rePassword: '',
            errors: {}
        }

        this.changeAdminPasswordHandler = this.changeAdminPasswordHandler.bind(this);
        this.changeNewPasswordHandler = this.changeNewPasswordHandler.bind(this);
        this.changeRePasswordHandler = this.changeRePasswordHandler.bind(this);
        this.AdminChange = this.AdminChange.bind(this);
    }

    changeAdminPasswordHandler = (event) => {
        this.setState({ adminPassword: event.target.value });
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

        if (!this.state.adminPassword) {

            formIsValid = false;

            errors["adminPassword"] = "*Please enter your password.";

        }

        else if (typeof this.state.adminPassword !== "undefined") {

            if (!this.state.adminPassword.match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {

                formIsValid = false;

                errors["adminPassword"] = "*Please enter secure and strong password.";

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

    componentDidMount() {
        this.adminData = JSON.parse(localStorage.getItem('admin'));
        if (localStorage.getItem('admin')) {
            this.setState({
                adminEmail: this.adminData.adminEmail,

            })
        } else {
            this.setState({
                adminEmail: '',

            })

        }
    }

    AdminChange(e) {
        e.preventDefault();

        if (this.validateForm()) {
            var apiBaseUrl = "http://localhost:8081/springfox/api/adminLogin/reset/" + this.state.newPassword;

            var data = {

                "adminEmail": this.state.adminEmail,

                "adminPassword": this.state.adminPassword

            }

            var headers = {

                'Content-Type': 'application/json',

            }

            axios.post(apiBaseUrl, data, { headers: headers }).then(function (response) {
                alert("Password changed successfully");
                localStorage.removeItem('admin');
                window.location = "/login";

            }).catch(function (error) {


                alert("Password is incorrect.")
            });
        }
    }

    cancel() {
        this.props.history.push('/adminDashboard');
    }

    render() {
        return (
            <div>
                <Nav /><br />
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Change Password</h3>
                            <div className="card-body">
                                <fieldset>
                                    <form>
                                        <div className="form-group">
                                            <label>Enter old password</label>
                                            <input placeholder="Old password" type="password"
                                                name="password"
                                                className="form-control"
                                                value={this.state.adminPassword}
                                                onChange={this.changeAdminPasswordHandler} required />
                                        </div>
                                        <div className="errorMsg">{this.state.errors.adminPassword}</div>

                                        <div className="form-group">
                                            <label>Enter new password</label>
                                            <input placeholder="New password" type="password"
                                                name="password"
                                                className="form-control"
                                                value={this.state.newPassword}
                                                onChange={this.changeNewPasswordHandler} required />
                                        </div>
                                        <div className="errorMsg">{this.state.errors.newPassword}</div>

                                        <div className="form-group">
                                            <label>Re-enter the password</label>
                                            <input placeholder="New password" type="password"
                                                name="password"
                                                className="form-control"
                                                value={this.state.rePassword}
                                                onChange={this.changeRePasswordHandler} required />
                                        </div>
                                        <div className="errorMsg">{this.state.errors.rePassword}</div>
                                        <div className="errorMsg">{this.state.errors.notEqual}</div>

                                        <button className="btn btn-success" onClick={this.AdminChange}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancel</button>
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

export default AdminChange;