import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Icon } from "@iconify/react";

export default function RecipeReviewCard(props) {
  return (
    <a href={props.detail_link}>
      <Card
        sx={{ maxWidth: 345 }}
        className="hover:scale-105 hover:shadow-2xl cursor-pointer"
      >
        <CardHeader title={props.title} />
        <CardMedia
          component="img"
          height="194"
          className="h-96 w-96"
          image={props.image}
          alt="Hotel"
        />
        <CardContent>
          <div className="flex flex-row w-auto h-auto justify-start items-center">
            <Icon icon="mdi:guest-room-outline" width="24" height="24" />
            <h1 className="ml-2 text-lg font-semibold">{props.guest}</h1>
          </div>
          <div className="flex flex-row w-auto h-auto justify-start items-center">
            <Icon
              icon="material-symbols:my-location-outline"
              width="24"
              height="24"
            />
            <h1 className="ml-2 text-lg">{props.short_address}</h1>
          </div>
          <div className="flex flex-row w-auto h-auto justify-start items-center">
            <Icon
              icon="teenyicons:search-property-outline"
              width="24"
              height="24"
            />
            <h1 className="ml-2 text-lg font-bold">{props.type}</h1>
          </div>
          <Typography
            variant="body"
            color="text.secondary"
            className="font-bold"
          >
            ₹{props.price} per night
          </Typography>
        </CardContent>
      </Card>
    </a>
  );
}
