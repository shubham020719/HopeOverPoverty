import "./EachGoals.css"

const EachGoals = (props) => {
    return ( 
        <div className="EachGoal">
            <h4> {props.title} </h4>
            <img atl="EachGoal12" src={props.imgUrl} />
        </div>
    )
}

export default EachGoals;