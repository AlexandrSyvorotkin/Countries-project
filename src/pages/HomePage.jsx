import React from 'react';
import axios from "axios";
import {useEffect} from "react";


import List from "../components/List";
import Card from "../components/Card";
import Controls from "../components/Controls";
import {useHistory} from "react-router-dom";
import {ALL_COUNTRIES} from "../config";

const HomePage = ({countries, setCountries}) => {

    const {push} = useHistory()


    useEffect(() => {
        if (!countries.length)
            axios.get(ALL_COUNTRIES).then(({data}) => setCountries(data))
    }, [])


    return (
        <>
            <Controls/>
            <List>
                {
                    countries.map(c => {
                        const countryInfo = {
                            img: c.flag,
                            name: c.name,
                            info: [
                                {
                                    title: 'Population',
                                    description: c.population.toLocaleString()
                                },
                                {
                                    title: 'Region',
                                    description: c.region
                                },
                                {
                                    title: 'Capital',
                                    description: c.capital
                                }
                            ]
                        }

                        return (
                            <Card key={c.name} onClick={()=> push(`/country/${c.name}`)} {...countryInfo}/>
                        )
                    })
                }
            </List>
        </>
    );
};

export default HomePage;