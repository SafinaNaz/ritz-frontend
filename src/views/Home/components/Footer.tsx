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

const TopLeftImgWrapper = styled(Flex)`
  position: absolute;
  left: 0;
  top: 0;
`

const BottomRightImgWrapper = styled(Flex)`
  position: absolute;
  right: 0;
  bottom: 0;
`

const topLeftImage = {
  path: '/images/home/flying-pancakes/',
  attributes: [
    { src: '1-bottom', alt: 'RitzCoin flying on the bottom' },
    { src: '1-left', alt: 'RitzCoin flying on the left' },
    { src: '1-top', alt: 'RitzCoin flying on the top' },
  ],
}

const bottomRightImage = {
  path: '/images/home/flying-pancakes/',
  attributes: [
    { src: '2-bottom', alt: 'RitzCoin flying on the bottom' },
    { src: '2-top', alt: 'RitzCoin flying on the top' },
    { src: '2-right', alt: 'RitzCoin flying on the right' },
  ],
}
const FooterStyle = styled.div`
.footer .footer-logo{
  margin-bottom: 40px;
}
.footer h2{
  margin-bottom: 40px;
}
.footer ul{
  list-style: none;
}
.footer ul li{
  margin-bottom: 15px;
}
.footer ul li a{
  font-weight: normal;
  font-size: 22px;
}
.footer .footer-text {
  width: 40%;
  padding-right: 70px;
}
.footer .footer-text .content{
  font-size: 22px;
}
.footer .footer-column {
  width: 30%;
}
.social-links ul {
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: start;
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
      {/* <BgWrapper>
        <Flex alignItems="center" justifyContent="center" width="100%" height="100%">
          <StyledSunburst />
        </Flex>
      </BgWrapper>
      <FloatingPancakesWrapper>
        <TopLeftImgWrapper>
          <CompositeImage {...topLeftImage} maxHeight="256px" />
        </TopLeftImgWrapper>
        <BottomRightImgWrapper>
          <CompositeImage {...bottomRightImage} maxHeight="256px" />
        </BottomRightImgWrapper>
      </FloatingPancakesWrapper>
      <Wrapper>
        <Heading mb="24px" scale="xl" color="white">
          {t('Start in seconds.')}
        </Heading>
        <Text textAlign="center" color="white">
          {t('Connect your crypto wallet to start using the app in seconds.')}
        </Text>
        <Text mb="24px" bold color="white">
          {t('No registration needed.')}
        </Text>

        <Link external href="https://docs.pancakeswap.finance/">
          {t('Learn how to start')}
        </Link>
        {!account && <ConnectWalletButton mt="24px" />}
      </Wrapper> */}
      <FooterStyle className="footer-padding">
        <Flex className="footer footer--top"justifyContent="center" alignItems="flex-start">
          <Flex className="footer-text" justifyContent="center" alignItems="center" padding="0 15px">
            <div className="footer--col">
              <img className="footer-logo" src="/images/logo.svg" alt="Footer Logo" width="260px" />
              <Text className="content" mb="24px" color="white">
                {t('  Ritzcoin is a decentralized exchange(DEX) automated market-making (AMM) for the Ethereum and Binance Network. What makes us stand out among other DEXs is we are invested in establishing a strong foundation with diverse farms, grants, and governance tokens.')}
              </Text>
            </div>
          </Flex>
          <Flex className="footer-column" justifyContent="center" alignItems="center" padding="0 15px">
            <div className="footer--col">
              <Heading mb="24px" scale="lg" color="#FF416C">
                {t('Quick Links')}
              </Heading>
              <ul >
                {/* <li>
                  <Link href="https://ritzblog.arhamsoft.info/about/"  target="_blank" color="#fff">
                    {t('About')}
                  </Link>
                </li>
                <li>
                  <Link href="https://ritzblog.arhamsoft.info/"  target="_blank" color="#fff">
                    {t('Blog')}
                  </Link>
                </li> */}
                <li>
                  <Link href="https://ritzcoin.net/contact" color="#fff">
                    {t('Contact')}
                  </Link>
                </li>
                <li>
                  <Link href="https://ritzcoin.net/#faqs" target="_blank" color="#fff">
                    {t('FAQ’s')}
                  </Link>
                </li>
              </ul>
            </div>
          </Flex>
            <Flex className="footer-column contact-head" justifyContent="center" alignItems="start" padding="0 15px">
            <div className="footer--col">
                <Heading mb="24px" scale="lg" color="#FF416C">
                  {t('Contact Us')}
                </Heading>
                <ul>
                  {/* <li>
                    <Link href="r" color="#fff">
                      {t('3762 Musgrave Street Atlanta, GA 30303')}
                    </Link>
                  </li>
                  <li>
                    <Link href="r" color="#fff">
                      {t('+1 (404) 957 0506 ')}
                    </Link>
                  </li> */}
                  <li>
                  <Link href="mailto:info@ritzcoin.net" color="#fff">
                      {t('info@ritzcoin.net')}
                    </Link>
                  </li>
                </ul>
              </div>
          </Flex>
        </Flex>
        
      </FooterStyle>
    </>
  )
}

export default Footer
