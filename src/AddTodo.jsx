/**
 * Prikaze form za dodajanje novega todoja.
 * V props prejme funkcijo, ki jo poklice ob dodajanju novega todoja.
 * Primer uporabe:
 * <AddTodo onAddTodo={onAddTodo} />
 */
import { useState } from "react";
import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";

export function AddTodo(props) {
  const { onAddTodo } = props;

  const [title, setTitle] = useState("");

  function onSubmit() {
    if (title.lenght === 0) return;
    console.log(title.lenght);
    onAddTodo(title);
  }

  return (
    <>
      <Input value={title} onChange={(e) => setTitle(e.target.value)}></Input>
      <Button onClick={onSubmit}>Dodaj</Button>
    </>
  );
}
