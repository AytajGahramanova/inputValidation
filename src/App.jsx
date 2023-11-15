import React from "react";
import Form from "./components/form";
import FormList from "./components/list";


const App = () => {
  const [todos, setTodos] = React.useState([]);

  return (
    <div>
      <Form todos={todos} setTodos={setTodos} />
      <FormList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;




