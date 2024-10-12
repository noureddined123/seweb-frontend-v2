import { fonts } from "@/fonts/fonts";
import "./globals.css";
import AnimationProvider from "./AnimationProvider";
import "aos/dist/aos.css"; // Import AOS CSS file
export const metadata = {
  title: "Meetup",
  description: "IT Solutions & Technology PSD Template",
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
