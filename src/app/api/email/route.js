import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend("re_8xzkw6DZ_PLALxTFPFxk9vvEXabbKZGi8"); // use your API key from resend and make sure it is in a string
const fromEmail = process.env.FROM_EMAIL; // use a string email for this -> "test@example.com"

export async function POST(req, res) {
  const { email, subject, message } = await req.json();
  console.log(email, subject, message);
  await resend.emails.send({
    from: "Amberlie <amberlie.hicken@gmail.com>",
    to: [fromEmail, email],
    subject: subject,
    react: (
      <>
        <h1>{subject}</h1>
        <p>Thank you for contacting us!</p>
        <p>New message submitted:</p>
        <p>{message}</p>
      </>
    ),
  });
  return NextResponse.json({
    status: "ok",
  });
}
