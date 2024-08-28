import './ColorInput.css'


const ColorInput = ({ color, setColor }) => {

    return (
        <input
            autoFocus
            className='ColorInput'
            type="text"
            placeholder='Add Color Name'
            value={color}
            onChange={(e) => setColor(e.target.value)}
        />
    )
}

export default ColorInput
