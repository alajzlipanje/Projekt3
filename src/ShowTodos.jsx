/**
 * Prikaze seznam todojev v tabeli z dvema stolpcema.
 * V props prejme seznam todojev.
 * Primer uporabe:
 * <ShowTodos todos={todos} />
 */

import Todo from "./Todo";

export default function ShowTodos(props) {
  const { todos } = props; // todos = [1, n2, 3, 4]

  return (
    <div>
      {todos.map((todo) => (
        <Todo todo={todo}></Todo>
      ))}
    </div>
  );
}
