import { FaEdit } from 'react-icons/fa';
import './Goal.css'

const Goal = (props) => {
  const goal = props.goal;
  console.log(goal)
  return (
    <div className="goal-item">
        <p className='flex gap-3'
           data-tooltip-target="tooltip-default"
        >
          <span>{goal.id}) </span>
          <span>{goal.title}</span>
          <span className='align-middle'>{goal.created}</span>
          <span className='self-center ml-5 hover:text-blue-600'><FaEdit/></span>
        </p>
        <div id='tooltip-default' role='tooltip'>{goal.description}</div>       
    </div>
  )
}

export default Goal