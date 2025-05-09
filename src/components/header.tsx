import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Moon, Sun, AlignJustify } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTheme } from "@/components/theme-provider"

export default function Header() {
  const { setTheme } = useTheme()
  const openLinkToNewTab = (openLink: string) => {
    window.open(openLink)
  }

  return (
    <header className='sticky top-0 w-full border-b'>
      <div className='h-14 flex ml-4 mr-4 justify-between items-center'>
        {/* Navbar */}
        <Sheet>
          <SheetTrigger className='cursor-pointer'>
            <AlignJustify/>
          </SheetTrigger>

          {/* Side bar */}
          <SheetContent side="left">
            <SheetHeader className='text-2xl'>
              <Link to="/" className='border-b pb-2'>
                va0ck
              </Link>
            </SheetHeader>

            <nav className='flex flex-col ml-4 -mt-4'>
              {/* <SheetTitle>
                works
              </SheetTitle>
              <ul>
                <li>- epic event</li>
              </ul> */}
              <SheetTitle>
                tools
              </SheetTitle>
              <ul>
                <li><a href="https://va0ck.github.io/folder-net/" target='_blank'>
                  - folder-net
                </a></li>
              </ul>
            </nav>
          </SheetContent>
        </Sheet> 
        
        {/* Right Sidebar */}
        <ul className='flex flex-row items-center'>
          <li>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="link" className='cursor-pointer'>
                  socials
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center">
                <DropdownMenuItem onClick={() => openLinkToNewTab("https://www.roblox.com/users/844029031/profile")} className='cursor-pointer'>
                  roblox
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => openLinkToNewTab("https://devforum.roblox.com/u/va0ck")} className='cursor-pointer'>
                  devforum
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => openLinkToNewTab("https://github.com/va0ck")} className='cursor-pointer'>
                  github
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => openLinkToNewTab("https://discordapp.com/users/1023691601006051378")} className='cursor-pointer'>
                  discord
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </li>

          {/* Dark/Light mode */}
          <li>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className='cursor-pointer'>
                  <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme("light")} className='cursor-pointer'>
                  light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")} className='cursor-pointer'>
                  dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")} className='cursor-pointer'>
                  system
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </li>
        </ul>
      </div>
    </header>
  );
}