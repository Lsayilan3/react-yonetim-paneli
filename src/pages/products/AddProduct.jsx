import {
  Typography,
  Box,
  Button,
  MenuItem,
  InputAdornment,
} from "@mui/material";
import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { db } from "../../firbase-confing";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import Swal from "sweetalert2";
import { useAppStore } from "../../appStore";

export default function AddProduct({ closeEvent }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("0");
  const [category, setCategory] = useState("");
  const setRows = useAppStore((state) => state.setRows)
  const empCollectionRef = collection(db, "products");

  const handeNameChange = (event) => {
    setName(event.target.value);
  };

  const handePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handeCategoryChange = (event) => {
    setCategory(event.target.value);
  };
  const createUser = async () => {
    await addDoc(empCollectionRef, {
      name: name,
      price: Number(price),
      category: category,
      date: String(new Date()),
    });
    getUsers();
    closeEvent();
    Swal.fire("Submuitted!", "Your file has been submitted.", "success");
  };

  const getUsers = async () => {
    const data = await getDocs(empCollectionRef);
    setRows(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const currencies = [
    {
      value: "Mobile",
      label: "Mobile",
    },
    {
      value: "Laptop",
      label: "Laptop",
    },
    {
      value: "Elecronics",
      label: "Elecronics",
    },
    {
      value: "Food",
      label: "Food",
    },
  ];
  return (
    <>
      <Box sx={{ m: 2 }} />
      <Typography variant="h2" align="center">
        Add Product
      </Typography>
      <IconButton
        style={{ position: "absolute", top: "0", right: "0" }}
        onClick={closeEvent}
      >
        <CloseIcon />
      </IconButton>
      <Box height={20} />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            size="small"
            onChange={handeNameChange}
            value={name}
            sx={{ minWidth: "100%" }}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="outlined-basic"
            label="Price"
            variant="outlined"
            size="small"
            type="number"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <CurrencyRupeeIcon />
                </InputAdornment>
              ),
            }}
            startAdornment={
              <InputAdornment position="start">
                <CurrencyRupeeIcon />
              </InputAdornment>
            }
            onChange={handePriceChange}
            value={price}
            sx={{ minWidth: "100%" }}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="outlined-basic"
            label="Category"
            select
            variant="outlined"
            size="small"
            onChange={handeCategoryChange}
            value={category}
            sx={{ minWidth: "100%" }}
          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5" align="center">
            <Button variant="contained" onClick={createUser}>
              Submit
            </Button>
          </Typography>
        </Grid>
      </Grid>
      <Box sx={{ m: 4 }} />
    </>
  );
}
