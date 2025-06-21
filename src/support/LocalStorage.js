export const LS_PROJECTS_KEY = 'react-kb-saved-projects';
export const LS_TASKS_KEY = 'react-kb-saved-tasks';

export const getProjectsFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem(LS_PROJECTS_KEY)) ?? [];
};

export const getTasksFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem(LS_TASKS_KEY)) ?? [];
};

export const saveProjectToLocalStorage = projects => {
  localStorage.setItem(LS_PROJECTS_KEY, JSON.stringify(projects));
};

export const saveTasksToLocalStorage = tasks => {
  localStorage.setItem(LS_TASKS_KEY, JSON.stringify(tasks));
};
