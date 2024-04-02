import { Resend } from "resend";
import { EmailTest } from "./Email";

export async function sendEmail(): Promise<boolean> {
  const resend = new Resend("TODO");

  const res = await resend.emails.send({
    from: `todo`,
    to: ["todo"],
    subject: "Hello test",
    react: <EmailTest />,
  });
  if (res.error !== null) {
    console.error("Error sending email", res.error);
    throw res.error;
  }

  return true;
}
