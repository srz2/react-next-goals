import Goal from "../Goal/Goal";

const GoalList = (props) => {
    const goals = props.goals;
    return (
        <>
        <h2>Goal List: ({goals.length} Goals)</h2>
        <ul>
            {goals.map((goal) => {
                return <Goal goal={goal}/>
            })}
        </ul>
        </>
    )
}

export default GoalList