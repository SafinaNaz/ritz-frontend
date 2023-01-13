import React, { useState } from 'react'
import {
  ButtonMenu,
  ButtonMenuItem,
  CloseIcon,
  Heading,
  IconButton,
  InjectedModalProps,
  ModalBody,
  ModalContainer,
  ModalHeader as UIKitModalHeader,
  ModalTitle,
} from '@pancakeswap/uikit'
import { parseUnits } from 'ethers/lib/utils'
import { useTranslation } from 'contexts/Localization'
import styled from 'styled-components'
import { FetchStatus, useGetBnbBalance } from 'hooks/useTokenBalance'
import WalletInfo from './WalletInfo'
import WalletTransactions from './WalletTransactions'

export enum WalletView {
  WALLET_INFO,
  TRANSACTIONS,
}

interface WalletModalProps extends InjectedModalProps {
  initialView?: WalletView
}

export const LOW_BNB_BALANCE = parseUnits('2', 'gwei')
const StyledModalContainer = styled(ModalContainer)`
  max-width: 500px;
  width: 100%;
  background: rgb(51, 54, 67);
  border-color: rgb(51, 54, 67);
`
const ModalHeader = styled(UIKitModalHeader)`
  background: rgb(51, 54, 67);
`

const Tabs = styled.div`
  background-color:rgb(51, 54, 67);
  border-bottom: 1px solid rgb(51, 54, 67);
  padding: 30px 24px;
`

const WalletModal: React.FC<WalletModalProps> = ({ initialView = WalletView.WALLET_INFO, onDismiss }) => {
  const [view, setView] = useState(initialView)
  const { t } = useTranslation()
  const { balance, fetchStatus } = useGetBnbBalance()
  const hasLowBnbBalance = fetchStatus === FetchStatus.SUCCESS && balance.lte(LOW_BNB_BALANCE)

  const handleClick = (newIndex: number) => {
    setView(newIndex)
  }

  return (
    <StyledModalContainer title={t('Welcome!')} minWidth="320px">
      <ModalHeader>
        <ModalTitle>
          <Heading color="#fff">{t('Your Wallet')}</Heading>
        </ModalTitle>
        <IconButton variant="text" onClick={onDismiss}>
          <CloseIcon width="24px" color="#fff" />
        </IconButton>
      </ModalHeader>
      <Tabs>
        <ButtonMenu scale="sm" variant="subtle" onItemClick={handleClick} activeIndex={view} fullWidth>
          <ButtonMenuItem>{t('Wallet')}</ButtonMenuItem>
          <ButtonMenuItem>{t('Transactions')}</ButtonMenuItem>
        </ButtonMenu>
      </Tabs>
      <ModalBody p="24px" maxWidth="100%" width="100%">
        {view === WalletView.WALLET_INFO && <WalletInfo hasLowBnbBalance={hasLowBnbBalance} onDismiss={onDismiss} />}
        {view === WalletView.TRANSACTIONS && <WalletTransactions />}
      </ModalBody>
    </StyledModalContainer>
  )
}

export default WalletModal
