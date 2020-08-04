import React ,{useContext} from 'react'
import {ResourceContext} from '../../context/ResourceContext'
import {Context} from '../../context/Context'
import uuid from 'react-uuid'


export default function SpecificEquipment() {
    const {specificEquipment} = useContext(ResourceContext)
    const {selectCharacter, characterItems, setCharacterItems} = useContext(Context)

    const {
        name, 
        armor_category, 
        armor_class,
        str_minimum,
        stealth_disadvantage, 
        category_range,
        damage,
        range,
        properties,
        special,
        speed,
        vehicle_category,
        equipment_category, 
        weight, 
        cost, 
        desc, } = specificEquipment

        console.log(specificEquipment)

    const addToCharacter = () => {
        setCharacterItems([...characterItems,  {...specificEquipment, uid: uuid()}])}

    return (
        <div>
            {!name ? null :
                <section>
                    <h2>{name}</h2>
                    <h4>{equipment_category.name}</h4>
                    { !category_range ? null: <h4>Category: { category_range}</h4>}
                    {!armor_category  ? null: <h4>Category: {armor_category }</h4>}
                    {!vehicle_category  ? null: <h4>Category: {vehicle_category }</h4>}


                    {!armor_class ? null : <p>Armor Class: {armor_class.base} {armor_class.max_bonus ? `- Max Dex Bonus: ${armor_class.max_bonus}` : null}</p>}

            {str_minimum === 0 ? null : <p>Strength Minimum to use: {str_minimum}</p>}

                    <p>{stealth_disadvantage ? "Stealth: Disadvantage" : null}</p>
                    {!damage ? null : <p>{damage.damage_dice} {damage.damage_type.name}</p>}

                    {! specificEquipment["2h_damage"] ? null : <p>Two-handed damage: {specificEquipment["2h_damage"].damage_dice} {specificEquipment["2h_damage"].damage_type.name}</p>}

                    {!range ? null : <p>{range.normal}ft{!range.long? null : `/${range.long}ft`}</p>}

                    {!properties || properties.length<1 ? null : <p>Properties: {properties.map(property => property.name).join(", ")}</p> }
                    {!special? null : <p>{special}</p>}

                    {!speed ? null : <p>Speed: {speed.quantity}{speed.unit}</p>}
                    {!desc? null : desc.map((sentence, i) => <p key={i}>{sentence}</p>)}
                    <p>Cost: {cost.quantity} {cost.unit}</p>
                    <p>Weight: {weight}</p>

                    {!selectCharacter ? null : <button onClick={addToCharacter} data-key={uuid()}>Add to Character</button>}
                </section>
            }
        </div>
    )
}
