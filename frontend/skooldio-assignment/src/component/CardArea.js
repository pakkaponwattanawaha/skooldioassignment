import React, { useState, useEffect } from 'react'


import { getData } from '../datacontroller/masterdata'
import FacultyCard from './FacultyCard'

const CardArea = () => {
    const [apiResponse, setApiResponse] = useState()
    useEffect(() => {
        getData().then(ret => { setApiResponse(ret) })
    },[])
    console.log(apiResponse)
    return (
        <div>
            <FacultyCard data={apiResponse}/>
        </div>
    );
}
export default CardArea;