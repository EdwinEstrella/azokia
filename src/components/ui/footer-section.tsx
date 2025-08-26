"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Facebook, Instagram, Linkedin, Send, Twitter } from "lucide-react"

function Footerdemo() {

  return (
    <React.Fragment>
      <footer className="relative bg-[#0D0F2D] text-[#EAEAEA] transition-colors duration-300">
      <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="relative">
            <h2 className="mb-4 text-3xl font-bold tracking-tight">Mantente Conectado</h2>
            <p className="mb-6 text-[#EAEAEA]/70">
              Únete a nuestro boletín para las últimas actualizaciones y ofertas exclusivas.
            </p>
            <form className="relative">
              <Input
                type="email"
                placeholder="Ingresa tu correo electrónico"
                className="pr-12 bg-[#0D0F2D] border border-[#1E90FF]/30 text-[#EAEAEA] focus:ring-[#1E90FF] focus:border-transparent"
              />
              <Button
                type="submit"
                size="icon"
                className="absolute right-1 top-1 h-8 w-8 rounded-full bg-[#1E90FF] text-white transition-transform hover:scale-105"
              >
                <Send className="h-4 w-4" />
                <span className="sr-only">Suscribirse</span>
              </Button>
            </form>
            <div className="absolute -right-4 top-0 h-24 w-24 rounded-full bg-[#1E90FF]/10 blur-2xl" />
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Enlaces Rápidos</h3>
            <nav className="space-y-2 text-sm">
              <a href="#" className="block transition-colors hover:text-[#1E90FF]">
                Inicio
              </a>
              <a href="#" className="block transition-colors hover:text-[#1E90FF]">
                Nosotros
              </a>
              <a href="#" className="block transition-colors hover:text-[#1E90FF]">
                Servicios
              </a>
              <a href="#" className="block transition-colors hover:text-[#1E90FF]">
                Productos
              </a>
              <a href="#" className="block transition-colors hover:text-[#1E90FF]">
                Contacto
              </a>
            </nav>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contáctanos</h3>
            <address className="space-y-2 text-sm not-italic">
              <p>123 Innovation Street</p>
              <p>Tech City, TC 12345</p>
              <p>Teléfono: +1 (849) 596-8986</p> {/* Updated phone number */}
              <p>Email: info@azokia.com</p> {/* Updated email */}
            </address>
          </div>
          <div className="relative">
            <h3 className="mb-4 text-lg font-semibold">Síguenos</h3>
            <div className="mb-6 flex space-x-4">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" className="rounded-full border-[#1E90FF]/30 bg-[#1A1C3A] hover:bg-[#1E90FF]/20 text-[#EAEAEA]">
                      <Facebook className="h-4 w-4" />
                      <span className="sr-only">Facebook</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent className="bg-[#1A1C3A] text-[#EAEAEA]">
                    <p>Síguenos en Facebook</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" className="rounded-full border-[#1E90FF]/30 bg-[#1A1C3A] hover:bg-[#1E90FF]/20 text-[#EAEAEA]">
                      <Twitter className="h-4 w-4" />
                      <span className="sr-only">Twitter</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent className="bg-[#1A1C3A] text-[#EAEAEA]">
                    <p>Síguenos en Twitter</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" className="rounded-full border-[#1E90FF]/30 bg-[#1A1C3A] hover:bg-[#1E90FF]/20 text-[#EAEAEA]">
                      <Instagram className="h-4 w-4" />
                      <span className="sr-only">Instagram</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent className="bg-[#1A1C3A] text-[#EAEAEA]">
                    <p>Síguenos en Instagram</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" className="rounded-full border-[#1E90FF]/30 bg-[#1A1C3A] hover:bg-[#1E90FF]/20 text-[#EAEAEA]">
                      <Linkedin className="h-4 w-4" />
                      <span className="sr-only">LinkedIn</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent className="bg-[#1A1C3A] text-[#EAEAEA]">
                    <p>Conéctate con nosotros en LinkedIn</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            {/* Removed dark mode switch */}
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[#1E90FF]/30 pt-8 text-center md:flex-row">
          <p className="text-sm text-[#EAEAEA]/70">
            © 2024 Azokia LLC. Todos los derechos reservados.
          </p>
          <nav className="flex gap-4 text-sm">
            <a href="#" className="transition-colors hover:text-[#1E90FF]">
              Política de Privacidad
            </a>
            <a href="#" className="transition-colors hover:text-[#1E90FF]">
              Términos de Servicio
            </a>
            <a href="#" className="transition-colors hover:text-[#1E90FF]">
              Configuración de Cookies
            </a>
          </nav>
        </div>
      </div>
    </footer>
  </React.Fragment>
  )
}

export { Footerdemo }