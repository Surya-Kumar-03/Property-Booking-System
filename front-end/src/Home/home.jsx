import React from "react";
import TextField from "@mui/material/TextField";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Cards from "./cards";
import Footer from "../Footer/footer";
import instance from "../axios";

function Home() {
  instance.get("properties/").then((response) => {
    console.log(response);
  });

  const [value, setValue] = React.useState(dayjs("2023-02-17T21:11:54"));
  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <div className="flex flex-col w-screen items-center justify-start">
      <div className="flex flex-row w-10/12 h-24 bg-gray-200 rounded-lg shadow-md mt-4 items-center justify-center gap-2">
        <TextField
          className="w-96"
          id="filled-basic"
          label="Search by city, hotel or neighbourhood"
        />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DesktopDatePicker
            label="Start Date"
            inputFormat="MM/DD/YYYY"
            value={value}
            onChange={handleChange}
            renderInput={(params) => <TextField {...params} />}
          />
          <DesktopDatePicker
            label="End Date"
            inputFormat="MM/DD/YYYY"
            value={value}
            onChange={handleChange}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
        <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </div>
      <div className="flex flex-row flex-wrap gap-4 justify-center items-center w-11/12 h-auto mt-5 mb-16">
        <Cards></Cards>
        <Cards></Cards>
        <Cards></Cards>
        <Cards></Cards>
        <Cards></Cards>
        <Cards></Cards>
        <Cards></Cards>
        <Cards></Cards>
        <Cards></Cards>
        <Cards></Cards>
        <Cards></Cards>

      </div>
      <Footer></Footer>
    </div>
  );
}

export default Home;
