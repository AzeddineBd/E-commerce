import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss({
      content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
      theme: {
        extend: {
          colors: {
            primary: "#1E293B",
            secondary: "#64748B",
            accent: "#F59E0B",
            background: "#F8FAFC",
            text: "#0F172A",
            muted: "#94A3B8",
          },
          fontFamily: {
            sans: ["Inter", "sans-serif"], // أو حسب الخط الموجود في Figma
            heading: ["Poppins", "sans-serif"], // مثال لخط العناوين
          },
        },
      },
    }),
  ],
});
