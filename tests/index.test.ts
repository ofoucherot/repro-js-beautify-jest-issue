import { sendEmail } from "../src/resend";

describe("test", () => {
  test("test repro", async () => {
    const result = await sendEmail();

    expect(result).toBeTruthy();
  });
});
