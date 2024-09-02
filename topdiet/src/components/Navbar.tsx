import React from 'react'
import logo from '@/asset/logo.png'
import { IoIosBody } from 'react-icons/io'
import './Navbar.css'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav>
      {/* Links */}
        <Link href='/' style={{marginLeft: 100}}>Home</Link>
        <Link href='/about'>about</Link>
        <Link href='/profile'><IoIosBody/></Link>
        <Image src={logo} alt='Logo'/>
        <button>Sign Out</button>  
    </nav>
  )
}

export default Navbar
