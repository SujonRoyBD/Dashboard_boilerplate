"use client";

import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import { SidebarData } from "./Dashboard-sidebar";
import { LogOut, X } from "lucide-react";
import Image from "next/image";

export default function DashboardSidebar() {
  const pathname = usePathname();
  const router = useRouter();

  // ✅ sidebar state (from shadcn)
  const { isMobile, setOpenMobile } = useSidebar();

  return (
    <Sidebar collapsible="icon">
      <SidebarContent>
        <SidebarGroup>
          {/* Logo + Close */}
          <div className="flex items-center justify-between pb-10">
            <div className="flex items-center gap-3">
              <Image
                src="/assets/images/logo (2).png"
                width={47}
                height={40}
                alt="Logo"
                className="object-contain"
              />

              <div className="pt-1 group-data-[collapsible=icon]:hidden">
                <p className="text-[#101828] font-bold text-base">
                  Admin Panel
                </p>
                <p className="mt-1 text-[12px] text-[#6A7282]">
                  Maid Service
                </p>
              </div>
            </div>

            {/*  Close button (mobile only) */}
            <div className="md:hidden cursor-pointer">
              <SidebarTrigger>
                <X className="h-5 w-5 text-muted-foreground" />
              </SidebarTrigger>
            </div>
            
          </div>

          {/* Menu */}
          <SidebarGroupContent>
            <SidebarMenu className="space-y-2">
              {SidebarData.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href;

                return (
                  <SidebarMenuItem key={item.id}>
                    <SidebarMenuButton

                      isActive={isActive}
                      onClick={() => {
                        if (isMobile) {
                          setOpenMobile(false); 
                        }
                      }}
                      className="
                        data-[active=true]:bg-[#F3FFF8]
                        data-[active=true]:text-[#03652B]
                        data-[active=true]:hover:bg-[#F3FFF8]
                      "
                    >
                      <Link href={item.href} className="flex gap-2">
                        <Icon
                          className={`h-4 w-4 ${isActive
                              ? "text-[#03652B] font-semibold"
                              : "text-muted-foreground"
                            }`}
                        />
                        <span className="text-base">{item.name}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* Footer */}
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              onClick={() => {
                router.push("/login");
                if (isMobile) setOpenMobile(false);
              }}
              className="text-red-600"
            >
              <LogOut />
              <span>Logout</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
