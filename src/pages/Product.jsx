import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  TextField,
  Grid,
  Typography,
  Box,
  useTheme,
} from "@mui/material";

const Product = () => {
  const theme = useTheme();

  const [products, setProducts] = useState([
    { id: 1, name: "Product 1", image: "image1.jpg" },
    { id: 2, name: "Product 2", image: "image2.jpg" },
  ]);

  const [filter, setFilter] = useState("");

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(filter.toLowerCase())
  );

  const deleteProduct = (id) => {
    console.log("Delete product with ID:", id);
  };

  const updateProduct = (id) => {
    console.log("Update product with ID:", id);
  };

  const viewProduct = (id) => {
    console.log("View product with ID:", id);
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        maxWidth: "100%",
        overflowX: "auto",
        padding: "20px",
      }}
    >
      <Grid container spacing={1}>
        <Grid item xs={7} sm={9}>
          <Grid container spacing={1} alignItems="center">
            <Grid item xs={8}>
              <TextField
                label="Search by Name"
                value={filter}
                onChange={handleFilterChange}
                variant="outlined"
                fullWidth
                sx={{
                  marginBottom: 2,
                  borderRadius: "4px",
                  borderColor:
                    theme.palette.mode === "dark" ? "black" : "white",
                }}
                InputProps={{
                  sx: {
                    "& fieldset": {
                      borderColor:
                        theme.palette.mode === "dark" ? "black" : "white",
                    },
                    "&:hover fieldset": {
                      borderColor: "black",
                    },
                  },
                }}
              />
            </Grid>
            <Grid item xs={4}>
              <Button
                variant="contained"
                fullWidth
                sx={{
                  maxWidth: "120px",
                  alignSelf: "flex-start",
                  marginLeft: "auto",
                  borderRadius: "4px",
                  border: "1px solid black",
                  backgroundColor:
                    theme.palette.mode === "dark" ? "#4CAF50" : "#2196F3",
                }}
              >
                Add New Product
              </Button>
            </Grid>
          </Grid>

          <TableContainer component={Paper} sx={{ marginTop: "20px" }}>
            <Table sx={{ border: "1px solid black" }}>
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Image</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredProducts.map((product) => (
                  <TableRow key={product.id}>
                    <TableCell>{product.name}</TableCell>
                    <TableCell>
                      <img
                        src={product.image}
                        alt={product.name}
                        style={{ width: "50px", height: "auto" }}
                      />
                    </TableCell>
                    <TableCell>
                      <Button
                        variant="contained"
                        onClick={() => deleteProduct(product.id)}
                        sx={{ marginRight: "5px" }}
                      >
                        Delete
                      </Button>
                      <Button
                        variant="contained"
                        onClick={() => updateProduct(product.id)}
                        sx={{ marginRight: "5px" }}
                      >
                        Update
                      </Button>
                      <Button
                        variant="contained"
                        onClick={() => viewProduct(product.id)}
                      >
                        View
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Product;
