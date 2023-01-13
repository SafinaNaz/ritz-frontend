import React from 'react'
import styled from 'styled-components'
import { Flex, Heading, Text, Link } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import ConnectWalletButton from 'components/ConnectWalletButton'
import Container from 'components/Layout/Container'
import { useWeb3React } from '@web3-react/core'
import SunburstSvg from './SunburstSvg'
import CompositeImage from './CompositeImage'

const BgWrapper = styled.div`
  overflow: hidden;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
`

const StyledSunburst = styled(SunburstSvg)`
  height: 350%;
  width: 350%;

  ${({ theme }) => theme.mediaQueries.xl} {
    height: 400%;
    width: 400%;
  }
`

const Wrapper = styled(Flex)`
  z-index: 1;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`

const FloatingPancakesWrapper = styled(Container)`
  overflow: hidden;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  visibility: hidden;

  ${({ theme }) => theme.mediaQueries.md} {
    visibility: visible;
  }
`
const FooterStyle = styled.div`
.footer-bottom .content{
    font-size: 22px;
}
.social-links ul {
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.social-links ul li {
  margin-right:30px;
}
.social-links ul li:last-child {
  margin:0;
}
`


const Footer = () => {
  const { t } = useTranslation()
  const { account } = useWeb3React()

  return (
    <>
     

      <FooterStyle>
      
        <Flex className="footer-bottom"justifyContent="space-between" alignItems="center">
          <Flex className="footer-left-side"justifyContent="center" alignItems="start" padding="0 15px">
            <div className="footer--col-botom">
                <Text color="white" className="content">
                  {t('  Copyright ©2021 Ritzcoin. All Rights Reserved')}
                </Text>
              </div>
          </Flex>
          <Flex className="social-links footer-right-side" justifyContent="center" alignItems="start" padding="0 15px">
           <div className="footer--col-botom">
            <ul>
              <li>
                <Link href="https://www.youtube.com/channel/UCtlFHQQBXJF9nCiA74qKGIw" color="#fff">
                  <img className="social-logo" src="/images/social/youtube.svg" alt="Youtube Logo" width="60px" />
                </Link>
              </li>
              {/* <li>
                <Link href="r" color="#fff">
                  <img className="social-logo" src="/images/social/github.svg" alt="github Logo" width="60px" />
                </Link>
              </li>
              <li>
                <Link href="r" color="#fff">
                  <img className="social-logo" src="/images/social/discord.svg" alt="discord Logo" width="60px" />
                </Link>
              </li> */}
              <li>
                <Link href="https://twitter.com/ritzcoin" color="#fff">
                  <img className="social-logo" src="/images/social/twitter.svg" alt="twitter Logo" width="60px" />
                </Link>
              </li>
              <li>
                <Link href="https://www.reddit.com/r/Ritzcoin/" color="#fff">
                  <img className="social-logo" src="/images/social/reddit.svg" alt="reddit Logo" width="60px" />
                </Link>
              </li>
              {/* <li>
                <Link href="r" color="#fff">
                  <img className="social-logo" src="/images/social/linkedin.svg" alt="linkedin Logo" width="60px" />
                </Link>
              </li>
              <li>
                <Link href="r" color="#fff">
                  <img className="social-logo" src="/images/social/instagram.svg" alt="instagram Logo" width="60px" />
                </Link>
              </li>
              <li>
                <Link href="r" color="#fff">
                  <img className="social-logo" src="/images/social/facebook.svg" alt="facebook Logo" width="60px" />
                </Link>
              </li> */}
            </ul>
            </div>
          </Flex>
        </Flex>
      </FooterStyle>

    </>
  )
}

export default Footer
