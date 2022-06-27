import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { CardActionArea } from "@mui/material";
import Rate from "../Rate";
import { Link } from "react-router-dom";

const MovieCard = ({
  movie: { Title, Released, imdbRating, Images, Plot },
}) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia component="img" height="200" image={Images} alt={Title} />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            {Title}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            Released: {Released}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            Rating: <Rate rating={Math.ceil(imdbRating)} />
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {Plot}
          </Typography>
          <Link to={`/${Title}`} style={{ textDecoration: "none" }}>
            <Button size="large">Show More</Button>
          </Link>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default MovieCard;
