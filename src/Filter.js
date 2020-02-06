import React, { useState, useContext, useEffect, Fragment} from 'react';
import { getHighestPrice} from './components/Products/Products';


const Filter = ({search}) => {


    return (


        <div className="container__filters">
            <p>Sort by: </p>
            <ul>
                <li /*onClick={getProducts}*/ >Most Recent</li>
                <li /*onClick={getLowerPrice} */ >Lower Price</li>
                <li  >Highest Price</li>
            </ul>
        </div>


    );


}

export default Filter;