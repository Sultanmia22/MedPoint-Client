"use client"
import { useState } from "react";
import Logo from "@/Components/common/Logo/Logo";
import HumburgerButton from "./MobileMenu/MobileHumburgerButton";
import MobileDrower from "./MobileMenu/MobileDrower";
import ProfileAndAuth from "./Auth/ProfileAndAuth";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

  return (
    <>
      <div className="bg-white shadow-md px-4 py-2">
        <header>
          <nav className="flex justify-between items-center">
            {/* Logo */}
            <section>
              <Logo />
            </section>

            {/* Right Section */}
            <section className="flex items-center gap-2">
              <div>
                <ProfileAndAuth />
              </div>
              <div>
                <HumburgerButton isOpen={drawerOpen} onClick={() => setDrawerOpen(!drawerOpen)} />
              </div>
            </section>
          </nav>
        </header>
      </div>

      <MobileDrower open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  );
};

export default Navbar;
