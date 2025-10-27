
// export async function sendRawMail(to: string, subject: string, html: string) {
//   const MAILTRAP_API_TOKEN = process.env.MAILTRAP_API_TOKEN!;

//   const response = await fetch("https://send.api.mailtrap.io/api/send", {
//     method: "POST",
//     headers: {
//       "Authorization": `Bearer ${MAILTRAP_API_TOKEN}`,
//       "Content-Type": "application/json",
//       "Api-Token": MAILTRAP_API_TOKEN
//     },
//     body: JSON.stringify({
//       from: {
//         email: "voiceofafricatech@gmail.com",
//         name: "Voice of Africa Conference"
//       },
//       to: [
//         {
//           email: to
//         }
//       ],
//       subject,
//       html
//     })
//   });

//   const data = await response.json();

//   if (!response.ok) {
//     console.error("Email sending failed:", data);
//     return { success: false, error: data };
//   }

//   console.log("Email sent successfully:", data);
//   return { success: true, messageId: data.message_ids?.[0] };
// }

// export async function sendIMCMail(to: string, subject: string, html: string) {
//   const MAILTRAP_API_TOKEN = process.env.NEXT_PUBLIC_MAILTRAP_API_TOKEN!;

//   const response = await fetch("https://send.api.mailtrap.io/api/send", {
//     method: "POST",
//     headers: {
//       "Authorization": `Bearer ${MAILTRAP_API_TOKEN}`,
//       "Content-Type": "application/json",
//       "Api-Token": MAILTRAP_API_TOKEN
//     },
//     body: JSON.stringify({
//       from: {
//         email: "voiceofafricatech@gmail.com",
//         name: "Voice of Africa Conference"
//       },
//       to: [
//         {
//           email: to
//         }
//       ],
//       subject,
//       html
//     })
//   });

//   const data = await response.json();

//   if (!response.ok) {
//     console.error("Email sending failed:", data);
//     return { success: false, error: data };
//   }

//   console.log("Email sent successfully:", data);
//   return { success: true, messageId: data.message_ids?.[0] };
// }

export async function sendRawMail(to: string, subject: string, html: string) {
  const MAILTRAP_API_TOKEN = process.env.MAILTRAP_API_TOKEN!;

  const response = await fetch("https://send.api.mailtrap.io/api/send", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${MAILTRAP_API_TOKEN}`,
      "Content-Type": "application/json",
      "Api-Token": MAILTRAP_API_TOKEN
    },
    body: JSON.stringify({
      from: {
        email: "trainings@femilazarusministries.com",
        name: "Voice of Africa"
      },
      to: [
        {
          email: to
        }
      ],
      subject,
      html
    })
  });

  const data = await response.json();

  if (!response.ok) {
    console.error("Email sending failed:", data);
    return { success: false, error: data };
  }

  console.log("Email sent successfully:", data);
  return { success: true, messageId: data.message_ids?.[0] };
}