import React, { useState, createContext, useEffect } from 'react'
const axios = require('axios');


const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTJiNjY4ODVjMmY5ODAwNmQ0YzQ4YjIiLCJpYXQiOjE1Nzk5MDI2MDB9.ur63hbTPSUo4-JsdQc7d9ldLFW-IGuJkSnRjm0mo2VE';


export const SearchContext = createContext();

export const SearchProvider = props => {

    const [search, setSearch] = useState('');





    return (

        <SearchContext.Provider value={[search, setSearch]}>
            {props.children}
        </SearchContext.Provider>

    );
}