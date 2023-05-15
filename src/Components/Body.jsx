import "../Components/Body.css"
import React, {useState} from "react"
import axios from "axios"


const Body =()=>{
    const [diction, setDiction] = useState("");
    const [word, setWord] = useState("");
    const [error, setError] = useState("")
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if(!word){
            setError("Please input a word")
        }

        try {
            const base_url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
            const response = await axios.get(base_url); 
            setDiction(response.data)    
        } catch (error) {
            setError("word not found")
        }

    }
    return(
        <div className="body">
            <form onSubmit={handleSubmit}>
                <input type="search"
                placeholder="Input your text here"
                value={word}
                onChange={(event)=> setWord(event.target.value)}
                name="" 
                id=""/>
            
                <button type="submit">Search</button>
            </form>
            {
                error && (
                    <p>{error}</p>
                )
            }
            
            <div className="display">
                <div className="word">
                    {
                        diction && (
                            // diction.map((diction, index)=>(
                            //     <div key={index}>
                            //         <h1> Word: {diction[0].word}</h1>
                            //     </div>
                            // ))
                            <h1>Word: {diction[0].word}</h1>
                        )
                    }
                </div>
                <div className="Meaning">
                    <h1>Meaning:</h1>
                    {
                        diction && (
                            diction.map((search, index)=> (

                                search.meanings.map(meaning=>(
                                    <div key={index}>
                                        {
                                            meaning.definitions.map(definition => (
                                                <div>
                                                    <p>-{definition.definition}</p>
                                                </div>
                                            ))
                                        }
                                    </div>
                                ))

                            ))
                        )
                    }
                    {/* <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, itaque error. Eveniet minima iusto voluptate, cum repellat magni libero quos architecto unde voluptatum iure recusandae molestias ullam fuga nobis, doloremque ipsam dolor, at aperiam nesciunt repudiandae! Iste incidunt expedita iure.</p> */}
                </div>
                <div className="examples">
                    <h1>Examples:</h1>
                    {
                        diction && (
                            diction.map((dict, index)=>(
                                dict.meanings.map(meaning =>(
                                    <div key={index}>
                                        {
                                            meaning.definitions.map(define=>(
                                                <p>{define.example}</p>
                                            ))
                                        }
                                    </div>
                                ))
                            ))
                        )
                    }
                    {/* <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, itaque error. Eveniet minima iusto voluptate, cum repellat magni libero quos architecto unde voluptatum iure recusandae molestias ullam fuga nobis, doloremque ipsam dolor, at aperiam nesciunt repudiandae! Iste incidunt expedita iure.</p> */}
                </div>
            </div>
            {/* <div></div> */}
        </div>
    )
}
export default Body;