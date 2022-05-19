import React from 'react'

export default function GetLocation(props) {
    const [input, setInput] = React.useState({
        input: ""
    })

    const handleChange = (event) => {
        
        const { name, value } = event.target
        setInput((prevState) => {
            return {
                ...prevState,
                [name] : value
            }
        })
    } 

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const handleClick = () =>{
        if (input.input.length > 0){
            props.handleInput(props.format(input.input)); 
            localStorage.setItem("location", props.format(input.input))
            props.handleCoords(prevState => !prevState);
        }
    }

    
  return (
    <div>
        <div className='location-form-header'>To get weather data, enter city and state below</div>
        <form onSubmit={handleSubmit}>
        <input 
            type="text" 
            placeholder='Duluth Minnesota'
            name="input"
            value={input.input}
            onChange={handleChange}
             />
        <button onClick={handleClick}>Submit</button>
        </form>
    </div>
  )
}
