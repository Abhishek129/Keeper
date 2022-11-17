import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div>
      <footer>
        <p>&copy; {currentYear} T-Talkiee</p>
      </footer>
    </div>
  );
}

export default Footer;
