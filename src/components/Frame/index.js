import React from "react";
import Grid from "@material-ui/core/Grid";

const Frame = props => <Grid {...props}>{props.children}</Grid>;

export default Frame;
