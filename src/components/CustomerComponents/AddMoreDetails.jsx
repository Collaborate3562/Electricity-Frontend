import React, { Component } from 'react';
import axios from 'axios';
import CustomerServices from '../../services/CustomerServices';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import Nav from '../Navbar';
export default class AddMoreDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            address: '',
            state: '',
            city: '',
            pincode: '',
            errors: {}
        }
        this.handleChangeAddress = this.handleChangeAddress.bind(this);
        this.handleChangeState = this.handleChangeState.bind(this);
        this.handleChangeCity = this.handleChangeCity.bind(this);
        this.handleChangePinCode = this.handleChangePinCode.bind(this);
        this.submitDetails = this.submitDetails.bind(this);
    }

    handleChangeAddress(e) {
        this.setState({ address: e.target.value });
    }
    handleChangeState(e) {
        this.setState({ state: e.target.value });
    }
    handleChangeCity(e) {
        this.setState({ city: e.target.value });
    }
    handleChangePinCode(e) {
        this.setState({ pincode: e.target.value });
    }
    componentDidMount() {
        let data = localStorage.getItem('customer');
        data = JSON.parse(data);
        let citizenCardId = data.citizenCardId;
        CustomerServices.getCustIdByEmail(citizenCardId).then(res => {
            this.setState({ id: parseInt(res.data) });

        });
    }
    submitDetails = (e) => {
        e.preventDefault();
        if (this.validateForm()) {
            console.log(this.state);
            var apiBaseUrl = "http://localhost:8081/springfox/api/customer/addMore/" + this.state.id;
            var data = {
                "address": this.state.address,
                "state": this.state.state,
                "city": this.state.city,
                "pincode": this.state.pincode
            }
            var headers = {

                'Content-Type': 'application/json',

            }
            console.log(data);
            axios.put(apiBaseUrl, data, { headers: headers }).then(function (response) {

                console.log(response);
                window.location = "/dashboard"
                alert("details added..")

            }).catch(function (error) {
                alert(error.response.data.message);
                console.log(error);

            });
        }
    }

    validateForm() {

        let errors = {};

        let formIsValid = true;
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
    render() {
        return (
            <div>
                <Nav/>
                <div className="container" >

                    <div className="row" >

                        <div className="col-md-4 login-sec">

                            <h2 className="text-center">Add Details</h2>

                            <Form method="post" name="submitDetails" onSubmit={this.submitDetails}>

                                <FormGroup>

                                    <Label for="exampleName">Address</Label>

                                    <Input type="textarea" name="address" id="address" value={this.state.address} onChange={this.handleChangeAddress} placeholder="Enter your address" />

                                    <div className="text-danger">{this.state.errors.address}</div>

                                </FormGroup>
                                <FormGroup>

                                    <Label for="exampleName">State</Label>

                                    <Input type="text" name="state" id="state" value={this.state.state} onChange={this.handleChangeState} placeholder="Enter your state" />

                                    <div className="text-danger">{this.state.errors.state}</div>

                                </FormGroup>
                                <FormGroup>

                                    <Label for="exampleName">City</Label>

                                    <Input type="text" name="city" id="city" value={this.state.city} onChange={this.handleChangeCity} placeholder="Enter your city" />

                                    <div className="text-danger">{this.state.errors.city}</div>

                                </FormGroup>
                                <FormGroup>

                                    <Label for="exampleName">Pin Code</Label>

                                    <Input type="text" name="pincode" id="pincode" value={this.state.pincode} onChange={this.handleChangePinCode} placeholder="Enter your pin code" />

                                    <div className="text-danger">{this.state.errors.pincode}</div>

                                </FormGroup>
                                <div className="d-flex justify-content-center mt-3 login_container">

                                    <Button type="submit" className="btn btn-submit">Submit</Button>

                                </div>

                            </Form>
                        </div>
                    </div>
                </div>


            </div>
        )
    }


}