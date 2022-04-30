import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Form, FormGroup, Input, Label } from 'reactstrap';
import AdminServices from '../../services/AdminServices';
import Nav from '../Navbar';

export default class CreateBill extends Component {


    constructor(props) {
        super(props);
        this.state = {

            meterId: '',
            // fixCharge: '',
            energyConsumption: '',
            amountEnergyConsumption:'',
            sum: '',
            //paymentStatus: '',
            // startDate: '',
            // endDate: '',
           // month: '',
            custId: '',
            adminId: 0,
            errors: {}


        }
        this.handleChangeMeterId = this.handleChangeMeterId.bind(this);
        this.handleChangeAmountEnergyConsumption = this.handleChangeAmountEnergyConsumption.bind(this);
        this.handleChangeEnergyConsumption = this.handleChangeEnergyConsumption.bind(this);
        this.handleChangeSum = this.handleChangeSum.bind(this);
        this.handleChangePaymentStatus = this.handleChangePaymentStatus.bind(this);
        // this.handleChangeStartDate = this.handleChangeStartDate.bind(this);
        // this.handleChangeEndDate = this.handleChangeEndDate.bind(this);
         this.handleChangeMonth = this.handleChangeMonth.bind(this);
        this.handleChangeCustId = this.handleChangeCustId.bind(this);


        this.createBill = this.createBill.bind(this);
    }
    // componentDidMount() {
    //     let details = localStorage.getItem('admin');
    //     details = JSON.parse(details);
    //     let email = details.adminEmail;
    //     AdminServices.getAdminIdByEmail(email).then(res => {
    //         this.setState({ adminId: parseInt(res.data) });

    //     });

    // }
    handleChangeMeterId(e) {
        this.setState({ meterId: e.target.value });
    }
    handleChangeAmountEnergyConsumption(e) {
        this.setState({ amountEnergyConsumption: e.target.value });
    }
    handleChangeEnergyConsumption(e) {
        this.setState({ energyConsumption: e.target.value });
    }
    handleChangeSum(e) {
        this.setState({ sum: e.target.value });
    }
    handleChangePaymentStatus(e) {
        this.setState({ paymentStatus: e.target.value });
    }
    // handleChangeStartDate(e) {
    //     this.setState({ startDate: e.target.value });
    // }
    // handleChangeEndDate(e) {
    //     this.setState({ endDate: e.target.value });
    // }
    handleChangeMonth(e) {
        this.setState({ month: e.target.value });
    }
    handleChangeCustId(e) {
        this.setState({ custId: e.target.value });
    }


    createBill(e) {

        e.preventDefault();

        if (this.validateForm()) {
            console.log(this.state);

            var apiBaseUrl = "http://localhost:8080/api/billing/save";

            var data = {
                "energyMeter": this.state.meterId,
                "energyConsumption": this.state.energyConsumption,
                "amountEnergyConsumption": this.state.amountEnergyConsumption,
                "sum": this.state.sum,
                "paymentStatus": this.state.paymentStatus,
                // "startDate": this.state.startDate,
                // "endDate": this.state.endDate,
                //  "month": this.state.month,
                // "custId": this.state.custId,
                // "adminId": this.state.adminId

            }

            // var headers = {

            //     'Content-Type': 'application/json',

            // }
            var token = window.localStorage.getItem("token");
            console.log(token);
      
            var headers = {
                'Content-Type': 'application/json',
                'Authorization':`Bearer ${token}`
            }
    

            console.log(data);

            axios.post(apiBaseUrl, data, { headers: headers }).then(function (response) {
                

                console.log(response);
                window.location = "/adminDashboard"
                alert("Bill Created")

            }).catch(function (error) {
                alert(error.response.data.message);
                console.log(error);

            });

        }

    }
    validateForm() {
        let errors = {};
        let formIsValid = true;
        if (!this.state.meterId) {

            formIsValid = false;
            errors["meterId"] = "*Please Enter Meter Id.";

        }
        else if (typeof this.state.meterId !== "undefined") {

            //regular expression for meterId validation

            if (!this.state.meterId.match(/^[0-9]*$/)) {
                formIsValid = false;
                errors["meterId"] = "*Please Enter valid Meter Id";
            }

        }
        if (!this.state.amountEnergyConsumption) {

            formIsValid = false;
            errors["amountEnergyConsumption"] = "*Please Enter Amount Energy Consumption.";

        }
        // else if (typeof this.state.fixCharge !== "undefined") {

        //     //regular expression for fixCharge validation

        //     if (!this.state.fixCharge.match(/^[0-9]*$/)) {
        //         formIsValid = false;
        //         errors["amountEnergyConsumption"] = "*Please Enter Amount Energy Consumption";
        //     }

        // }

        else if (typeof this.state.energyConsumption !== "undefined") {

            //regular expression for fixCharge validation

            if (!this.state.energyConsumption.match(/^[0-9]*$/)) {
                formIsValid = false;
                errors["energyConsumption"] = "*Please Enter Energy Consumption";
            }

        }
        if (!this.state.sum) {

            formIsValid = false;
            errors["sum"] = "*Please Enter Sum.";

        }
        // else if (typeof this.state.previousReading !== "undefined") {

        //     //regular expression for fixCharge validation

        //     if (!this.state.previousReading.match(/^[0-9]*$/)) {
        //         formIsValid = false;
        //         errors["previousReading"] = "*Please Enter valid Previous Reading";
        //     }

        // }
        // if (!this.state.currentReading) {

        //     formIsValid = false;
        //     errors["currentReading"] = "*Please Enter Current Reading.";

        // }
        // else if (typeof this.state.currentReading !== "undefined") {

        //     //regular expression for fixCharge validation

        //     if (!this.state.currentReading.match(/^[0-9]*$/)) {
        //         formIsValid = false;
        //         errors["currentReading"] = "*Please Enter valid Current Reading";
        //     }

        // }
        // if (!this.state.startDate) {

        //     formIsValid = false;
        //     errors["startDate"] = "*Please Enter Start Date.";

        // }
        // if (!this.state.endDate) {

        //     formIsValid = false;
        //     errors["endDate"] = "*Please Enter End Date.";

        // }
        // if (!this.state.month) {

        //     formIsValid = false;
        //     errors["month"] = "*Please Enter Month.";

        // }
        // if (!this.state.custId) {

        //     formIsValid = false;
        //     errors["custId"] = "*Please Enter Customer Id.";

        // }
        // else if (typeof this.state.custId !== "undefined") {

        //     //regular expression for fixCharge validation

        //     if (!this.state.custId.match(/^[0-9]*$/)) {
        //         formIsValid = false;
        //         errors["custId"] = "*Please Enter valid Customer Id";
        //     }

        // }
        // if (!this.state.paymentStatus) {

        //     formIsValid = false;
        //     errors["paymentStatus"] = "*Please Enter Payment Status.";

        // }
        this.setState({

            errors: errors

        });

        return formIsValid;

    }

    render() {
        return (
            <div>
                <Nav />

                <div className="container" >

                    <div className="row" >

                        <div className="col-md-4 login-sec">

                            <h2 className="text-center">Create Bill</h2>

                            <Form method="post" name="createBillForm" onSubmit={this.createBill}>

                                <FormGroup>

                                    <Label>Meter Id</Label>

                                    <Input type="text" name="meterId" id="meterId" placeholder="Enter meter Id" value={this.state.meterId.id} onChange={this.handleChangeMeterId} />
                                    <div className="text-danger">{this.state.errors.meterId}</div>
                                </FormGroup>

                                <FormGroup>

                                    <Label>Amount Energy Consumption</Label>

                                    <Input type="number" name="amountEnergyConsumption" id="amountEnergyConsumption" placeholder="Enter Amount Energy Consumption" value={this.state.amountEnergyConsumption} onChange={this.handleChangeAmountEnergyConsumption} />
                                    
                                    <div className="text-danger">{this.state.errors.amountEnergyConsumption}</div>

                                </FormGroup>

                                <FormGroup>

                                    <Label>Energy Consumption</Label>

                                    <Input type="number" name="energyConsumption" id="energyConsumption" placeholder="Enter Energy Consumption" value={this.state.energyConsumption} onChange={this.handleChangeEnergyConsumption} />
                                    <div className="text-danger">{this.state.errors.energyConsumption}</div>

                                </FormGroup>
                                <FormGroup>

                                    <Label>Sum</Label>

                                    <Input type="number" name="sum" id="sum" placeholder="Enter Sum" value={this.state.sum} onChange={this.handleChangeSum} />
                                    <div className="text-danger">{this.state.errors.sum}</div>
                                </FormGroup>
                                {/* <FormGroup>

                                    <Label>Payment Status</Label>

                                    <select style={{ width: '270px', height: '40px', borderRadius: '3%', border: 'white' }} type="text" name="paymentStatus" id="paymentStatus" placeholder="Enter Payment Status" value={this.state.paymentStatus} onChange={this.handleChangePaymentStatus}>
                                        <option></option>
                                        <option value="Unpaid">Unpaid</option>
                                    </select>
                                    <div className="text-danger">{this.state.errors.paymentStatus}</div>

                                </FormGroup> */}
                                {/* <FormGroup>

                                    <Label>Start Date</Label>

                                    <Input type="date" name="startDate" id="startDate" placeholder="Enter Start Date" value={this.state.startDate} onChange={this.handleChangeStartDate} />
                                    <div className="text-danger">{this.state.errors.startDate}</div>

                                </FormGroup>

                                <FormGroup>

                                    <Label>Due Date</Label>

                                    <Input type="date" name="endDate" id="endDate" placeholder="Enter Due Date" value={this.state.endDate} onChange={this.handleChangeEndDate} />
                                    <div className="text-danger">{this.state.errors.endDate}</div>
                                </FormGroup> */}
                                {/* <FormGroup>

                                    <Label>Bill For the Month</Label>


                                    <select style={{ width: '270px', height: '40px', borderRadius: '3%', border: 'white' }} name="month" id="month" placeholder="Bill For the Month" value={this.state.month} onChange={this.handleChangeMonth}>
                                        <option value="January">January</option>
                                        <option value="February">February</option>
                                        <option value="March">March</option>
                                        <option value="April">April</option>
                                        <option value="May">May</option>
                                        <option value="June">June</option>
                                        <option value="July">July</option>
                                        <option value="August">August</option>
                                        <option value="September">September</option>
                                        <option value="October">October</option>
                                        <option value="November">November</option>
                                        <option value="December">December</option></select>

                                    <div className="text-danger">{this.state.errors.month}</div>
                                </FormGroup> */}

                                {/* <FormGroup>

                                    <Label>Customer Id</Label>

                                    <Input type="number" name="custId" id="custId" placeholder="Enter Customer Id" value={this.state.custId} onChange={this.handleChangeCustId} />
                                    <div className="text-danger">{this.state.errors.custId}</div>
                                </FormGroup> */}


                                <div className="d-flex justify-content-center mt-3 login_container">

                                    <button type="submit" className="btn btn-info" onClick={this.createBill}>Create</button>
                                    <Link href="/adminDashboard" to="/adminDashboard"><button className="btn btn-secondary" style={{ marginLeft: "12px" }}>Back</button></Link>

                                </div>

                            </Form>

                        </div>

                        <div className="col-md-8 banner-sec"></div>

                    </div>

                </div>

            </div>
        )
    }
}
