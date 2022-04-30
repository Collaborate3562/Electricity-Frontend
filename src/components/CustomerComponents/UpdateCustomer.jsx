import React, { Component } from 'react';
import CustomerServices from '../../services/CustomerServices';
import Nav from '../Navbar'
export default class UpdateCustomer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            firstName: '',
            lastName: '',
        
            pincode: '',
            isEnabled:'',
            errors: {}
        }
        this.handleChangeFirstName = this.handleChangeFirstName.bind(this);
        this.handleChangeLastName = this.handleChangeLastName.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangeMobile = this.handleChangeMobile.bind(this);
        this.handleChangeAddress = this.handleChangeAddress.bind(this);
        this.handleChangeState = this.handleChangeState.bind(this);
        this.handleChangeCity = this.handleChangeCity.bind(this);
        this.handleChangePinCode = this.handleChangePinCode.bind(this);
        this.updateCustomer = this.updateCustomer.bind(this);
    }
    componentDidMount() {
        let details = localStorage.getItem('customer');
        details = JSON.parse(details);
        let citizenCardId = details.citizenCardId;
        CustomerServices.getCustomerById(citizenCardId).then(res => {
            this.setState({ id: parseInt(res.data) });
            CustomerServices.getCustomerById(this.state.id).then((res) => {
                let customer = res.data;
                this.setState({
                    id: customer.id,
                    firstName: customer.firstName,
                    lastName: customer.lastName,
                   
                    pincode: customer.pincode,
                    isEnabled:true
                });
            });

        });

    }

    updateCustomer = (e) => {
        e.preventDefault();
        if (this.validateForm()) {
            let customer = {
                id: this.state.id, firstName: this.state.firstName, lastName: this.state.lastName,
                email: this.state.email, mobile: this.state.mobile, address: this.state.address, city: this.state.city,
                pincode: this.state.pincode,state:this.state.state,password:this.state.password
            };
            CustomerServices.updateCustomerProfile(customer).then(function (response) {
                console.log(response);
                alert("data updated");
                window.location = "/profile";
            }).catch(function (error) {
                alert(error.response.data.message);
                 console.log(error);

            });
        }
    }
    validateForm() {
        let errors = {};
        let formIsValid = true;
        if (!this.state.firstName) {

            formIsValid = false;

            errors["firstName"] = "*Please enter your first name.";

        }
        else if (typeof this.state.firstName !== "undefined") {

            //regular expression for email validation

            if (!this.state.firstName.match(/^[A-Z][a-zA-Z ]*$/)) {

                formIsValid = false;

                errors["firstName"] = "*Please enter first letter capital and alphabet characters only.";
            }

        }
        if (!this.state.lastName) {

            formIsValid = false;

            errors["lastName"] = "*Please enter your last name.";

        }
        else if (typeof this.state.lastName !== "undefined") {

            //regular expression for email validation

            if (!this.state.lastName.match(/^[A-Z][a-zA-Z ]*$/)) {

                formIsValid = false;

                errors["lastName"] = "*Please enter first letter capital and alphabet characters only.";
            }

        }

        if (!this.state.email) {

            formIsValid = false;

            errors["email"] = "*Please enter your email-ID.";

        }

        else if (typeof this.state.email !== "undefined") {

            //regular expression for email validation

            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

            if (!pattern.test(this.state.email)) {

                formIsValid = false;

                errors["email"] = "*Please enter valid email-ID.";

            }

        }

        if (!this.state.mobile) {

            formIsValid = false;

            errors["mobile"] = "*Please enter your mobile no.";

        }

        else if (typeof this.state.mobile !== "undefined") {

            if (!this.state.mobile.match(/^[7-9][0-9]{9}$/)) {

                formIsValid = false;

                errors["mobile"] = "*Please enter valid mobile no.";

            }

        }
        if (!this.state.address) {

            formIsValid = false;

            errors["address"] = "*Please enter your address.";

        }
        if (!this.state.state) {

            formIsValid = false;

            errors["state"] = "*Please enter your state.";

        }
        if (!this.state.city) {

            formIsValid = false;

            errors["city"] = "*Please enter your city.";

        }
        if (!this.state.pincode) {

            formIsValid = false;

            errors["pincode"] = "*Please enter your pincode.";

        }
        this.setState({
            errors: errors
        });
        return formIsValid;
    }

    cancel() {
        this.props.history.push('/profile');
    }
    handleChangeFirstName = (e) => {
        this.setState({ firstName: e.target.value });
    }
    handleChangeLastName = (e) => {
        this.setState({ lastName: e.target.value });
    }
    handleChangeEmail = (e) => {
        this.setState({ email: e.target.value });
    }
    handleChangeMobile = (e) => {
        this.setState({ mobile: e.target.value });
    }
    handleChangeAddress = (e) => {
        this.setState({ address: e.target.value });
    }
    handleChangeState = (e) => {
        this.setState({ state: e.target.value });
    }
    handleChangeCity = (e) => {
        this.setState({ city: e.target.value });
    }
    handleChangePinCode = (e) => {
        this.setState({ pincode: e.target.value });
    }

    render() {
        return (
            <div>
                <Nav/><br/>
                <div className="container">
                <h3 className="text-center">Edit Profile</h3>
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>First Name</label>
                                        <input placeholder="First Name" name="firstName"
                                            className="form-control" value={this.state.firstName}
                                            onChange={this.handleChangeFirstName} />
                                        <div className="text-danger">{this.state.errors.firstName}</div>
                                    </div>
                                    <div className="form-group">
                                        <label>Last Name</label>
                                        <input placeholder="Last Name" name="lastName"
                                            className="form-control" value={this.state.lastName}
                                            onChange={this.handleChangeLastName} />
                                        <div className="text-danger">{this.state.errors.lastName}</div>
                                    </div>
                                  
                                    <div className="form-group">
                                        <label>Address</label>
                                        <input placeholder="Address" name="address"
                                            className="form-control" value={this.state.address}
                                            onChange={this.handleChangeAddress} />
                                        <div className="text-danger">{this.state.errors.address}</div>
                                    </div>
                                  
                                    <button className="btn btn-success" onClick={this.updateCustomer}>Update</button>
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
