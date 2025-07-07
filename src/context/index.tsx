import React, { useState, createContext } from "react";
import { type CardState, type CardSet } from "../types/index.d";

type CardType = {
    Card: CardState;
    // setCard: (Card: CardState) => void;
    CardSet: CardSet;
}
export const CardContext = createContext<CardType>({
    Card: {
    id: 1,
    title: "metamon",
    date: "2025-07-07 14:54",
    contentSummery: "metamonmetamonmetamonmetamonmetamonmetamonmetamon",
    contentA: "metamon A",
    contentB: "metamon B",
    contentC: "metamon C",
    img_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png",
    },
    // setCard: (Card:CardState)=>{
    //     [].push(Card)
    // },
    CardSet: {
        CardSet:[
            {
            id: 1,
            title: "metamon",
            date: "2025-07-07 14:54",
            contentSummery: "metamonmetamonmetamonmetamonmetamonmetamonmetamon",
            contentA: "metamon A",
            contentB: "metamon B",
            contentC: "metamon C",
            img_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png",
            }
        ]}
})

export const CardProvider: React.FC<{children: React.ReactNode }> = ({ children }) => {
    const [Card, setCard]=useState<CardState>({
            id: 2,
            title: "metamon",
            date: "2025-07-07 14:54",
            contentSummery: "metamonmetamonmetamonmetamonmetamonmetamonmetamon",
            contentA: "metamon A",
            contentB: "metamon B",
            contentC: "metamon C",
            img_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png",
    })
    const [CardSet, setCardSet]=useState<CardSet>({
            CardSet : [{
            id: 1,
            title: "metamon",
            date: "2025-07-07 14:54",
            contentSummery: "metamonmetamonmetamonmetamonmetamonmetamonmetamon",
            contentA: "metamon A",
            contentB: "metamon B",
            contentC: "metamon C",
            img_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png",
            }]
        })
    // const setCardFunc=(Card:CardState)=>{
    //     setCard(Card);
    // }
    return (
        // <CardContext.Provider value={{Card:Card,setCard:setCardFunc}}>
        <CardContext.Provider value={{Card:Card, CardSet:{CardSet:CardSet.CardSet}}}>
            {children}
        </CardContext.Provider>
    )
}