import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  MenuItem,
  Menu,
  Typography,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import logo from "../../assets/logo-coink-oink.svg";
import useStyles from "./styles";

const Navbar = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <AppBar position="fixed" className="classes.appBar" color="inherit">
        <Toolbar>
          <Typography variant="h6" className={classes.title} color="inherit">
            <img
              src={logo}
              alt="Coink Oink"
              height="25px"
              className={classes.image}
            />
            Coink Oink
          </Typography>
          <div className={classes.grow} />
          <div className={classes.button}>
            <IconButton
              aria-label="Mostrar los productos en el carrito"
              color="inherit"
            >
              <Badge badgeContent={2} color="secondary" overlap="rectangular">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export { Navbar };
