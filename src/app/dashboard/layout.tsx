"use client"
import Link from "next/link"
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarInset,
  SidebarTrigger,
  SidebarFooter,
} from "@/components/ui/sidebar"
import { Logo } from "@/components/icons/Logo"
import { Button } from "@/components/ui/button"
import {
  LayoutDashboard,
  Users,
  HeartHandshake,
  LogOut,
  LifeBuoy,
} from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
          <div className="flex items-center gap-2">
            <Logo />
            <span className="font-bold text-lg font-headline group-data-[collapsible=icon]:hidden">
              MmaBoi
            </span>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton
                asChild
                isActive
                tooltip={{ children: "Dashboard" }}
              >
                <Link href="/dashboard">
                  <LayoutDashboard />
                  <span>Dashboard</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild tooltip={{ children: "Vulnerabilities" }}>
                <Link href="/dashboard/vulnerabilities">
                  <Users />
                  <span>Vulnerabilities</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild tooltip={{ children: "Programs" }}>
                <Link href="/dashboard/programs">
                  <HeartHandshake />
                  <span>Programs</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarContent>
        <SidebarFooter className="flex-col !items-stretch gap-2">
          <SidebarMenu>
             <SidebarMenuItem>
              <SidebarMenuButton asChild tooltip={{ children: "Support" }}>
                <Link href="/support">
                  <LifeBuoy />
                  <span>Support</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild tooltip={{ children: "Logout" }}>
                <Link href="/">
                  <LogOut />
                  <span>Logout</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
          <div className="flex items-center gap-3 p-2 rounded-lg bg-muted group-data-[collapsible=icon]:justify-center">
             <Avatar className="h-8 w-8">
              <AvatarImage src="https://placehold.co/100x100.png" alt="Admin" />
              <AvatarFallback>AD</AvatarFallback>
            </Avatar>
            <div className="flex flex-col group-data-[collapsible=icon]:hidden">
                <p className="text-sm font-semibold">Admin User</p>
                <p className="text-xs text-muted-foreground">admin@mmaboi.org</p>
            </div>
          </div>
        </SidebarFooter>
      </Sidebar>
      <SidebarInset>
        <header className="flex items-center justify-between p-4 border-b">
          <SidebarTrigger />
           <Button asChild>
            <Link href="/register">Register New Applicant</Link>
          </Button>
        </header>
        <main className="p-4 md:p-6">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  )
}
