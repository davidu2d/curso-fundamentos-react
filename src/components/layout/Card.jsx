import './Card.css'

export default function Card(props) {
    const {titulo, children, color} = props

    const style = {
        backgroundColor: color || '#F00',
        borderColor: color || '#F00'
    }

    return (
        <div className="Card" style={ style }>
            <div className="Title">{ titulo }</div>
            <div className="Content">
                { children }
            </div>
        </div>
    )
}