import { Grid, Typography } from "@material-ui/core";
import imagesrc from "./mern_welcome1.jpeg";

const Welcome = (props) => {
  return (
    <Grid
      container
      item
      direction="column"
      alignItems="center"
      justify="center"
      style={{ margin: "0px", padding: "0px", minHeight: "100vh" }}
    >
      <Grid item style={{ maxWidth: "100%", maxHeight: "100%" }}>
        <img
          src={imagesrc}
          alt="Image Description"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
        <Grid item style={{ textAlign: "center"  }}>
        <Typography variant="h2" style={{ fontWeight: "bold", color: "blue", marginTop: "20px" }}>
          Welcome to <span style={{ fontFamily: "Arial, sans-serif", fontStyle: "italic" }}>JobHub</span>
        </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export const ErrorPage = (props) => {
  return (
    <Grid
      container
      item
      direction="column"
      alignItems="center"
      justify="center"
      style={{ padding: "30px", minHeight: "93vh" }}
    >
      <Grid item>
        <Typography variant="h2">Error 404</Typography>
      </Grid>
    </Grid>
  );
};

export default Welcome;
