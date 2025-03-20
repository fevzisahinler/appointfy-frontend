"use client"

import * as React from "react"
import {
  ArrowUpCircleIcon,
  BarChartIcon, CalendarIcon,
  CameraIcon,
  ClipboardListIcon,
  DatabaseIcon,
  FileCodeIcon,
  FileIcon,
  FileTextIcon,
  FolderIcon,
  HelpCircleIcon,
  LayoutDashboardIcon,
  ListIcon, MessageCircleIcon,
  SearchIcon,
  SettingsIcon, StarIcon,
  UsersIcon,
} from "lucide-react"

import { NavDocuments } from "@/components/nav-documents"
import { NavMain } from "@/components/nav-main"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const data = {
  user: {
    name: "Appointfy",
    email: "info@barbershop.com",
    avatar: "/avatars/barber.jpg",
  },
  navMain: [
    { title: "Dashboard", url: "#", icon: LayoutDashboardIcon },
    { title: "Appointments", url: "#", icon: ListIcon },
    { title: "Customers", url: "#", icon: UsersIcon },
    { title: "Services", url: "#", icon: FileTextIcon },
    { title: "Staff", url: "#", icon: FolderIcon },
    { title: "Analytics", url: "#", icon: BarChartIcon },
  ],
  navSecondary: [
    { title: "Notifications", url: "#", icon: HelpCircleIcon },
    { title: "Calendar", url: "#", icon: CalendarIcon },
    { title: "Messages", url: "#", icon: MessageCircleIcon },
    { title: "Settings", url: "#", icon: SettingsIcon },
  ],
  documents: [
    { name: "Revenue Reports", url: "#", icon: ClipboardListIcon },
    { name: "Customer History", url: "#", icon: FileIcon },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <a href="#">
                <ArrowUpCircleIcon className="h-5 w-5" />
                <span className="text-base font-semibold">Appointfy.</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavDocuments items={data.documents} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
