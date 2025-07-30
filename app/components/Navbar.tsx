'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetHeader } from '@/components/ui/sheet'
import { NavigationMenu, NavigationMenuItem, NavigationMenuList, NavigationMenuLink } from '@/components/ui/navigation-menu'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <nav className='flex items-center justify-between px-6 py-4 fixed z-50 bg-gray-50/95 backdrop-blur-sm w-full text-gray-900 shadow-lg'>
      {/* Logo Section */}
      <Link href="/" className='flex items-center gap-3 hover:opacity-80 transition-all duration-300 hover:scale-105'>
        <Image 
          src="/SWC_LOGO_WHITE.png"
          alt="Church Logo"
          width={50}
          height={50}
          className="rounded-full shadow-lg"
        />
        <div className='font-playfair'>
          <h1 className='text-lg font-bold leading-tight text-gray-900'>Stirling</h1>
          <p className='text-sm opacity-70 leading-tight text-gray-700'>Worship Center</p>
        </div>
      </Link>

      {/* Desktop Navigation */}
      <NavigationMenu className='hidden md:flex'>
        <NavigationMenuList className='flex gap-1'>
          {navItems.map((item) => (
            <NavigationMenuItem key={item.href}>
              <NavigationMenuLink asChild>
                <Link 
                  href={item.href}
                  className='px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-all duration-200 hover:scale-105 transform'
                >
                  {item.label}
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      {/* Mobile Menu */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild className='md:hidden'>
          <Button variant="ghost" size="icon" className='text-gray-900 hover:bg-gray-100 transition-all duration-200 hover:scale-110 transform'>
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[300px] bg-white border-gray-200 [&>button]:hidden">
          <SheetHeader>
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
          </SheetHeader>
          <div className="flex flex-col gap-6 mt-4">
            {/* Menu Header */}
            <div className="text-center">
              <h2 className="text-xl font-semibold text-gray-900 font-playfair mb-3">
                Stirling Worship Center
              </h2>
              <div className="w-full h-px bg-gray-300"></div>
            </div>
            
            <nav className="flex flex-col gap-2">
              {navItems.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 text-gray-900 hover:bg-gray-100 rounded-md transition-all duration-200 font-medium transform hover:translate-x-1 animate-in slide-in-from-right-4 fade-in-0`}
                  style={{ 
                    animationDelay: `${(index + 1) * 100}ms`,
                    animationFillMode: 'both'
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  )
}
