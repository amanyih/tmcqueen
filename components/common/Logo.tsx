import Image from "next/image";
import Link from "next/link";

export default function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" aria-label="Home">
      <div className={`flex items-center space-x-2 `}>
        {/* Logo Image */}
        <Image
          src="/images/95.png"
          alt="Logo"
          width={40}
          height={40}
          priority
          className="w-10 h-10 object-contain hover:scale-110 transition-transform duration-300"
        />

        {/* Gradient Text */}
        <span
          className=" text-4xl font-bold tracking-tight
        inline bg-gradient-to-r from-primary via-accent to-secondary
         text-transparent bg-clip-text
        
        "
        >
          McQueen
        </span>
      </div>
    </Link>
  );
}
