import { Montserrat, Poppins, Quicksand } from "next/font/google";
const popins = Poppins({
  variable: "--font-popins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const quicksand = Quicksand({
  variable: "--font-quicksand",
  weight: ["300", "400", "500", "600", "700"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  weight: ["300", "400", "500", "600", "700"],
});

export { popins, quicksand, montserrat };
