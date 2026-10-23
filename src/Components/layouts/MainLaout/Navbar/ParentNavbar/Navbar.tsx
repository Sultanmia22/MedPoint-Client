"use client";
import { useState } from "react";
import Logo from "@/Components/common/Logo/Logo";
import HumburgerButton from "../MobileNav/HamburgerButton";
import MobileDrower from "../MobileNav/MobileDrawer";
import ProfileAndAuth from "../ProfileDropdown/ProfileAndAuth";
import Container from "@/Components/common/Container/Container";
import DesktopNavMenu from "../DesktopNav/DesktopNavMenu";
import { useSession } from "next-auth/react";
import { getValidRole } from "@/lib/utils/getValidRole";
import ThemeToggle from "@/Components/common/ThemeToggle/ThemeToggle";
import RolePortalBadge from "@/Components/common/RolePortalBadge/RolePortalBadge";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
  const { data: session } = useSession();
  const role = getValidRole(session?.user.role);

  return (
    <>
      <div className="sticky md:top-4 z-40 md:mt-4 ">
        <header>
          <Container className="bg-base-100 shadow-md md:rounded-lg">
            <nav className="flex h-16 items-center justify-between">
              {/* Logo Start */}
              <section className="flex items-center gap-3">
                <HumburgerButton
                  isOpen={drawerOpen}
                  onClick={() => setDrawerOpen(!drawerOpen)}
                />
                <Logo />
                <div className="hidden md:ml-2 md:block">
                  <RolePortalBadge role={role} />
                </div>
              </section>
              {/* Logo END */}

              {/* Desktop NavMenu Start */}
              <DesktopNavMenu role={role}/>
              {/* Desktop NavMenu END */}

              {/* Right Section  Start*/}
              <section className="flex items-center gap-3">
                <ThemeToggle />
                <ProfileAndAuth />
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
