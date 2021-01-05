import React from "react";

interface AppHeaderProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

export const AppHeader: React.FC<AppHeaderProps> = (props: AppHeaderProps) => {
  return (
    <>
      <header>
        <h1>Welcome Matt</h1>
        <h4>Come On In</h4>
        <h4>{`Is DarkMode enabled? ${props.isDarkMode}`}</h4>
      </header>
      <button onClick={props.toggleDarkMode}>Toggle Dark Mode</button>
    </>
  );
};
