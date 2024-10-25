import { useState } from "react";
import { fetchData } from "../api/apiservice";

async function getTopPerformers() {
    try {
        const contestsResponse = await fetchData('https://codeforces.com/api/contest.list');
        const contestsData = await contestsResponse.json();

        // Find the most recent finished contest
        const finishedContests = contestsData.result.filter(contest => contest.phase === 'FINISHED');
        const mostRecentContest = finishedContests.sort((a, b) => b.startTimeSeconds - a.startTimeSeconds)[0];

        // Fetch the standings for that contest
        const standingsResponse = await fetch(`https://codeforces.com/api/contest.standings?contestId=${mostRecentContest.id}`);
        const standingsData = await standingsResponse.json();

        // Extract the top 3 performers
        const topPerformers = standingsData.result.rows.slice(0, 3);

        console.log('Top 3 Performers:', topPerformers);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

