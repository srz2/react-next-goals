import Link from 'next/link'
import {FaPlus} from 'react-icons/fa'

const GoalAdd = () => {
  return (
    <Link href={'/newgoal'}>
    <FaPlus className='text-white bg-red-600 text-6xl border border-red-400 p-3 rounded-2xl hover:bg-red-700 hover:border-red-800 cursor-pointer'/>
    </Link>
  )
}

export default GoalAdd