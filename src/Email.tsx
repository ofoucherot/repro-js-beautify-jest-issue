import * as React from "react";
import { Html, Button } from "@react-email/components";

export const EmailTest = () => (
  <Html lang="en" dir="ltr">
    <Button href="https://example.com" style={{ color: "#61dafb" }}>
      Click me
    </Button>
  </Html>
);

export default EmailTest;
