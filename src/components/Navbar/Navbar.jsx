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
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo-coink-oink.svg";
import useStyles from "./styles";

const Navbar = ({ totalItems }) => {
  const classes = useStyles();
  const location = useLocation();

  return (
    <React.Fragment>
      <AppBar position="fixed" className="classes.appBar" color="inherit">
        <Toolbar>
          <Typography
            variant="h6"
            className={classes.title}
            color="inherit"
            component={Link}
            to="/"
          >
            <img
              src={logo}
              alt="Coink Oink"
              height="25px"
              className={classes.image}
            />
            Coink Oink
          </Typography>
          <div className={classes.grow} />
          {location.pathname === "/" && (
            <div className={classes.button}>
              <IconButton
                component={Link}
                to="/carrito"
                aria-label="Mostrar los productos en el carrito"
                color="inherit"
              >
                <Badge
                  badgeContent={totalItems}
                  color="secondary"
                  overlap="rectangular"
                >
                  <ShoppingCart />
                </Badge>
              </IconButton>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export { Navbar };
