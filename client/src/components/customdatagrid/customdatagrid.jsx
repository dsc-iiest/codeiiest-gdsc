import * as React from "react";
import { Box, Button, IconButton, TextField, ThemeProvider, Typography, createTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import "./customdatagrid.css";
import { useState } from "react";
import { GridSearchIcon } from "@mui/x-data-grid";
import CustomNoRowsOverlay from "../NoRows/NoRows";

const darkTheme = createTheme({
    palette: {
        mode: "dark",
    },
});

function getRank(val) {
    var rank = ["🥇", "🥈", "🥉"];
    if (val - 1 < 3) return rank[val - 1];
    return val;
}

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

function RatingTag({ rating }) {
    var classname = CFTag(rating);
    return <div className={"lb " + classname}>{rating}</div>;
}

function UserFound({ user }) {
    if (user === -1) {
        return <></>;
    }
    if (!user) {
        return <></>;
    }
    return (
        <div className="f-wrapper">
            <div className="finder">
                <div className="finder-rank">{getRank(user.id)}</div>
                <div className="finder-name">{user.handle}</div>
                <div className="finder-year">{user.year}</div>
                <div className="finder-rating">
                    <RatingTag rating={user.rating} />
                </div>
                <div className="finder-maxrating">
                    <RatingTag rating={user.maxrating} />
                </div>
            </div>
        </div>
    );
}

function CustomDataGrid({ rows, columns, toshow, provideSearch, parentHeight }) {
    if (rows.length === 0) {
        return <CustomNoRowsOverlay cols={columns} />
    }

    rows.forEach((row, index) => {
        row.id = index + 1;
    });

    const numRows = Math.ceil(parentHeight / 46) - 3;
    console.log(parentHeight);

    const [idx, setIdx] = useState(-1);
    const [successfulFind, setSuccessfulFind] = useState(1);
    // const [handle, setHandle] = useState("");

    function ShowResult() {
        var handle = document.getElementById("filled-basic").value;
        for (let i = 0; i < rows.length; i++) {
            if (rows[i].handle.toLowerCase() === handle.toLowerCase()) {
                setIdx(i);
                setSuccessfulFind(true);
                return;
            }
        }
        setSuccessfulFind(false);
        setIdx(null);
    }

    function handleKeyDown(event) {
        if (event.key === "Enter") {
            ShowResult();
        }
    }

    const hide = { zIndex: "-1", opacity: 0, position: "absolute" };
    const display = { zIndex: "100", opacity: 1 };
    const getRowSpacing = React.useCallback((params) => {
        return {
            top: params.isFirstVisible ? 0 : 2,
            bottom: params.isLastVisible ? 0 : 2,
        };
    }, []);
    return (
        <Box className="leaderboard" sx={toshow ? display : hide}>
            {provideSearch && (
                <ThemeProvider theme={darkTheme}>
                    <Box sx={{ display: "flex", width: "100%" }}>
                        <TextField
                            error={!successfulFind}
                            id="filled-basic"
                            label="search userhandle"
                            variant="filled"
                            className="handleinput"
                            fullWidth
                            helperText={
                                successfulFind === 1
                                    ? ""
                                    : successfulFind
                                    ? "User found successfully"
                                    : "User handle doeesn't exist."
                            }
                            // onChange={(e) => setHandle(e.target.value)}
                            onKeyDown={(e) => handleKeyDown(e)}
                            color={successfulFind !== 1 ? "success" : ""}
                        />
                        <IconButton variant="outlined" onClick={() => ShowResult()} className="search-button">
                            <GridSearchIcon />
                        </IconButton>
                    </Box>
                    <UserFound user={idx >= 0 ? rows[idx] : -1} />
                </ThemeProvider>
            )}
            
                <DataGrid
                    sx={{
                        "& .MuiDataGrid-cell:": {
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        },
                        "& .numbers": {
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        },
                        "& .MuiDataGrid-row:hover": {
                            backgroundColor: "#23292d", // Or 'transparent' or whatever color you'd like
                        },
                        // marginTop: "1rem",
                    }}
                    columns={columns}
                    rows={rows}
                    initialState={{
                        pagination: {
                            paginationModel: {
                                pageSize: numRows,
                            },
                        },
                    }}
                    disableRowSelectionOnClick
                    pageSizeOptions={[5]}
                    disableColumnMenu
                    disableColumnFilter
                    disableColumnSelector
                    disableEval
                    getRowClassName={() => {
                        return "row";
                    }}
                    getCellClassName={(params) => {
                        if (params.field && params.field.length <= 2 && params.field !== "id") {
                            return "q-solve-status";
                        }
                        return params.field;
                    }}
                    // density="compact"
                    rowHeight={40}
                    getRowSpacing={getRowSpacing}
                    columnHeaderHeight={40}
                />
            
        </Box>
    );
}

export default CustomDataGrid;
