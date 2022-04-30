import React, { Component } from 'react';
import Spacer from 'react-add-space';
import con from '../images/contact.jpg';
import Nav from './Header';
class Contact extends Component {
    constructor(props) {
        super(props)
        this.state =
        {
        }
    }

    render() {
        return (
            <div>
                <Nav />
                <img src={con} width="100%" height="529px" className="image" ></img>
                <div style={{ position: "absolute", bottom: "0%", height: "529px", alignContent: "center", padding: "50px" }}>

                    <div class="row">
                        <Spacer amount={100} />
                        <div className="card col-md-5">
                            <br />
                            <h5><i><b>Electricity Billing Ststem</b></i></h5>

                            <hr style={{ border: "1px solid black" }}></hr>
                            <h5><i>Address: </i></h5>
                            <h6><i>Room No: G 02 <br />
                                Ground Floor , E 2 <br />
                                JFSD_17,<br />
                                Mumbai, India <br />
                                Pin Code : 230532
                            </i></h6>
                            <hr style={{ border: "1px solid black" }}></hr>
                            <h5><i>Telephone : <b>011 288736</b> </i></h5>
                            <hr style={{ border: "1px solid black" }}></hr>
                            <h5><i>Email Address: <b>eletricitysystem2021@gmail.com</b></i></h5>


                        </div>


                    </div>

                </div>
            </div>
        );
    }
}


export default Contact;