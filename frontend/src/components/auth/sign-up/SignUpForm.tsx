import React, { useState } from "react";
import { Flex, TextField, Button, Heading, Text } from "@radix-ui/themes";
import { AuthCard } from "../AuthCard";

export const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  return (
    <AuthCard>
      <Flex direction={"column"} gap={"3"}>
        <Heading>Sign Up</Heading>
        <TextField.Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="E-mail"
        />
        <TextField.Input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
        />
        <TextField.Input
          value={cpassword}
          onChange={(e) => setCpassword(e.target.value)}
          type="password"
          placeholder="Confirm Password"
        />
        <Button>Submit</Button>
        <Text>
          {" "}
          <a href="/sign-in">Already Singed Up? </a>
        </Text>
      </Flex>
    </AuthCard>
  );
};
