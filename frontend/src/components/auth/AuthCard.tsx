import React from "react";
import { Card } from "@radix-ui/themes";

interface IProps {
  children: React.ReactNode;
}
export const AuthCard = ({ children }: IProps) => {
  return <Card>{children}</Card>;
};
