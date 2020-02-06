import React, { useState, createContext, useEffect  } from 'react'
import App from './App';
import Nav from './components/Nav/Nav';
import SuccessCard from './SuccessCard';

const axios = require('axios');

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTJiNjY4ODVjMmY5ODAwNmQ0YzQ4YjIiLCJpYXQiOjE1Nzk5MDI2MDB9.ur63hbTPSUo4-JsdQc7d9ldLFW-IGuJkSnRjm0mo2VE';

export const HistoryContext = createContext(null);

export const HistoryProvider = props => {

    const [history, setHistory] = useState(null);



    const getHistoryData = async () => {

        await axios({
            method: 'get',
            url: 'https://coding-challenge-api.aerolab.co/user/history',

            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': token,
            }
        }).then(function (response) {
            // var data = response.data;
            // console.log(data[data.length - 1]);

            //  setHistory(data[data.length -1]);
            // console.log(response.data)
            setHistory(response.data);

        });

    }

    useEffect(() => { getHistoryData(); }, []);

    useEffect(() => {
            console.log(history);

    }, [])

    return (

        <HistoryContext.Provider value={[history, setHistory]}>

            <SuccessCard/>

        </HistoryContext.Provider>

    );
}