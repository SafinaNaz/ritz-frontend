import styled from 'styled-components'
import { Box } from '@pancakeswap/uikit'

const Card = styled(Box)<{
  width?: string
  padding?: string
  border?: string
  borderRadius?: string
}>`
  width: ${({ width }) => width ?? '100%'};
  border-radius: 16px;
  padding: 1.25rem;
  padding: ${({ padding }) => padding};
  border: ${({ border }) => border};
  border-radius: ${({ borderRadius }) => borderRadius};
  background-color: #565A67;
`
export default Card

export const LightCard = styled(Card)`
  // border: 1px solid #333643;
  background-color: #565A67;
`

export const LightGreyCard = styled(Card)`
  // border: 1px solid #333643;
  background-color: #565A67;
`

export const GreyCard = styled(Card)`
  background-color: #565A67;
`
