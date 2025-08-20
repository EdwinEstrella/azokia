"use client"

import * as React from "react"
import { Link } from 'react-router-dom'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Facebook, Instagram, Linkedin, Moon, Send, Sun, Twitter } from "lucide-react"
import { useLanguage } from '@/contexts/LanguageContext'

function Footerdemo() {
  const [isDarkMode, setIsDarkMode] = React.useState(false)
  const { t } = useLanguage()

  React.useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [isDarkMode])

  return (
    <footer className="relative border-t bg-slate-900 text-[#EAEAEA] transition-colors duration-300">
      <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8 max-w-7xl">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="relative">
            <div className="flex items-center space-x-2 mb-4">
              <div className="relative">
                <img 
                  src="/catalogo copy.png" 
                  alt="Azokia Logo" 
                  className="w-10 h-10 object-contain"
                />
                <div className="absolute -inset-1 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-xl blur opacity-20"></div>
              </div>
              <div className="flex items-baseline space-x-1">
                <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-blue-300 bg-clip-text text-transparent">
                  AZOKIA
                </span>
                <span className="text-sm text-blue-300 font-bold">
                  LLC
                </span>
              </div>
            </div>
            <p className="mb-6 text-[#EAEAEA]/70">
              {t('footerDescription')}
            </p>
            <form className="relative">
              <Input
                type="email"
                placeholder={t('yourEmail')}
                className="pr-12 backdrop-blur-sm bg-white/10 border-white/20 text-[#EAEAEA] placeholder:text-[#EAEAEA]/50"
              />
              <Button
                type="submit"
                size="icon"
                className="absolute right-1 top-1 h-8 w-8 rounded-full bg-gradient-to-r from-[#1E90FF] to-[#9B59B6] text-white transition-transform hover:scale-105"
              >
                <Send className="h-4 w-4" />
                <span className="sr-only">{t('subscribe')}</span>
              </Button>
            </form>
            <div className="absolute -right-4 top-0 h-24 w-24 rounded-full bg-[#1E90FF]/10 blur-2xl" />
          </div>
          
          <div>
            <h3 className="mb-4 text-lg font-semibold text-[#EAEAEA]">{t('quickLinks')}</h3>
            <nav className="space-y-2 text-sm">
              <Link to="/" className="block transition-colors hover:text-[#1E90FF] text-[#EAEAEA]/80">
                {t('home')}
              </Link>
              <Link to="/services" className="block transition-colors hover:text-[#1E90FF] text-[#EAEAEA]/80">
                {t('services')}
              </Link>
              <Link to="/web-development" className="block transition-colors hover:text-[#1E90FF] text-[#EAEAEA]/80">
                Desarrollo Web
              </Link>
              <Link to="/automation" className="block transition-colors hover:text-[#1E90FF] text-[#EAEAEA]/80">
                Automatización
              </Link>
              <Link to="/contact" className="block transition-colors hover:text-[#1E90FF] text-[#EAEAEA]/80">
                {t('contact')}
              </Link>
            </nav>
          </div>
          
          <div>
            <h3 className="mb-4 text-lg font-semibold text-[#EAEAEA]">{t('contact')}</h3>
            <address className="space-y-2 text-sm not-italic text-[#EAEAEA]/80">
              <p>Urbanización Villa Laura</p>
              <p>Calle 1ra Número 16</p>
              <p>Santo Domingo, República Dominicana</p>
              <p>Phone: +1 (555) 123-4567</p>
              <p>Email: info@azokia.com</p>
            </address>
          </div>
          
          <div className="relative">
            <h3 className="mb-4 text-lg font-semibold text-[#EAEAEA]">{t('followUs')}</h3>
            <div className="mb-6 flex space-x-4">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" className="rounded-full bg-white/10 border-white/20 text-[#EAEAEA] hover:bg-[#1E90FF]/20 hover:border-[#1E90FF]/50">
                      <Facebook className="h-4 w-4" />
                      <span className="sr-only">Facebook</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Síguenos en Facebook</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" className="rounded-full bg-white/10 border-white/20 text-[#EAEAEA] hover:bg-[#1E90FF]/20 hover:border-[#1E90FF]/50">
                      <Twitter className="h-4 w-4" />
                      <span className="sr-only">Twitter</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Síguenos en Twitter</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" className="rounded-full bg-white/10 border-white/20 text-[#EAEAEA] hover:bg-[#1E90FF]/20 hover:border-[#1E90FF]/50">
                      <Instagram className="h-4 w-4" />
                      <span className="sr-only">Instagram</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Síguenos en Instagram</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" className="rounded-full bg-white/10 border-white/20 text-[#EAEAEA] hover:bg-[#1E90FF]/20 hover:border-[#1E90FF]/50">
                      <Linkedin className="h-4 w-4" />
                      <span className="sr-only">LinkedIn</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Conéctate en LinkedIn</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            
            <div className="flex items-center space-x-2">
              <Sun className="h-4 w-4 text-[#EAEAEA]/60" />
              <Switch
                id="dark-mode"
                checked={isDarkMode}
                onCheckedChange={setIsDarkMode}
                className="data-[state=checked]:bg-[#1E90FF] data-[state=unchecked]:bg-white/20"
              />
              <Moon className="h-4 w-4 text-[#EAEAEA]/60" />
              <Label htmlFor="dark-mode" className="sr-only">
                Alternar modo oscuro
              </Label>
            </div>
          </div>
        </div>
        
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-center md:flex-row">
          <p className="text-sm text-[#EAEAEA]/60">
            © 2024 Azokia LLC. {t('allRightsReserved')}
          </p>
          <nav className="flex gap-4 text-sm">
            <Link to="/privacy" className="transition-colors hover:text-[#1E90FF] text-[#EAEAEA]/60">
              {t('privacyPolicy')}
            </Link>
            <Link to="/terms" className="transition-colors hover:text-[#1E90FF] text-[#EAEAEA]/60">
              {t('termsConditions')}
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}

export { Footerdemo }
