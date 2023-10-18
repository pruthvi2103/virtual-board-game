import React from "react";
import { Container, Flex, Box } from "@radix-ui/themes";
import { SignUpForm } from "../components/auth/sign-up/SignUpForm";

export const SignUp = () => {
  return (
    <Box m="auto">
      <Flex justify={"center"} align={"center"}>
        <Container size={"1"}>
          <SignUpForm />
        </Container>
      </Flex>
    </Box>
  );
};
