"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import { handleLenisScroll } from "@/lib/lenisScroll";

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
          <Link
             onClick={(e) => {
            setOpen(false);
            handleLenisScroll(e, "#home")}}
            href="#home"
            className="text-lg hover:underline"
          >
            About
          </Link>
          <Link
             onClick={(e) => {
            setOpen(false);
            handleLenisScroll(e, "#apps")}}
            href="#apps"
            className="text-lg hover:underline"
          >
            Apps
          </Link>
          <Link
            onClick={(e) => {
            setOpen(false);
            handleLenisScroll(e, "#skills")}}
            href="#skills"
            className="text-lg hover:underline"
          >
            Skills
          </Link>
            <Link
            onClick={(e) => {
            setOpen(false);
            handleLenisScroll(e, "#contact")}}
            href="#contact"
            className="text-lg hover:underline"
          >
            Contact
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
