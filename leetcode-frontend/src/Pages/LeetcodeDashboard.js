import React, {useEffect, useState} from 'react'
import axios from 'axios'
import DashboardUI from '../Components/DashboardUI'

const baseUrl = 'http://localhost:3001/api/';

const LeetcodeDashboard = () => {
    const [languageCount, setLanguageCount] = useState([]);
    const [timeFrame, setTimeFrame] = useState(null);
    const [percentage, setPercentage] = useState(null);
    const [problemCount, setProblemCount] = useState(null);

    useEffect(()=>{
        axios.get(`${baseUrl + 'leetcode-data'}`).then((res) => {
            setLanguageCount(res.data)
        })
        axios.get(`${baseUrl + 'leetcode-data1'}`).then((res) => {
            setTimeFrame(res.data)
        })
        axios.get(`${baseUrl + 'leetcode-data2'}`).then((res) => {
            setPercentage(res.data)
        })
        axios.get(`${baseUrl + 'leetcode-data3'}`).then((res) => {
            setProblemCount(res.data)
        })
    },[]);

    console.log(problemCount)
    return(
        <>
        <DashboardUI language = {languageCount} timeFrame = {timeFrame} percentage = {percentage} problem = {problemCount}/>
        </>
    )
}

export default LeetcodeDashboard