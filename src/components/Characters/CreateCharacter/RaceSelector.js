import React, {useContext} from 'react'
import {Context} from '../../../context/Context'

export default function RaceSelector() {
    const{allRaces, characterRace, setCharacterRace, raceData, setSelectedLanguage,  setSelectedTrait} = useContext(Context)

    const {
        name, 
        speed, 
        ability_bonuses, 
        alignment, 
        age, 
        size, 
        size_description, 
        starting_proficiencies, 
        languages, 
        language_desc, 
        language_options, 
        traits, 
        trait_options, 
        subraces} = raceData

    return (
        <div className='select-race-container'>
            <select value={characterRace} onChange={(e)=>setCharacterRace(e.target.value)}>
                <option key="noOp" value=''>-----</option>
                {allRaces.map(index => <option key={index[0]} value={index[1]}>
                    {index[0]}
                </option>)}
            </select>
            
            <div className='race-info-container'>
                {!name ? null: 
                    <section className='race-info'>
                        <h1>{name}</h1>
                        <p>Speed: {speed}</p>
                        {ability_bonuses.map((ability)=>
                            <p key={ability.name}>{ability.name} + {ability.bonus}</p>)}
                        <p>{alignment}</p>
                        <p>{age}</p>
                        <p>{size}: {size_description}</p>
                        <h3>Starting Proficiencies</h3>
                        {starting_proficiencies.map((item,i)=> 
                            <p key={i}>{item.name}</p>
                        )}
                        <p>{language_desc}</p>
                        {languages.map((language, i) => <p key={i}>{language.name}</p>)}
                        {!language_options ? null: 
                            <div className="language options">
                                {language_options.from.map((option, languageIndex) => {
                                    return (
                                        <div key={languageIndex}>
                                            <label key={languageIndex + '-label'}>
                                                {option.name}
                                            </label>
                                            <input
                                                type='radio'
                                                className='radio-choice'
                                                name='language-group'
                                                onChange={(e)=> setSelectedLanguage(e.target.value)}
                                                value={option.name}
                                                key={languageIndex} 
                                            />
                                        </div>
                                    )
                                })}
                            </div>
                        }
                        
                        <h3>Traits</h3>
                        {traits.map((trait, i) => <p key={i}>{trait.name}</p>)}
                        {!trait_options ? null: 
                            <div className='trait options'>
                                {trait_options.from.map((option, traitIndex) =>{
                                    return (
                                        <div key={traitIndex}>
                                            <label key={traitIndex + '-label'}>
                                                {option.name}
                                            </label>
                                            <input 
                                                type='radio'
                                                className='radio-choice'  
                                                name='trait-group'
                                                onChange={(e) => setSelectedTrait(e.target.value)}
                                                value={option.name}
                                                key={traitIndex}
                                            />
                                        </div>         
                                    )
                                })}
                            </div>
                        }

                        {!subraces ? null: 
                            <div>
                                <h3>Available Sub-races</h3>
                                {subraces.map(index => index.name)}
                            </div>
                        }
                    </section>
                }
            </div>
        </div>
        
    )
}
