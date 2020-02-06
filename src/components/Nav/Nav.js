import React, { useState, useContext, useEffect, useRef, Fragment } from 'react';
import { UserContext } from '../../UserProvider';
import './Nav.css';
import money from '../../assets/img/money.svg';
import logo from '../../assets/img/logo.svg';
import { TimelineLite, CSSPlugin, TweenLite, Power3 } from "gsap/all";
import SuccessCard from '../../SuccessCard';


const Nav = (props) => {

    const [user, setUser] = useContext(UserContext);
    const [pointsChanged, setPointsChanged] = useState(false);

    const [points, setPoints] = useState(0);

    const isInitialMount = useRef(true);

    // useEffect(() => {


        // React.cloneElement(newone, elm);
        // var tl = new TimelineLite();
        // console.log(points.current);
        // TweenLite.to(points.current, 0.5, { css: { scaleX: 1.2, scaleY: 1.2 }, ease: Power3.easeInOut });
        // TweenLite.to(points.current, 1, { css: { scaleX: 1, scaleY: 1 }, ease: Power3.easeInOut });

        // setPointsChanged(true);
        // setPoints(user.points);

    // }, [user.points]);

    // useEffect(() => {
    //     if (isInitialMount.current) {
    //         isInitialMount.current = false;
    //         console.log("Initial mount");
    //     } else {
    //         console.log()
    //         console.log("Puntos updated");
    //         setPoints(user.points);
    //         // Your useEffect code here to be run on update
    //     }
    // },[user]);

    useEffect(() => {
        // points.current.classList.remove('scale-in-center');

    }, []);

    return (

        <nav>
            <div className="nav__logo">
                <img className="scale-in-center" src={logo} ></img>

            </div>
            <ul>

                <li className="nav__user"> <h3 className="scale-in-center">{user.name}</h3>   </li>
                <li className="nav__points scale-in-center" >  <h3 className=""> {user.points} </h3> <img className="" src={money} ></img> </li>
            </ul>


        </nav>


    );


}

export default Nav;