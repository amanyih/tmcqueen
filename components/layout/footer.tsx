import { Logo } from "@/components/common";
import { Github, Twitter, Youtube, Globe, Keyboard } from "lucide-react";

export const Footer = () => {
  return (
    <footer
      id="footer"
      className="bg-background text-foreground
    mt-auto
    "
    >
      {/* Top Section */}
      <hr className="w-11/12 mx-auto border-muted" />
      <section className="container py-16 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
        {/* Logo Section */}
        <div className="col-span-full xl:col-span-2 flex items-center">
          <Logo className="text-2xl" />
        </div>

        {/* Follow Us */}
        <div className="flex flex-col gap-4">
          <h3 className="font-bold text-lg">Follow Us</h3>
          <div className="flex gap-4 items-center">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-80 hover:opacity-100 transition"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-80 hover:opacity-100 transition"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="https://discord.com"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-80 hover:opacity-100 transition"
            >
              {/* <Discord className="w-5 h-5" /> */}
              <Globe className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Platforms */}
        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Platforms</h3>
          <a href="#" className="opacity-80 hover:opacity-100">
            Web
          </a>
          <a href="#" className="opacity-80 hover:opacity-100">
            Mobile
          </a>
          <a href="#" className="opacity-80 hover:opacity-100">
            Desktop
          </a>
        </div>

        {/* Resources */}
        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Resources</h3>
          <a href="#features" className="opacity-80 hover:opacity-100">
            Features
          </a>
          <a href="#faq" className="opacity-80 hover:opacity-100">
            FAQ
          </a>
          <a href="#leaderboard" className="opacity-80 hover:opacity-100">
            Leaderboard
          </a>
        </div>

        {/* Community */}
        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Community</h3>
          <a
            href="https://youtube.com"
            className="opacity-80 hover:opacity-100"
          >
            Youtube
          </a>
          <a
            href="https://discord.com"
            className="opacity-80 hover:opacity-100"
          >
            Discord
          </a>
          <a href="https://twitch.com" className="opacity-80 hover:opacity-100">
            Twitch
          </a>
        </div>
      </section>

      {/* Bottom Section */}
      <section className="container pb-10 text-center">
        <h3 className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Typing McQueen. All rights reserved.
        </h3>
      </section>
    </footer>
  );
};
