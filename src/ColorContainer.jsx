import './ColorContainer.css'

const ColorContainer = ({ color }) => {
    return (
        <div
            className="ColorContainer"
            style={{ backgroundColor: color }}>
            <p>
                {color === "" ? "Empty Value" : (
                    color.length >= 18 ? color.slice(0, 17) + "..." : color)}
            </p>
        </div>
    )
}

export default ColorContainer
