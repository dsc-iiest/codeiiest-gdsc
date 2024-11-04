import * as React from "react";
import { Box, ThemeProvider, createTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { styled } from "@mui/material/styles";
import searchFail from '../../../src/assets/fail.svg'
import './Error.css'

const darkTheme = createTheme({
    palette: {
        mode: "dark",
    },
});

function CustomNoResultsOverlay({code, message}) {
    return (
        <Box sx={{width: "100%", display: "flex", justifyContent: "center", alignItems: "center", gap: "1rem"}}>
            <div className="fail-image">
                <img src={searchFail} alt="search fail" style={{width: 200}}/>
            </div>
            <div className="message">
                <div className="message-code">{code}</div>
                <div className="message-text">{message}</div>
            </div>
        </Box>
    )
}

export default function Error({ cols, error_code, message }) {
    return (
        <ThemeProvider theme={darkTheme}>
            <div style={{ height: 300, width: "100%" }}>
                <DataGrid
                    rows={[]}
                    columns={cols}
                    slots={{
                        noRowsOverlay: () => (<CustomNoResultsOverlay code={error_code} message={message}/>),
                    }}
                    hideFooter
                    hideFooterPagination
                />
            </div>
        </ThemeProvider>
    );
}
