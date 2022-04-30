import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CustomerServices from '../../services/CustomerServices';
import Nav from '../Navbar';

export default class SeeProfile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: 0,
            customer: {}
        }
        this.editProfile = this.editProfile.bind(this);

    }
    componentDidMount() {
        
        let details = localStorage.getItem('customer');
        details = JSON.parse(details);
        let citizenCardId = details.citizenCardId;
        CustomerServices.getCurrentCostumer().then(res => {
            this.setState({ customer: res.data });

            // CustomerServices.getCustomerById(this.state.id).then(res => {
            //     this.setState({ customer: res.data })
            // });

        });
    }
    editProfile(id) {
        this.props.history.push(`/update/${this.state.id}`)
    }

    render() {
        return (
            <div>
                <Nav/><br/>
                <h3 className="text-center">Your Profile</h3>
                <div className="card col-md-6 offset-md-3">
                    <div className="card-body">
                        <div className="row">
                            <label>First Name:  {this.state.customer.firstName}</label>
                        </div>
                        <div className="row">
                            <label>Last Name: {this.state.customer.lastName} </label>
                            <div></div>
                        </div>
                      
                        <div className="row">
                            <label>Pin Code : {this.state.customer.pincode}</label>
                            <div></div>
                        </div>
                    </div>
                </div>
                <br />
                <div className="col-md-6 offset-md-3">
                    <Link href="/update" to="/update"><button onClick={() => this.editProfile(this.state.id)} className="btn btn-primary">Edit Profile</button></Link>
                    <Link href="/dashboard" to="/dashboard"><button className="btn btn-secondary" style={{ marginLeft: "10px" }}> Back</button></Link>
                </div>
            </div>

        );
    }
}
