"use server"

// import { ParticipantProps } from "@/lib/models"
import { sendRawMail } from "@/lib/send-mail-api"
import { getIMCResponseEmailTemplate } from "@/lib/email-template"

// Production script
const googleScriptURL = "https://script.google.com/macros/s/AKfycbx0f-Z-pOA1050tKM2ZIdegq9rg5u4AU2YvftqQUzGqsiGgOK-qViVJ-jnhBItFyH-q/exec"


// Test script
// const googleScriptURL = "https://script.google.com/macros/s/AKfycbzL9wgXXjwT9_YGHza4o9tmyNxCTrQrXKtcTmnNNNPIzpBS_RqiG2NgBHDS2FoNdt-T/exec"

//production script
const newsletterScript = "https://script.google.com/macros/s/AKfycbxNqzx89HbXLARYWIvDIdYCi_hRKUHYxerRWAkFk661loIIWdvxqbfBsG0mEK8uWF73rA/exec"

//test script
// const newsletterScript = "https://script.google.com/macros/s/AKfycbyZkHrM5sVLpxdHyX_HLA7rqCiVRbVgmQtb6izF4qFU0cYK8oh3Gs4l17rOAxls4BNl7g/exec"


export const addRegistration = async (formData: any) => {
    try {
      const res = await fetch(googleScriptURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });
  
      // Check if response is HTML (error page) instead of JSON
      const contentType = res.headers.get('content-type');
      let result;
      
      if (contentType && contentType.includes('application/json')) {
        result = await res.json();
      } else {
        // Response is HTML, likely an error page
        const htmlResponse = await res.text();
        console.error('Google Apps Script returned HTML instead of JSON:', htmlResponse);
        throw new Error(`Google Apps Script error: Received HTML response instead of JSON. Status: ${res.status}`);
      }
  
      if (!result.success) {
        throw new Error(result.error || "Failed to add registration to Google Spreadsheet");
      }
  
      // Send confirmation email
      // const emailHtml = getIMCResponseEmailTemplate(formData);
      // const emailResult = await sendRawMail(
      //   formData.email,
      //   "IMC Registration Confirmation - Welcome to International Ministers Conference",
      //   emailHtml
      // );
  
      // if (!emailResult.success) {
      //   throw new Error(`Failed to send confirmation email: ${emailResult.error}`);
      // }
  
      return {
        successMessage: `Success! You have been successfully registered! A confirmation email has been sent to ${formData.email}`
      };
  
    } catch (error: any) {
      console.error("Registration failed:", error);
      return {
        errorMessage: error.message || "Oops! There was a problem with your registration! Please try again or contact support if the issue persists."
      };
    }
  };

  export const addEmail = async (formData: any) => {
    try {
      const res = await fetch(newsletterScript, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

  
      // Check if response is HTML (error page) instead of JSON
      const contentType = res.headers.get('content-type');
      let result;
      
      if (contentType && contentType.includes('application/json')) {
        result = await res.json();
      console.error('with app json:', res);

      } else {
        // Response is HTML, likely an error page
        const htmlResponse = await res.text();
        console.error('Google Apps Script returned HTML instead of JSON:', htmlResponse);

        throw new Error(`Google Apps Script error: Received HTML response instead of JSON. Status: ${res}`);
      }
  
      if (!result.success) {
        throw new Error(result.error || "Failed to add registration to Google Spreadsheet");
      }
  
      return {
        successMessage: `Success! You have been successfully registered! A confirmation email has been sent to ${formData.email}`
      };
  
    } catch (error: any) {
      console.error("Registration failed:", error);
      return {
        errorMessage: error.message || "Oops! There was a problem with your registration! Please try again or contact support if the issue persists."
      };
    }
  };