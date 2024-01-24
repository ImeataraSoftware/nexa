import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  Bell,
  MinusSquare,
  MoreHorizontal,
  Square,
  XSquare,
} from 'lucide-react'
import { Link, Outlet, useLocation } from 'react-router-dom'

const index = () => {
  const location = useLocation()

  return (
    <>
      <div className="flex h-screen flex-col overflow-hidden bg-background text-foreground">
        <header
          className="flex h-10 items-center justify-between"
          style={{ WebkitAppRegion: 'drag' }}
        >
          <nav
            className="ml-2 flex items-center space-x-6"
            style={{ WebkitAppRegion: 'no-drag' }}
          >
            <Link
              to={'/'}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === '/'
                  ? 'text-primary'
                  : 'text-muted-foreground'
              }`}
            >
              Inicio
            </Link>
            <Link
              to={'/product'}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === '/product'
                  ? 'text-primary'
                  : 'text-muted-foreground'
              }`}
            >
              Productos
            </Link>
            <Link
              to={'/inventory'}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === '/inventory'
                  ? 'text-primary'
                  : 'text-muted-foreground'
              }`}
            >
              Inventario
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="text-muted-foreground transition-colors hover:text-primary">
                  <MoreHorizontal className="size-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="start" forceMount>
                <DropdownMenuLabel className="font-normal">
                  Otros
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>Compras</DropdownMenuItem>
                  <DropdownMenuItem>Ventas</DropdownMenuItem>
                  <DropdownMenuItem>Ubicaciones</DropdownMenuItem>
                  <DropdownMenuItem>Contactos</DropdownMenuItem>
                  <DropdownMenuItem>Alertas</DropdownMenuItem>
                  <DropdownMenuItem>Análisis</DropdownMenuItem>
                  <DropdownMenuItem>Auditoría</DropdownMenuItem>
                  <DropdownMenuItem>Integraciones</DropdownMenuItem>
                  <DropdownMenuItem>Cierre</DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <Link to={'/support'}>Soporte</Link>Soporte
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to={'/config'}>Configuración</Link>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>
          <div
            className="ml-auto flex items-center space-x-4"
            style={{ WebkitAppRegion: 'no-drag' }}
          >
            <div className="flex space-x-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="text-muted-foreground transition-colors hover:text-primary">
                    <Bell className="size-4" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" forceMount>
                  <DropdownMenuLabel className="font-normal">
                    Notificaciones
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem>Example</DropdownMenuItem>
                    <DropdownMenuItem>Example</DropdownMenuItem>
                    <DropdownMenuItem>Example</DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="relative h-8 w-8 rounded-full"
                  >
                    <Avatar className="h-9 w-9">
                      <AvatarImage src="/avatars/03.png" alt="@example" />
                      <AvatarFallback>SC</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" forceMount>
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">
                        example
                      </p>
                      <p className="text-xs leading-none text-muted-foreground">
                        m@example.com
                      </p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem>Perfil</DropdownMenuItem>
                    <DropdownMenuItem>Facturación</DropdownMenuItem>
                    <DropdownMenuItem>Notificaciones</DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    Cerrar sesión
                    <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div>
              <button className="inline-flex h-10 w-10 items-center justify-center whitespace-nowrap bg-background text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
                <MinusSquare className="size-4" />
              </button>
              <button className="inline-flex h-10 w-10 items-center justify-center whitespace-nowrap bg-background text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
                <Square className="size-4" />
              </button>
              <button className="inline-flex h-10 w-10 items-center justify-center whitespace-nowrap bg-background text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
                <XSquare className="size-4" />
              </button>
            </div>
          </div>
        </header>
        <main className="flex h-[calc(100vh-2.5rem)]">
          <main className="flex flex-auto flex-col overflow-auto p-2">
            <Outlet />
          </main>
        </main>
      </div>
    </>
  )
}

export default index
