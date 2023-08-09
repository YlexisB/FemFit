import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { BsArrowUpRight } from "react-icons/bs";
import constants from "../../constants";

export default function MediaCard() {
  return (
    <div className="card-container">
      {constants.map((card, index) => {
        return (
          <Card
            className="card"
            key={index}
            id={`card-${index}`}
            sx={{ maxWidth: 345 }}
          >
            <CardMedia
              sx={{ height: 190 }}
              image={card.image}
              title=""
              id="card-images"
            />
            <CardContent>
              <div className="card-exercise">Exercise</div>
              <Typography
                id="card-title"
                gutterBottom
                variant="h5"
                component="div"
              >
                {card.title}
              </Typography>
              <Typography
                id="card-description"
                variant="body2"
                color="text.secondary"
              >
                {card.description}
              </Typography>
            </CardContent>
            <CardActions>
              <BsArrowUpRight />
            </CardActions>
          </Card>
        );
      })}
    </div>
  );
}
