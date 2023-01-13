import { Collections, CollectionKey } from './types'

const collections: Collections = {
  [CollectionKey.PANCAKE]: {
    name: 'Pancake Bunnies',
    slug: 'pancake-bunnies',
    address: {
      56: '0xDf7952B35f24aCF7fC0487D01c8d5690a60DBa07',
      97: '0xcDD97e6D47c599Bec01c24A48fbB349503AAd31A',
    },
  },
  [CollectionKey.SQUAD]: {
    name: 'Pancake Squad',
    description: "RITZ's first official generative NFT collection.. Join the squad.",
    slug: 'pancake-squad',
    address: {
      56: '0x0a8901b0E25DEb55A87524f0cC164E9644020EBA',
      97: '0xEf12ef570300bFA65c4F022deAaA3dfF4f5d5c91',
    },
  },
}

export default collections
