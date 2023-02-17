import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import HotelDummy from "../assets/HotelDummy.jpg";
import { Icon } from "@iconify/react";

export default function RecipeReviewCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader title="Hotel Aryan Amish" />
      <CardMedia component="img" height="194" image={HotelDummy} alt="Hotel" />
      <CardContent>
        <div className="flex flex-row w-auto h-auto justify-start items-center">
          <Icon icon="mdi:guest-room-outline" width="24" height="24" />
          <h1 className="ml-2 text-lg font-semibold">3</h1>
        </div>
        <div className="flex flex-row w-auto h-auto justify-start items-center">
          <Icon
            icon="material-symbols:my-location-outline"
            width="24"
            height="24"
          />
          <h1 className="ml-2 text-lg">Chennai, India</h1>
        </div>
        <div className="flex flex-row w-auto h-auto justify-start items-center">
          <Icon
            icon="teenyicons:search-property-outline"
            width="24"
            height="24"
          />
          <h1 className="ml-2 text-lg font-bold">Apartment</h1>
        </div>
        <Typography variant="body" color="text.secondary" className="font-bold">
          ₹2,00,000 per night
        </Typography>
      </CardContent>
    </Card>
  );
}
