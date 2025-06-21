import { useContext, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import AuthContext from '../context/AuthContext';

function ProjectForm({
  close,
  id,
  projectName = '',
  projectDescription = '',
}) {
  const [name, setName] = useState(projectName);
  const [description, setDescription] = useState(projectDescription);

  const {
    setTitle,
    setMessage,
    setBadge,
    setType,
    addProject,
    updateProject,
  } = useContext(AuthContext);

  const navigate = useNavigate();

  const saveProject = event => {
    event.preventDefault();

    if (name === '') {
      setBadge(true);
      setType('danger');
      setTitle('Error');
      setMessage("Title musn't be empty!");
    } else if (description === '') {
      setBadge(true);
      setType('danger');
      setTitle('Error');
      setMessage("Description musn't be empty!");
    } else {
      const data = {
        name,
        description,
      };
      if (id) {
        // update project in the projects list
        const { slug: updatedSlug } = updateProject(id, data);
        // show alert message
        setBadge(true);
        setTitle('Successful operation');
        setMessage('Project updated successfully');
        setType('success');
        setName('');
        setDescription('');
        close();
        navigate(`/project/${updatedSlug}`);
      } else {
        // add a new project
        const { slug: newSlug } = addProject(data);
        // show alert message
        setBadge(true);
        setTitle('Successful operation');
        setMessage('Project created successfully');
        setType('success');
        setName('');
        setDescription('');
        navigate(`/project/${newSlug}`);
      }
    }
  };

  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = event => {
      if (ref.current && !ref.current.contains(event.target)) {
        close();
      }
    };

    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener(
        'click',
        handleClickOutside,
        true
      );
    };
  });

  return (
    <>
      <div className="absolute z-40 grid place-items-center w-screen h-screen bg-black/50 dark:bg-white/50">
        <form
          ref={ref}
          className="bg-white dark:bg-gray-900 w-full max-w-md lg:max-w-lg rounded m-5"
          onSubmit={saveProject}
        >
          <h1 className="p-7 pb-0 dark:text-white font-bold text-xl">
            {id ? 'Edit' : 'Create'} Project:
          </h1>
          <hr className="my-5 border-gray-300 dark:border-gray-600" />
          <div className="p-7 pt-0">
            <div className="flex justify-between items-center mb-3">
              <div className="w-full">
                <label htmlFor="taskTitle" className="sr-only">
                  Project title
                </label>
                <input
                  name="taskTitle"
                  id="taskTitle"
                  type="text"
                  placeholder="Project title"
                  className="outline-none w-full focus:border-b-2 focus:border-gray-500 pb-1 font-semibold bg-transparent dark:text-white"
                  value={name}
                  onChange={e => setName(e.target.value)}
                />
              </div>
            </div>
            <label htmlFor="taskBody" className="sr-only">
              Project Description
            </label>
            <textarea
              name="taskBody"
              id="taskBody"
              className="w-full outline-none bg-transparent dark:text-gray-50"
              placeholder="Project description..."
              rows={5}
              value={description}
              onChange={e => setDescription(e.target.value)}
            />
            <div className="flex gap-5 mt-2.5">
              <button
                type="button"
                className="w-full bg-gray-200 py-1.5 rounded-md text-gray-700 dark:text-gray-50 hover:text-gray-900 hover:bg-gray-300 dark:bg-gray-700 dark:hover:text-white dark:hover:bg-gray-800"
                onClick={close}
              >
                Cancel
              </button>
              <input
                type="submit"
                value="Save"
                className="w-full bg-green-700 py-1.5 rounded-md text-white dark:text-gray-50 hover:text-gray-50 hover:bg-green-600 dark:bg-green-800 dark:hover:text-white dark:hover:bg-green-900"
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default ProjectForm;
