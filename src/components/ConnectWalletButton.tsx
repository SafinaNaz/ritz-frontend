import React from 'react'
import { Button, useWalletModal } from '@pancakeswap/uikit'
import useAuth from 'hooks/useAuth'
import { useTranslation } from 'contexts/Localization'

const ConnectWalletButton = (props) => {
  const { t } = useTranslation()
  const { login, logout } = useAuth()
  const { onPresentConnectModal } = useWalletModal(login, logout, t)

  return (
    <Button onClick={onPresentConnectModal} {...props}  className="connect-wallet">
      <img src="/images/menu/connect-wallet.svg" alt="Wallet Icon" className="wallet-icon" /> <span>{t('Connect Wallet')}</span>
    </Button>
  )
}

export default ConnectWalletButton
