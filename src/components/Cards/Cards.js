import React from 'react'
// import { Card, CardContent, Typography, Grid } from '@material-ui/core';

import styles from './Cards.module.css'

const Cards = ({data: {confirmed, recovered, deaths, lastUpdate} } ) => {
    if(!confirmed){
        return "Loading..."
    }
    return(
        <div className={styles.container}>
            <div className={styles.card}>
                <h2>Infected</h2>
                <h4>{confirmed.value}</h4>
                <h6>{new Date(lastUpdate).toDateString()}</h6>
                <p>Number of active cases of COVID-19</p>
            </div>
            <div className={styles.card}>
                <h2>Recovered</h2>
                <h4>{recovered.value}</h4>
                <h6>{new Date(lastUpdate).toDateString()}</h6>
                <p>Number of cases recovered from COVID-19</p>
            </div>
            <div className={styles.card}>
                <h2>Deaths</h2>
                <h4>{deaths.value}</h4>
                <h6>{new Date(lastUpdate).toDateString()}</h6>
                <p>Number of cases deaths caused by COVID-19</p>
            </div>
        </div>
        
    )
}
export default Cards;