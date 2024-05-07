"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

import { useMobileSidebar } from "@/hooks/useMobileSidebar"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { Sheet, SheetContent } from "@/components/ui/sheet"
import { Sidebar } from "./Sidebar"

const MobileSidebar = () => {
  const pathname = usePathname()
  const [isMounted, setIsMounted] = useState(false)
  const { isOpen, onOpen, onClose } = useMobileSidebar((state) => state)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    onClose();
  }, [onClose, pathname])

  if (!isMounted) {
    return null;
  }

  return (
    <div>
      <Button
        onClick = {onOpen}
        className="block md:hidden mr-2"
        variant="ghost"
        size="sm"
      >
        <Menu />
      </Button>
      <Sheet open={isOpen} onOpenChange={onClose}>
        <SheetContent
          side="left"
          className="p-2 pt-10"
        >
          <Sidebar storageKey="t-sidebar-mobile-state" />
        </SheetContent>
      </Sheet>
    </div>
  )
}

export default MobileSidebar
