import { ThemeToggle } from "../theme/theme-toggle";
import Image from "next/image";
import { Button } from "../ui";
import Notification from "./notification";
import Link from "next/link";

export function Navbar() {
  return (
    <nav className="flex justify-between p-4 items-center">
      <div className="flex items-end gap-3">
        <a href="/" className="text-xl font-bold">
          <span className="flex items-center gap-2">
            <Image height={40} width={40} src={"/images/95.png"} alt="logo" />
            <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl">
              McQueen
            </h1>
          </span>
        </a>
        <span>
          <Link href="/typing/practice">Practice</Link>
        </span>
        <span>
          <Link href="">Race</Link>
        </span>
      </div>
      <div className="flex gap-2 items-center">
        <ThemeToggle />
        <Notification />
        <span>
          <Button variant="default" size="lg">
            Get Started
          </Button>
        </span>
      </div>
    </nav>
  );
}
