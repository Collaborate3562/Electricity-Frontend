import domtoimage from 'dom-to-image';
import jsPDF from 'jspdf';
import React, { Component } from 'react';
import BillService from '../../services/BillService';
import '../../css/Bill.css'
import Nav from '../Navbar';
import { Link } from 'react-router-dom';
export default class AdminViewSingleBill extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.match.params.id,
            custId: '',
            firstName: '',
            lastName: '',
            email: '',
            mobile: '',
            address: '',
            state: '',
            city: '',
            pincode: '',
            bill: {},
            add: 100
        }

    }
    createPDF() {
        const input = document.getElementById('pdfdiv');
        const pdf = new jsPDF();
        if (pdf) {
            domtoimage.toPng(input)
                .then(imgData => {
                    pdf.addImage(imgData, 'PNG', 10, 10, 200, 250);
                    pdf.save('download.pdf');
                });
        }

    }

    componentDidMount() {
        BillService.getBillById(this.state.id).then(res => {
            this.setState({ bill: res.data });

            this.setState({
                custId: this.state.bill.customer.id,
                firstName: this.state.bill.customer.firstName,
                lastName: this.state.bill.customer.lastName,
                email: this.state.bill.customer.email,
                mobile: this.state.bill.customer.mobile,
                address: this.state.bill.customer.address,
                state: this.state.bill.customer.state,
                city: this.state.bill.customer.city,
                pincode: this.state.bill.customer.pincode
            });
        })
    }
    

    render() {
        return (
            <div >
                <Nav />
                <br />
                <button onClick={this.createPDF} className="button-download" style={{ marginLeft: "80%" }}>  Download Bill</button>
                <Link to='/adminDashboard'><button className="btn-back" >Back</button></Link>

                <div id="pdfdiv" >
                    <h2 className="text-center">Electricity Billing System</h2>
                    <div className="card col-md-6 offset-md-3" >
                        <br />
                        <h3 className="text-center" class="card-header" >Bill</h3>
                        {/*<hr className="line"/>*/}
                        <div className="card-body">
                            <table className="table table-striped table-bordered table-hover ">
                                <tr>
                                    <td> <b>Consumer Name: </b> </td>
                                    <td>{this.state.firstName} {this.state.lastName} </td>
                                </tr>
                                <tr>
                                    <td><b>Address:</b> </td>
                                    <td>{this.state.address}, {this.state.state}, {this.state.city} - {this.state.pincode}</td>
                                </tr>
                                <tr>
                                    <td><b>Meter Id:</b> </td>
                                    <td>{this.state.bill.meterId}</td>
                                </tr>
                                <tr>
                                    <td><b>Customer Id:</b> </td>
                                    <td>{this.state.custId}</td>
                                </tr>
                                <tr>
                                    <td><b>Bill for Month:</b> </td>
                                    <td>{this.state.bill.month}</td>
                                </tr>

                            </table>

                            <table className="table table-striped table-bordered table-hover">
                                <tr>
                                    <td>    </td>
                                    <td>    </td>
                                    <td><b> Rs.Ps</b></td>
                                </tr>
                                <tr>
                                    <td><b>Due Date:</b> </td>
                                    <td>{this.state.bill.endDate}</td>

                                    <td>{parseFloat(this.state.bill.totalCharge).toFixed(2)}</td>
                                </tr>
                                <tr>
                                    <td><b>If Paid by this Date:</b></td>
                                    <td>{this.state.bill.startDate}</td>
                                    <td>{parseFloat(this.state.bill.totalCharge).toFixed(2)}</td>
                                </tr>
                                <tr>
                                    <td><b>If Paid After this Date:</b></td>
                                    <td>{this.state.bill.endDate}</td>
                                    
                                    <td>{parseFloat(this.state.bill.totalCharge+(this.state.add)).toFixed(2)}</td>
                                </tr>
                            </table>
                            <table className="table table-striped table-bordered table-hover">
                                <tr>
                                    <td><b>Bill No: {this.state.bill.id}</b>    </td>
                                    <td><b> Rs.Ps</b></td>
                                </tr>
                                <tr>
                                    <td>Fixed Charge per unit:</td>
                                    <td>{parseFloat(this.state.bill.fixCharge).toFixed(2)}</td>
                                </tr>
                                <tr>
                                    <td>Total Unit:</td>
                                    <td>{this.state.bill.totalUnit}</td>
                                </tr>
                                <tr>
                                    <td>Total Charges:</td>
                                   
                                    <td>{parseFloat(this.state.bill.totalCharge).toFixed(2)}</td>
                                </tr>

                            </table>
                            <table className="table table-striped table-bordered table-hover">
                                <thead>
                                    <tr>
                                        <th>Meter No.</th>
                                        <th>Previous Reading</th>
                                        <th>Current Reading</th>

                                    </tr>
                                    <tr>
                                        <td>{this.state.bill.meterId}</td>
                                        <td>{this.state.bill.previousReading}</td>
                                        <td>{this.state.bill.currentReading}</td>
                                    </tr>
                                </thead>

                            </table>
                            <div className="row">
                                <label>Bill ID:  {this.state.bill.id}</label>
                            </div>
                            <div className="row">
                                <lable> Bill Amount: {parseFloat(this.state.bill.totalCharge).toFixed(2)}</lable>
                            </div>

                            <div className="row">
                                <lable> Payment Status: {this.state.bill.paymentStatus}</lable>
                            </div>

                        </div>
                    

                </div>
                <p className="text-sm" className="left-right-margin">*For queries related to your online payment transactions, please contact <u>eletricitysystem2021@gmail.com </u></p>
                <p className="text-sm" className="left-right-margin"> Any unauthorized changes made in the bills will lead to non-acceptance of the bill</p>
                </div>
            </div>

        );
    }
}