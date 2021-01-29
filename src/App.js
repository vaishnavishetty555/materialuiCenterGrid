import React from "react";
import { Grid } from "@material-ui/core";
import AcUnitIcon from "@material-ui/icons/AcUnit";

export default function App() {
  return (
    <Grid
      container
      justify="center"
      direction="column"
      alignItems="center"
      style={{ height: "520px" }}
    >
      <Grid item xs={3} style={{ textAlign: "center" }}>
        <AcUnitIcon color="primary" />
      </Grid>
      <Grid item>
        <AcUnitIcon color="secondary" />
      </Grid>
    </Grid>
  );
}
