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
import { MinusSquare, MoreHorizontal, Square, XSquare } from 'lucide-react'
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
              to={'/category'}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === '/category'
                  ? 'text-primary'
                  : 'text-muted-foreground'
              }`}
            >
              Categorías
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="text-muted-foreground transition-colors hover:text-primary">
                  <MoreHorizontal className="size-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">Example</p>
                    <p className="text-xs leading-none text-muted-foreground">
                      m@example.com
                    </p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    Example
                    <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    Example
                    <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    Example
                    <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem>Configuración</DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  Cerrar sesión
                  <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>
          <div className="ml-auto" style={{ WebkitAppRegion: 'no-drag' }}>
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
