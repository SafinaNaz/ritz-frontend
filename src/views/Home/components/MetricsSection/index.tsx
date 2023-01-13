import React from 'react'
import { Heading, Flex, Text, Skeleton, ChartIcon, CommunityIcon, SwapIcon } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import { useGetStats } from 'hooks/api'
import useTheme from 'hooks/useTheme'
import { formatLocalisedCompactNumber } from 'utils/formatBalance'
import IconCard, { IconCardData } from '../IconCard'
import StatCardContent from './StatCardContent'
import GradientLogo from '../GradientLogoSvg'

// Values fetched from bitQuery effective 6/9/21
const txCount = 30841921
const addressCount = 2751624

const Stats = () => {
  const { t } = useTranslation()
  const data = useGetStats()
  const { theme } = useTheme()

  const tvlString = data ? formatLocalisedCompactNumber(data.tvl) : '-'
  const trades = formatLocalisedCompactNumber(txCount)
  const users = formatLocalisedCompactNumber(addressCount)

  const tvlText = t('And those users are now entrusting the platform with over $%tvl% in funds.', { tvl: tvlString })
  const [entrusting, inFunds] = tvlText.split(tvlString)

  const UsersCardData: IconCardData = {
    icon: <CommunityIcon color="secondary" width="36px" />,
  }

  const TradesCardData: IconCardData = {
    icon: <SwapIcon color="primary" width="36px" />,
  }

  const StakedCardData: IconCardData = {
    icon: <ChartIcon color="failure" width="36px" />,
  }

  return (
    <Flex justifyContent="center" alignItems="center" flexDirection="column">
		<Flex width="100%" flexDirection="row"justifyContent="center" alignItems="center">
			<Flex className="gallery-section" justifyContent="center"  alignItems="center">
				<div className="gallery--info ">
					<Heading textAlign="center" color="#FF416C" scale="xxl">
						{t('$57,117,504')}
					</Heading>
					<Text textAlign="center" color="#FFFFFF" mb="32px"className="paragraph">
						{t('Trusted with billions.')}
					</Text>
					{/* <Text textAlign="center" color="textSubtle">
						{t('PancakeSwap has the most users of any decentralized platform, ever.')}
					</Text> */}
				</div>
				<div className="gallery--info d-flex">
					<Heading textAlign="center" color="#61F7D0" scale="xxl">
						{t('$57,117,504')}
					</Heading>
					<Text textAlign="center" color="#FFFFFF" mb="32px"className="paragraph">
						{t('Trusted with billions.')}
					</Text>
				</div>
				<div className="gallery--info d-flex">
					<Heading textAlign="center"color="#FF4B2B" scale="xxl">
						{t('$57,117,504')}
					</Heading>
					<Text textAlign="center" color="#FFFFFF" className="paragraph"  mb="32px">
						{t('Trusted with billions.')}
					</Text>
				</div>
			</Flex>
		</Flex>
		<Flex  width="100%" flexDirection="row"justifyContent="center" alignItems="center">
			<Flex className="description-image" justifyContent="center" alignItems="center">
				<div className="photos-gallery">	
					<img src="/images/supply-liquidy.svg" alt="Supply Liquidy"/> 
					<div className="inner-information">
						<Heading textAlign="center" color="#fff" scale="lg" mb="20px">
							{t('Swap Tokens')}
						</Heading>
						<Text textAlign="center" color="#FFFFFF" mb="32px"className="para">
							{t('Swap between tokens effortlessly on our Ethereum network with minimum fees')}
						</Text>
					</div>
				</div>
				<div className="photos-gallery">
					<img src="/images/stake-farms.svg" alt="Stake Farms"/>
					<div className="inner-information">
						<Heading textAlign="center" color="#fff" scale="lg" mb="20px">
							{t('Supply Liquidity')}
						</Heading>
						<Text textAlign="center" color="#FFFFFF" mb="32px"className="para">
							{t('Participate in the pool that everyone utilizes for swapping, & collect swap fees with ease')}
						</Text>
					</div>
				</div>
				<div className="photos-gallery">
					<img src="/images/swap-token.svg" alt="Swap Token"/>
					<div className="inner-information">
						<Heading textAlign="center" color="#fff" scale="lg" mb="20px">
							{t('Stake at Farms')}
						</Heading>
						<Text textAlign="center" color="#FFFFFF" mb="32px"className="para">
							{t('Stake your POL (proof of liquidity) at farms and start earning your tokens today')}
						</Text>
					</div>
				</div>
			</Flex>
		</Flex>
	</Flex>
  )
}

export default Stats
