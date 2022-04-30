import React from 'react';
import {Link} from 'react-router-dom';
import classes from "./customer.module.css"
import {Button} from "react-bootstrap";


function CardItem(props) {
    return (
        <>
            <li className='cards__item'>
                <Link className='cards__item__link' to={props.path}>
                    <figure className='cards__item__pic-wrap' data-category={props.label}>
                        <div className={classes.cardItem}>



                        <Link to="homes"><img src={props.src} className='cards__item__img'/></Link>

                            <div className="button_container">
                                        
                                 <Link to={`energymeter/${props.homeId}`}><Button className={classes.button} variant="success">EnergyMeter</Button></Link>
                               
                              <Link to={`bill/${props.homeId}`}><Button className={classes.button} variant="success">Billing</Button></Link>

                               <Link to="pay"><Button className={classes.button} variant="success">Payment History</Button></Link>
                             
                            </div>
                        </div>
                    </figure>
                    <div className='cards__item__info'>
                        <h5 className='cards__item__text'>{props.text}</h5>
                    </div>
                </Link>
            </li>
        </>
    );
}

export default CardItem;



