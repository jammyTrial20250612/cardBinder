import { useContext } from "react";
import { CardContext } from "../context";

// type Card = {
//     id: number,
//     title: string,
//     date: string,
//     contentSummery: string
//     contentA: string,
//     contentB: string,
//     contentC: string
//     img_url: string,
// }

const Card =()=>{
    const card = useContext(CardContext)
        return (
            <>
                <div className="flex flex-wrap">
                    { card.CardSet.CardSet.map((poke,index)=>(
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