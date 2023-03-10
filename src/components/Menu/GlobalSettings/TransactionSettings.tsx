import React, { useState } from 'react'
import { escapeRegExp } from 'utils'
import { Text, Button, Input, Flex, Box } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import { useUserSlippageTolerance, useUserTransactionTTL } from 'state/user/hooks'
import QuestionHelper from '../../QuestionHelper'

enum SlippageError {
  InvalidInput = 'InvalidInput',
  RiskyLow = 'RiskyLow',
  RiskyHigh = 'RiskyHigh',
}

enum DeadlineError {
  InvalidInput = 'InvalidInput',
}

const inputRegex = RegExp(`^\\d*(?:\\\\[.])?\\d*$`) // match escaped "." characters via in a non-capturing group

const SlippageTabs = () => {
  const [userSlippageTolerance, setUserSlippageTolerance] = useUserSlippageTolerance()
  const [ttl, setTtl] = useUserTransactionTTL()
  const [slippageInput, setSlippageInput] = useState('')
  const [deadlineInput, setDeadlineInput] = useState('')

  const { t } = useTranslation()

  const slippageInputIsValid =
    slippageInput === '' || (userSlippageTolerance / 100).toFixed(2) === Number.parseFloat(slippageInput).toFixed(2)
  const deadlineInputIsValid = deadlineInput === '' || (ttl / 60).toString() === deadlineInput

  let slippageError: SlippageError | undefined
  if (slippageInput !== '' && !slippageInputIsValid) {
    slippageError = SlippageError.InvalidInput
  } else if (slippageInputIsValid && userSlippageTolerance < 50) {
    slippageError = SlippageError.RiskyLow
  } else if (slippageInputIsValid && userSlippageTolerance > 500) {
    slippageError = SlippageError.RiskyHigh
  } else {
    slippageError = undefined
  }

  let deadlineError: DeadlineError | undefined
  if (deadlineInput !== '' && !deadlineInputIsValid) {
    deadlineError = DeadlineError.InvalidInput
  } else {
    deadlineError = undefined
  }

  const parseCustomSlippage = (value: string) => {
    if (value === '' || inputRegex.test(escapeRegExp(value))) {
      setSlippageInput(value)

      try {
        const valueAsIntFromRoundedFloat = Number.parseInt((Number.parseFloat(value) * 100).toString())
        if (!Number.isNaN(valueAsIntFromRoundedFloat) && valueAsIntFromRoundedFloat < 5000) {
          setUserSlippageTolerance(valueAsIntFromRoundedFloat)
        }
      } catch (error) {
        console.error(error)
      }
    }
  }

  const parseCustomDeadline = (value: string) => {
    setDeadlineInput(value)

    try {
      const valueAsInt: number = Number.parseInt(value) * 60
      if (!Number.isNaN(valueAsInt) && valueAsInt > 0) {
        setTtl(valueAsInt)
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Flex flexDirection="column">
      <Flex flexDirection="column" mb="24px">
        <Flex mb="12px">
          <Text color='#fff' fontSize="14px">{t('Slippage Tolerance')}</Text>
          <QuestionHelper
            text={t(
              'Setting a high slippage tolerance can help transactions succeed, but you may not get such a good price. Use with caution.',
            )}
            placement="top-start"
            ml="4px"
          />
        </Flex>
        <Flex flexWrap="wrap">
          <Button
            className='farms-btn'
            mt="4px"
            mr="4px"
            onClick={() => {
              setSlippageInput('')
              setUserSlippageTolerance(10)
            }}
            variant={userSlippageTolerance === 10 ? 'subtle' : 'subtle'}
          >
            0.1%
          </Button>
          <Button
            className='farms-btn'
            mt="4px"
            mr="4px"
            onClick={() => {
              setSlippageInput('')
              setUserSlippageTolerance(50)
            }}
            variant={userSlippageTolerance === 50 ? 'subtle' : 'subtle'}
          >
            0.5%
          </Button>
          <Button
            className='farms-btn'
            mr="4px"
            mt="4px"
            onClick={() => {
              setSlippageInput('')
              setUserSlippageTolerance(100)
            }}
            variant={userSlippageTolerance === 100 ? 'subtle' : 'subtle'}
          >
            1.0%
          </Button>
          <Flex alignItems="center">
            <Box >
              <Input
                scale="lg"
                inputMode="decimal"
                pattern="^[0-9]*[.,]?[0-9]{0,2}$"
                placeholder={(userSlippageTolerance / 100).toFixed(2)}
                value={slippageInput}
                onBlur={() => {
                  parseCustomSlippage((userSlippageTolerance / 100).toFixed(2))
                }}
                onChange={(event) => {
                  if (event.currentTarget.validity.valid) {
                    parseCustomSlippage(event.target.value.replace(/,/g, '.'))
                  }
                }}
                isWarning={!slippageInputIsValid}
                isSuccess={![10, 50, 100].includes(userSlippageTolerance)}
              />
            </Box>
            <Text color="#fff" bold ml="8px">
              %
            </Text>
          </Flex>
        </Flex>
        {!!slippageError && (
          <Text style={{
            paddingTop: '7px'}} fontSize="14px" color={slippageError === SlippageError.InvalidInput ? 'red' : '#ffff'} mt="8px">
            {slippageError === SlippageError.InvalidInput
              ? t('Enter a valid slippage percentage')
              : slippageError === SlippageError.RiskyLow
              ? t('Your transaction may fail')
              : t('Your transaction may be frontrun')}
          </Text>
        )}
      </Flex>
      <Flex flexDirection="column" justifyContent="space-between" alignItems="start" >
        <Flex alignItems="center">
          <Text color="#fff" fontSize="14px" mb="8px">{t('Transaction deadline')}</Text>
          <QuestionHelper
            text={t('Your transaction will revert if it is left confirming for longer than this time.')}
            placement="top-start"
            ml="4px"
          />
        </Flex>
        <Flex alignItems="center">
         
            <Input
              scale="lg"
              inputMode="numeric"
              pattern="^[0-9]+$"
              color={deadlineError ? 'red' : undefined}
              onBlur={() => {
                parseCustomDeadline((ttl / 60).toString())
              }}
              placeholder={(ttl / 60).toString()}
              value={deadlineInput}
              onChange={(event) => {
                if (event.currentTarget.validity.valid) {
                  parseCustomDeadline(event.target.value)
                }
              }}
            />
            <Text color="#fff" pl="8px" fontSize="14px">
            {t('minutes')}
          </Text>
         
        </Flex>
      </Flex>
    </Flex>
  )
}

export default SlippageTabs
