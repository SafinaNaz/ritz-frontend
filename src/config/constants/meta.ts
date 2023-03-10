import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'RITZ',
  description:
    'The most popular AMM on BSC by user count! Earn RITZ through yield farming or win it in the Lottery, then stake it in Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by RITZ), NFTs, and more, on a platform you can trust.',
  image: './images/hero.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  let basePath
  if (path.startsWith('/swap')) {
    basePath = '/swap'
  } else if (path.startsWith('/add')) {
    basePath = '/add'
  } else if (path.startsWith('/remove')) {
    basePath = '/remove'
  } else if (path.startsWith('/teams')) {
    basePath = '/teams'
  } else if (path.startsWith('/voting/proposal') && path !== '/voting/proposal/create') {
    basePath = '/voting/proposal'
  } else if (path.startsWith('/nfts/collections')) {
    basePath = '/nfts/collections'
  } else if (path.startsWith('/nfts/profile')) {
    basePath = '/nfts/profile'
  } else if (path.startsWith('/pancake-squad')) {
    basePath = '/pancake-squad'
  } else {
    basePath = path
  }

  switch (basePath) {
    case '/':
      return {
        title: `${t('Home')} | ${t('RITZ')}`,
      }
    case '/swap':
      return {
        title: `${t('Exchange')} | ${t('RITZ')}`,
      }
    case '/add':
      return {
        title: `${t('Add Liquidity')} | ${t('RITZ')}`,
      }
    case '/remove':
      return {
        title: `${t('Remove Liquidity')} | ${t('RITZ')}`,
      }
    case '/liquidity':
      return {
        title: `${t('Liquidity')} | ${t('RITZ')}`,
      }
    case '/find':
      return {
        title: `${t('Import Pool')} | ${t('RITZ')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('RITZ')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('RITZ')}`,
      }
    case '/prediction/leaderboard':
      return {
        title: `${t('Leaderboard')} | ${t('RITZ')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('RITZ')}`,
      }
    case '/farms/auction':
      return {
        title: `${t('Farm Auctions')} | ${t('RITZ')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('RITZ')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('RITZ')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('RITZ')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('RITZ')}`,
      }
    case '/voting':
      return {
        title: `${t('Voting')} | ${t('RITZ')}`,
      }
    case '/voting/proposal':
      return {
        title: `${t('Proposals')} | ${t('RITZ')}`,
      }
    case '/voting/proposal/create':
      return {
        title: `${t('Make a Proposal')} | ${t('RITZ')}`,
      }
    case '/info':
      return {
        title: `${t('Overview')} | ${t('RITZ Info & Analytics')}`,
        description: 'View statistics for RITZ exchanges.',
      }
    case '/info/pools':
      return {
        title: `${t('Pools')} | ${t('RITZ Info & Analytics')}`,
        description: 'View statistics for RITZ exchanges.',
      }
    case '/info/tokens':
      return {
        title: `${t('Tokens')} | ${t('RITZ Info & Analytics')}`,
        description: 'View statistics for RITZ exchanges.',
      }
    case '/nfts':
      return {
        title: `${t('Overview')} | ${t('RITZ')}`,
      }
    case '/nfts/collections':
      return {
        title: `${t('Collections')} | ${t('RITZ')}`,
      }
    case '/nfts/profile':
      return {
        title: `${t('Your Profile')} | ${t('RITZ')}`,
      }
    case '/pancake-squad':
      return {
        title: `${t('RitzCoin Squad')} | ${t('RITZ')}`,
      }
    default:
      return null
  }
}
