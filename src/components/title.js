import React from "react";
import { AppBar } from "@mui/material";
import { Toolbar } from "@mui/material";
import { Typography } from "@mui/material";

const Title = () => {
    return (
        <div>
            <AppBar position="fixed" style={{background: "#410ca3"}}>
                <Toolbar color = "Pink">
                    <Typography variant="h5">Holler</Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Title;