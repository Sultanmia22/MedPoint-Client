import { Menu, X } from "lucide-react";
import React from "react";

interface MobileHumburgerButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

const MobileHumburgerButton = ({ isOpen, onClick }: MobileHumburgerButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center w-9 h-9 rounded-md text-heading hover:bg-primary/10 hover:text-primary transition-colors md:hidden"
      aria-label={isOpen ? "Close menu" : "Open menu"}
    >
      <Menu className="w-5 h-5" />
    </button>
  );
};

export default MobileHumburgerButton;
