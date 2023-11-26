'use client'
import React from 'react'

import { useSession } from 'next-auth/react'

const page = () => {

  const { data: session } = useSession()

  return (
    <>
    <h3>Client side getting session See Latency</h3>
    <div>{JSON.stringify(session)}</div>
    </>
  )
}

export default page