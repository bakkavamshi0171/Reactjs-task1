import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import Column from "./column";

export default function KandanBoard() {
  const [complete, setCompleted] = useState([]);
  const [inComplete, setIncomnplete] = useState([]);
  return (
    <DragDropContext>
      <h2 style={{ textAlign: "center" }}>Progress Board</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <Column title={"TO DO"} tasks={inComplete} id={"1"}/>
      </div>
    </DragDropContext>
  );
}
