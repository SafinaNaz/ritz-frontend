import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { FarmWithStakedValue } from 'views/Farms/components/FarmCard/FarmCard'
import { useMatchBreakpoints, InfoIcon } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import useDelayedUnmount from 'hooks/useDelayedUnmount'
import { useFarmUser } from 'state/farms/hooks'

import Apr, { AprProps } from './Apr'
import Farm, { FarmProps } from './Farm'
import Earned, { EarnedProps } from './Earned'
import Details from './Details'
import Multiplier, { MultiplierProps } from './Multiplier'
import Liquidity, { LiquidityProps } from './Liquidity'
import ActionPanel from './Actions/ActionPanel'
import CellLayout from './CellLayout'
import { DesktopColumnSchema, MobileColumnSchema } from '../types'

export interface RowProps {
  apr: AprProps
  farm: FarmProps
  earned: EarnedProps
  multiplier: MultiplierProps
  liquidity: LiquidityProps
  details: FarmWithStakedValue,
  i?:number
}

interface RowPropsWithLoading extends RowProps {
  userDataReady: boolean
}

const cells = {
  apr: Apr,
  farm: Farm,
  earned: Earned,
  details: Details,
  multiplier: Multiplier,
  liquidity: Liquidity,
}

const CellInner = styled.div`
  padding: 24px 0px;
  display: flex;
  width: 100%;
  align-items: center;
  padding-right: 8px;

  ${({ theme }) => theme.mediaQueries.xl} {
    padding-right: 32px;
  }
`

const StyledTr = styled.tr`
  cursor: pointer;
  border-bottom: 1px solid #5B5B60;
  color:#fff;
`

const EarnedMobileCell = styled.td`
  padding: 16px 0 24px 16px;
`

const AprMobileCell = styled.td`
  padding-top: 16px;
  padding-bottom: 24px;
`

const FarmMobileCell = styled.td`
  padding-top: 24px;
`

const Row: React.FunctionComponent<RowPropsWithLoading> = (props) => {
  // let i = 0;
  const { details, userDataReady, i } = props
  const hasStakedAmount = !!useFarmUser(details.pid).stakedBalance.toNumber()
  const [actionPanelExpanded, setActionPanelExpanded] = useState(hasStakedAmount)
  const shouldRenderChild = useDelayedUnmount(actionPanelExpanded, 300)
  const { t } = useTranslation()

  const toggleActionPanel = () => {
    setActionPanelExpanded(!actionPanelExpanded)
  }

  useEffect(() => {
    setActionPanelExpanded(hasStakedAmount)
  }, [hasStakedAmount])

  const { isXl, isXs } = useMatchBreakpoints()

  const isMobile = !isXl
  const tableSchema = isMobile ? MobileColumnSchema : DesktopColumnSchema
  const columnNames = tableSchema.map((column) => column.name)

  const handleRenderRow = () => {
    if(i===1){
      console.log('if')
      // i++;
      console.log(`i======${i}`)
      if (!isXs) {
        return (
          <StyledTr onClick={toggleActionPanel}>
            {Object.keys(props).map((key) => {
              const columnIndex = columnNames.indexOf(key)
              if (columnIndex === -1) {
                return null
              }

  
              switch (key) {
                case 'details':
                  return (
                    <></>
                    // <td key={key}>
                    //   <CellInner>
                    //     <CellLayout>
                    //       <Details actionPanelToggled={actionPanelExpanded} />
                    //     </CellLayout>
                    //   </CellInner>
                    // </td>
                  )
                  
                  

                case 'apr':
                  return (
                    <td key={key}>
                      <CellInner>
                        <CellLayout label={t('APR')}/>
                      </CellInner>
                    
                      <CellInner>
                        <CellLayout>
                          <Apr {...props.apr} hideButton={isMobile} />
                          <InfoIcon marginLeft="10px" color="#D6405C" /> 
                        </CellLayout>
                      </CellInner>
                    </td>
                  )
                  
                case 'farm':
                  return(
                      <td key={key} >
                       <CellInner>
                        <CellLayout i={i}  label={t(tableSchema[columnIndex].label)} />
                      </CellInner>
                      <CellInner>
                        <CellLayout i={i}  >
                          {React.createElement(cells[key], { ...props[key] })}
                        </CellLayout>
                      </CellInner>
                    </td>
                  )

                  
                case 'multiplier':
                  return (<> </>)
                default:
                  return (

                    <td key={key}>
                       <CellInner>
                        <CellLayout i={i}  label={t(tableSchema[columnIndex].label)} />
                      </CellInner>

                      <CellInner>
                        <CellLayout i={i}  >
                          {React.createElement(cells[key], { ...props[key], userDataReady })}
                        </CellLayout>
                      </CellInner>
                    </td>
                  )
              }
            })}
          </StyledTr>
        )
      }
  
      console.log('else')
      return (
        <StyledTr onClick={toggleActionPanel}>
          <td>
            <tr>
              <FarmMobileCell>
                <CellLayout i={i} >
                  <Farm {...props.farm} />
                </CellLayout>
              </FarmMobileCell>
            </tr>
            <tr>
              <AprMobileCell>
                <CellLayout label={t('APR')}>
                  <Apr {...props.apr} hideButton />             
                <InfoIcon marginLeft="10px" color="#D6405C" /> 
                </CellLayout>
              </AprMobileCell>
            </tr>
          </td>
          {/* <td>
            <CellInner>
              <CellLayout>
                <Details actionPanelToggled={actionPanelExpanded} />
              </CellLayout>
            </CellInner>
          </td> */}
        </StyledTr>
      )
    }
    // else {
      console.log('else')
    if (!isXs) {
      return (
        <StyledTr onClick={toggleActionPanel}>
          {Object.keys(props).map((key) => {
            const columnIndex = columnNames.indexOf(key)
            if (columnIndex === -1) {
              return null
            }

            switch (key) {
              
              case 'details':
                return (
                  <></>
                  // <td key={key}>
                  //   <CellInner>
                  //     <CellLayout>
                  //       <Details actionPanelToggled={actionPanelExpanded} />
                  //     </CellLayout>
                  //   </CellInner>
                  // </td>
                )
              case 'apr':
                return (
                  <td key={key}>
                    <CellInner>
                      <CellLayout label={t('')}>
                        <Apr {...props.apr} hideButton={isMobile} />
                        <InfoIcon marginLeft="10px" color="#D6405C" /> 
                      </CellLayout>
                    </CellInner>
                  </td>
                )
              case 'multiplier':
                return (<> </>)
              default:
                return (
                  <td key={key}>
                    <CellInner>
                      <CellLayout>
                        {React.createElement(cells[key], { ...props[key], userDataReady })}
                      </CellLayout>
                    </CellInner>
                  </td>
                )
            }
          })}
        </StyledTr>
      )
    }

    return (
      <StyledTr onClick={toggleActionPanel}>
        <td>
          <tr>
            <FarmMobileCell>
              <CellLayout>
                <Farm {...props.farm} />
              </CellLayout>
            </FarmMobileCell>
          </tr>
          <tr>
            <AprMobileCell>
              <CellLayout label={t('')}>
                <Apr {...props.apr} hideButton />             
              <InfoIcon marginLeft="10px" color="#D6405C" /> 
              </CellLayout>
            </AprMobileCell>
          </tr>
        </td>
        {/* <td>
          <CellInner>
            <CellLayout>
              <Details actionPanelToggled={actionPanelExpanded} />
            </CellLayout>
          </CellInner>
        </td> */}
      </StyledTr>
    )
  // }
  }

  return (
    <>
      {handleRenderRow()}
      {shouldRenderChild && (
        <tr>
          <td colSpan={6}>
            <ActionPanel {...props} expanded={actionPanelExpanded} />
          </td>
        </tr>
      )}
    </>
  )
}

export default Row
