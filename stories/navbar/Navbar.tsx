import React from "react";
import classes from "./navbar.module.scss";
import Link from "next/link";

const MODULE_PREFIX = "navbar";

interface NavbarProps {
  linkText: string;
  linkUrl: string;
  loading?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({
  linkText,
  linkUrl,
  loading = false,
}) => {
  return (
    <nav className={classes[MODULE_PREFIX]}>
      <Link href={linkUrl} className={classes[`${MODULE_PREFIX}-link`]}>
        {linkText}
      </Link>
      {loading && (
        <div className={classes[`${MODULE_PREFIX}-pulse-indicator`]} />
      )}
    </nav>
  );
};

export default Navbar;
