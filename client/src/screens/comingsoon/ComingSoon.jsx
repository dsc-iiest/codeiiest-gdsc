import { Box } from "@mui/material";
import "./ComingSoon.css"

const ComingSoon = () => {
    return (
        <Box className="page" sx = {{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "3rem"

        }} >
            Coming Soon...
        </Box>
    );
};

export default ComingSoon;