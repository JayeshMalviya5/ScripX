import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
export default function ImgMediaCard({
  id,
  name,
  language,
  genres,
  runtime,
  premiered,
  rating,
  thumbnail,
}) {
  const navigate = useNavigate();
  return (
    <Card sx={{ maxWidth: 345 }}>
      {console.log("ID", id)}
      <CardMedia
        component="img"
        alt="green iguana"
        height="300"
        image={thumbnail}
      />
      <CardContent>
        <Typography
          style={{ cursor: "pointer" }}
          onClick={() => {
            navigate(`/tv-shows/details/${id}`);
          }}
          gutterBottom
          variant="h5"
          component="div"
        >
          {name}
        </Typography>
        <Typography gutterBottom component="div">
          <b> Language</b>: {language}
        </Typography>
        <Typography gutterBottom component="div">
          <b> Gernes</b>:{" "}
          {genres.map((item) => {
            return <span>{item} </span>;
          })}
        </Typography>
        <Typography gutterBottom component="div">
          <b> Runtime</b>: {runtime}
        </Typography>
        <Typography gutterBottom component="div">
          <b> Premiered</b>: {premiered}
        </Typography>
        <Typography gutterBottom component="div">
          <b> Rating</b>: {rating}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          molestias libero maiores doloremque at assumenda, rem impedit minus ea
          fuga?
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          onClick={() => {
            navigate(`/tv-shows/details/${id}`);
          }}
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
