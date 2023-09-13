"use client";
import { ThemeProvider } from "next-themes";

const Providers = (props: any) => {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <div className="dark:bg-black transition-colors duration-300 min-h-screen">
        {props.children}
      </div>
    </ThemeProvider>
  );
};

export default Providers;
