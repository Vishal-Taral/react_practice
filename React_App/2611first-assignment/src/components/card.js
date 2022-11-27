import './card.css'

let card = (props) => {
    let classes = 'card ' + props.className;
    return (
        <div className={classes}>{props.children}</div>
    )
}

export default card;
