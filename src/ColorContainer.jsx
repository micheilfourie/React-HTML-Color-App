import './ColorContainer.css'

const ColorContainer = ({ color }) => {
    return (
        <div
            className="ColorContainer"
            style={{ backgroundColor: color }}>
            <label
                htmlFor="color">
                {color === "" ? "Empty Value" : (
                    color.length >= 18 ? color.slice(0, 17) + "..." : color)}
            </label>
        </div>
    )
}

export default ColorContainer
