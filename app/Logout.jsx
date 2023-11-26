'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import { signOut } from 'next-auth/react'

const Logout = () => {
  const router = useRouter()

  const handleSignout = async (e) => {
    e.preventDefault()
    console.log("in signout");
    const data = await signOut('credentials', { redirect: false,  callbackUrl: "/login" })
    const res = await data.json()
    console.log(res);
    router.push(data.url)
    router.refresh()
  }
  return (
    <button 
    onClick={(e) => handleSignout(e)}
    className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
      <span >
        Sign Out
      </span>
    </button>
  )
}

export default Logout