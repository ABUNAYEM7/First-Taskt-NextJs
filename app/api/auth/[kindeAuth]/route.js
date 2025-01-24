import { handleAuth } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function handler(req, res) {
  try {
    await handleAuth(req, res);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
}