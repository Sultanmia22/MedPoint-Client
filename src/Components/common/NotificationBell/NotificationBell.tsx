import { Bell } from "lucide-react";

const NotificationBell = () => {
  return (
    <button
      type="button"
      aria-label="Notifications"
      title="Notifications"
      className="flex h-10 w-10 items-center justify-center rounded-full text-base-content transition-colors hover:bg-base-200"
    >
      <Bell size={20} />
    </button>
  );
};

export default NotificationBell;
