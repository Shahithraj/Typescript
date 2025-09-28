let TODOS = [{
        id: 1,
        text: "Read Typescript"
    }];
export function addTodo(text) {
    const newTodo = { id: Math.random(), text: text };
    TODOS.push(newTodo);
    return newTodo;
}
export function getTodo(id) {
    const todo = TODOS.find(todo => todo.id === id);
    if (!todo) {
        throw new Error("Todo not found!");
    }
    return todo;
}
export function getAllTodo() {
    return TODOS;
}
export function removeTodo(id) {
    const updatedTodo = TODOS.filter(t => t.id != id);
    TODOS = updatedTodo;
}
export function updateTodo(id, text) {
    const todo = getTodo(id);
    todo.text = text;
}
