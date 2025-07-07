import { useState } from "react";

type Card = {
    id: number,
    title: string,
    date: string,
    contentSummery: string
    contentA: string,
    contentB: string,
    contentC: string
    img_url: string,
}


const Card =()=>{
    const [cardDetail, useCardDetail]=useState<Card[]>([{
    id: 1,
    title: "metamon",
    date: "2025-07-07 14:54",
    contentSummery: "metamonmetamonmetamonmetamonmetamonmetamonmetamon",
    contentA: "metamon A",
    contentB: "metamon B",
    contentC: "metamon C",
    img_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png",
    },    
    {
    id: 2,
    title: "metamon2",
    date: "2025-07-07 15:22",
    contentSummery: "metamonmetamonmetamonmetamonmetamonmetamonmetamon",
    contentA: "metamon A",
    contentB: "metamon B",
    contentC: "metamon C",
    img_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png",
    },




]); 

        return (
            <>
                <div className="flex flex-wrap">
                    { cardDetail.map((poke,index)=>(
                        <div className="mx-8 my-4 w-32 h-48 p-12 hover:bg-gray-400 bg-white">
                            <p>No.{poke.id}</p>
                            <img src={`${poke.img_url}`} width="150" height="150"/>
                            <p>{poke.title}</p>
                        </div>
                    ))}  
                </div>
            </>
        )
}

export default Card