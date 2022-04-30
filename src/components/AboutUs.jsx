import React, { Component } from 'react';
import about from '../images/about2.jpg';
import Nav from './Header';

class AboutUs extends Component {
    
        render() {
                return (
                        <div>
                            <Nav/>
                                <img src={about} width="100%" height="527px"className="image" ></img>
                    {/* <div  style={{backgroundColor: "#f5cef9", height: "1100px" }}> */}
                    <div class="content w-100" style={{position:"absolute", bottom:"0%",backgroundColor: "rgba(0, 0, 0,0.3)",
        color: "#F8FBFA",padding: "20px", height:"87%" }}>
                        <br/>
                    <div style={{WebkitTextFillColor:"#FCFDFD"}}>
                    <h5><i>
                    Electricity Billing System is designed to manage the electricity bills,connections,
                    customers. The admin can manage all the accounts; the registered users like individual customers. This
                     helps in maintaining the bill and payments. There are two sections namely Admin and Customer
                    screen.
        
                        <ul>
                            <li>
                                <b>Admin Section :</b>Where, after login into the portal, admin can manage customers , manage bills and manage payments.
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <b>Customer Section :</b> Where, after login into the portal, customer can view bill, make payment update profile and change their password.
                            </li>
                        </ul>
        
                    </i></h5>
                    </div>
                    
                </div>       
                </div>   
        
        
        
                );
            }
        }

export default AboutUs;