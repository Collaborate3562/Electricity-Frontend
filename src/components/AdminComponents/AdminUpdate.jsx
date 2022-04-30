import React, { Component } from 'react';
import AdminServices from '../../services/AdminServices';
import Nav from '../Navbar'
export default class AdminUpdate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            adminFirstName: '',
            adminLastName: '',
            adminEmail: '',
            adminMobile: '',
            adminPassword: '',
            isEnabled: '',
            errors: {}
        }
        this.handleChangeMobile = this.handleChangeMobile.bind(this);
        this.handleChangeFirstName = this.handleChangeFirstName.bind(this);
        this.handleChangeLastName = this.handleChangeLastName.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.updateAdmin = this.updateAdmin.bind(this);
    }
    componentDidMount() {
        let details = localStorage.getItem('admin');
        details = JSON.parse(details);
        let adminEmail = details.adminEmail;
        AdminServices.getAdminIdByEmail(adminEmail).then(res => {
            this.setState({ id: parseInt(res.data) });

            AdminServices.getById(this.state.id).then(res => {
                let admin = res.data;
                this.setState({
                    id: admin.id,
                    adminFirstName: admin.adminFirstName,
                    adminLastName: admin.adminLastName,
                    adminEmail: admin.adminEmail,
                    adminMobile: admin.adminMobile,
                    adminPassword: admin.adminPassword
                });
            });

        });

    }

    updateAdmin = (e) => {
        e.preventDefault();
        if (this.validateForm()) {
            let admin = {
                id: this.state.id, adminFirstName: this.state.adminFirstName, adminLastName: this.state.adminLastName,
                adminEmail: this.state.adminEmail, adminMobile: this.state.adminMobile, adminPassword: this.state.adminPassword
            };
            AdminServices.updateAdminProfile(admin).then(function (response) {
                console.log(response);
                alert("data updated");
                window.location = "/adminProfile";
            }).catch(function (error) {
                alert(error.response.data.message);
                console.log(error);

            });
        }
    }
    validateForm() {
        let errors = {};
        let formIsValid = true;
        if (!this.state.adminFirstName) {

            formIsValid = false;

            errors["adminFirstName"] = "*Please enter your first name.";

        }
        else if (typeof this.state.adminFirstName !== "undefined") {

            //regular expression for email validation

            if (!this.state.adminFirstName.match(/^[A-Z][a-zA-Z ]*$/)) {

                formIsValid = false;

                errors["adminFirstName"] = "*Please enter first letter capital and alphabet characters only.";
            }

        }
        if (!this.state.adminLastName) {

            formIsValid = false;

            errors["adminLastName"] = "*Please enter your last name.";

        }
        else if (typeof this.state.adminLastName !== "undefined") {

            //regular expression for email validation

            if (!this.state.adminLastName.match(/^[A-Z][a-zA-Z ]*$/)) {

                formIsValid = false;

                errors["adminLastName"] = "*Please enter first letter capital and alphabet characters only.";
            }

        }

        if (!this.state.adminEmail) {

            formIsValid = false;

            errors["adminEmail"] = "*Please enter your email-ID.";

        }

        else if (typeof this.state.adminEmail !== "undefined") {

            //regular expression for email validation

            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

            if (!pattern.test(this.state.adminEmail)) {

                formIsValid = false;

                errors["email"] = "*Please enter valid email-ID.";

            }

        }

        if (!this.state.adminMobile) {

            formIsValid = false;

            errors["adminMobile"] = "*Please enter your mobile no.";

        }

        else if (typeof this.state.adminMobile !== "undefined") {

            if (!this.state.adminMobile.match(/^[7-9][0-9]{9}$/)) {

                formIsValid = false;

                errors["adminMobile"] = "*Please enter valid mobile no.";

            }

        }

        this.setState({
            errors: errors
        });
        return formIsValid;
    }

    cancel() {
        this.props.history.push('/adminProfile');
    }
    handleChangeFirstName = (e) => {
        this.setState({ adminFirstName: e.target.value });
    }
    handleChangeLastName = (e) => {
        this.setState({ adminLastName: e.target.value });
    }
    handleChangeEmail = (e) => {
        this.setState({ adminEmail: e.target.value });
    }
    handleChangeMobile = (e) => {
        this.setState({ adminMobile: e.target.value });
    }

    render() {
        return (
            <div>
                <Nav /><br />
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Edit Profile</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>First Name</label>
                                        <input placeholder="First Name" name="adminFirstName"
                                            className="form-control" value={this.state.adminFirstName}
                                            onChange={this.handleChangeFirstName} />
                                        <div className="text-danger">{this.state.errors.adminFirstName}</div>
                                    </div>
                                    <div className="form-group">
                                        <label>Last Name</label>
                                        <input placeholder="Last Name" name="adminLastName"
                                            className="form-control" value={this.state.adminLastName}
                                            onChange={this.handleChangeLastName} />
                                        <div className="text-danger">{this.state.errors.adminLastName}</div>
                                    </div>
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input placeholder="Email" name="adminEmail"
                                            className="form-control" value={this.state.adminEmail}
                                            onChange={this.handleChangeEmail} />
                                        <div className="text-danger">{this.state.errors.adminEmail}</div>
                                    </div>
                                    <div className="form-group">
                                        <label>Mobile</label>
                                        <input placeholder="Mobile" name="mobile"
                                            className="form-control" value={this.state.adminMobile}
                                            onChange={this.handleChangeMobile} />
                                        <div className="text-danger">{this.state.errors.adminMobile}</div>
                                    </div>

                                    <button className="btn btn-success" onClick={this.updateAdmin}>Update</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }

}