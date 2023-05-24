import React from 'react'
import {
    Alert,
    Autocomplete,
    Box,
    Button,
    TextareaAutosize,
    TextField,
  } from "@mui/material";
//   import  { useContext, useEffect } from "react";
  import { useState } from "react";
import axios from "axios";
function FormTest(data) {



    const [services, setServices] = useState([]);
  const [city, setCity] = useState({});
  const [locality, setLocality] = useState({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [workinghour, setWorkinghour] = useState("");
  const [longContent, setLongcontent] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [buttonText, setButtonText] = useState("Submit Your Request");


  let newServices = services.map(function (item) {
    return item["service"];
  });

  const currentdate = Date.now();
 

  const onError = (err) => {
    alert(err.message);
  };
  const onSuccess = (success) => {
    setButtonText(success);
  };

  const handleClick = async (onSuccess, onError) => {
    const postData = {
      address: address,
      email: email,
      message: longContent,
      name: name,
      phoneNumber: phoneNumber,
      service: newServices,
      workingHours: workinghour,
    };
    setAddress("");
    setEmail("");
    setName("");
    setWorkinghour("");
    setServices([]);
    setPhoneNumber("");
    setLongcontent("");
    setButtonText("Submitiing...");

    try {
      let response = await axios.post(`https://hooks.zapier.com/hooks/catch/15238691/36a3ja5/
            `, postData);
      console.log(response);
        onSuccess("Submit Your Request"); 
      
    } catch (error) {
      onError(error);
    }
}
  return (
    <div>


 <Box  mt={10} ml={10}sx={{ display: "grid", gap: "10px", position: "relative" , justifyContent:"center"}}>
      <TextField
        size="small"
        placeholder="Name*"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
        sx={{
          backgroundColor: "#007a48",
          borderRadius: "5px",
      width: "300px",
          input: {
            fontSize: "12px",
            color: "white",
            "&::placeholder": {
              textOverflow: "ellipsis !important",
              fontWeight: "400",
              opacity: 0.9,
              color: "#ebe956",
              fontSize: "12px",
            },
          },
        }}
      />
      <TextField
        size="small"
        placeholder="Mobile Number*"
        value={phoneNumber}
        onChange={(e) => {
          setPhoneNumber(e.target.value);
        }}
        sx={{
          backgroundColor: "#007a48",
          borderRadius: "5px",
          width: "300px",
          input: {
            fontSize: "12px",
            color: "white",
            "&::placeholder": {
              textOverflow: "ellipsis !important",
              fontWeight: "400",
              opacity: 0.9,
              color: "#ebe956",
              fontSize: "12px",
            },
          },
        }}
      />
      <TextField
        size="small"
        placeholder="Email*"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        sx={{
          backgroundColor: "#007a48",
          borderRadius: "5px",

          width: "300px",
          input: {
            fontSize: "12px",
            color: "white",
            "::placeholder": {
              textOverflow: "ellipsis !important",
              fontWeight: "400",
              opacity: 0.9,
              color: "#ebe956",
              fontSize: "12px",
            },
          },
        }}
      />
      <Autocomplete
        multiple
        disableCloseOnSelect
        size="small"
        color="primary"
        sx={{ width: "300px" }}
        options={servicesData}
        getOptionLabel={(option) => option.service}
        value={services}
        onChange={(event, newValue) => {
          setServices([...newValue]);
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder="Select Your Services"
            sx={{
              backgroundColor: "#007a48",
              borderRadius: "5px",
              input: {
                fontSize: "12px",
                color: "#ebe956",
                "&::placeholder": {
                  textOverflow: "ellipsis !important",
                  fontWeight: "400",
                  opacity: 0.9,
                  color: "#ebe956",
                  fontSize: "12px",
                },
              },
            }}
          />
        )}
      />

      <TextField
        size="small"
        placeholder="Working hours*"
        value={workinghour}
        onChange={(e) => {
          setWorkinghour(e.target.value);
        }}
        sx={{
          backgroundColor: "#007a48",
          borderRadius: "5px",

          width: "300px",
          input: {
            fontSize: "12px",
            color: "white",
            "&::placeholder": {
              textOverflow: "ellipsis !important",
              fontWeight: "400",
              opacity: 0.9,
              color: "#ebe956",
              fontSize: "12px",
            },
          },
        }}
      />
      <TextField
        size="small"
        placeholder="Address*"
        value={address}
        onChange={(e) => {
          setAddress(e.target.value);
        }}
        sx={{
          backgroundColor: "#007a48",
          borderRadius: "5px",
          color: "white",
          width: "300px",
          input: {
            fontSize: "12px",
            color: "white",
            "&::placeholder": {
              textOverflow: "ellipsis !important",
              fontWeight: "400",
              opacity: 0.9,
              color: "#ebe956",
              fontSize: "12px",
            },
          },
        }}
      />
      <TextareaAutosize
        aria-label="minimum height"
        value={longContent}
        onChange={(e) => {
          setLongcontent(e.target.value);
        }}
        minRows={data}
        placeholder="Mention your detailed requirement here"
        style={{
          backgroundColor: "#007a48",
          borderRadius: "5px",
          width: "300px",
          color: "#fff",
          padding: "9px",
          height: "80px",
          boxSizing: "border-box",
          fontSize: "12px",
        }}
      />
      <div
        style={{ marginTop: "20px", display: "flex", justifyContent: "center" }}
      >
        <Button
          onClick={() => {
            handleClick(onSuccess, onError);
          }}
          disabled={
            name && email && phoneNumber && address && workinghour
              ? false
              : true
          }
          sx={{ fontSize: "14px", textTransform: "none" }}
          variant="contained"
          color="success"
        >
          {buttonText}
        </Button>
      </div>
    </Box>



    </div>
  )
}

export default FormTest


const servicesData = [
    { service: "HouseKeeping" },
    { service: "Child Care" },
    { service: "Elder Care" },
    { service: "Cooking" },
    { service: "Driving" },
    { service: "Others" },
  ];
  
  // url =  https://hooks.zapier.com/hooks/catch/15238691/36tecjg/