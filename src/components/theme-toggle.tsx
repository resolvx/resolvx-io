"use client";

import { Sun, Moon, Monitor } from "lucide-react";
import { useTheme } from "next-themes";

type Theme = "light" | "dark" | "system";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const options = [
    { value: "light" as Theme, icon: Sun, label: "Light" },
    { value: "dark" as Theme, icon: Moon, label: "Dark" },
    { value: "system" as Theme, icon: Monitor, label: "System" },
  ];

  return (
    <div className="inline-flex items-center gap-1 p-1 bg-surface border border-border-subtle rounded-full">
      {options.map((option) => (
        <button
          key={option.value}
          onClick={() => setTheme(option.value)}
          className={`
            flex items-center gap-1.5 px-3 py-1.5 text-[12px] font-medium rounded-full transition-all
            ${theme === option.value
              ? "bg-surface-hover text-foreground"
              : "text-text-muted hover:text-text-secondary"
            }
          `}
          title={option.label}
        >
          <option.icon className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">{option.label}</span>
        </button>
      ))}
    </div>
  );
}
