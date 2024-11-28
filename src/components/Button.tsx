import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string;
  rounded?: "sm" | "full";
};

export default function Button({ label, rounded, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={`bg-primary-cyan text-white font-bold hover:bg-[#9be3e2] focus-visible:bg-[#9be3e2] ${
        rounded === "sm" ? "rounded-sm py-2" : "rounded-full px-8 py-2.5"
      } ${props.className}`}
    >
      {label}
    </button>
  );
}
