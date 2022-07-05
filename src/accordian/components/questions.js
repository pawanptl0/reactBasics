import data from "../data/data"
import Question from "./question"

const Questions = () => {
  return data.map((quest) => <Question key={quest.id} {...quest} />)
}

export default Questions
