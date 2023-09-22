import React from 'react'
import { Redirect } from 'expo-router';

const home = () => {
  return (
    <Redirect href={'/Utama/index'} />
  )
}

export default home

//still figuring out