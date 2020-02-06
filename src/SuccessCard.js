import React, { useState, useContext, useEffect, Fragment } from 'react';
import money from './assets/img/money.svg';
import { UserContext } from './UserProvider';
import './SuccessCard.css';

const axios = require('axios');

const SuccessCard = (props) => {

    const [user, setUser] = useContext(UserContext);










    return (





        <div className='success__container  scale-in-center' >

                    <div className="success__details">

                        <h4>You have now </h4>
                        <span className="success__points"><h2> {user.points} </h2> <img src={ money } ></img></span>


                    </div>



                </div>


    );


}

export default SuccessCard;