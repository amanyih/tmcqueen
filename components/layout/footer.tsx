"use client";
import {
  GitHubLogoIcon,
  TwitterLogoIcon,
  DiscordLogoIcon,
} from "@radix-ui/react-icons";
import { ThemeSwitcher } from "../theme/theme-switcher";

export const Footer = () => {
  return (
    <footer id="footer" className="bg-background text-foreground mt-auto">
      <hr className="w-11/12 mx-auto border-secondary" />

      <section className="container py-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex gap-4 items-center">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-80 hover:opacity-100 transition  hover:text-primary "
          >
            <GitHubLogoIcon className="w-6 h-6" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-80 hover:opacity-100 transition  hover:text-primary "
          >
            <TwitterLogoIcon className="w-6 h-6" />
          </a>
          <a
            href="https://discord.com"
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-80 hover:opacity-100 transition
            hover:text-primary 
            "
          >
            <DiscordLogoIcon className="w-6 h-6" />
          </a>
        </div>

        <h3 className="text-sm text-muted-foreground text-center">
          &copy; {new Date().getFullYear()} Typing McQueen. All rights reserved.
        </h3>

        <ThemeSwitcher />
      </section>
    </footer>
  );
};
