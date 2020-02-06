import React, { useState, useContext, useEffect, useRef, createRef   } from 'react';
import './Products.css';
import defaultImg from '../../assets/img/default.png';
import { UserContext } from '../../UserProvider';

import ProductsCard from '../../ProductsCard';
import SuccessCard from '../../SuccessCard';

import Img from 'react-image';


const axios = require('axios');


 const Products = ({ productsState, animateProduct }) => {

    const [user, setUser] = useContext(UserContext);

    const itemRefs = useRef([...productsState].map(() => createRef()));

    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTJiNjY4ODVjMmY5ODAwNmQ0YzQ4YjIiLCJpYXQiOjE1Nzk5MDI2MDB9.ur63hbTPSUo4-JsdQc7d9ldLFW-IGuJkSnRjm0mo2VE';

    const pageLimit = 10;

    const [showCard, setShowCard] = useState(false);
    const [productKey, setProductKey] = useState("");
    const [showImage, setShowImage] = useState(false);
    const [showDetails, setShowDetails] = useState(false);



     const [success, setSuccess] = useState(false);


    useEffect(() => {
        console.log('success!! press');
    }, [success])






    const showReddemOption = (product,event) => {
        setShowCard(true);
        setProductKey(product._id);


    };

    const hideReddemOption = (product, event) => {
        setShowCard(false);
        setProductKey(product._id);

    };

    const imageLoaded = () =>{
        console.log("image loaded");
        setShowImage(true);
    }

    function loadDefaultImage(){

        return (
            <img className="products__default" src={defaultImg}  ></img>
        )
    }



    //  const myImg = () => <Img src={defaultImg} />

    return (




        <ul className="products" >

            {

                productsState.map((product,i) => (




                    <React.Fragment key={product._id}>

                        <li className='products__item' onMouseEnter={(e) => showReddemOption(product, e)}  onMouseLeave={(e) => hideReddemOption(product, e)} >

                            {showCard && productKey === product._id &&
                                <ProductsCard  product={product}   />

                            }
                                <div className="message" ref={itemRefs.current[product._id]}   ></div>
                                <div className="products__details">
                                <figure>

                                    <Img src={product.img.url} className="products__img scale-in-center" unloader={ loadDefaultImage() } />



                                </figure>


                                <div className="products__title "  >
                                        <p>{product.category}</p>
                                        <h3>{product.name}</h3>
                                        <p><b>{product.cost}</b> points</p>
                                </div>





                                </div>

                            </li>







                    </React.Fragment>

            ))


            }

        </ul>








    );


}

export default Products;