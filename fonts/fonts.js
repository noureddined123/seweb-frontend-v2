import { DM_Sans, Space_Grotesk } from "next/font/google";
import { twMerge } from "tailwind-merge";

export const dmSens = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "500", "600", "700"],
  display: "swap",
  variable: "--font-dM_sans",
});
export const Space_grotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-space_grotesk",
});

export const fonts = twMerge(dmSens.className, Space_grotesk.variable);
