import * as React from "react";
import { Box, ThemeProvider, createTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { styled } from "@mui/material/styles";
import noRows from '../../../src/assets/null.svg'
// import './Error.css'

const darkTheme = createTheme({
    palette: {
        mode: "dark",
    },
});

function NoRowsOverlay() {
    return (
        <Box sx={{width: "100%", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
            <div className="fail-image">
                <img src={noRows} alt="search fail" style={{width: 200}}/>
            </div>
            <span>
                No Rows Here
            </span>
        </Box>
    )
}

export default function CustomNoRowsOverlay({ cols }) {
    return (
        <ThemeProvider theme={darkTheme}>
            <div style={{ height: 300, width: "100%" }}>
                <DataGrid
                    rows={[]}
                    columns={cols}
                    slots={{
                        noRowsOverlay: () => (<NoRowsOverlay/>),
                    }}
                    hideFooter
                    hideFooterPagination
                />
            </div>
        </ThemeProvider>
    );
}
