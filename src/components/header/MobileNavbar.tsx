"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export default function MobileNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>

      <SheetContent side="right" className="w-[250px]">
        <nav className="flex flex-col gap-4 mt-8">
          <a
            onClick={() => setOpen(false)}
            href="#about"
            className="text-lg hover:underline"
          >
            About
          </a>
          <a
            onClick={() => setOpen(false)}
            href="#projects"
            className="text-lg hover:underline"
          >
            Projects
          </a>
          <a
            onClick={() => setOpen(false)}
            href="#contact"
            className="text-lg hover:underline"
          >
            Contact
          </a>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
