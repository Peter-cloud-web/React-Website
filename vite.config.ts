import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from "dotenv";

// https://vitejs.dev/config/
dotenv.config(); // Load environment variables from .env

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    "process.env": process.env, // This line might be necessary to expose env vars to the client
  },
});
