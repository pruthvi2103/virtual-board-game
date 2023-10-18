import React, { useState } from "react";
import { Flex, TextField, Button, Heading, Text } from "@radix-ui/themes";
import { AuthCard } from "../AuthCard";

export const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <AuthCard>
      <Flex direction={"column"} gap={"3"}>
        <Heading>Sign In</Heading>
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
        <Button>Submit</Button>
        <Text>
          {" "}
          <a href="/sign-up">Sign Up? </a>
        </Text>
      </Flex>
    </AuthCard>
  );
};
