import Card from "./Card"
import { useContext } from "react"
import { CardContext } from "../context"

const Binder = () => {
    const card = useContext(CardContext)
    const watchCardSet = ()=>{
        card.setCardSetFunc(card.CardSet)
        console.log(card.CardSet)
        console.log("run")
    }
 return (
    <>
        <main className="w-full h-full flex flex-row p-8">
            <div className="mx-8 w-xs h-screen flex p-8 bg-blue-400 flex-wrap">
                <div className="bg-black w-28 h-28 mx-16 flex justify-center items-center">
                    <p className="bg-white w-24 h-24">
                        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" width="250" height="250" />
                    </p>
                </div>
                <div className="m-8 p-8 w-48 h-screen bg-white">
                    newCard
                </div>
            </div>
            <div>
                <div className="w-3xl h-xs bg-sky-200 p-8 flex flex-row">
                    <div></div>
                    <div>
                        <button type="button" className="btn btn-primary btn-lg" onClick={watchCardSet}>+ card plus</button>
                    </div>
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