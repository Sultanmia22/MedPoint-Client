// config/index.ts

// Export সব navigation items
export * from "./navItems";

// Export সব dashboard menus
export * from "./dashboardMenus";

// Export সব profile menus
export * from "./profileMenus";

// Combined exports for convenience
export {
  getNavItemsByRole,
  getCommonNavItems,
  getRoleSpecificNavItems,
} from "./navItems";

export { getDashboardMenuByRole, hasDashboardMenu } from "./dashboardMenus";

export {
  getProfileMenuByRole,
  hasProfileMenu,
  getPublicAuthMenu,
} from "./profileMenus";