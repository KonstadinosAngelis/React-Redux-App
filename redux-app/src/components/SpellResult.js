import React from 'react';
import styled from 'styled-components'
import { Card, CardTitle, CardText, Button, CardBody, UncontrolledCollapse } from 'reactstrap'

const Wrapper = styled.div`
  color: #282c34;
  width: 35%;
`

const SpellResult = props => {
  console.log(props)
  return (
    <Wrapper>
      <Card>
        <CardTitle>{props.name}</CardTitle>
        <CardText>{props.school}</CardText>
        <Button id={`toggler${props.id}`}>See Spell Description</Button>
        <UncontrolledCollapse toggler={`#toggler${props.id}`}>
          <Card>
            <CardBody>
              {props.description.join()}
          </CardBody>
          </Card>
        </UncontrolledCollapse>
      </Card>
    </Wrapper>
  )
}

export default SpellResult