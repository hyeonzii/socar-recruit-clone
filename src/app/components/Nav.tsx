'use client'

import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Link from 'next/link'
import SocarLogo from '../../../public/images/socar-logo.svg'

export default function Nav() {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <header data-aos='slide-down' className='border-b-2 border-white z-30 whitespace-nowrap p-10'>
      <div className='mg-auto w-10/12 h- flex'>
        <div className='w-1/2'>
          <span className='relative cursor-pointer h-6 w-32 inline-block'>
            <Link href='/' className='relative w-full h-full inline-block'>
              <SocarLogo />
            </Link>
          </span>
        </div>
        <div className='w-1/2'>
          <ul className='flex gap-5 pointer-cursor'>
            <li>
              <Link href='/about'>ABOUT</Link>
            </li>
            <li>
              <Link href='/socarUniverse'>SOCAR UNIVERSE</Link>
            </li>
            <li>MOBILITY TECH</li>
            <li>CAREERS</li>
            <li>IR</li>
            <li>NEWS</li>
          </ul>
        </div>
      </div>
    </header>
  )
}
