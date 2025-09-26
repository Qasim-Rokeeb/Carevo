"use client"

import * as React from "react"
import { Check, Languages } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"

const languages = [
    { name: "English", code: "en" },
    { name: "Español", code: "es" },
    { name: "Français", code: "fr" },
]

export function LanguageSwitcher() {
  const [selectedLanguage, setSelectedLanguage] = React.useState("en")

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Languages className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Toggle language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="animate-fade-in">
        {languages.map((lang) => (
            <DropdownMenuItem 
                key={lang.code}
                onClick={() => setSelectedLanguage(lang.code)}
                className={cn(lang.code === selectedLanguage && "bg-accent/10 font-semibold")}
            >
                <Check className={cn("mr-2 h-4 w-4", lang.code === selectedLanguage ? "opacity-100" : "opacity-0")} />
                {lang.name}
            </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
