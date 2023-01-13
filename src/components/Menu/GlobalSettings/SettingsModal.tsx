import React, { useState } from 'react'
import styled from 'styled-components'
import { Text, PancakeToggle, Toggle, Flex, Modal, InjectedModalProps, ThemeSwitcher } from '@pancakeswap/uikit'
import {
  useAudioModeManager,
  useExpertModeManager,
  useUserExpertModeAcknowledgementShow,
  useUserSingleHopOnly,
} from 'state/user/hooks'
import { useTranslation } from 'contexts/Localization'
import { useSwapActionHandlers } from 'state/swap/hooks'
import useTheme from 'hooks/useTheme'
import QuestionHelper from '../../QuestionHelper'
import TransactionSettings from './TransactionSettings'
import ExpertModal from './ExpertModal'
import GasSettings from './GasSettings'

const ScrollableContainer = styled(Flex)`
  flex-direction: column;
  max-height: 400px;
  ${({ theme }) => theme.mediaQueries.sm} {
    max-height: none;
  }
`

const SettingsModal: React.FC<InjectedModalProps> = ({ onDismiss }) => {
  const [showConfirmExpertModal, setShowConfirmExpertModal] = useState(false)
  const [showExpertModeAcknowledgement, setShowExpertModeAcknowledgement] = useUserExpertModeAcknowledgementShow()
  const [expertMode, toggleExpertMode] = useExpertModeManager()
  const [singleHopOnly, setSingleHopOnly] = useUserSingleHopOnly()
  const [audioPlay, toggleSetAudioMode] = useAudioModeManager()
  const { onChangeRecipient } = useSwapActionHandlers()

  const { t } = useTranslation()
  const { theme, isDark, toggleTheme } = useTheme()

  if (showConfirmExpertModal) {
    return (
      <ExpertModal
        setShowConfirmExpertModal={setShowConfirmExpertModal}
        onDismiss={onDismiss}
        setShowExpertModeAcknowledgement={setShowExpertModeAcknowledgement}
      />
    )
  }

  const handleExpertModeToggle = () => {
    if (expertMode) {
      onChangeRecipient(null)
      toggleExpertMode()
    } else if (!showExpertModeAcknowledgement) {
      onChangeRecipient(null)
      toggleExpertMode()
    } else {
      setShowConfirmExpertModal(true)
    }
  }

  return (
    <Modal className="model-bg"
      title={t('Settings')}
      // headerBackground="gradients.cardHeader"
      onDismiss={onDismiss}
    >
      <ScrollableContainer>
        {/* <Flex pb="24px" flexDirection="column">
          <Text bold textTransform="uppercase" fontSize="12px" color="secondary" mb="24px">
            {t('Global')}
          </Text>
          <Flex justifyContent="space-between">
            <Text mb="24px">{t('Dark mode')}</Text>
            <ThemeSwitcher isDark={isDark} toggleTheme={toggleTheme} />
          </Flex>
          <GasSettings />
        </Flex> */}
        <Flex pb="24px" flexDirection="column" >
          <Text color='#fff' bold  mb="10px" fontSize="20px">
            {t('Transaction Settings')}
          </Text>
          <TransactionSettings />
        </Flex>
        <Text color='#fff' bold fontSize="20px" mt="32px">
            {t('Interface Settings')}
          </Text>
        <Flex justifyContent="space-between" alignItems="center" mb="24px">
          <Flex alignItems="center">
            <Text color='#fff'fontSize="14px">{t('Toggle Expert Mode')}</Text>
            <QuestionHelper
              text={t('Bypasses confirmation modals and allows high slippage trades. Use at your own risk.')}
              placement="top-start"
              ml="4px"
              color='#fff' 
            />
          </Flex>
          <Toggle id="toggle-expert-mode-button" checked={expertMode} onChange={handleExpertModeToggle} />
        </Flex>
        <Flex justifyContent="space-between" alignItems="center" mb="24px">
          <Flex alignItems="center">
            <Text  color='#fff'fontSize="14px">{t('Disable Multihops')}</Text>
            <QuestionHelper color='#fff' text={t('Restricts swaps to direct pairs only.')} placement="top-start" ml="4px" />
          </Flex>
          <div className='toggle-style'>
            <Toggle
              id="toggle-disable-multihop-button"
              checked={singleHopOnly}
              onChange={() => {
                setSingleHopOnly(!singleHopOnly)
              }}
              />
        </div>
        </Flex>
        <Flex justifyContent="space-between" alignItems="center">
          <Flex alignItems="center">
            <Text color='#fff' fontSize="14px">{t('Audio')}</Text>
            <QuestionHelper
              color='#fff' 
              text={t('🐰 Turn down your volume a bit before you swap')}
              placement="top-start"
              ml="4px"
            />
          </Flex>
          <PancakeToggle checked={audioPlay} onChange={toggleSetAudioMode}  />
        </Flex>
      </ScrollableContainer>
    </Modal>
  )
}

export default SettingsModal
