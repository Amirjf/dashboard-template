import React from 'react'

import {getAuth} from '../AuthHelpers'

const useGetRole = () => {
  const {role} = getAuth()!
  return role
}

export default useGetRole
