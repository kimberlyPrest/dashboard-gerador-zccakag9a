import { Outlet } from 'react-router-dom'
import { SidebarProvider } from '@/components/ui/sidebar'
import { AppSidebar } from './layout/AppSidebar'
import { AppHeader } from './layout/AppHeader'

export default function Layout() {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-muted/30">
        <AppSidebar />
        <div className="flex flex-col w-full flex-1 overflow-hidden">
          <AppHeader />
          <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8 animate-fade-in-up">
            <div className="mx-auto w-full max-w-7xl">
              <Outlet />
            </div>
          </main>
          <footer className="py-6 px-8 border-t bg-background text-center text-sm text-muted-foreground">
            <p>© 2026 Nexus BI. Todos os direitos reservados.</p>
          </footer>
        </div>
      </div>
    </SidebarProvider>
  )
}
