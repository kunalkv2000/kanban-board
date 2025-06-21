import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import { slugify } from "../support/Text";

const Sidebar = ({ sidebar }) => {
  const {
    user,
    setTitle,
    setMessage,
    setBadge,
    setType,
    badge,
    projects,
    addProject,
  } = useContext(AuthContext);

  const [add, setAdd] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const saveProject = (event) => {
    event.preventDefault();

    if (name.trim() === "") {
      setBadge(true);
      setType("danger");
      setTitle("Error");
      setMessage("Title musn't be empty!");
    } else if (description.trim() === "") {
      setBadge(true);
      setType("danger");
      setTitle("Error");
      setMessage("Body musn't be empty!");
    } else {
      const slug = slugify(name);
      // add a new project
      const data = {
        name,
        description
      };

      addProject(data);
      const newSlug = slug;
      // show alert message
      setBadge(true);
      setTitle("Successful operation");
      setMessage("Project created successfully");
      setType("success");
      setName("");
      setDescription("");
    }
  };

  return (
    <>
      <div
        onClick={sidebar}
        className="absolute h-screen w-screen bg-black/50 dark:bg-gray-100/50"
      ></div>
      <div className="absolute w-80 h-screen bg-white dark:bg-gray-900 overflow-y-auto pb-7 sidebar">
        <div className="p-7">
          <p className="text-gray-700 dark:text-gray-400">
            Hello <span className="font-bold">{user.username}</span>
          </p>
          <h1 className="mt-1 text-3xl font-bold dark:text-white">
            Your Projects
          </h1>
        </div>
        <hr className="mb-4 border-gray-300 dark:border-gray-700" />
        {projects.map((project, key) => (
          <Link
            key={key}
            to={`/project/${project.slug}`}
            onClick={() => sidebar()}
            className="block w-full text-left dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 py-3 px-7 overflow-x-hidden"
            style={{ whiteSpace: "nowrap" }}
          >
            {project.name}
          </Link>
        ))}
        <hr className="my-4 border-gray-300 dark:border-gray-700" />
        <div className="px-7">
          {add ? (
            <form onSubmit={saveProject}>
              <div className="flex justify-between items-center mb-3">
                <div className="w-full">
                  <label htmlFor="taskTile" className="sr-only">
                    Project title
                  </label>
                  <input
                    name="taskTile"
                    type="text"
                    placeholder="Project title"
                    className="outline-none w-full focus:border-b-2 focus:border-gray-500 pb-1 font-semibold bg-transparent dark:text-white"
                    value={name}
                    onChange={(event) => {
                      setName(event.target.value);
                    }}
                  />
                </div>
              </div>
              <label htmlFor="taskBody" className="sr-only">
                Project description
              </label>
              <textarea
                name="taskBody"
                id="taskBody"
                className="w-full outline-none bg-transparent dark:text-gray-50"
                placeholder="Project description...."
                rows={5}
                value={description}
                onChange={(event) => {
                  setDescription(event.target.value);
                }}
              />
              <div className="flex gap-5 mt-2.5">
                <button
                  type="button"
                  onClick={() => {
                    setAdd(false);
                  }}
                  className="w-full bg-gray-200 py-1.5 rounded-md text-gray-700 dark:text-gray-200 hover:text-gray-900 hover:bg-gray-300 dark:bg-gray-700 dark:hover:text-white dark:hover:bg-gray-800"
                >
                  Cancel
                </button>
                <input
                  type="submit"
                  value="save"
                  className="w-full bg-green-700 py-1.5 rounded-md text-white dark:text-gray-200 hover:text-gray-50 hover:bg-green-600 dark:bg-green-800 dark:hover:text-white dark:hover:bg-green-900"
                />
              </div>
            </form>
          ) : (
            <button
              onClick={() => setAdd(true)}
              className="w-full bg-gray-200 py-2.5 rounded-md text-gray-700 dark:text-gray-200 hover:text-gray-900 hover:bg-gray-300 dark:bg-gray-700 dark:hover:text-white dark:hover:bg-gray-800"
            >
              Add a project
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
