// src/hooks/useFetchLC.js
import { useState, useEffect } from "react";
import { fetchData } from "../api/apiservice";

const getProblems = async (handle) => {
    const endpoint = (handle) => `https://alfa-leetcode-api.onrender.com/${handle}/solved/`;
    const problems = await fetchData(endpoint(handle));
    var prunedResult = {
        solvedProblem: problems.solvedProblem,
        easySolved: problems.easySolved,
        mediumSolved: problems.mediumSolved,
        hardSolved: problems.hardSolved,
    };
    return prunedResult;
};

const getContests = async (handle) => {
    const endpoint = (handle) => `https://alfa-leetcode-api.onrender.com/${handle}/contest/`;
    const contests = await fetchData(endpoint(handle));

    var maxrating = 0;
    for (let c of contests.contestParticipation) {
        if (c.rating > maxrating) maxrating = c.rating;
    }
    var prunedResult = {
        contestAttend: contests.contestAttend,
        contestRating: contests.contestRating,
        contestTopPercentage: contests.contestTopPercentage,
        maxRating: maxrating,
    };
    return prunedResult;
};

const INTERVAL = 600000;

const useFetchLC = (allHandles) => {
    console.log("Received LC handles: "+allHandles);
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const lastLoadLC = parseInt(localStorage.getItem("LCload"));
    const cacheAvailable = lastLoadLC !== null;
    if (!cacheAvailable) console.log("NO CACHE");

    const currLoad = new Date().getTime();

    useEffect(() => {
        if (lastLoadLC + INTERVAL > currLoad) {
            console.log("Too frequent loads, data cached");
            const cache = localStorage.getItem("LCdata");
            setData(JSON.parse(cache));
            setLoading(false);
        } else {
            const getData = async () => {
                try {
                    const fullData = [];
                    for(let handle of allHandles) {
                        const contests = await getContests(handle);
                        const problems = await getProblems(handle);
                        const userData = { ...contests, ...problems, handle: handle };
                        fullData.push(userData);
                    };

                    // const d1 = await fetchData("http://localhost:3000/1");
                    // const d2 = await fetchData("http://localhost:3000/0");
                    // const fullData = [d1, d2]
                    // console.log(fullData);
                    setData(fullData);
                    localStorage.setItem("LCdata", JSON.stringify(fullData));
                    localStorage.setItem("LCload", JSON.stringify(currLoad));
                } catch (err) {
                    if (!cacheAvailable) {
                        setError(err);
                    } else{
                        console.log("Error occured. Caching data");
                        const cache = localStorage.getItem("LCdata");
                        setData(JSON.parse(cache))
                        console.log(err);
                    }
                } finally {
                    setLoading(false);
                }
            };
            getData();
        }
    }, []);

    return { data, loading, error };
};

export default useFetchLC;
