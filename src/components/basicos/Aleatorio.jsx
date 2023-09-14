export default function Aleatorio(props) {
    let { min, max } = props;
    min = Math.ceil(min);
    max = Math.floor(max);
    const aleatorio = Math.floor(Math.random() * (max - min)) + min;
    return (
        <div>
            <p>{ aleatorio }</p>
        </div>
    )
}