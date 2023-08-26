import React from 'react'
import { Box, useMediaQuery } from '@mui/material'
import Introduction from './introduction'
import Partners from './partners'
import Benefits from './benefits'
import Reviews from './reviews'

const Body = () => {
  const isNotPhone = useMediaQuery("(min-width:1000px)");
  return (
    <Box>
        <Introduction isNotPhone={isNotPhone}/>
        <Partners isNotPhone={isNotPhone} />
        <Benefits isNotPhone={isNotPhone} />
        <Reviews isNotPhone={isNotPhone} />
    </Box>
  )
}

export default Body