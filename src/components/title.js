import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {signInWithGoogle, useUserState,addData, signOut, useData} from '../utilities/firebase.js';
import { getAuth, GoogleAuthProvider, onIdTokenChanged, signInWithPopup } from 'firebase/auth';

import { pdfToList } from './pdf-upload.js';


let state = 0;

const Title = () => {
  
  
  return (
    <div>
      <AppBar position="fixed" style={{ background: " #410ca3" }}>

        <Toolbar color="purple">
          <Typography variant="h6">Holler</Typography>
          
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default Title;