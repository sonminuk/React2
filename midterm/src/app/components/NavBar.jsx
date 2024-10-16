import Link from "next/link";

export default function NavBar() {
  return (
    <nav>
      <Link href={"/"}>home</Link>  |
          <Link href={"/About"}>About</Link>  |
          <Link href={"/Contact"}>Contact</Link>  |
          <Link href={"/slug/minuk/1234"}>slug</Link>
    </nav>
  );
}
