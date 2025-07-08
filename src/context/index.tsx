import React, { useState, createContext } from "react";
import { type CardState } from "../types/index.d";

type CardType = {
    Card: CardState;
    // setCard: (Card: CardState) => void;
    CardSet: CardState[];
    setCardSetFunc: (CardSet: CardState[]) => void;
    setCardDeleteFunc: (CardSet:CardState[],index: number) => void;
}

export const CardContext = createContext<CardType>({
    Card: {
    id: 1,
    title: "metamon",
    date: "2025-07-07 14:54",
    contentSummery: "metamonmetamonmetamonmetamonmetamonmetamonmetamon",
    tagA: "metamon A",
    tagB: "metamon B",
    tagC: "metamon C",
    img_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png",
    },
    CardSet: [
            {
            id: 1,
            title: "metamon",
            date: "2025-07-07 14:54",
            contentSummery: "metamonmetamonmetamonmetamonmetamonmetamonmetamon",
            tagA: "metamon A",
            tagB: "metamon B",
            tagC: "metamon C",
            img_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png",
            }],
    setCardSetFunc: (CardSet: CardState[])=>{
        return [ CardSet, {
            id: 3,
            title: "metamon3",
            date: "2025-07-07 17:25",
            contentSummery: "metamonmetamonmetamonmetamonmetamonmetamonmetamon",
            tagA: "",
            tagB: "",
            tagC: "",
            img_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png",
        }];
    },
    setCardDeleteFunc: (CardSet: CardState[], index:number)=>{
    const newArray = [...CardSet]; // 配列をコピー
    newArray.splice(index, 1);  // 指定したインデックスの要素を削除
    return [ ...newArray ]
    }
})

export const CardProvider: React.FC<{children: React.ReactNode }> = ({ children }) => {
    const [Card, setCard]=useState<CardState>({
            id: 2,
            title: "metamon",
            date: "2025-07-07 14:54",
            contentSummery: "metamonmetamonmetamonmetamonmetamonmetamonmetamon",
            tagA: "metamon A",
            tagB: "metamon B",
            tagC: "metamon C",
            img_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png",
    })
    const [CardSet, setCardSet]=useState<CardState[]>([{
            id: 1,
            title: "metamon",
            date: "2025-07-07 14:54",
            contentSummery: "metamonmetamonmetamonmetamonmetamonmetamonmetamon",
            tagA: "metamon A",
            tagB: "metamon B",
            tagC: "metamon C",
            img_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png",
            }])

    const setCardSetFunc = ()=>{
        setCardSet([ ...CardSet, {
            id: 3,
            title: "metamon3",
            date: "2025-07-07 17:25",
            contentSummery: "metamonmetamonmetamonmetamonmetamonmetamonmetamon",
            tagA: "",
            tagB: "",
            tagC: "",
            img_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png",
        }]);
    }

    const setCardDeleteFunc = (CardSet:CardState[],index:number)=>{
    const newArray = [...CardSet]; // 配列をコピー
    newArray.splice(index, 1);  // 指定したインデックスの要素を削除
    setCardSet([...newArray])
    }



    // const setCardFunc=(Card:CardState)=>{
    //     setCard(Card);
    // }


    // setCardSetFunc: (newCardSet: CardSet)=>(prev: CardSet[])=>{
    //     return ([...prev, newCardSet]);
    // };

    return (
        // <CardContext.Provider value={{Card:Card,setCard:setCardFunc}}>
        <CardContext.Provider value={{Card:Card, CardSet: CardSet, setCardSetFunc:setCardSetFunc, setCardDeleteFunc:setCardDeleteFunc}}>
            {children}
        </CardContext.Provider>
    )
}