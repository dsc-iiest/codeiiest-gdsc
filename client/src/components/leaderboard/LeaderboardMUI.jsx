import * as React from "react";
import "./LeaderboardMUI.css";
import { Button, Tooltip, ButtonGroup, Box, Typography, SvgIcon, Avatar } from "@mui/material";
import CustomDataGrid from "../../components/customdatagrid/customdatagrid";

import userData from "../../../public/assets/data/data.json";
import { useState, useEffect } from "react";
import Loading from "../../components/loading/Loading";
import Error from "../../components/error/Error";
import useFetchCF from "../../hooks/useFetchCF";

// 🥇🥈🥉

function CFTag(rating) {
    if (rating < 1200) {
        return "newbie";
    } else if (1200 <= rating && rating < 1400) {
        return "pupil";
    } else if (1400 <= rating && rating < 1600) {
        return "specialist";
    } else if (1600 <= rating && rating < 1900) {
        return "expert";
    } else if (1900 <= rating && rating < 2100) {
        return "candidate-master";
    } else if (2100 <= rating && rating < 2400) {
        return "master";
    } else {
        return "grandmaster";
    }
}

function ratingTag(params) {
    const rating = params.value;
    var classname = CFTag(rating);
    return <div className={"lb " + classname}>{rating}</div>;
}

function GetQuestionStats({ handle }) {
    const [easy, med, hard] = [100, 200, 300];
    return (
        <div className="q-stats">
            <div className="row">
                <div className="level easy">Easy</div>
                <div className="solved">{easy}</div>
            </div>
            <div className="row">
                <div className="level med">Medium</div>
                <div className="solved">{med}</div>
            </div>
            <div className="row">
                <div className="level hard">Hard</div>
                <div className="solved">{hard}</div>
            </div>
        </div>
    );
}

function Msg({ msg }) {
    return (
        <div className="tooltip-msg" style={{ fontSize: "1rem" }}>
            {msg}
        </div>
    );
}

function getRank(val) {
    var rank = ["🥇", "🥈", "🥉", "4️⃣", "5️⃣", "6️⃣", "7️⃣", "8️⃣", "9️⃣", "🔟"];
    if (val - 1 < 10)
        return (
            <span style={{ transform: "scale(1.5)", display: "flex", transformOrigin: "left" }}>{rank[val - 1]}</span>
        );
    return val;
}

const cfcolumns = [
    {
        field: "id",
        headerName: "#",
        width: 50,
        headerClassName: "lb-header",
        resizable: false,
        sortable: false,
        renderCell: (params) => (
            <Tooltip title={params.value} arrow placement="right">
                <>{getRank(params.value)}</>
            </Tooltip>
        ),
        // rendr
    },
    {
        field: "handle",
        headerName: "User Handle",
        width: 200,
        headerClassName: "lb-header",
        sortable: false,
        resizable: false,
        renderCell: (params) => (
            <Tooltip title={<Msg msg={`${params.row.rank}, ${params.row.name}`} />} arrow placement="right">
                <a className="usr_name" href={`https://codeforces.com/profile/${params.value}`}>
                    <div className="usr">
                        <Avatar sx={{ width: 28, height: 28, bgcolor: "#653D63" }} src={`${params.row.avatar}`}>
                            {params.value[0].toUpperCase()}
                        </Avatar>
                        {params.value}
                    </div>
                    {/* {params.value} */}
                </a>
            </Tooltip>
        ),
    },
    {
        field: "year",
        headerName: "Year",
        width: 70,
        sortable: false,
        headerClassName: "lb-header",
        resizable: false,
        headerAlign: "center",
        renderCell: (params) =>
            `${params.value}${
                params.value === 1 ? "st" : params.value === 2 ? "nd" : params.value === 3 ? "rd" : "th"
            }`,
    },

    {
        field: "rating",
        headerName: "Rating",
        width: 70,
        renderCell: ratingTag,
        headerClassName: "lb-header",
        resizable: false,
        headerAlign: "center",
    },
    {
        field: "maxrating",
        headerName: "Best",
        width: 70,
        renderCell: ratingTag,
        headerClassName: "lb-header",
        resizable: false,
        headerAlign: "center",
    },
];

const LeaderboardMUI = ({ parentHeight }) => {
    const [show, setShow] = useState(1);
    const [reload, setReload] = useState(false);
    const cfUsers = {};

    const width = window.innerWidth;

    var res = 0;
    for (let user of userData) {
        const h = user["Codeforce  Handle "].trim();
        if (!h || h.includes(" ")) {
            // console.log("removed this user(left empty) "+h);
            res += 1;
            continue;
        }
        cfUsers[h.toLowerCase()] = [user.Name, user["Year (1/2/3/4)"]];
    }
    const v = Object.keys(cfUsers);
    const { data, loading, error, isCached, getData } = useFetchCF(v);

    if (!loading && !error) {
        for (let user of data) {
            try {
                [user.name, user.year] = cfUsers[user.handle.toLowerCase()];
            } catch (err) {
                console.log(err);
                console.log(user);
            }
        }
    }

    return (
        <div className="lb-page">
            {!loading && !error ? <div className="notification">{isCached}</div> : null}
            {/* <div className="heading">
                Know where you <span className="gradient-text">Stand</span>
            </div>
            <div className="content">
                Discover the top coders, track your progress, and compete for the top spot on our dynamic competitive
                programming leaderboard!
            </div> */}
            {/* <ButtonGroup
                size="large"
                aria-label="coding website"
                className="button-group"
                orientation={width < 340 ? "vertical" : "horizontal"}
            >
                <Button
                    className={"table-swap " + (show ? "active" : "")}
                    size="large"
                    onClick={getData}
                    startIcon={<GridLoadIcon />}
                >
                    Refresh table
                </Button>
                <Button
                    className={"table-swap " + (!show ? "active" : "")}
                    size="large"
                    onClick={() => setShow(0)}
                    endIcon={<img src={leetcode} className="cf-img" />}
                >
                    LeetCode
                </Button>
            </ButtonGroup> */}
            <Box className="datagrid-wrapper">
                {loading ? (
                    <Loading />
                ) : error ? (
                    <Error
                        message={"API Fetching Failed. Please try again later"}
                        error_code={error.response?.request.status}
                    />
                ) : (
                    <CustomDataGrid
                        rows={data}
                        columns={cfcolumns}
                        toshow={show}
                        provideSearch={false}
                        parentHeight={parentHeight}
                    />
                )}
                {!loading && (
                    <Typography sx={{ textAlign: "right" }} variant="body1">
                        {isCached}
                    </Typography>
                )}
            </Box>
        </div>
    );
};

export default LeaderboardMUI;
