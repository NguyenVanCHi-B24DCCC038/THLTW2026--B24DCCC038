import { DragDropContext, Droppable, Draggable, DropResult } from "@hello-pangea/dnd";
import { useState } from "react";
import { getTasks, saveTasks } from "../../LocalStorage";
import { Task, TaskStatus } from "../../types1";

const columns: TaskStatus[] = ["todo", "doing", "done"];

export default function Kanban() {
    const [tasks, setTasks] = useState<Task[]>(getTasks());

    const onDragEnd = (result: DropResult) => {
        if (!result.destination) return;

        const updated = tasks.map(task => {
            if (task.id === result.draggableId) {
                return { ...task, status: result.destination!.droppableId as TaskStatus };
            }
            return task;
        });

        setTasks(updated);
        saveTasks(updated);
    };

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <div style={{ display: "flex", gap: 16 }}>
                {columns.map(col => (
                    <Droppable droppableId={col} key={col}>
                        {(provided) => (
                            <div ref={provided.innerRef} {...provided.droppableProps} style={{ width: 250 }}>
                                <h3>{col}</h3>

                                {tasks
                                    .filter(t => t.status === col)
                                    .map((task, index) => (
                                        <Draggable draggableId={task.id} index={index} key={task.id}>
                                            {(provided) => (
                                                <div
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                    style={{
                                                        padding: 10,
                                                        border: "1px solid #ccc",
                                                        marginBottom: 8,
                                                        background: "#fff"
                                                    }}
                                                >
                                                    {task.title}
                                                </div>
                                            )}
                                        </Draggable>
                                    ))}

                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                ))}
            </div>
        </DragDropContext>
    );
}