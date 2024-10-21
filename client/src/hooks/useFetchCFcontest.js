// src/hooks/useFetchCF.js
import { useState } from "react";
import { fetchData } from "../api/apiservice";
import useFetchCF from "./useFetchCF";

const getContest = async (handles, id) => {
    var handleSep = "";
    for (let i of handles) {
        handleSep = handleSep + i + ";";
    }
    const endpoint = `https://codeforces.com/api/contest.standings?contestId=${id}&asManager=false&handles=${handleSep}`;
    const endpoint1 = `https://codeforces.com/api/user.info?handles=${handleSep}&checkHstoricHandles=false`;

    const response = await fetchData(endpoint);

    var AvatarImage = {};
    const response1 = await fetchData(endpoint1);
    response1.result.forEach((user) => {
        AvatarImage[user.handle] = user.avatar.includes("no-avatar.jpg") ? "" : user.avatar
    });

    const questions = [];
    for (let problem of response.result.problems) {
        questions.push({
            id: problem.index,
            name: problem.name,
            points: problem.points || 1,
        });
    }

    const participants = [];

    for (let person of response.result.rows) {
        var personHandle = person.party.members[0].handle;
        participants.push({
            avatar: AvatarImage[personHandle],
            handle: personHandle,
            rank: person.rank,
            points: person.points,
            penalty: person.penalty,
            successfulHackCount: person.successfulHackCount,
            unsuccessfulHackCount: person.unsuccessfulHackCount,
            problemResults: person.problemResults,
        });
    }

    const prunedResult = {
        contest: {
            id: response.result.contest.id,
            name: response.result.contest.name,
            problems: questions,
            rows: participants,
        },
    };

    // console.log(JSON.stringify(prunedResult, null, 2));
    return prunedResult;
};

const useFetchCFcontest = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const callAPI = async (handles, id) => {
        setLoading(true);

        try {
            const basic = await getContest(handles, id);
            setData(basic);
            setError(null);
            // console.log(JSON.stringify(basic, null, 2));
        } catch (err) {
            console.log("Error has been encountered");
            console.log(err);
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    return { data, loading, error, callAPI };
};

export default useFetchCFcontest;
