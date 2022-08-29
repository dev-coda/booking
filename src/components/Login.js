import React from "react";
import { Box, Container, TextField } from "@mui/material";
import { Button } from "@mui/material";

const Login = () => {
  return (
    <Container>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log("Submitted");
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1em",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TextField id="email" variant="outlined" label="Email"></TextField>
          <TextField
            id="password"
            variant="outlined"
            label="Contraseña"
            type="password"
          ></TextField>
          <Button type="submit" variant="contained">
            Ingresar
          </Button>
        </Box>
      </form>
    </Container>
  );
};

export default Login;
