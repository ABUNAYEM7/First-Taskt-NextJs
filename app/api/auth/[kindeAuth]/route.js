// pages/api/auth/kinde_callback.js
import { handleAuth } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function handler(req, res) {
  try {
    // Check for both GET and POST methods
    if (req.method === "POST" || req.method === "GET") {
      // Handle the Kinde auth callback
      await handleAuth(req, res);
    } else {
      // If the request method is not allowed, return 405 error
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).json({ message: "Method Not Allowed" });
    }
  } catch (error) {
    console.error("Error in Kinde callback:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}