import React, { useEffect, useMemo, useRef, useState } from 'react'
import { useLocation , useRouteMatch , Link} from 'react-router-dom'
import styled from 'styled-components'
import { ethers } from 'ethers'
import { formatUnits } from 'ethers/lib/utils'
import BigNumber from 'bignumber.js'
import { useWeb3React } from '@web3-react/core'
import { Heading, Flex, Image, Text } from '@pancakeswap/uikit'
import orderBy from 'lodash/orderBy'
import partition from 'lodash/partition'
import { useTranslation } from 'contexts/Localization'
import useIntersectionObserver from 'hooks/useIntersectionObserver'
import {
  useFetchPublicPoolsData,
  usePools,
  useFetchUserPools,
  useFetchCakeVault,
  useCakeVault,
} from 'state/pools/hooks'
import { usePollFarmsPublicData } from 'state/farms/hooks'
import { latinise } from 'utils/latinise'
import FlexLayout from 'components/Layout/Flex'
import Page from 'components/Layout/Page'
import PageHeader from 'components/PageHeader'
import SearchInput from 'components/SearchInput'
import Select, { OptionProps } from 'components/Select/Select'
import { DeserializedPool } from 'state/types'
import { useUserPoolStakedOnly, useUserPoolsViewMode } from 'state/user/hooks'
import { ViewMode } from 'state/user/actions'
import Loading from 'components/Loading'
import PoolCard from './components/PoolCard'
import CakeVaultCard from './components/CakeVaultCard'
import PoolTabButtons from './components/PoolTabButtons'
import BountyCard from './components/BountyCard'
import HelpButton from './components/HelpButton'
import PoolsTable from './components/PoolsTable/PoolsTable'
import { getAprData, getCakeVaultEarnings } from './helpers'

const CardLayout = styled(FlexLayout)`
  justify-content: center;
`

const PoolControls = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  position: relative;

  justify-content: space-between;
  flex-direction: column;
  margin-bottom: 32px;

  ${({ theme }) => theme.mediaQueries.sm} {
    flex-direction: row;
    flex-wrap: wrap;
    padding: 16px 32px;
    margin-bottom: 0;
  }
`

const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 8px 0px;

  ${({ theme }) => theme.mediaQueries.sm} {
    width: auto;
    padding: 0;
  }
`

const LabelWrapper = styled.div`
  > ${Text} {
    font-size: 12px;
  }
`

const ControlStretch = styled(Flex)`
  > div {
    flex: 1;
  }
`
const ViewControls = styled.div`
  flex-wrap: wrap;
  justify-content: space-between;
  display: flex;
  align-items: center;
  width: 100%;

  > div {
    padding: 8px 0px;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    justify-content: flex-start;
    width: auto;

    > div {
      padding: 0;
    }
  }
`
const ButtonToggle = styled.div`
margin-top: 0;
.button-toggle{
  background: transparent linear-gradient(90deg, #00082A 0%, #312A31 54%, #403533 100%) 0% 0% no-repeat padding-box;
  border-radius: 10px;
  color: #fff;
  .button{
    display:block;
    font-size: 22px;
    color: #fff;
    background: none;
    padding: 12px 40px 17px;
    box-shadow: none;
    outline: none;
    border: none;
    border-radius: 10px;
    &.active{
      background: transparent linear-gradient(111deg, #FF416C 0%, #FF4B2B 100%) 0% 0% no-repeat padding-box;
      padding: 12px 30px 17px;
    }
  }
}
`

const NUMBER_OF_POOLS_VISIBLE = 12

const Pools: React.FC = () => {
  const location = useLocation()
  const { t } = useTranslation()
  const { account } = useWeb3React()
  const { pools: poolsWithoutAutoVault, userDataLoaded } = usePools()
  const [stakedOnly, setStakedOnly] = useUserPoolStakedOnly()
  const [viewMode, setViewMode] = useUserPoolsViewMode()
  const [numberOfPoolsVisible, setNumberOfPoolsVisible] = useState(NUMBER_OF_POOLS_VISIBLE)
  const { observerRef, isIntersecting } = useIntersectionObserver()
  const [searchQuery, setSearchQuery] = useState('')
  const [sortOption, setSortOption] = useState('hot')
  const chosenPoolsLength = useRef(0)
  const {
    userData: { ritzAtLastUserAction, userShares },
    fees: { performanceFee },
    pricePerFullShare,
    totalCakeInVault,
  } = useCakeVault()
  const accountHasVaultShares = userShares && userShares.gt(0)
  const performanceFeeAsDecimal = performanceFee && performanceFee / 100

  console.log('poolsWithoutAutoVault', poolsWithoutAutoVault)

  const pools = useMemo(() => {
    const cakePool = poolsWithoutAutoVault.find((pool) => pool.sousId === 0)
    const cakeAutoVault = { ...cakePool, isAutoVault: true }
    return [cakeAutoVault, ...poolsWithoutAutoVault]
  }, [poolsWithoutAutoVault])

  // TODO aren't arrays in dep array checked just by reference, i.e. it will rerender every time reference changes?
  const [finishedPools, openPools] = useMemo(() => partition(pools, (pool) => pool.isFinished), [pools])
  const stakedOnlyFinishedPools = useMemo(
    () =>
      finishedPools.filter((pool) => {
        if (pool.isAutoVault) {
          return accountHasVaultShares
        }
        return pool.userData && new BigNumber(pool.userData.stakedBalance).isGreaterThan(0)
      }),
    [finishedPools, accountHasVaultShares],
  )
  const stakedOnlyOpenPools = useMemo(
    () =>
      openPools.filter((pool) => {
        if (pool.isAutoVault) {
          return accountHasVaultShares
        }
        return pool.userData && new BigNumber(pool.userData.stakedBalance).isGreaterThan(0)
      }),
    [openPools, accountHasVaultShares],
  )
  const hasStakeInFinishedPools = stakedOnlyFinishedPools.length > 0

  usePollFarmsPublicData()
  useFetchCakeVault()
  useFetchPublicPoolsData()
  useFetchUserPools(account)

  useEffect(() => {
    if (isIntersecting) {
      setNumberOfPoolsVisible((poolsCurrentlyVisible) => {
        if (poolsCurrentlyVisible <= chosenPoolsLength.current) {
          return poolsCurrentlyVisible + NUMBER_OF_POOLS_VISIBLE
        }
        return poolsCurrentlyVisible
      })
    }
  }, [isIntersecting])

  const showFinishedPools = location.pathname.includes('history')

  const handleChangeSearchQuery = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value)
  }

  const handleSortOptionChange = (option: OptionProps): void => {
    setSortOption(option.value)
  }

  const sortPools = (poolsToSort: DeserializedPool[]) => {
    switch (sortOption) {
      case 'apr':
        // Ternary is needed to prevent pools without APR (like MIX) getting top spot
        return orderBy(
          poolsToSort,
          (pool: DeserializedPool) => (0),
          'desc',
        )
      case 'earned':
        return orderBy(
          poolsToSort,
          (pool: DeserializedPool) => {
            if (!pool.userData || !pool.earningTokenPrice) {
              return 0
            }
            return pool.isAutoVault
              ? getCakeVaultEarnings(
                account,
                ritzAtLastUserAction,
                userShares,
                pricePerFullShare,
                pool.earningTokenPrice,
              ).autoUsdToDisplay
              : pool.userData.pendingReward.times(pool.earningTokenPrice).toNumber()
          },
          'desc',
        )
      case 'totalStaked':
        return orderBy(
          poolsToSort,
          (pool: DeserializedPool) => {
            let totalStaked = Number.NaN
            if (pool.isAutoVault) {
              if (pool.stakingTokenPrice && totalCakeInVault.isFinite()) {
                totalStaked =
                  +formatUnits(ethers.BigNumber.from(totalCakeInVault.toString()), pool.stakingToken.decimals) *
                  pool.stakingTokenPrice
              }
            } else if (pool.sousId === 0) {
              if (pool.totalStaked?.isFinite() && pool.stakingTokenPrice && totalCakeInVault.isFinite()) {
                const manualCakeTotalMinusAutoVault = ethers.BigNumber.from(pool.totalStaked.toString()).sub(
                  totalCakeInVault.toString(),
                )
                totalStaked =
                  +formatUnits(manualCakeTotalMinusAutoVault, pool.stakingToken.decimals) * pool.stakingTokenPrice
              }
            } else if (pool.totalStaked?.isFinite() && pool.stakingTokenPrice) {
              totalStaked =
                +formatUnits(ethers.BigNumber.from(pool.totalStaked.toString()), pool.stakingToken.decimals) *
                pool.stakingTokenPrice
            }
            return Number.isFinite(totalStaked) ? totalStaked : 0
          },
          'desc',
        )
      default:
        return poolsToSort
    }
  }

  let chosenPools
  if (showFinishedPools) {
    chosenPools = stakedOnly ? stakedOnlyFinishedPools : finishedPools
  } else {
    chosenPools = stakedOnly ? stakedOnlyOpenPools : openPools
  }

  if (searchQuery) {
    const lowercaseQuery = latinise(searchQuery.toLowerCase())
    chosenPools = chosenPools.filter((pool) =>
      latinise(pool.earningToken.symbol.toLowerCase()).includes(lowercaseQuery),
    )
  }

  chosenPools = sortPools(chosenPools).slice(0, numberOfPoolsVisible)
  chosenPoolsLength.current = chosenPools.length

  console.log('chosenPools', chosenPools)

  const cardLayout = (
    <CardLayout>
      {chosenPools.map((pool) =>
        pool.isAutoVault ? (
          <CakeVaultCard key="auto-cake" pool={pool} showStakedOnly={stakedOnly} />
        ) : (
          <PoolCard key={pool.sousId} pool={pool} account={account} />
        ),
      )}
    </CardLayout>
  )

  const tableLayout = <PoolsTable pools={chosenPools} account={account} userDataLoaded={userDataLoaded} />
  const [Limit, setLimit] = useState(false);
  const { url, isExact } = useRouteMatch()

  return (
    <>
      <PageHeader>
        <Flex justifyContent="space-between" flexDirection={['column', null, null, 'row']}>
          <Flex flex="1" flexDirection="column" mr={['8px', 0]}>
            <Heading as="h1" scale="xxl" color="#fff" mb="24px">
              {t('Syrup Pools')}
            </Heading>
            <Heading scale="md" color="#fff">
              {t('Just stake some tokens to earn.')}
            </Heading>
            <Heading scale="md" color="#fff">
              {t('High APR, low risk.')}
            </Heading>
          </Flex>
          <Flex flex="1" height="fit-content" justifyContent="center" alignItems="center" mt={['24px', null, '0']}>
            {/* <HelpButton /> */}
            <BountyCard />
          </Flex>
        </Flex>
      </PageHeader>
      <Page>
        <PoolControls>
          {/* <PoolTabButtons
            stakedOnly={stakedOnly}
            setStakedOnly={setStakedOnly}
            hasStakeInFinishedPools={hasStakeInFinishedPools}
            viewMode={viewMode}
            setViewMode={setViewMode}
          /> */}
           <ViewControls>
          <ButtonToggle className="top-button-toggle">
              <Flex flexDirection='row' alignItems="center">
                <Flex className="button-toggle" >
                  <Link to={`${url}`}  className={`${Limit ? '' : 'active'} button`} type="button" onClick={() => setLimit(s => !s)}>Live</Link>
                  <Link to={`${url}/history`} className={`${Limit ? 'active' : ''} button`} type="button" onClick={() => setLimit(s => !s)}>
                    Finished
                  </Link>
                </Flex>
              </Flex>
            </ButtonToggle>
            </ViewControls>
          <FilterContainer>
            {/* <LabelWrapper>
              <Text fontSize="12px" bold color="textSubtle" textTransform="uppercase">
                {t('Sort by')}
              </Text>
              <ControlStretch>
                <Select
                  options={[
                    {
                      label: t('Hot'),
                      value: 'hot',
                    },
                    {
                      label: t('APR'),
                      value: 'apr',
                    },
                    {
                      label: t('Earned'),
                      value: 'earned',
                    },
                    {
                      label: t('Total staked'),
                      value: 'totalStaked',
                    },
                  ]}
                  onOptionChange={handleSortOptionChange}
                />
              </ControlStretch>
            </LabelWrapper> */}
            <LabelWrapper style={{ marginLeft: 16 }}>
              {/* <Text fontSize="12px" bold color="textSubtle" textTransform="uppercase">
                {t('Search')}
              </Text> */}
              <SearchInput onChange={handleChangeSearchQuery} placeholder="Search " />
            </LabelWrapper>
          </FilterContainer>
        </PoolControls>
        {showFinishedPools && (
          <Text fontSize="20px" color="#fff" pb="32px">
            {t('These pools are no longer distributing rewards. Please unstake your tokens.')}
          </Text>
        )}
        {account && !userDataLoaded && stakedOnly && (
          <Flex justifyContent="center" mb="4px">
            {/* <Loading /> */}
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
          </Flex>
        )}
        {/* {viewMode === ViewMode.CARD ? cardLayout : tableLayout} */}
        {viewMode  ?  tableLayout : ''}
        <div ref={observerRef} />
        {/* <Image
          mx="auto"
          mt="12px"
          src="/images/decorations/3d-syrup-bunnies.png"
          alt="RitzCoin illustration"
          width={192}
          height={184.5}
        /> */}
      </Page>
    </>
  )
}

export default Pools
