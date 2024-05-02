import { currentUser } from '@clerk/nextjs/server'
import React from 'react'

const TestPage = async () => {
  const user = await currentUser()
  return (
    <div>
      User: {user?.firstName}
    </div>
  )
}

export default TestPage
