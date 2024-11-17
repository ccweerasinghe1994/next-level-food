import imageLogo from "@/public/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
export default function Header() {
  return (
    <header className="flex justify-between items-center py-8 px-4 max-md:px-[10%]">
      <Link
        className="flex items-center justify-center gap-8 text-[#ddd6cb] font-bold font-montserrat tracking-[0.15rem] uppercase text-[1.5rem]"
        href={"/"}
      >
        <Image
          className="w-20 h-20 object-contain drop-shadow-2xl"
          src={imageLogo}
          alt={
            "An artistic illustration of a vibrant dining table filled with a variety of colorful dishes, including fruits, vegetables, breadsticks, sauces, desserts, and beverages like wine and juice, arranged in an inviting and festive manner."
          }
          priority
        />
        NextLevel Food
      </Link>
      <nav>
        <ul className="flex gap-6 text-xl font-montserrat">
          <li>
            <Link
              className="text-[#ddd6cb] font-bold py-2 px-4 rounded-[0.5rem] hover:bg-gradient-to-r from-[#ff8a05] to-[#f9b331] hover:bg-clip-text hover:text-transparent hover:text-shadow-[0 0 18px rgba(248, 190, 42, 0.8)] active:bg-gradient-to-r from-[#ff8a05] to-[#f9b331] active:bg-clip-text active:text-transparent active:text-shadow-[0 0 18px rgba(248, 190, 42, 0.8)]"
              href={"/meals"}
            >
              Browse Meals
            </Link>
          </li>
          <li>
            <Link
              className="text-[#ddd6cb] font-bold py-2 px-4 rounded-[0.5rem] hover:bg-gradient-to-r from-[#ff8a05] to-[#f9b331] hover:bg-clip-text hover:text-transparent hover:text-shadow-[0 0 18px rgba(248, 190, 42, 0.8)] active:bg-gradient-to-r from-[#ff8a05] to-[#f9b331] active:bg-clip-text active:text-transparent active:text-shadow-[0 0 18px rgba(248, 190, 42, 0.8)]"
              href={"/community"}
            >
              Foodies Comunity
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

// .active {
//   background: linear-gradient(90deg, #ff8a05, #f9b331);
//   background-clip: text;
//   -webkit-background-clip: text;
//   -webkit-text-fill-color: transparent;
// }

// .logo img {
//   filter: drop-shadow(0 0 0.75rem rgba(0, 0, 0, 0.5));
// }
