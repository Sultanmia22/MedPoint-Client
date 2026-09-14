"use client";
import { useState } from "react";
import Logo from "@/Components/common/Logo/Logo";
import HumburgerButton from "./MobileNav/HamburgerButton";
import MobileDrower from "./MobileNav/MobileDrawer";
import ProfileAndAuth from "./Auth/ProfileAndAuth";
import Container from "@/Components/common/Container/Container";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

  return (
    <>
      <div className="bg-bg shadow-md sticky top-0 z-40">
        <header>
          <Container>
          <nav className="flex h-16 items-center justify-between">
            {/* Logo */}
            <section className="flex items-center">
              <Logo />
            </section>

            {/* Desktop NavMenu */}

            {/* Right Section */}
            <section className="flex items-center gap-3">
              <ProfileAndAuth />
              <HumburgerButton isOpen={drawerOpen} onClick={() => setDrawerOpen(!drawerOpen)} />
            </section>
          </nav>
          </Container>
        </header>
      </div>

      <MobileDrower open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  );
};

export default Navbar;