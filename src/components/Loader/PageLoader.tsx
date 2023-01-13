import React from 'react'
import styled from 'styled-components'
import { Spinner } from '@pancakeswap/uikit'
import Page from '../Layout/Page'

const Wrapper = styled(Page)`
  display: flex;
  justify-content: center;
  align-items: center;
`

const PageLoader: React.FC = () => {
  return (
    <div style={{
      position: 'fixed',
      left: '0px',
      top: '0px',
      width: '100%',
      height:'calc(100vh - 64px)',
      zIndex:9999,
      background: `url('../loader.gif') center no-repeat #000`,
      backgroundSize: '200px'
    }} />
  )
}

export default PageLoader
