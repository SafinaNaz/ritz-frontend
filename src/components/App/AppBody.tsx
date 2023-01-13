import React from 'react'
import styled from 'styled-components'
import { Card } from '@pancakeswap/uikit'

export const BodyWrapper = styled.div`
  border-radius: 24px;
  max-width:730px;
  width: 100%;
  z-index: 1;
  top: 30px;
  background:#333642;
  padding: 25px 30px 0px 30px;
  position: relative;
  @media screen and (max-width: 1025px) {
    max-width: 530px;
    padding: 25px 10px 0px 10px
  }
`

/**
 * The styled container element that wraps the content of most pages and the tabs.
 */
export default function AppBody({ children }: { children: React.ReactNode }) {
  return <BodyWrapper>{children}</BodyWrapper>
}
