import React from "react";
import Link from "next/link";
import Container from "@/Components/common/Container/Container";
import {
  Share2,
  Globe,
  MessageSquare,
  MapPin,
  Mail,
  Phone,
  type LucideIcon,
} from "lucide-react";
import Logo from "@/Components/common/Logo/Logo";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
  badge?: string;
}

const footerColumns: FooterColumn[] = [
  {
    title: "Quick Links",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Find Doctors", href: "/find-doctor" },
      { label: "Specialties", href: "/specialties" },
      { label: "Blog", href: "/blog" },
      { label: "FAQs", href: "/faqs" },
    ],
  },
  {
    title: "For Doctors",
    links: [
      { label: "Register", href: "/doctor/register" },
      { label: "Login", href: "/doctor/login" },
      { label: "Dashboard", href: "/doctor/dashboard" },
      { label: "Terms", href: "/terms" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Contact", href: "/contact" },
      { label: "Help Center", href: "/help-center" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Service", href: "/terms-of-service" },
      { label: "Refund Policy", href: "/refund-policy" },
    ],
    badge: "24/7 Support Available",
  },
];

const socialLinks: { icon: LucideIcon; href: string; label: string }[] = [
  { icon: Share2, href: "#", label: "Share" },
  { icon: Globe, href: "#", label: "Website" },
  { icon: MessageSquare, href: "#", label: "Community" },
];

const paymentMethods = ["VISA", "Mastercard", "bKash", "Nagad"];

const Footer = () => {
  return (
    <footer className="bg-neutral text-neutral-content">
      <Container size="lg" padding="md" className="py-14 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* ===== Brand Column ===== */}
          <div>
            <Logo onSecondary/>

            <p className="mt-4 text-sm leading-relaxed text-neutral-content/60">
              Book appointments with verified doctors in minutes.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex items-center justify-center w-9 h-9 rounded-full bg-neutral-content/10 text-neutral-content/70 transition-colors duration-150 hover:bg-primary hover:text-primary-content"
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* ===== Link Columns ===== */}
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="text-lg">{column.title}</h3>

              <ul className="flex flex-col gap-3 mt-5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-neutral-content/60 transition-colors duration-150 hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>

              {column.badge && (
                <span className="inline-flex items-center gap-2 mt-5 px-3 py-1.5 rounded-full bg-primary/20 text-primary text-xs font-bold">
                  <span className="size-1.5 rounded-full bg-current" />
                  {column.badge}
                </span>
              )}
            </div>
          ))}

          {/* ===== Contact Column ===== */}
          <div>
            <h3 className="text-lg">Contact Us</h3>

            <ul className="flex flex-col gap-4 mt-5">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary shrink-0 mt-0.5" />
                <span className="text-sm leading-relaxed text-neutral-content/60">
                  124 Healthcare Ave, Suite 400
                  New York, NY 10001
                </span>
              </li>
              <li>
                <a
                  href="mailto:support@medpoint.com"
                  className="flex items-center gap-3 text-sm text-neutral-content/60 transition-colors duration-150 hover:text-primary"
                >
                  <Mail size={18} className="text-primary shrink-0" />
                  support@medpoint.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+18005550199"
                  className="flex items-center gap-3 text-sm text-neutral-content/60 transition-colors duration-150 hover:text-primary"
                >
                  <Phone size={18} className="text-primary shrink-0" />
                  +1 (800) 555-0199
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* ===== Bottom Bar ===== */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-t border-neutral-content/10 mt-12 pt-6">
          <p className="text-sm text-neutral-content/60">
            © {new Date().getFullYear()} MedPoint. All rights reserved.
          </p>

          <div className="flex items-center gap-3">
            {paymentMethods.map((method) => (
              <span
                key={method}
                className="bg-neutral-content text-neutral text-xs font-bold px-3 py-1.5 rounded-md"
              >
                {method}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;