import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../context/AuthContext';
import Lane from './Lane';

const lanes = [
  { id: 1, title: 'To Do', color: 'bg-red-500' },
  { id: 2, title: 'In Progress' },
  { id: 3, title: 'Review' },
  { id: 4, title: 'Done' },
];

const Board = ({ project }) => {
  const [tasks, setTasks] = useState([]);
  const {
    badge,
    setTitle,
    setMessage,
    setBadge,
    setType,
    tasks: data,
    updateLane,
  } = useContext(AuthContext);

  const onDrop = (e, laneId) => {
    const id = e.dataTransfer.getData('id');
    const updatedTasks = tasks.filter(task => {
      if (String(task.id) === id) {
        task.stage = laneId;
        updateLane(task.id, { stage: laneId });
        setBadge(true);
        setType('success');
        setTitle('Operation successfull');
        setMessage('Your changes has been updated!');
      }

      return task;
    });

    setTasks(updatedTasks);
  };

  const onDragStart = (event, id) => {
    event.dataTransfer.setData('id', id);
  };

  const onDragOver = e => {
    e.preventDefault();
  };

  useEffect(() => {
    setTasks(data);
  }, [data, badge]);

  return (
    <div className="grow flex flex-col w-full items-center h-screen p-5 pb-0 bg-gray-500">
      <div
        className="scrollbar w-full px-3 xl:px-10 max-w-8xl grid gap-5 justify-between overflow-x-auto pb-5"
        style={{ gridTemplateColumns: '1fr 1fr 1fr 1fr' }}
      >
        {lanes.map(lane => (
          <Lane
            key={lane.id}
            title={lane.title}
            color={lane.color}
            laneId={lane.id}
            tasks={tasks.filter(
              task =>
                +task.stage === lane.id &&
                task.project === project.id
            )}
            project={project}
            onDrop={onDrop}
            onDragStart={onDragStart}
            onDragOver={onDragOver}
          />
        ))}
      </div>
    </div>
  );
};

export default Board;
