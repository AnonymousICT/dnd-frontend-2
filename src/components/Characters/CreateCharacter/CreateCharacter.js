import React, {useContext}  from 'react'
import {Context} from '../../../context/Context'
import SelectCharacterClass from './SelectCharacterClass'
import AttributeEntry from './AttributeEntry'

export default function CreateCharacter() {
    const {characterName, setCharacterName, characterLevel ,setCharacterLevel,} = useContext(Context)

    return ( 
        <div>
            <form>
                <input type='string' value={characterName} onChange={(e)=>setCharacterName(e.target.value)} placeholder='Character Name'/>
                <input type='number' value={characterLevel} onChange={(e)=>setCharacterLevel(e.target.value)} placeholder='level 1' min='1' max='20'/>

                <AttributeEntry />
                <SelectCharacterClass />
            </form>
        </div>
    )
}
