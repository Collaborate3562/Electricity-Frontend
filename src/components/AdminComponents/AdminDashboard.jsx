import React, { Component } from 'react';
import '../../css/dashboard.css';
import Navbar from '../sidebar/AdNavbar';
let data = localStorage.getItem('admin');
data = JSON.parse(data);

export default class AdminDashboard extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <br/>
                <h3 className="text-center">ADMIN</h3>
                <div className="container">
                    {/* <p className='text-right'><i className="fa fa-user" aria-hidden="true"></i> Logged as : {data.adminEmail}</p> */}
                </div>
                

            </div>
        )
    }
}