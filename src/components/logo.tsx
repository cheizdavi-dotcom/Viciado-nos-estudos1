import { cn } from "@/lib/utils";
import type { SVGProps } from "react";

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      className={cn("h-12 w-12 text-foreground", props.className)}
    >
      <path
        d="M25 90V70H75V90"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M50 70V45"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M35 55L20 45"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M65 55L80 45"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="50" cy="30" r="10" stroke="currentColor" strokeWidth="4" />
      <path
        d="M30 70H20C14.4772 70 10 65.5228 10 60V55C10 49.4772 14.4772 45 20 45H80C85.5228 45 90 49.4772 90 55V60C90 65.5228 85.5228 70 80 70H70"
        stroke="hsl(var(--accent))"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}
