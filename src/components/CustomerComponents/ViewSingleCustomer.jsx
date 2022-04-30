import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CustomerServices from '../../services/CustomerServices';
import Nav from '../Navbar';
export default class ViewSingleCustomer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.match.params.id,
            customer: {}
        }

    }

    componentDidMount() {
        CustomerServices.getCustomerById(this.state.id).then(res => {
            this.setState({ customer: res.data })
        });
    }

    render() {
        return (
            <div>
                <Nav/><br/>
                <div className="card col-md-6 offset-md-3">
                    <h3 className="text-center">Profile</h3>
                    <div className="card-body">
                        <div className="row">
                            <label>Card Number:  {this.state.customer.firstName}</label>
                        </div>
                        <div className="row">
                            <label>First Name: {this.state.customer.lastName} </label>
                            <div></div>
                        </div>
                        <div className="row">
                            <label>Last Name : {this.state.customer.email} </label>
                            <div></div>
                        </div>
                        <div className="row">
                            <label>Gender : {this.state.customer.mobile}</label>
                            <div></div>
                        </div>
                        <div className="row">
                            <label>BirthDate : {this.state.customer.address} </label>
                            <div></div>
                        </div>
                        <div className="row">
                            <label>MaritalStatus : {this.state.customer.state} </label>
                            <div></div>
                        </div>
                        <div className="row">
                            <label>PhotoId : {this.state.customer.city}</label>
                            <div></div>
                        </div>
                        <div className="row">
                            <label>Address: {this.state.customer.pincode}</label>
                            <div></div>

                            </div>
                        <div className="row">
                            <label>Parents: {this.state.customer.pincode}</label>
                            <div></div>

                            </div>
                        <div className="row">
                            <label>City: {this.state.customer.pincode}</label>
                            <div></div>
                            </div>
                        <div className="row">
                            <label>Active: {this.state.customer.pincode}</label>
                            <div></div>

                            
                        </div>
                    </div>
                </div>
                <br />
                <div className="col-md-6 offset-md-3">

                    <Link href="/customerList" to="/customerList"><button className="btn btn-secondary" style={{ marginLeft: "10px" }}> Back</button></Link>
                </div>
            </div>

        );
    }
}