import React , { useState } from 'react'
import styled from 'styled-components'
import { Flex } from '@pancakeswap/uikit'
import Footer from 'components/Menu/Footer'
import SubNav from 'components/Menu/SubNav'

const StyledPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 16px;
  padding-bottom: 0;
  min-height: calc(100vh - 64px);
  background-color:#1D1D1D !important;
//   background-image: url('/images/swap-coins.png') !important;
//   background-size: cover !important;
//   background-position: center !important;;
//   background-repeat: no-repeat !important;;
//   background-size: 100% 100% !important;
// }

  ${({ theme }) => theme.mediaQueries.xs} {
    background-size: auto;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    padding: 24px;
    padding-bottom: 0;
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    padding-top: 32px;
    min-height: calc(100vh - 64px);
  }
`



const BridgePage: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children, ...props }) => {
  const [coming, setcoming] = useState(false);
  return (

    <StyledPage {...props}  className="popups-swaping">

 {coming ? 
 <>
     <img className="bg-image" src="/images/bridge-bg.png" alt=""/>
      <SubNav />
      {children}
      <Flex flexGrow={1} />
      {/* <Footer /> */}
      </>
:
      <div className="coming-soon">
        <img src="/images/coming-soon.png" alt="Coming Soon" className=""/>
      </div>
}
    </StyledPage>
  )
}

export default BridgePage
