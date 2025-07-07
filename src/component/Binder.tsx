import Card from "./Card"
const Binder = () => {
 return (
    <>
        <main className="w-full h-full flex flex-row p-8">
            <div className="mx-8 w-xs h-screen flex p-8 bg-blue-400 flex-wrap">
                <div className="bg-black w-28 h-28 mx-16 flex justify-center items-center">
                    <p className="bg-white w-24 h-24">
                        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" width="250" height="250" />
                    </p>
                </div>
                <div className="m-8 p-8 w-48 h-screen bg-white">sentence</div>
            </div>
            <div>
                <div className="w-3xl h-xs bg-sky-200 p-8">
                    filtering
                </div>
                <div className="w-3xl h-screen flex flex-row bg-blue-400 flex-wrap">
                    <div><Card /></div>
                    <div className="mx-8 my-4 w-32 h-48 bg-white p-12 hover:bg-gray-400">card</div>
                    <div className="mx-8 my-4 w-32 h-48 bg-white p-12 hover:bg-gray-400">card</div>
                    <div className="mx-8 my-4 w-32 h-48 bg-white p-12 hover:bg-gray-400">card</div>
                    <div className="mx-8 my-4 w-32 h-48 bg-white p-12 hover:bg-gray-400">card</div>
                    <div className="mx-8 my-4 w-32 h-48 bg-white p-12 hover:bg-gray-400">card</div>
                    <div className="mx-8 my-4 w-32 h-48 bg-white p-12 hover:bg-gray-400">card</div>
                    <div className="mx-8 my-4 w-32 h-48 bg-white p-12 hover:bg-gray-400">card</div>
                    <div className="mx-8 my-4 w-32 h-48 bg-white p-12 hover:bg-gray-400">card</div>
                    <div className="mx-8 my-4 w-32 h-48 bg-white p-12 hover:bg-gray-400">card</div>
                    <div className="mx-8 my-4 w-32 h-48 bg-white p-12 hover:bg-gray-400">card</div>
                    <div className="mx-8 my-4 w-32 h-48 bg-white p-12 hover:bg-gray-400">card</div>
                </div>
            </div>
        </main>
    </>
 ) 
}

export default Binder