'use client';
import {Link} from 'next-view-transitions'
import { usePathname } from 'next/navigation'
const navItems = {
  '/': {
    name: 'home',
  },
  '/blog': {
    name: 'blog',
  },
}

export function Navbar() {

  const pathname = usePathname()

  return (
    <aside className="-ml-[8px] tracking-tight bg-sunshine sticky top-0">
      <div className="max-w-xl mx-auto ">
        <nav
          className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex flex-row space-x-0 ms-auto">
            {Object.entries(navItems).map(([path, { name }]) => {
              const isActive = pathname === path

              return (
                  <Link
                      key={path}
                      href={path}
                      className={`transition-all flex align-middle relative py-1 px-2 m-1 ${
                          isActive ? 'underline underline-offset-5 hover:text-gray-900 ' : ''
                      }`}
                  >
                  {name}
                </Link>
              )
            })}
          </div>
        </nav>
      </div>
    </aside>
  )
}
