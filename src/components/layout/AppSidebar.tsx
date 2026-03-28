import { Link, useLocation } from 'react-router-dom'
import { BarChart3, LayoutDashboard, Settings, FileText, LogOut, Hexagon } from 'lucide-react'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
} from '@/components/ui/sidebar'

export function AppSidebar() {
  const location = useLocation()

  const navItems = [
    { title: 'Visão Geral', url: '/', icon: LayoutDashboard },
    { title: 'Análise Detalhada', url: '/analytics', icon: BarChart3 },
    { title: 'Relatórios', url: '#', icon: FileText },
    { title: 'Configurações', url: '#', icon: Settings },
  ]

  return (
    <Sidebar variant="inset">
      <SidebarHeader className="h-16 flex items-center justify-center border-b px-4">
        <Link
          to="/"
          className="flex items-center gap-2 font-semibold text-lg text-primary w-full px-2"
        >
          <Hexagon className="h-6 w-6 fill-primary/20" />
          <span>Nexus BI</span>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menu Principal</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={location.pathname === item.url}>
                    <Link to={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="border-t p-4">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton className="text-muted-foreground hover:text-destructive hover:bg-destructive/10">
              <LogOut />
              <span>Sair</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}
