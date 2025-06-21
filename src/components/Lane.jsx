import React, { useState } from 'react';
import Task from './Task';
import TaskForm from './TaskForm';

const Lane = ({
  laneId,
  title,
  tasks,
  onDragStart,
  onDragOver,
  onDrop,
  project,
}) => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="text-left p-0 rounded-sm min-h-96 min-w-500"
      onDragOver={onDragOver}
      onDrop={e => onDrop(e, laneId)}
    >
      <div className="flex justify-between items-center bg-white mb-4 p-2.5 rounded-md text-black dark:bg-gray-800">
        <h2 className="font-semibold dark:text-white">{title}</h2>
        <p className="bg-black px-2 rounded-full text-white text-sm dark:bg-white dark:text-black font-bold">
          {tasks.length}
        </p>
      </div>
      <div className="flex flex-col gap-4 min-w-400">
        {tasks.map(task => (
          <Task key={task.id} onDragStart={onDragStart} {...task} />
        ))}
        {open ? (
          <TaskForm
            close={setOpen}
            laneId={laneId}
            project={project}
          />
        ) : (
          <button
            onClick={() => setOpen(true)}
            className="bg-gray-200 py-2.5 rounded-md text-gray-700 dark:text-gray-200 hover:text-gray-900 hover:bg-gray-300 dark:bg-gray-800 dark:hover:text-white dark:hover:bg-gray-900"
          >
            Add Task
          </button>
        )}
      </div>
    </div>
  );
};

export default Lane;
