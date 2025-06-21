import { nanoid } from 'nanoid';
import { createContext, useEffect, useState } from 'react';
import {
  getProjectsFromLocalStorage,
  getTasksFromLocalStorage,
  saveProjectToLocalStorage,
  saveTasksToLocalStorage,
} from '../support/LocalStorage';
import { slugify } from '../support/Text';

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    // use expensive computation
    return {
      username: 'user',
    };
  });

  const [loading, setLoading] = useState(true);
  const [badge, setBadge] = useState(false);
  const [type, setType] = useState('');
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const [projects, setProjects] = useState(
    getProjectsFromLocalStorage()
  );
  const [tasks, setTasks] = useState(getTasksFromLocalStorage());

  useEffect(() => {
    setTimeout(() => {
      setBadge(false);
      setTitle('');
      setMessage('');
      setType('');
    }, 3000);
  }, [badge]);

  useEffect(() => {
    const savedProjects = getProjectsFromLocalStorage();

    if (savedProjects && savedProjects.length) {
      setProjects(savedProjects);
    }

    const savedTasks = getTasksFromLocalStorage();

    if (savedTasks && savedTasks.length) {
      setTasks(savedTasks);
    }
  }, []);

  useEffect(() => {
    saveProjectToLocalStorage(projects);
  }, [projects]);

  useEffect(() => {
    saveTasksToLocalStorage(tasks);
  }, [tasks]);

  const addProject = newProject => {
    newProject = {
      ...newProject,
      slug: slugify(newProject.name),
      created: new Date().toISOString(),
      id: nanoid(),
    };
    const newProjects = projects.concat(newProject);
    setProjects(newProjects);
    return newProject;
  };

  const addTask = newTask => {
    const isoDate = new Date().toISOString();
    const newTasks = tasks.concat({
      ...newTask,
      created: isoDate,
      updated: isoDate,
      id: nanoid(),
    });
    setTasks(newTasks);
  };

  const updateProject = (id, { name, description }) => {
    const slug = slugify(name);
    const updatedProjects = projects.slice();
    const index = updatedProjects.findIndex(p => p.id === id);
    const existingProject = {
      ...projects.find(p => p.id === id),
      name,
      description,
      slug,
    };
    updatedProjects[index] = existingProject;

    setProjects(updatedProjects);

    return existingProject;
  };

  const updateTask = (id, { title, body }) => {
    const updated = new Date().toISOString();
    const updatedTasks = tasks.slice();
    const index = updatedTasks.findIndex(task => task.id === id);
    const existingTask = {
      ...tasks.find(task => task.id === id),
      title,
      body,
      updated,
    };
    updatedTasks[index] = existingTask;
    setTasks(updatedTasks);
  };

  const removeProject = projectId => {
    const updatedProjects = projects.slice();
    const index = updatedProjects.findIndex(
      project => project.id === projectId
    );
    updatedProjects.splice(index, 1);
    setProjects(updatedProjects);
  };

  const removeTask = taskId => {
    const updatedTasks = tasks.slice();
    const index = updatedTasks.findIndex(task => task.id === taskId);
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const updateLane = (taskId, { stage }) => {
    const updatedTasks = tasks.slice();
    const index = updatedTasks.findIndex(p => p.id === taskId);
    const existingTask = {
      ...tasks.find(p => p.id === taskId),
      stage,
    };
    updatedTasks[index] = existingTask;
    setTasks(updatedTasks);
  };

  const contextData = {
    user,
    setUser,
    badge,
    setBadge,
    type,
    setType,
    message,
    setMessage,
    title,
    setTitle,
    projects,
    setProjects,
    tasks,
    setTasks,
    loading,
    addProject,
    removeProject,
    updateProject,
    addTask,
    updateTask,
    removeTask,
    updateLane,
  };

  return (
    <AuthContext.Provider value={contextData}>
      {children}
    </AuthContext.Provider>
  );
};
