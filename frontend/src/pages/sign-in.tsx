import React from "react";
import { Container, Flex, Box } from "@radix-ui/themes";
import { SignInForm } from "../components/auth/sign-in/SignInForm";

export const SignIn = () => {
  return (
    <Box m="auto">
      <Flex justify={"center"} align={"center"}>
        <Container size={"1"}>
          <SignInForm />
        </Container>
      </Flex>
    </Box>
  );
};
