import { fonts } from "@/fonts/fonts";
import "./globals.css";
import AnimationProvider from "./AnimationProvider";
import "aos/dist/aos.css"; // Import AOS CSS file
export const metadata = {
  title: "SEWEB",
  description: "SEO & Web Development",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={fonts}>
        <AnimationProvider>{children}</AnimationProvider>
      </body>
    </html>
  );
}
