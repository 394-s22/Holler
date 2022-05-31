import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {signInWithGoogle, useUserState,addData, signOut, useData} from '../utilities/firebase.js';
import { getAuth, GoogleAuthProvider, onIdTokenChanged, signInWithPopup } from 'firebase/auth';

import { pdfToList } from './pdf-upload.js';


/*
Purple title bar displaying app name.
*/

let state = 0;

const Title = () => {
  
  
  return (
    <div>
      <AppBar position="fixed" style={{ background: "#ff0000" }}>

        <Toolbar color="red">
          <Typography variant="h6">Holler</Typography>
          
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default Title;