import React from 'react'

export function ListRendering() {

    const names = ['Bruce', 'Diana', 'Clark', 'Barry']
    const nameList = names.map((name, index) => <div  key={index}>{index} - {name}</div>)

    return(
        <div>
            {nameList}
        </div>
    )
}
// ---------------------------------------------

function Heros({hero}) {
  return (
    <div>
        {hero.name} {hero.age} {hero.skill}
    </div>
  )
}


export function ListKeyValuePair() {
    const heros = [
        {
            id: 1,
            name: 'Bruce',
            age: 30,
            skill: 'Money',
        },
        {
            id: 2,
            name: 'Clark',
            age: 45,
            skill: 'Super powers'
        },
        {
            id: 3,
            name: 'Diana',
            age: 300,
            skill: 'Strength'
        },
        {
            id: 4,
            name: 'Barry',
            age: 22,
            skill: 'Speed'
        }

    ]

    const herosList = heros.map(hero => (
        <Heros key={hero.id} hero={hero}/>
    ))

    return <div>{herosList}</div>
}