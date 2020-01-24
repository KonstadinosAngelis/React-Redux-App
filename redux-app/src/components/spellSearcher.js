import React, { useState } from 'react';
import { connect } from 'react-redux'
import styled from 'styled-components'
import { Form, Input, Label, Button } from 'reactstrap';

import SpellResult from './SpellResult'
import { getSpells } from '../actions'

const Wrapper = styled.div`
  width: 70%;
  margin: 0 auto;
`

const FormWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`

const TxtAndSubmit = styled.div`
  display: flex;
  justify-content: center;
`

const SpellSearcher = props => {
  console.log(props.spells)

  const [spell, setSpell] = useState('')

  const onChange = e => {
    e.preventDefault();
    setSpell(e.target.value)
  }
  return (
    <Wrapper>
      <FormWrapper>
        <Form>
          <Label for="spellSearch">Spell name</Label>
          <TxtAndSubmit>
            <Input type="text" onChange={onChange} name="spellSearch" placeholder="Enter a spell!" />
            <Button onClick={()=> {props.getSpells(spell)}}>Search</Button>
          </TxtAndSubmit>
        </Form>
      </FormWrapper>
      {props.spells.map(spell => (<SpellResult key={spell.id} id={spell.id} name={spell.name} level={spell.level} school={spell.school.name} description={spell.description}/>))}
    </Wrapper>
  )
}

const mapStateToProps = state => {
  return {
  spells: state.spellsReducer.spells
  }
}

export default connect(mapStateToProps, {getSpells})(SpellSearcher)