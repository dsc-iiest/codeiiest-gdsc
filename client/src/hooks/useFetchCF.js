// src/hooks/useFetchCF.js
import { useState, useEffect } from "react";
import { fetchData } from "../api/apiservice";

const getContests = async (handles) => {
    const contests = (handle) => `https://codeforces.com/api/user.rating?handle=${handle}`;
    var prunedResult = {};
    for (let handle of handles) {
        const result = await fetchData(contests(handle));
        prunedResult[handle] = result.result.length;
    }
    return prunedResult;
};

const sortingFunc = (a, b) => {
    if (a.rating !== b.rating) {
        return b.rating - a.rating;
    } else if (a.maxrating !== b.maxrating) {
        return b.maxrating - a.maxrating;
    } else {
        return a.handle - b.handle;
    }
};

const Count = (sub) => {
    const solves = new Set();
    var size = 0;

    sub.forEach((submission) => {
        if (submission.verdict === "OK" && !solves.has(submission.problem.name)) {
            solves.add(submission.problem.name);
            size += 1;
        }
    });
    return size;
};

const getSolves = async (handles) => {
    const problems = (handle) => `https://codeforces.com/api/user.status?handle=${handle}`;
    var prunedResult = {};
    for (let handle of handles) {
        const result = await fetchData(problems(handle));
        prunedResult[handle] = Count(result.result);
    }
    return prunedResult;
};

const getBasic = async (handles) => {
    var h = "";
    for (let i of handles) {
        h = h + i + ";";
    }
    const endpoint = `https://codeforces.com/api/user.info?handles=${h}&checkHstoricHandles=false`;

    // console.log(endpoint);

    var prunedResult = [];
    const response = await fetchData(endpoint);
    response.result.forEach((user) => {
        prunedResult.push({
            maxrating: user.maxRating || 0,
            rating: user.rating || 0,
            maxrank: user.maxRank || "unrated",
            rank: user.rank || "unrated",
            handle: user.handle,
            avatar: user.avatar.includes("no-avatar.jpg") ? "" : user.avatar
        });
    });
    // console.log(prunedResult);
    return prunedResult;
};

const INTERVAL = 5000;

const useFetchCF = (endpoint) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isCached, setIsCached] = useState("Data fetch successful");

    // console.log("Last loading attempt at: " + lastLoadCF);

    const getData = async () => {

        const currLoad = new Date().getTime();
        const lastLoadCF = parseInt(localStorage.getItem("CFload"));
        const cache = localStorage.getItem("CFdata");
        const cacheAvailable = cache !== null && lastLoadCF !== null;
        // if (lastLoadCF + INTERVAL > currLoad && cacheAvailable) {
        if (true){
            setData(JSON.parse(cache));
            setLoading(false);
            setIsCached("Too frequent loading. Showing cached result");
            return;
        }
        setLoading(true);
        setIsCached("Data fetch successful");
        setError(null);
        setData(null);
        try {
            const basic = await getBasic(endpoint);

            const basicData = basic.sort(sortingFunc);
            setData(basicData);

            localStorage.setItem("CFdata", JSON.stringify(basicData));
            localStorage.setItem("CFload", JSON.stringify(currLoad));
        } catch (err) {
            if (!cacheAvailable) {
                setError(err);
                setIsCached("No cache available")
            } else {
                setData(JSON.parse(cache));
                setIsCached("Unsuccessful Data fetch. Showing cached result");
            }
        } finally {
            setLoading(false);
        }
    };

    
    useEffect(() => {
        getData();
    }, []);

    return { data, loading, error, isCached, getData };
};

export default useFetchCF;
