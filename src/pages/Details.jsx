import React, {useEffect, useState} from 'react';
import axios from "axios";
import {IoArrowBack} from "react-icons/all";
import {useHistory, useParams} from "react-router-dom";
import {searchByCountry} from "../config";
import {Button} from "../components/Button";
import Info from "../components/Info";

const Details = () => {

    const {name} = useParams()
    const {push, goBack} = useHistory()

    const [country, setCountry] = useState(null)

    console.log(country)

    useEffect(() => {
        axios.get(searchByCountry(name)).then(
            ({data}) => setCountry(data[0])
        )
    }, [name])

    return (
        <div>
        <Button onClick={goBack}>
            <IoArrowBack/> Back
        </Button>
            {country && <Info push={push} {...country}/>}
        </div>
    );
};

export default Details;