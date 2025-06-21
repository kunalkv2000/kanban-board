import React, { useContext, useState } from 'react';
import { MdDelete, MdModeEdit } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import date from '../support/Date';
import ConfirmDialog from './ConfirmDialog';

const ProjectHeader = ({ data, open }) => {
  const { setBadge, setTitle, setMessage, setType, removeProject } =
    useContext(AuthContext);

  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const navigate = useNavigate();

  const { id, name, description, created } = data;

  const deleteProject = () => {
    removeProject(id);
    setBadge(true);
    setTitle('Successful operation');
    setMessage('Project deleted successfully');
    setType('success');
    navigate('/projects');
    setDeleteDialogOpen(false);
  };

  return (
    <>
      {deleteDialogOpen && (
        <ConfirmDialog
          headerText="Delete Project"
          bodyText="Are you sure you want to delete this project?"
          confirmText="Sure!"
          onConfirm={deleteProject}
          onCancel={() => setDeleteDialogOpen(false)}
        />
      )}

      <div className="bg-white grid py-10 px-10 w-full max-w-8xl items-start grid-cols-1 lg:grid-cols-2 dark:bg-black">
        <div className="row">
          <p className="font-light text-sm dark:text-white">
            Project:
          </p>
          <h1 className="font-bold text-3xl dark:text-white">
            {name}
          </h1>
          <h2 className="text-gray-700 mb-4 text-sm dark:text-gray-400">
            Created: {date(new Date(created))}
          </h2>
          <p className="text-gray-500 dark:text-gray-300 line-clamp-2">
            {description}
          </p>
        </div>
        <div className="flex gap-5 mt-5 justify-end">
          <button
            onClick={() => setDeleteDialogOpen(true)}
            className="flex items-center justify-center font-semibold bg-red-500 hover:bg-red-700 text-white rounded-full w-32 py-2 px-2"
          >
            <MdDelete className="text-xl mr-2" /> Delete
          </button>
          <button
            onClick={open}
            className="flex items-center justify-center font-semibold bg-yellow-500 hover:bg-yellow-600 text-black rounded-full w-32 py-2 px-2"
          >
            <MdModeEdit className="text-xl mr-2" /> Edit
          </button>
        </div>
      </div>
    </>
  );
};

export default ProjectHeader;
