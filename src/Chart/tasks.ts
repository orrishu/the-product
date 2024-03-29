import { Task } from "gantt-task-react";

let tasks: Task[] = [
    {
      start: new Date(2022, 1, 1, 8, 0, 0),
      end: new Date(2022, 1, 1, 11, 0, 0),
      name: 'פרה מה נאמר',
      id: 'Task 0',
      type:'task',
      progress: 100,
      isDisabled: true,
      styles: { progressColor: '#ffbb54', progressSelectedColor: '#ff9e0d' },
    },
    {
      start: new Date(2022, 1, 1, 10, 0, 0),
      end: new Date(2022, 1, 1, 12, 0, 0),
      name: 'מה נצמד',
      id: 'Task 1',
      type:'task',
      progress: 100,
      isDisabled: true,
      styles: { progressColor: '#ffd54f', progressSelectedColor: '#ff9e0d' },
    },
    {
      start: new Date(2022, 1, 1, 11, 0, 0),
      end: new Date(2022, 1, 1, 13, 0, 0),
      name: 'מה נאמר',
      id: 'Task 2',
      type:'task',
      progress: 100,
      isDisabled: true,
      styles: { progressColor: '#ffbb54', progressSelectedColor: '#ff9e0d' },
    },
    {
      start: new Date(2022, 1, 1, 12, 0, 0),
      end: new Date(2022, 1, 1, 14, 0, 0),
      name: 'פוסט מה נאמר',
      id: 'Task 3',
      type:'task',
      progress: 100,
      isDisabled: true,
      styles: { progressColor: '#ffbb54', progressSelectedColor: '#ff9e0d' },
    },
    {
      start: new Date(2022, 1, 1, 14, 0, 0),
      end: new Date(2022, 1, 1, 15, 0, 0),
      name: 'מה נסתר',
      id: 'Task 4',
      type:'task',
      progress: 100,
      isDisabled: true,
      styles: { progressColor: '#ffbb54', progressSelectedColor: '#ff9e0d' },
    },
    {
      start: new Date(2022, 1, 1, 15, 0, 0),
      end: new Date(2022, 1, 1, 17, 0, 0),
      name: 'פרה מה נותר',
      id: 'Task 5',
      type:'task',
      progress: 100,
      isDisabled: true,
      styles: { progressColor: '#ffbb54', progressSelectedColor: '#ff9e0d' },
    },
    {
      start: new Date(2022, 1, 1, 17, 0, 0),
      end: new Date(2022, 1, 1, 19, 0, 0),
      name: 'מה נותר',
      id: 'Task 6',
      type:'task',
      progress: 100,
      isDisabled: true,
      styles: { progressColor: '#ffbb54', progressSelectedColor: '#ff9e0d' },
    },
    {
      start: new Date(2022, 1, 1, 18, 0, 0),
      end: new Date(2022, 1, 1, 20, 0, 0),
      name: 'פוסט מה נותר',
      id: 'Task 7',
      type:'task',
      progress: 100,
      isDisabled: true,
      styles: { progressColor: '#ffbb54', progressSelectedColor: '#ff9e0d' },
    },
    {
      start: new Date(2022, 1, 1, 20, 0, 0),
      end: new Date(2022, 1, 2, 0, 0, 0),
      name: 'מה נשאר',
      id: 'Task 8',
      type:'task',
      progress: 100,
      isDisabled: true,
      styles: { progressColor: '#ffbb54', progressSelectedColor: '#ff9e0d' },
    },
    {
      start: new Date(2022, 1, 2, 0, 0, 0),
      end: new Date(2022, 1, 2, 4, 0, 0),
      name: 'מה נשתנה',
      id: 'Task 9',
      type:'task',
      progress: 100,
      isDisabled: true,
      styles: { progressColor: '#e91e63', progressSelectedColor: '#ff9e0d' },
    }
];

export default tasks;