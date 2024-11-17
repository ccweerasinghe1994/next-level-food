import imageLogo from "@/public/assets/logo.png";
import Link from "next/link";
export default function Header() {
  return (
    <header className="">
      <Link href={"/"}>
        <img
          src={imageLogo.src}
          alt={
            "An artistic illustration of a vibrant dining table filled with a variety of colorful dishes, including fruits, vegetables, breadsticks, sauces, desserts, and beverages like wine and juice, arranged in an inviting and festive manner."
          }
        />
        NextLevel Food
      </Link>
      <nav>
        <ul>
          <li>
            <Link href={"/meals"}>Browse Meals</Link>
          </li>
          <li>
            <Link href={"/community"}>Foodies Comunity</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
