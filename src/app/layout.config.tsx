import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import Image from "next/image";

export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <div className="flex items-center gap-2">
        <Image
          src="/logo.svg"
          alt="ResolvX"
          width={24}
          height={24}
          className="dark:invert"
        />
        <span className="font-semibold">ResolvX</span>
      </div>
    ),
  },
  links: [
    {
      text: "Docs",
      url: "/docs",
      active: "nested-url",
    },
    {
      text: "GitHub",
      url: "https://github.com/resolvx/resolvx",
    },
  ],
  githubUrl: "https://github.com/resolvx/resolvx",
};
