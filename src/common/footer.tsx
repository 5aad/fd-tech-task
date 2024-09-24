import { FC, memo } from "react";

const Footer: FC = memo(() => {
  return (
    <footer className="p-4 dark:bg-gray800 bg-gray200 dark:text-white text-gray900 text-center">
      © {new Date().getFullYear()} Your Company
    </footer>
  );
});

export default Footer;
