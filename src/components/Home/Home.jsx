import React from "react";
import {
  Typography,
  Button,
  CssBaseline,
  Grid,
  Container,
} from "@material-ui/core";
import { Navbar } from "../Navbar/Navbar";

const Home = () => {
  return (
    <>
      <CssBaseline />
      <Typography variant="h1">Estás en Coink Oink</Typography>
      <Typography variant="h4">
        Las Manos del Artesano Exploran el Infinito
      </Typography>
    </>
  );
};

export { Home };
