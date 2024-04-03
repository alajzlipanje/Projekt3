/**
 * Prikaze iskaznico todo.
 * V props prejme todo objekt.
 *
 * Primer uporabe:
 * <Todo todo={todo} />
 */

export default function Todo(props) {
  const { todo } = props;

  return <div>{todo}</div>;
}
