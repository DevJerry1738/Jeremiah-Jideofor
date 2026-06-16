import { T as TSS_SERVER_FUNCTION, a as createServerFn } from "./server-DEkQBszW.mjs";
import process from "node:process";
import "../_libs/seroval.mjs";
import "../_libs/react.mjs";
import { o as objectType, s as stringType } from "../_libs/zod.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "node:stream";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
var createServerRpc = (serverFnMeta, splitImportFn) => {
  const url = "/_serverFn/" + serverFnMeta.id;
  return Object.assign(splitImportFn, {
    url,
    serverFnMeta,
    [TSS_SERVER_FUNCTION]: true
  });
};
const submitContactForm_createServerFn_handler = createServerRpc({
  id: "51496c6ca2b5055341948a46205d4083f7301883d1e1b16d00d2abd04c02d91c",
  name: "submitContactForm",
  filename: "src/lib/api/contact.functions.ts"
}, (opts) => submitContactForm.__executeServer(opts));
const submitContactForm = createServerFn({
  method: "POST"
}).inputValidator(objectType({
  name: stringType().min(1, "Name is required"),
  email: stringType().email("Invalid email address"),
  org: stringType().optional(),
  topic: stringType(),
  message: stringType().min(1, "Message is required")
})).handler(submitContactForm_createServerFn_handler, async ({
  data
}) => {
  const resendApiKey = process.env.RESEND_API_KEY;
  if (!resendApiKey) {
    console.error("Missing RESEND_API_KEY environment variable.");
    throw new Error("Server configuration error. API key is not configured.");
  }
  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${resendApiKey}`
      },
      body: JSON.stringify({
        from: "Portfolio Contact <onboarding@resend.dev>",
        to: "devjerry1738@gmail.com",
        reply_to: `${data.name} <${data.email}>`,
        subject: `[Portfolio] ${data.topic} enquiry from ${data.org || data.name}`,
        html: `
            <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 5px;">
              <h2 style="color: #333; border-bottom: 1px solid #eee; padding-bottom: 10px; margin-top: 0;">New Contact Form Submission</h2>
              <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
                <tr>
                  <td style="padding: 8px 0; color: #666; width: 120px;"><strong>Name:</strong></td>
                  <td style="padding: 8px 0; color: #333;">${data.name}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #666;"><strong>Email:</strong></td>
                  <td style="padding: 8px 0; color: #333;"><a href="mailto:${data.email}">${data.email}</a></td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #666;"><strong>Organization:</strong></td>
                  <td style="padding: 8px 0; color: #333;">${data.org || "Not specified"}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #666;"><strong>Topic:</strong></td>
                  <td style="padding: 8px 0; color: #333; text-transform: uppercase; font-weight: bold;">${data.topic}</td>
                </tr>
              </table>
              <div style="background-color: #f9f9f9; padding: 15px; border-radius: 4px; color: #555;">
                <h3 style="margin-top: 0; font-size: 14px; color: #333; border-bottom: 1px solid #ddd; padding-bottom: 5px;">Message Content</h3>
                <p style="white-space: pre-wrap; line-height: 1.6; margin: 0;">${data.message}</p>
              </div>
            </div>
          `
      })
    });
    const resData = await response.json();
    if (!response.ok || resData && resData.statusCode && resData.statusCode !== 200) {
      throw new Error(resData?.message || "Failed to send email through Resend service.");
    }
    return {
      success: true
    };
  } catch (error) {
    console.error("Error submitting contact form to Resend:", error);
    throw new Error(error.message || "Failed to process enquiry. Please try again later.");
  }
});
export {
  submitContactForm_createServerFn_handler
};
