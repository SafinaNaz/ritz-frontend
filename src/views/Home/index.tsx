import React from 'react'
import styled from 'styled-components'
import PageSection from 'components/PageSection'
import { Text, Heading } from '@pancakeswap/uikit'
import { useWeb3React } from '@web3-react/core'
import useTheme from 'hooks/useTheme'
import Container from 'components/Layout/Container'
import { PageMeta } from 'components/Layout/Page'
import Hero from './components/Hero'
import { swapSectionData, earnSectionData, cakeSectionData } from './components/SalesSection/data'
import MetricsSection from './components/MetricsSection'
import SalesSection from './components/SalesSection'
import WinSection from './components/WinSection'
import FarmsPoolsRow from './components/FarmsPoolsRow'
import GiveAways from './components/Giveaways'
import Footer from './components/Footer'
import FooterBottom from './components/FooterBottom'
import CakeDataRow from './components/CakeDataRow'
import { WedgeTopLeft, InnerWedgeWrapper, OuterWedgeWrapper, WedgeTopRight } from './components/WedgeSvgs'
import UserBanner from './components/UserBanner'

const StyledHeroSection = styled(PageSection)`
  padding-top: 16px;

  ${({ theme }) => theme.mediaQueries.md} {
    padding-top: 48px;
  }
`

const UserBannerWrapper = styled(Container)`
  z-index: 1;
  position: absolute;
  width: 100%;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  padding-left: 0px;
  padding-right: 0px;

  ${({ theme }) => theme.mediaQueries.lg} {
    padding-left: 24px;
    padding-right: 24px;
  }
`

const Home: React.FC = () => {
  const { theme } = useTheme()
  const { account } = useWeb3React()

  const HomeSectionContainerStyles = { margin: '0', width: '100%', maxWidth: '968px' }
  const HomeSectionCustomContainerStyles = { margin: '0', width: '100%', maxWidth: '1580px', padding: '0 80px' }
  const HomeSectionContainerFluidStyles = { margin: '0', width: '100%', maxWidth: '100%', padding: '0 80px' }
  const HomeSectionContainerFluidStyless = { margin: '0', width: '100%', maxWidth: '100%' }

  return (
    <>
      {/* <PageMeta /> */}
      <StyledHeroSection className="top-banner"
        innerProps={{ style: { margin: '0', width: '100%' } }}
        index={2}
        hasCurvedDivider={false}
      >
        <div className="custom-video">
          {/* <ReactPlayer 
            url='images/main.mp4'
            playing
            controls
            loop
          /> */}

           {/* <img src='images/banner-background.png' alt="loading-icon" /> */}
              <Heading as="h2" mb="8px" color="#EABF6F">
                A Better, Smarter
            </Heading>
            <Heading className="bottom-heading" as="h1" mb="8px" color="#EABF6F">
                Currency
            </Heading>
        </div>


        {account && (
          <UserBannerWrapper>
            {/* <UserBanner /> */}

          </UserBannerWrapper>
        )}
        {/* <div className="header-menu">
          <ul>
            <li>
              <a href="l">text</a>
            </li>
          </ul>
        </div> */}
        {/* <Hero /> */}
      </StyledHeroSection>

      <PageSection className="bridge-bg"
        innerProps={{ style: HomeSectionCustomContainerStyles }}
        background={
          theme.isDark
            ? '#000'
            : '#000'
        }
        index={2}
        hasCurvedDivider={false}
      >
        <MetricsSection />

      </PageSection>
      <PageSection
        background={
          theme.isDark
            ? '#433650'
            : '#433650'
        }
        index={2}
        hasCurvedDivider={false}
      >
        <GiveAways />
      </PageSection>
      {/* <PageSection
        innerProps={{ style: HomeSectionContainerStyles }}
        background={theme.colors.background}
        index={2}
        hasCurvedDivider={false}
      >
        <OuterWedgeWrapper>
          <InnerWedgeWrapper top fill={theme.isDark ? '#201335' : '#D8CBED'}>
            <WedgeTopLeft />
          </InnerWedgeWrapper>
        </OuterWedgeWrapper>
        <SalesSection {...swapSectionData} />
      </PageSection>
      <PageSection
        innerProps={{ style: HomeSectionContainerStyles }}
        background={theme.colors.gradients.cardHeader}
        index={2}
        hasCurvedDivider={false}
      >
        <OuterWedgeWrapper>
          <InnerWedgeWrapper width="150%" top fill={theme.colors.background}>
            <WedgeTopRight />
          </InnerWedgeWrapper>
        </OuterWedgeWrapper>
        <SalesSection {...earnSectionData} />
        <FarmsPoolsRow />
      </PageSection> */}
      
      <PageSection className="bridge-bg"
        innerProps={{ style: HomeSectionContainerFluidStyless }}
        background={
          theme.isDark
            ? 'rgb(29, 29, 29)'
            : '#000'
        }
        index={2}
        hasCurvedDivider={false}
      >
        <WinSection />
      </PageSection>
      {/* <PageSection
        innerProps={{ style: HomeSectionContainerStyles }}
        background={theme.colors.background}
        index={2}
        hasCurvedDivider={false}
      >
        <SalesSection {...cakeSectionData} />
        <CakeDataRow />
      </PageSection> */}
      <PageSection className="copyrights"
        innerProps={{ style: HomeSectionContainerFluidStyles }}
        background="#333643"
        index={2}
        hasCurvedDivider={false}
      >
        <Footer />
      </PageSection>
      <PageSection className="copyrights bottom---footer"
        innerProps={{ style: HomeSectionContainerFluidStyles }}
        background="#333643"
        index={2}
        hasCurvedDivider={false}
      >
        <FooterBottom />
      </PageSection>
    </>
  )
}

export default Home
