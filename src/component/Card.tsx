import { useContext,useState } from "react";
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
    const [i, setI]=useState(0)
    const card = useContext(CardContext)
    const textStyle = {
    wordWrap: "break-word",
    width: "10rem",
    border: "1px solid #ccc",
    padding: "10px",
    };
    const cardDelete =(index:number)=>{
        setI(index)
        card.setCardDeleteFunc(card.CardSet,i )
    }

        return (
            <>
                <div className="flex flex-wrap">
                    { card.CardSet.map((memo,index)=>(
                        <div className="text-xs mx-8 my-4 w-48 h-80 px-3 hover:bg-gray-400 bg-white">
                            <p className="my-2 px-4 h-8" style={textStyle}>No.{memo.id} {memo.title}</p>
                            <p className="my-2 text-xm w-40 h-32 p-4" style={textStyle}>
                                {memo.contentSummery}
                            </p>
                            <p className="my-2 h-20">
                                <ul className="list-none text-xm w-40" style={textStyle}>
                                    <li>{memo.tagA}</li>
                                    <li>{memo.tagB}</li>
                                    <li>{memo.tagC}</li>
                                </ul>
                            </p>
                            <div className="h-8">
                                <button type="button" className="btn btn-danger btn-sm" onClick={(index)=>cardDelete(index)}>delete</button>
                            </div>
                        </div>
                    ))}  
                </div>
            </>
        )
}

export default Card