import dateFormat from 'dateformat';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PaymentService from '../../services/PaymentService';
import Nav from '../Navbar';
import '../../css/buttons.css'
export default class CustomerPaymentHistory extends Component{
    constructor(props) {
        super(props)

        this.state = {
            payments: [],

        };

    }
    // componentDidMount() {

    //     let details = localStorage.getItem('customer');
    //     details = JSON.parse(details);
    //     let citizenCardId = details.citizenCardId;


    //     PayementService.getPaymentOfCustomer(citizenCardId).then((res) => {
    //         this.setState({ payments: res.data });
    //     });
    // }
    dateFormatHandler = (paymentDate) => {
        return dateFormat(paymentDate, "dd-mm-yyyy h:MM TT");
    }
       
    render() {
        return (
            <div>
                <Nav/><br/>
                <h3 className="text-center">Payment History</h3>
                <div className="container">
                <Link href="/dashboard" to="/dashboard"><button className="back">Back</button></Link>
                    <table className="table table-striped table-bordered table-hover ">
                        <thead className="thead-dark">
                            <tr>
                                <th>Payment ID</th>
                                <th>Card Number</th>
                                <th>Payment Amount</th>
                                <th>Payment Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.payments.map(
                                    payment =>
                                        <tr key={payment.id}>
                                            <td>{payment.id}</td>
                                            <td>{payment.cardNumber}</td>
                                            <td>{payment.billAmount}</td>
                                            <td>{this.dateFormatHandler(payment.paymentDate)}</td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }


}