import React from 'react';
import './navbar.scss';
import Link from 'next/link';


interface NavbarProps {
 linkText: string;
 linkUrl: string;
 loading?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ linkText, linkUrl, loading = false }) => {
 return (
    <nav className="navbar">
      <Link href={linkUrl} className="navbar-link">{linkText}</Link>
      {loading &&
        <div className="pulse-indicator"/>
      }
    </nav>
 );
};

export default Navbar;