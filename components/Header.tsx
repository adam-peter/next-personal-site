import delay from "@/lib/delay";
import React, { Suspense } from "react";

import HeaderLink from "./HeaderLink";

const Header = async () => {
  await delay(5000);

  return (
    <header>
      Header component
      <HeaderLink />
    </header>
  );
};

export default Header;
