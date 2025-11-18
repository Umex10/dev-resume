"use client"
import React from 'react'
import Link from "next/link";
import { handleLenisScroll } from "@/lib/lenisScroll";
import Image from "next/image";
import { logo } from '@/content/header/header';

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
              <div className="relative h-10 w-28 sm:h-12 sm:w-36">
                <Link href={logo.href} onClick={(e) => handleLenisScroll(e, logo.href)}>
                  <Image
                    src={logo.src}
                    alt="Umex10 Logo"
                    fill
                    className="object-contain"
                    priority
                  />
                </Link>
              </div>
            </div>
  )
}

export default Logo
