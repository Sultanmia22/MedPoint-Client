"use client";
import { useState } from "react";
import Logo from "@/Components/common/Logo/Logo";
import HumburgerButton from "../MobileNav/HamburgerButton";
import MobileDrower from "../MobileNav/MobileDrawer";
import ProfileAndAuth from "../Auth/ProfileAndAuth";
import Container from "@/Components/common/Container/Container";
import type { UserRole } from "@/lib/types/User.Interface";
import DesktopNavMenu from "../DesktopNav/DesktopNavMenu";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
  const [role, setRole] = useState<UserRole>("admin");

  return (
    <>
      <div className="bg-bg shadow-md sticky top-0 z-40">
        <header>
          <Container>
            <nav className="flex h-16 items-center justify-between">
              {/* Logo Start */}
              <section className="flex items-center">
                <Logo />
              </section>
              {/* Logo END */}

              {/* Desktop NavMenu Start */}
              <DesktopNavMenu />
              {/* Desktop NavMenu END */}

              {/* Right Section  Start*/}
              <section className="flex items-center gap-3">
                <ProfileAndAuth />
                <HumburgerButton
                  isOpen={drawerOpen}
                  onClick={() => setDrawerOpen(!drawerOpen)}
                />
              </section>
              {/* Right Section  END*/}
            </nav>
          </Container>
        </header>
      </div>

      <MobileDrower
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        role={role}
      />
    </>
  );
};

export default Navbar;
