import React, { useState } from "react";
import { PrimaryButton, TextField, Stack } from "@fluentui/react";
import { SweetAlerts } from "./SweetAlerts";
import { useNavigate } from "react-router-dom";

const ETLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { SweetAlert: SweetSuccess } = SweetAlerts("#HomePage");

  const emailCredentials = [
    "SriRaam@gmail.com",
    "Janaki@gmail.com",
    "Dhanush@gmail.com",
    "Danny@gmail.com",
  ];
  const passwordCredentials = ["111", "222", "333", "444"];

  const handleSubmit = () => {
    let notFilled = [];
    if (!email) {
      notFilled.push("Email");
    }
    if (!password) {
      notFilled.push("Password");
    }
    if (!email || !password) {
      SweetSuccess(
        "error",
        `Please fill the required fields: ${notFilled.join(", ")}`
      );
    } else if (
      emailCredentials.includes(email) &&
      passwordCredentials.includes(password) &&
      emailCredentials.indexOf(email) === passwordCredentials.indexOf(password)
    ) {
      navigate("/HomePage");
    } else {
      SweetSuccess("error", "Email or Password didn't match");
    }
  };

  return (
    <Stack id="HomePage">
      <Stack
        horizontalAlign="center"
        verticalAlign="center"
        styles={{
          root: {
            height: "fit-content",
            width: "25%",
            margin: "10% auto",
            padding: "50px 20px",
            borderRadius: "5%",
            background: "white",
            boxShadow: "5px 5px 5px 5px rgba(0, 0, 0, 0.5)",
          },
        }}
        tokens={{ childrenGap: 15 }}
      >
        <h1>PeerXP</h1>
        <TextField
          label="Email"
          value={email}
          onChange={(ev, newValue) => setEmail(newValue)}
          required
          autoComplete="off"
          iconProps={{ iconName: "FollowUser" }}
          placeholder="Enter your Email"
          styles={{ root: { width: "70%" } }}
        />
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={(ev, newValue) => setPassword(newValue)}
          required
          autoComplete="off"
          canRevealPassword
          placeholder="Enter your password"
          revealPasswordAriaLabel="Show password"
          styles={{ root: { width: "70%" } }}
        />
        <PrimaryButton
          text="Login"
          onClick={handleSubmit}
          style={{ marginLeft: "-51%" }}
        />
      </Stack>
    </Stack>
  );
};

export default ETLogin;
