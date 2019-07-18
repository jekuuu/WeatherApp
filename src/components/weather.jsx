import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Grid, CardActionArea } from "@material-ui/core";

const useStyles = makeStyles({
  title: {
    fontSize: 20
  },
  pos: {
    marginBottom: 12
  }
});
const Weather = ({ weatherData }) => {
  const classes = useStyles();
  const roundTemp = temp => {
    return Math.round(temp * 10) / 10;
  };

  const weatherIcon = e => {
    if (e === "10n" || e === "10d" || e === "9n" || e === "9d") {
      return "rain";
    } else if (
      e === "02d" ||
      e === "02n" ||
      e === "03d" ||
      e === "03n" ||
      e === "04d" ||
      e === "04n"
    ) {
      return "fewclouds";
    } else if (e === "13n" || e === "13d") {
      return "snow";
    } else if (e === "01n" || e === "01d") {
      return "clearSky";
    } else if (e === "11n" || e === "11d") {
      return "thunderstorm";
    } else if (e === "50n" || e === "50d") {
      return "mist";
    } else {
      return "sunny";
    }
  };
  return (
    <Grid container direction="row" spacing={1} style={{ marginTop: "2%" }}>
      {weatherData.map(data => (
        <Grid item xs={2} sm={2} key={data.dt}>
          <Card className={classes.card}>
            <CardActionArea>
              <img className={weatherIcon(data.weather[0].icon)} alt="" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {data.weather[0].main}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  <sub>{roundTemp(data.main.temp_min)}</sub>
                </Typography>
                <Typography gutterBottom variant="h5" component="h2">
                  {roundTemp(data.main.temp)}&#176;C
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  <sup>{roundTemp(data.main.temp_max)}</sup>
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};
export default Weather;
