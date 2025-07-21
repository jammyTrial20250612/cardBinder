import Card from "./Card"
import { useContext, useState } from "react"
import { CardContext } from "../context"

const Binder = () => {
    const card = useContext(CardContext)    
    const watchCardSet = ()=>{
        card.setCardSetFunc(card.CardSet)
        console.log(card.CardSet)
        console.log("run")
    }
    const [value, setValue]=useState("") 
    const handleChange = (event) => {
        setValue(event.target.value)
    }
    const textStyle = {
    wordWrap: "break-word",
    width: "10rem",
    border: "1px solid #ccc",
    padding: "10px",
    };
    
 return (
    <>
        <main className="w-full h-full flex flex-row p-8">
            <div className="mx-8 w-xs h-screen flex p-8 bg-blue-400 flex-wrap justify-center">
                <div className="bg-black w-28 h-28 mx-16 flex justify-center items-center">
                    <p className="bg-white w-24 h-24">
                        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" width="250" height="250" />
                    </p>
                </div>
                
                 <div className="text-xs mx-8 my-4 w-48 h-80 px-3 hover:bg-gray-400 bg-white">
                            <p className="my-2 px-4 h-8" style={textStyle}>No.id title</p>
                            <input
                            type="text"
                            value={value}
                            onChange={handleChange}
                            className="my-2 text-xm w-40 h-32 p-4" 
                            style={textStyle}
                            placeholder="content,please"></input>
                            <p className="my-2 h-20">
                                <ul className="list-none text-xm w-40" style={textStyle}>
                                    <li>
                                        {value}
                                    </li>
                                    <li>
                                        {value}
                                    </li>
                                    <li>
                                        {value}
                                    </li>
                                </ul>
                            </p>
                            <div className="h-8">
                                <button type="button" className="btn btn-primary btn-lg" onClick={watchCardSet}>+ card plus</button>
                            </div>
                        </div>
                </div>

            <div>
                <div className="w-3xl h-xs bg-sky-200 p-8 flex flex-row">
                    <div></div>
                </div>
                <div className="w-3xl h-screen flex flex-row bg-blue-400 flex-wrap">
                    <div><Card /></div>
                </div>
            </div>
        </main>
    </>
 ) 
}

export default Binder