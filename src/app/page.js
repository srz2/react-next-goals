import UserProfile from "@/components/UserProfile/UserProfile";
import GoalList from "@/components/GoalList/GoalList"
import GoalAdd from "@/components/GoalAdd/GoalAdd";
import Goal from "@/components/Goal/Goal";
import Image from "next/image";

export default function Home() {
  const goals = [
    {
      id: 1,
      title: 'Brush Teeth',
      description:'Should really do this already',
      created: '2/7/24'
    },
    {
      id: 2,
      title: 'Take out trash',
      description:'It\'s really stinky',
      created: '2/7/24'
    },
    {
      id: 3,
      title: 'This is something that has a really long title that I wonder how it will look',
      description:'It\'s really stinky',
      created: '2/7/24'
    },
  ]

  return (
    <main className="w-1/2 m-auto">
      <div className="flex mt-10">
        <div className="flex-none w-48 h-14">
          <GoalAdd />
        </div>
        <Image
        width={300}
        height={300}
        src={`/target.jpeg`}
        />
        <UserProfile />
      </div>
      <div>
        <GoalList goals={goals}/>
      </div>
    </main>
  );
}
