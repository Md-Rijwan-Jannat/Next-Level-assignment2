import dotenv from "dotenv";

dotenv.config();

export default {
  port: process.env.SERVER_PORT,
  db_url: process.env.DATABASE_URL,
};
