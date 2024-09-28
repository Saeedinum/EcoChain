import { useGetQuestionsQuery } from "../learnAPI"

const Quiz = () => {
  const { data } = useGetQuestionsQuery({ topic: "WildFires" })
  console.log(data)
  return <div>Quiz</div>
}

export default Quiz
