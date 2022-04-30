import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import CustomerServices from '../../services/CustomerServices';
import Navbar from '../sidebar/Navbar';

import classes from "./customer.module.css"
import {Button} from "react-bootstrap";
import '../../css/dashboard.css';
// import '../../css/Cards.css';
import img from '../../images/home1.jpg';
import img2 from '../../images/home2.jpg';
import img3 from '../../images/home3.jpg';
import img4 from '../../images/home4.jpg';
import img5 from '../../images/home5.jpg';
import img6 from '../../images/home6.jpg';
import img7 from '../../images/user.jpg';
import CardItem from './CardItem';
import {Col, Row} from "react-bootstrap";
import { Card, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import HomeCard from '../CustomerComponents/HomeCard';
const { Meta } = Card;


export  class CustomerDashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            address: '',
            costumer: {},
            homes:[],
        }
      }
   

    handleClick() {
        console.log("clicked")
    }

    componentDidMount(){
        this.getCurrentUserHomes();
      }
    

    getCurrentUserHomes=()=>{
        
         var apiBaseUrl = "http://localhost:8080/api/home/getHomesWithCurrentUser";
     
         var token = window.localStorage.getItem("token");
        
     
         var headers = {
             //'Content-Type': 'application/json',
             'Authorization':`Bearer ${token}`
         }
     
         axios.get(apiBaseUrl, { headers: headers }).then((response) =>{
             if(response&&response.data){
                 console.log(response);
                 this.setState({
                     homes: response.data
                 });
             }
         }).catch(function (error) {
             console.log(error);
             alert(error)
     
         });
     }

    render() {
        // const[array] = this.state;
        return (
            <div>
                <Navbar/>
                <br/>
                {/* <h2 className="text-center">YOUR DASHBOARD</h2> */}
                <div className="container">
                </div>

                <div className='cards'>
                    <h1> Home's Energy Board</h1>
                    <div className='cards__container'>
                        <div className='cards__wrapper'>
                       
                       <Row>
                         
                                {
                                    
                                    Array.isArray(this.state.homes)?this.state.homes.map((home, key)=>(
                                        
                                        <Col key={key} className="p-3" md={6}>
                                        {/* <CardItem
                                            src={img}
                                            text='Save Electrcity Save Earth'
                                            label='Hjhbjhbjkhome1'
                                            homeId={home.id}
                                            onClickButton={this.handleClick}
                                        /> */}
                                       {/* <HomeCard /> */}
                                       <li className='cards__item'>
                                            <Link className='cards__item__link' to={"/homes"}>
                                                <figure className='cards__item__pic-wrap' data-category={""}>
                                                    <div className={classes.cardItem}>

                                                <Card
                                                    style={{ width: 727 }}
                                                    cover={
                                                    // <img src={img4}/>
                                                    <Link to="homes"><img src={img5} className='cards__item__img'/></Link>                                     
                                                    }
                                            // actions={[
                                            // <SettingOutlined key="setting" />,
                                            // <EditOutlined key="edit" />,
                                            // <EllipsisOutlined key="ellipsis" />,
                                            // ]}
                                        >
                                             <div className='cards__item__info'>
                                                    <h5 className='cards__item__text'> {home.homeCode}</h5>
                                                </div>
                                            <Meta
                                            avatar={<Avatar src={img7} />}
                                            // title="Card title"
                                            description="Get To Know About Your Home Energy Billing Informations"
                                    
                                            />
                                            
                                        </Card>
                                        <div className="button_container">
                                                                    
                                      <Link to={`energymeter/${home.id}`}><Button className={classes.button} variant="success">EnergyMeter</Button></Link>
                                                                
                                    {/* <Link to={`bill/${home.id}`}><Button className={classes.button} variant="success">Billing</Button></Link> */}
        
                                     <Link to="pay"><Button className={classes.button} variant="success">Payment History</Button></Link>
                                                                
                                    </div>
                                    </div>
                                                   
                                        </figure>
                                        </Link>
                                        </li>
                                      
                                    </Col>
                                    )):''
                                   
                                }
                       
                            </Row>
                            
                        </div>
                    </div>
                </div>


            </div>


        )


    }
}

export default CustomerDashboard