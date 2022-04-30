import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import BillService from '../../services/BillService';
import Nav from '../Navbar'
export default class CustomerPayment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            billId: this.props.match.params.id,
            billAmount: '',
            loading: true,
            errors: {}
        }
        this.handleChangeCardNumber = this.handleChangeCardNumber.bind(this);
        //this.handleChangeCardNumber = this.handleChangCardNumber.bind(this);
        this.handleChangeCardHolderName = this.handleChangeCardHolderName.bind(this);
        this.handleChangeCvv = this.handleChangeCvv.bind(this);
        this.handleChangeCardExpiryDate = this.handleChangeCardExpiryDate.bind(this);
        // this.handleChangeBillAmount = this.handleChangeBillAmount.bind(this);

        this.submituserPaymentForm = this.submituserPaymentForm.bind(this);

    }
    componentDidMount() {
        BillService.getBillById(this.state.billId).then((res) => {
            let bill = res.data;
            this.setState({
                billAmount: bill.totalCharge
            });
        });

    }
    handleChangeCardNumber(e) {
        this.setState({ cardNumber: e.target.value });
    }
    handleChangeCardHolderName(e) {
        this.setState({ cardHolderName: e.target.value });
    }
    handleChangeCvv(e) {
        this.setState({ cvv: e.target.value });
    }
    handleChangeCardExpiryDate(e) {
        this.setState({ cardExpiryDate: e.target.value });
    }
    // handleChangeBillAmount(e) {
    //     this.setState({ billAmount: e.target.value });
    // }

    submituserPaymentForm(e) {

        e.preventDefault();

        if (this.validateForm()) {

            console.log(this.state);

            var apiBaseUrl = "http://localhost:8081/springfox/api/payment/pay/" + this.state.billId;

            var data = {
                "cardNumber": this.state.cardNumber,
                "cardHolderName": this.state.cardHolderName,
                "cvv": this.state.cvv,
                "cardExpiryDate": this.state.cardExpiryDate,
                "billAmount": this.state.billAmount
            }
            var headers = {
                'Content-Type': 'application/json',
            }
            console.log(data);
            axios.post(apiBaseUrl, data, { headers: headers }).then(function (response) {
                console.log(response);
                window.location = "/listBills";
                alert("Payment is Successfull!! ")
            }).catch(function (error) {
                alert(error.response.data.message);
                console.log(error);
            });

        }

    }
    cancel() {
        this.props.history.push(`/listBills`);
    }


    validateForm() {

        let errors = {};

        let formIsValid = true;
        if (this.state.cardNumber.length !== 12) {

            formIsValid = false;

            errors["cardNumber"] = "*Please enter your 12 digit card number.";

        }

        if (!this.state.cardHolderName) {

            formIsValid = false;

            errors['cardHolderName'] = "Required";
        }
        if (!this.state.cardExpiryDate) {

            formIsValid = false;

            errors['cardExpiryDate'] = "Required";
        }

        if (!this.state.cvv) {


            formIsValid = false;

            errors['cvv'] = "Required";
        } else if (this.state.cvv.length !== 3) {

            formIsValid = false;

            errors['cvv'] = "CVV should be atleast 3 digits";
        }

        if (!this.state.billAmount) {

            formIsValid = false;

            errors['billAmount'] = "Required";
        } else if (this.state.billAmount < 1) {

            formIsValid = false;

            errors['billAmount'] = "Amount cannot be less than 1";
        }

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

                            <h2 className="text-center">Customer Payment</h2>

                            <Form method="post" name="userPaymentForm" onSubmit={this.submituserPaymentForm}>

                                <FormGroup>

                                    <Label for="exampleNumber">Card Number</Label>

                                    <Input type="number" name="cardNumber" id="cardNumber" value={this.state.cardNumber} onChange={this.handleChangeCardNumber} placeholder="Enter your card Number" />

                                    <div className="text-danger">{this.state.errors.cardNumber}</div>

                                </FormGroup>
                                <FormGroup>

                                    <Label for="exampleName">Card Holder Name</Label>

                                    <Input type="text" name="cardHolderName" id="cardHolderName" value={this.state.cardHolderName} onChange={this.handleChangeCardHolderName} placeholder="Enter your card holder name" />

                                    <div className="text-danger">{this.state.errors.cardHolderName}</div>

                                </FormGroup>

                                <FormGroup>

                                    <Label for="exampleNumber">CVV</Label>

                                    <Input type="number" name="cvv" id="cvv" value={this.state.cvv} onChange={this.handleChangeCvv} placeholder="Enter cvv" />

                                    <div className="text-danger">{this.state.errors.cvv}</div>

                                </FormGroup>

                                <FormGroup>

                                    <Label for="exampleDate">Expiry Date</Label>

                                    <Input type="date" name="cardExpiryDate" id="cardExpiryDate" value={this.state.cardExpiryDate} onChange={this.handleChangeCardExpiryDate} />

                                    <div className="text-danger">{this.state.errors.cardExpiryDate}</div>

                                </FormGroup>



                                <FormGroup>

                                    <Label for="exampleNumber">Amount</Label>

                                    <Input name="billAmount" id="billAmount" value={this.state.billAmount} />

                                    <div className="text-danger">{this.state.errors.billAmount}</div>

                                </FormGroup>

                                <div className="d-flex justify-content-center mt-3 login_container">

                                    <Button type="submit" className="btn btn-success">Pay</Button>
                                    <Link to="/listBills"><Button className="btn btn-danger" style={{ marginLeft: "10px" }}>Cancel</Button></Link>

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