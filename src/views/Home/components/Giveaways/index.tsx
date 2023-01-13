import React from 'react'
import { Heading, Flex,Button, Text, Skeleton, ChartIcon, CommunityIcon, SwapIcon } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import { useGetStats } from 'hooks/api'
import useTheme from 'hooks/useTheme'
import { formatLocalisedCompactNumber } from 'utils/formatBalance'

// Values fetched from bitQuery effective 28/7/21
const txCount = 30673865
const addressCount = 1966700

const Giveaways = () => {
    const { t } = useTranslation()
    const data = useGetStats()
    const { theme } = useTheme()

    const tvlString = data ? formatLocalisedCompactNumber(data.tvl) : '-'
    const trades = formatLocalisedCompactNumber(txCount)
    const users = formatLocalisedCompactNumber(addressCount)

    const tvlText = t('And those users are now entrusting the platform with over $%tvl% in funds.', { tvl: tvlString })
    const [entrusting, inFunds] = tvlText.split(tvlString)


    return (

        <Flex className="giveaway-bg" justifyContent="center" alignItems="center" flexDirection="column" >
            <Flex flexDirection="row" justifyContent="center" alignItems="center">
                <Flex className="giveaway" flexDirection="column" justifyContent="center" alignItems="center">
                    <Heading textAlign="center" color="#fff" scale="xxl">
                        {t('Giveaways are still on-going! Join our community for your chance.')}
                    </Heading>
                    <Button marginTop="50px" variant="tertiary" color="#fff" className="custom-btn-gradient" scale="md" >
                        {t('Join Our Community')}
                    </Button>
                </Flex>
            </Flex>

        </Flex>
    )
}

export default Giveaways
