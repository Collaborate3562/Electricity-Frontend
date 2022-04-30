import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import Nav from '../Header';
export default class adminLogin extends Component {

    adminData;
    constructor(props) {

        super(props);

        this.state = {
            username : '',

            password: '',

            rememberMe: false,

            errors: {}

        }


        this.handleChangeEmail = this.handleChangeEmail.bind(this);

        this.handleChangePassword = this.handleChangePassword.bind(this);

        this.handleChange = this.handleChange.bind(this);

        this.submitadminRegistrationForm = this.submitadminRegistrationForm.bind(this);

    }

    handleChangeEmail(e) {

        this.setState({ username: e.target.value });

    }

    handleChangePassword(e) {

        this.setState({ password: e.target.value });

    }

    handleChange(e){
        this.setState({ rememberMe : e.target.checked })
    }


    submitadminRegistrationForm(e) {

        e.preventDefault();
        localStorage.setItem('admin', JSON.stringify(this.state));


        

            console.log(this.state);

            var apiBaseUrl = "http://localhost:8080/api/account/authentication";

            var data = {

                "username": this.state.username,

                "password": this.state.password,

                "rememberMe": this.state.rememberMe



            }

            var headers = {

                'Content-Type': 'application/json',
                // 'Bearer ':`${token}`
            }

            console.log(data);

            axios.post(apiBaseUrl, data, { headers: headers }).then((response) =>{
                console.log(response.data.token);
                if(response.data.token && this.state.rememberMe){
                    window.localStorage.setItem("token", response.data.token)
                    window.location = "/adminDashboard";
                }
                else if(response.data.token){
                    window.sessionStorage.setItem("token", response.data.token)
                    window.location = "/adminDashboard";
                }

            }).catch(function (error) {

                //console.log(error);
                alert(error.response.data.message)

            });

        

    }


    validateForm() {

        let errors = {};

        let formIsValid = true;
        if (!this.state.email) {

            formIsValid = false;

            errors["email"] = "*Please enter your email-ID.";

        }

        if (typeof this.state.email !== "undefined") {

            //regular expression for email validation

            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

            if (!pattern.test(this.state.email)) {

                formIsValid = false;

                errors["email"] = "*Please enter valid email-ID.";

            }

        }


        if (!this.state.password) {

            formIsValid = false;

            errors["password"] = "*Please enter your password.";

        }


        this.setState({

            errors: errors

        });

        return formIsValid;

    }
    componentDidMount() {
        window.scrollTo(0, 0)
        this.adminData = JSON.parse(localStorage.getItem('admin'));
        if (localStorage.getItem('admin')) {
            this.setState({
                username: this.adminData.username,
                password: this.adminData.password,
                rememberMe: this.adminData.rememberMe

            })
        } else {
            this.setState({
                username: '',
                password: '',
                rememberMe: false
            })

        }


    }

    render() {

        return (


            <div>
                <Nav/>

                <div className="container" >

                    <div className="row" >

                        <div className="col-md-4 login-sec">

                            <h2 className="text-center">Admin Login</h2>

                            <Form method="post" name="adminRegistrationForm" onSubmit={this.submitadminRegistrationForm} >

                                <FormGroup>
                                    <Input type="text" name="email" id="exampleEmail" value={this.state.username} onChange={this.handleChangeEmail} placeholder="&#xf0e0; Email Id" />

                                    <div className="text-danger">{this.state.errors.username}</div>

                                </FormGroup>

                                <FormGroup>

                                    <Input type="password" name="password" id="examplePassword" value={this.state.password} onChange={this.handleChangePassword} placeholder="&#xf084; Password" />

                                    <div className="text-danger">{this.state.errors.password}</div>

                                </FormGroup>

                                <FormGroup check>

                                    <Label check>

                                        <Input type="checkbox" value= {this.state.rememberMe} onChange={this.handleChange} />{' '}Remember Me
                                    </Label>

                                </FormGroup>

                                <div className="d-flex justify-content-center mt-3 login_container" >

                                    <Button type="submit" className="btn btn-login">Login</Button>

                                </div>

                                <div className="mt-4">

                                    <div className="d-flex justify-content-center links">

                                        Don't have an account? <Link href="/register" to="/register" className="linka">Register</Link>

                                    </div>

                                    <div className="d-flex justify-content-center links">

                                        <a className="linka" href="/forgotPassword">Forgot your password?</a>

                                    </div>

                                </div>

                            </Form>

                        </div>

                        <div className="col-md-8 banner-sec"></div>

                    </div>

                </div>

            </div>

        )

    }






















    // adminData;
    // constructor(props) {

    //     super(props);

    //     this.state = {

    //         username: '',

    //         password: '',

    //         errors: {}

    //     }


    //     this.handleChangeAdminEmail = this.handleChangeAdminEmail.bind(this);

    //     this.handleChangeAdminPassword = this.handleChangeAdminPassword.bind(this);

    //     this.submitadminRegistrationForm = this.submitadminRegistrationForm.bind(this);


        

    // }

    // handleChangeAdminEmail(e) {

    //     this.setState({ username: e.target.value });

    // }

    // handleChangeAdminPassword(e) {

    //     this.setState({ password: e.target.value });

    // }

    // handleChange(e){
    //     this.setState({ rememberMe : e.target.checked })
    // }


    // submitadminRegistrationForm(e) {

    //     e.preventDefault();
    //     localStorage.setItem('admin', JSON.stringify(this.state));
    //     if (this.validateForm()) {

    //         console.log(this.state);

    //         var apiBaseUrl = "http://localhost:8080/api/account/authentication";

    //         var data = {

    //             "username": this.state.username,

    //             "password": this.state.password,

    //             "rememberMe": this.state.rememberMe

    //         }

    //         var headers = {

    //             'Content-Type': 'application/json',

    //         }

    //         console.log(data);

    //         // axios.post(apiBaseUrl, data, { headers: headers }).then(function (response) {
    //         //     console.log(response);
    //         //     window.location = "/adminDashboard";
    //         //     alert("success");

    //         axios.post(apiBaseUrl, data, { headers: headers }).then((response) =>{
    //             console.log(response.data.token);
    //             if(response.data.token && this.state.rememberMe){
    //                 window.localStorage.setItem("token", response.data.token)
    //                 window.location = "/admindashboard";
    //             }
    //             else if(response.data.token){
    //                 window.sessionStorage.setItem("token", response.data.token)
    //                 window.location = "/admindashboard";
    //             }

    //         }).catch(function (error) {

    //             // console.log(error);
    //             alert(error.response.data.message)

    //         });

    //     }

    // }


    // validateForm() {

    //     let errors = {};

    //     let formIsValid = true;
    //     if (!this.state.adminEmail) {

    //         formIsValid = false;

    //         errors["adminEmail"] = "*Please enter your email-ID.";

    //     }

    //     // if (typeof this.state.adminEmail !== "undefined") {

    //     //     // regular expression for email validation

    //     //     // var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

    //     //     // if (!pattern.test(this.state.adminEmail)) {

    //     //     //     formIsValid = false;

    //     //     //     errors["adminEmail"] = "*Please enter valid email-ID.";

    //     //     // }
    //     // }

    //     // }


    //     if (!this.state.adminPassword) {

    //         formIsValid = false;

    //         errors["adminPassword"] = "*Please enter your password.";

    //     }


    //     this.setState({

    //         errors: errors

    //     });

    //     return formIsValid;

    // }
    // componentDidMount() {
    //     window.scrollTo(0, 0)
    //     this.adminData = JSON.parse(localStorage.getItem('admin'));
    //     if (localStorage.getItem('admin')) {
    //         this.setState({
    //             username: this.adminData.username,
    //             password: this.adminData.password,
    //             rememberMe: this.adminData.rememberMe
    //         })
    //     } else {
    //         this.setState({
    //             username: '',
    //             password: '',
    //             rememberMe: false
    //         })

    //     }


    // }

   

    // render() {

    //     return (


    //         <div>
    //             <Nav />
    //             <div className="container" >

    //                 <div className="row" >

    //                     <div className="col-md-4 login-sec">

    //                         <h2 className="text-center">Admin Login</h2>

    //                         <Form method="post" name="adminRegistrationForm" onSubmit={this.submitadminRegistrationForm} >

    //                             <FormGroup>
    //                                 <Input type="username" name="adminEmail" id="exampleEmail" value={this.state.username} onChange={this.handleChangeAdminEmail} placeholder="&#xf0e0; Email Id" />

    //                                 <div className="text-danger">{this.state.errors.username}</div>

    //                             </FormGroup>

    //                             <FormGroup>

    //                                 <Input type="Password" name="adminPassword" id="examplePassword" value={this.state.password} onChange={this.handleChangeAdminPassword} placeholder="&#xf084; Password" />

    //                                 <div className="text-danger">{this.state.errors.password}</div>

    //                             </FormGroup>

    //                             <FormGroup check>

    //                                 <Label check>

    //                                     <Input type="checkbox" />{' '}Remember Me
    //                                 </Label>

    //                             </FormGroup>

    //                             <div className="d-flex justify-content-center mt-3 login_container" >

    //                                 <Button type="submit" className="btn btn-login">Login</Button>

    //                             </div>

    //                             <div className="mt-4">
    //                                 <div className="d-flex justify-content-center links">

    //                                     <a className="linka" href="/adminForgot">Forgot your password?</a>

    //                                 </div>

    //                             </div>

    //                         </Form>

    //                     </div>

    //                     <div className="col-md-8 banner-sec"></div>

    //                 </div>

    //             </div>

    //         </div>

    //     )

    // }

}