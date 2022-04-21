import Header from "./components/Header";

export default function App() {
  const nume='pauline';
  
  return (
    <div className="border-solid border-2 border-gray-600">
      <Header  name="todo-tracker"/>
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1> 

    <h2>your name is {nume}</h2>

    </div>

  )
}

