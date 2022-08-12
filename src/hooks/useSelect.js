import { useMemo } from "react";
export function useSortedTodos(todos, select) {
  const sorted_todos = useMemo(() => {
    switch (select) {
      case "by_importance":
        return [...todos].sort((a, b) =>
          a.importance > b.importance ? 1 : -1
        );
      case "by_date":
        return [...todos].sort((a, b) => (a.id > b.id ? 1 : -1));
      case "by_title":
        return [...todos].sort((a, b) => a.title.localeCompare(b.title));
      default:
        return todos;
    }
  }, [select, todos]);
  return sorted_todos;
}

export function useSelect(todos, select, query) {
  const sorted_todos = useSortedTodos(todos, select);

  const sorted_and_searched_todos = useMemo(() => {
    return sorted_todos.filter((todo) =>
      todo.title.toUpperCase().includes(query.toUpperCase())
    );
  }, [query, sorted_todos]);

  return sorted_and_searched_todos;
}
