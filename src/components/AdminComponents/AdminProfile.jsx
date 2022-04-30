import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AdminServices from '../../services/AdminServices';
import Nav from '../Navbar'

export default class AdminProfile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: 0,
            admin: {}
        }
        this.editProfile = this.editProfile.bind(this);

    }
    componentDidMount() {
        let details = localStorage.getItem('admin');
        details = JSON.parse(details);
        let adminEmail = details.adminEmail;
        AdminServices.getAdminIdByEmail(adminEmail).then(res => {
            this.setState({ id: parseInt(res.data) });

            AdminServices.getById(this.state.id).then(res => {
                this.setState({ admin: res.data })
            });

        });
    }
    editProfile(id) {
        this.props.history.push(`/adminUpdate/${this.state.id}`)
    }

    render() {
        return (
            <div>
                <Nav />
                <br />
                <div className="card col-md-6 offset-md-3">
                    <h3 className="text-center">Your Profile</h3>
                    <div className="card-body">
                        <div className="row">
                            <label>First Name:  {this.state.admin.adminFirstName}</label>
                        </div>
                        <div className="row">
                            <label>Last Name: {this.state.admin.adminLastName} </label>
                            <div></div>
                        </div>
                        <div className="row">
                            <label>Email : {this.state.admin.adminEmail} </label>
                            <div></div>
                        </div>
                        <div className="row">
                            <label>Mobile : {this.state.admin.adminMobile}</label>
                            <div></div>
                        </div>

                    </div>
                </div>
                <br />
                <div className="col-md-6 offset-md-3">
                    <Link href="/adminUpdate" to="/adminUpdate"><button onClick={() => this.editProfile(this.state.id)} className="btn btn-primary">Edit Profile</button></Link>
                    <Link href="/adminDashboard" to="/adminDashboard"><button className="btn btn-secondary" style={{ marginLeft: "10px" }}> Back</button></Link>
                </div>
            </div>

        );
    }
}

