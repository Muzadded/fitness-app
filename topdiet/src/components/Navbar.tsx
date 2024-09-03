'use client'
import React from 'react'
import logo from '@/asset/logo.png'
import { IoIosBody } from 'react-icons/io'
import './Navbar.css'
import Image from 'next/image'
import Link from 'next/link'
import AuthPopup from './AuthPopup/AuthPopup'

const Navbar = () => {

  const [isloggedin, setIsloggedin] = React.useState<boolean>(false)
  const [showpopup, setShowpopup] = React.useState<boolean>(false)
  return (
    <nav>
      {/* Links */}
      <Link href='/' style={{ marginLeft: 100 }}>Home</Link>
      <Link href='/about'>about</Link>
      <Link href='/profile'><IoIosBody /></Link>
      <Image src={logo} alt='Logo' className='navimg'/>
      {
        isloggedin ?
          <button className='navbtn'>Logout</button>
          : <button className='navbtn'
            onClick={() => {
              setShowpopup(true)
            }}
          >Login</button>
      }
      {
        showpopup && <AuthPopup />
      }
    </nav>
  )
}

export default Navbar
