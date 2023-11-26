import React from 'react'
import { getServerSession } from 'next-auth'
import { options } from '../api/auth/[...nextauth]/options'
const page = async () => {
  const session = await getServerSession(options)
  return (

    <div>
      <h1>Server side DashBoard Home</h1>
      <pre>{JSON.stringify(session)}</pre>
    </div>
  )
}

export default page