"use client"

import React, { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Link, useLocation } from "react-router-dom"
import { LucideIcon, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

interface SubMenuItem {
  name: string
  url: string
  description?: string
}

interface NavItem {
  name: string
  url: string
  icon: LucideIcon
  subItems?: SubMenuItem[]
}

interface NavBarProps {
  items: NavItem[]
  className?: string
}

export function NavBar({ items, className }: NavBarProps) {
  const location = useLocation()
  const [activeTab, setActiveTab] = useState("")
  const [isMobile, setIsMobile] = useState(false)
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null)

  useEffect(() => {
    // Find active tab based on current route
    const currentItem = items.find(item => {
      if (item.url === location.pathname) return true
      if (item.subItems) {
        return item.subItems.some(subItem => subItem.url === location.pathname)
      }
      return false
    })
    if (currentItem) {
      setActiveTab(currentItem.name)
    }
  }, [location.pathname, items])

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const handleItemClick = (item: NavItem) => {
    if (item.subItems && item.subItems.length > 0) {
      setOpenSubmenu(openSubmenu === item.name ? null : item.name)
    } else {
      setActiveTab(item.name)
      setOpenSubmenu(null)
    }
  }

  return (
    <div
      className={cn(
        "fixed top-0 left-1/2 -translate-x-1/2 z-50 pt-6",
        className,
      )}
    >
      <div className="flex items-center gap-3 bg-slate-900/80 border border-white/10 backdrop-blur-lg py-1 px-1 rounded-full shadow-lg">
        {items.map((item) => {
          const Icon = item.icon
          const isActive = activeTab === item.name
          const hasSubmenu = item.subItems && item.subItems.length > 0

          return (
            <div key={item.name} className="relative">
              {hasSubmenu ? (
                <button
                  onClick={() => handleItemClick(item)}
                  className={cn(
                    "relative cursor-pointer text-sm font-semibold px-6 py-2 rounded-full transition-colors flex items-center gap-1",
                    "text-[#EAEAEA]/80 hover:text-[#1E90FF]",
                    isActive && "bg-white/10 text-[#1E90FF]",
                  )}
                >
                  <span className="hidden md:inline">{item.name}</span>
                  <span className="md:hidden">
                    <Icon size={18} strokeWidth={2.5} />
                  </span>
                  <ChevronDown 
                    size={14} 
                    className={cn(
                      "transition-transform duration-200",
                      openSubmenu === item.name && "rotate-180"
                    )} 
                  />
                  {isActive && (
                    <motion.div
                      layoutId="lamp"
                      className="absolute inset-0 w-full bg-[#1E90FF]/10 rounded-full -z-10"
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    >
                      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-[#1E90FF] rounded-t-full">
                        <div className="absolute w-12 h-6 bg-[#1E90FF]/20 rounded-full blur-md -top-2 -left-2" />
                        <div className="absolute w-8 h-6 bg-[#1E90FF]/20 rounded-full blur-md -top-1" />
                        <div className="absolute w-4 h-4 bg-[#1E90FF]/20 rounded-full blur-sm top-0 left-2" />
                      </div>
                    </motion.div>
                  )}
                </button>
              ) : (
                <Link
                  to={item.url}
                  onClick={() => handleItemClick(item)}
                  className={cn(
                    "relative cursor-pointer text-sm font-semibold px-6 py-2 rounded-full transition-colors",
                    "text-[#EAEAEA]/80 hover:text-[#1E90FF]",
                    isActive && "bg-white/10 text-[#1E90FF]",
                  )}
                >
                  <span className="hidden md:inline">{item.name}</span>
                  <span className="md:hidden">
                    <Icon size={18} strokeWidth={2.5} />
                  </span>
                  {isActive && (
                    <motion.div
                      layoutId="lamp"
                      className="absolute inset-0 w-full bg-[#1E90FF]/10 rounded-full -z-10"
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    >
                      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-[#1E90FF] rounded-t-full">
                        <div className="absolute w-12 h-6 bg-[#1E90FF]/20 rounded-full blur-md -top-2 -left-2" />
                        <div className="absolute w-8 h-6 bg-[#1E90FF]/20 rounded-full blur-md -top-1" />
                        <div className="absolute w-4 h-4 bg-[#1E90FF]/20 rounded-full blur-sm top-0 left-2" />
                      </div>
                    </motion.div>
                  )}
                </Link>
              )}

              {/* Submenu */}
              <AnimatePresence>
                {hasSubmenu && openSubmenu === item.name && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full mt-2 left-1/2 -translate-x-1/2 w-80 bg-slate-900/95 backdrop-blur-lg border border-white/10 rounded-2xl shadow-2xl py-4"
                  >
                    <div className="grid gap-2 px-4">
                      {item.subItems?.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.url}
                          onClick={() => {
                            setActiveTab(item.name)
                            setOpenSubmenu(null)
                          }}
                          className="group flex flex-col p-3 rounded-xl hover:bg-white/10 transition-colors"
                        >
                          <div className="font-medium text-[#EAEAEA] group-hover:text-[#1E90FF] transition-colors">
                            {subItem.name}
                          </div>
                          {subItem.description && (
                            <div className="text-sm text-[#EAEAEA]/60 mt-1">
                              {subItem.description}
                            </div>
                          )}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )
        })}
      </div>
    </div>
  )
}