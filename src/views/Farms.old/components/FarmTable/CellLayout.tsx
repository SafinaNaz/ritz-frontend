import React from 'react'
import styled from 'styled-components'

const Label = styled.div`
  font-size: 26px;
  color: #fff;
  text-align: left;
`

const ContentContainer = styled.div`
  min-height: 24px;
  display: flex;
  align-items: center;
`

interface CellLayoutProps {
  label?: string
  i?:number
}

const CellLayout: React.FC<CellLayoutProps> = ({ label = '', children }) => {
  if(label==='Featured')
  return (
    <div>
      {label && <Label style={{marginLeft:'35px'}}>{label}</Label>}
      <ContentContainer>{children} </ContentContainer>
    </div>
  )


  return (
    <div>
      {label && <Label>{label}</Label>}
      <ContentContainer>{children} </ContentContainer>
    </div>
  )
}

export default CellLayout
