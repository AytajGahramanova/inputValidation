import * as React from "react";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import Checkbox from "@mui/material/Checkbox";
import { Stack, Button, Typography } from "@mui/material";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

export default function Form({ todos, setTodos }) {

  const [nameInput, setNameInput] = React.useState("");
  const [emailInput, setEmailInput] = React.useState("");
  const [passwordInput, setPasswordInput] = React.useState("");
  const [passwordAgainInput, setPasswordAgainInput] = React.useState("");
  const [nameInputError, setNameInputError] = React.useState("");
  const [emailInputError, setEmailInputError] = React.useState("");
  const [passwordInputError, setPasswordInputError] = React.useState("");
  const [formSubmitted, setFormSubmitted] = React.useState(false);

  const FormValid = !nameInputError && !emailInputError && !passwordInputError;


  React.useEffect(() => {
    if (nameInput.trim() === "") {
      setNameInputError("This field can't be empty");
    } else if (!/^[A-Z]/.test(nameInput)) {
      setNameInputError("Please enter the name in capital letters");
    } else {
      setNameInputError("");
    }
  }, [nameInput]);

  React.useEffect(() => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput)) {
      setEmailInputError("Please enter the correct email");
    } else {
      setEmailInputError("");
    }
  }, [emailInput]);

  React.useEffect(() => {
    if (passwordInput.length <= 5) {
      setPasswordInputError("Please enter more than 5 characters");
    }else if (!/[A-Z]+[0-9]/.test(passwordInput)) {
      setPasswordInputError("Please enter a valid password");
    }else {
      setPasswordInputError("");
    }
  }, [passwordInput]);

  const addTodo = () => {
    setFormSubmitted(true);

    if (nameInputError || emailInputError ||  passwordInputError) {
      return;
    }

    setTodos([
      ...todos,
      {
        id: Date.now(),
        name: nameInput,
        email: emailInput,
        password: passwordInput,
        passwordAgain: passwordAgainInput,
      },
    ]);
    setNameInput("");
    setEmailInput("");
    setPasswordInput("");
    setPasswordAgainInput("");
  };

  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1 },
      }}
      noValidate
      autoComplete="off"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <FormControl>
        <InputLabel htmlFor="component-outlined">Name</InputLabel>
        <OutlinedInput
          id="component-outlined"
          label="Name"
          onChange={(e) => setNameInput(e.target.value)}
          value={nameInput}
          style={{ width: "400px" }}
        />
        {formSubmitted && nameInputError && (
          <Typography variant="caption" color="error">
            {nameInputError}
          </Typography>
        )}
      </FormControl>

      <FormControl>
        <InputLabel htmlFor="component-outlined">Email</InputLabel>
        <OutlinedInput
          id="component-outlined"
          label="Email"
          onChange={(e) => setEmailInput(e.target.value)}
          value={emailInput}
          style={{ width: "400px" }}
        />
        {formSubmitted && emailInputError && (
          <Typography variant="caption" color="error">
            {emailInputError}
          </Typography>
        )}
      </FormControl>

      <FormControl>
        <InputLabel htmlFor="component-outlined">Password</InputLabel>
        <OutlinedInput
          type="password"
          id="component-outlined"
          label="Password"
          onChange={(e) => setPasswordInput(e.target.value)}
          value={passwordInput}
          style={{ width: "400px" }}
        />
        {formSubmitted && passwordInputError && (
          <Typography variant="caption" color="error">
            {passwordInputError}
          </Typography>
        )}
      </FormControl>

      <FormControl>
        <InputLabel htmlFor="component-outlined">Password again</InputLabel>
        <OutlinedInput
          type="password"
          id="component-outlined"
          label="Password again"
          onChange={(e) => setPasswordAgainInput(e.target.value)}
          value={passwordAgainInput}
          style={{ width: "400px" }}
        />
        {formSubmitted && passwordInputError && (
          <Typography variant="caption" color="error">
            {passwordInputError}
          </Typography>
        )}        
      </FormControl>

      <Stack direction="row" spacing={2}>
        <FormGroup style={{ marginRight: "80px" }}>
          {FormValid && (
          <FormControlLabel
          required
          control={<Checkbox />}
          checked={FormValid}
          label="Terms & Conditions"
        />
          )}
        </FormGroup>
        <Button variant="contained" color="success" onClick={addTodo}>
          Submit
        </Button>
      </Stack>
    </Box>
  );
}
