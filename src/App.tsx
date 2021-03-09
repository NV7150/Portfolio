import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import {createStyles, makeStyles, ThemeProvider} from "@material-ui/styles";

import './App.css';

import theme from "./Theme";

import {Box, Theme} from "@material-ui/core";

import Pages from "./Pages";
import Home from "./views/Home";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            backgroundColor: "#282c34"
        },
    })
)

function App() {
    const classes = useStyles();
    const routes = Pages.map((page, i) => {
        return (<Route exact path={page.link} component={page.component} key={i} />);
    });
    return (
    <Box className={"App " + classes.root}>
        <ThemeProvider theme={theme}>
          <Router>
              {routes}
          </Router>
        </ThemeProvider>
    </Box>
    );
}

export default App;
