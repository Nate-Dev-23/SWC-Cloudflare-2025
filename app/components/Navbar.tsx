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
    <nav className='flex items-center justify-between px-6 py-4 fixed z-50 bg-black/95 backdrop-blur-sm w-full text-white border-b border-gray-800'>
      {/* Logo Section */}
      <Link href="/" className='flex items-center gap-3 hover:opacity-80 transition-opacity'>
        <Image 
          src="/SWC_LOGO_WHITE.png"
          alt="Church Logo"
          width={50}
          height={50}
          className="rounded-full"
        />
        <div className='font-playfair'>
          <h1 className='text-lg font-bold leading-tight'>Stirling</h1>
          <p className='text-sm opacity-90 leading-tight'>Worship Center</p>
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
                  className='px-4 py-2 text-sm font-medium text-white hover:text-gray-300 hover:bg-white/10 rounded-md transition-all duration-200'
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
          <Button variant="ghost" size="icon" className='text-white hover:bg-white/10'>
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[300px] bg-black border-gray-800 [&>button]:hidden">
          <SheetHeader>
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
          </SheetHeader>
          <div className="flex flex-col gap-6 mt-4">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className='px-4 py-3 text-white hover:bg-white/10 rounded-md transition-colors duration-200 font-medium'
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
