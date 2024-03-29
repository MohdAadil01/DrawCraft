import { Inter } from "next/font/google";
import "./globals.css";
import drawit from "../public/drawit-logo.jpg";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Draw Craft",
  description:
    "Unleash your creativity with DrawArt, an intuitive and immersive drawing app designed to ignite your imagination. Whether you're an aspiring artist or a seasoned doodler, DrawArt provides a seamless platform to express yourself through vibrant strokes and intricate shapes. Dive into a world of endless possibilities, where every canvas becomes a playground for your ideas. With a user-friendly interface and a wide range of tools at your fingertips, unleash your inner artist and bring your visions to life with DrawArt.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
