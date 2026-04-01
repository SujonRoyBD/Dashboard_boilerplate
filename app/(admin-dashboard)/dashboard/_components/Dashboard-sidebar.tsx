
import {
  LayoutDashboard,
  Users,
  Brain,
  Settings,
  BriefcaseBusiness,
  Home,
  BookIcon,
  Settings2,
} from "lucide-react";

export interface SidebarDataType {
  id: number;
  name: string;
  href: string;
  icon: React.ElementType;
}

export const SidebarData: SidebarDataType[] = [
  {
    id: 1,
    name: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    id: 2,
    name: "Homeowners",
    href: "/dashboard/homeowners",
    icon: Home,
  },
  {
    id: 3,
    name: "Cleaners",
    href: "/dashboard/cleaners",
    icon: Users,
  },
  {
    id: 4,
    name: "Bookings",
    href: "/dashboard/booking",
    icon: BookIcon,
  },
    {
    id: 4,
    name: "Payments",
    href: "/dashboard/payments",
    icon: Settings2,
  },
  {
    id: 5,
    name: "Job Approvals",
    href: "/dashboard/jobAppruve",
    icon: Settings2,
  },
];
