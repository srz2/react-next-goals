import Link from 'next/link';
import { FaHome } from "react-icons/fa";

const NewGoal = () => {
    return (
        <div>
            <div className='text-center w-24 bg-red-50'>
                <Link href={'/'}>
                    <FaHome className='bg-red-700 text-red-400 text-8xl'/>
                    Go Home
                </Link>
            </div>
            <form action="#" method="POST">
                <div className="bg-gray-400 p-5 flex gap-5 flex-col w-[500px] m-auto mt-5">
                    <div className="flex gap-3">
                        <label htmlFor="goalTitle">Title:</label>
                        <input type="text" name="goalTitle" id="goalTitle" required/>
                    </div>
                    <div>
                        <label htmlFor="goalDescription">Description:</label>
                        <input type="text" name="goalDescription" id="goalDescription" required/>
                    </div>
                    <button className="text-white bg-red-400 p-4 rounded-xl" type="submit">Add New Goal</button>
                </div>
            </form>
        </div>
    )
}

export default NewGoal;