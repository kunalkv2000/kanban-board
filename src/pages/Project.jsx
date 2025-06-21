import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Board from '../components/Board';
import { Link } from 'react-router-dom';
import Loading from '../components/Loading';
import Navbar from '../components/Navbar';
import ProjectForm from '../components/ProjectForm';
import ProjectHeader from '../components/ProjectHeader';
import Sidebar from '../components/Sidebar';
import AuthContext from '../context/AuthContext';

const Project = () => {
  const { projects } = useContext(AuthContext);
  const [project, setProject] = useState();
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [sidebar, setSidebar] = useState(false);

  const { slug } = useParams();

  const loadProject = slug => {
    setLoading(true);
    const project = projects.find(p => p.slug === slug);
    setProject(project);
    setLoading(false);
  };

  useEffect(() => {
    loadProject(slug);
  }, [slug]);

  return (
    <>
      {open && (
        <ProjectForm
          close={() => setOpen(false)}
          projectName={project.name}
          projectDescription={project.description}
          id={project.id}
        />
      )}
      {sidebar && <Sidebar sidebar={() => setSidebar(false)} />}
      <div className="flex flex-col items-center h-screen w-screen dark:bg-black overflow-y-auto home">
        <Navbar sidebar={() => setSidebar(true)} />
        <div className="grow flex flex-col w-full items-center">
          {project ? (
            <>
              <ProjectHeader
                data={project}
                open={() => setOpen(true)}
              />
              <Board project={project} />
            </>
          ) : (
            <div className="grow grid items-center justify-center py-10">
              {loading ? (
                <Loading />
              ) : (
                <div className="flex flex-col justify-center items-center">
                  <h1 className="text-center text-xl md:text-4xl font-semibold text-notFound text-yellow-500">
                    Project{' '}
                    <span className="text-gray-900 dark:text-white">
                      not found!
                    </span>
                  </h1>
                  <img
                    src="/404.png"
                    alt="not found"
                    className="h-96 w-auto"
                  />
                  <Link to="/">
                    <button className=" bg-indigo-700 text-white rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 py-3 px-6 text-sm">
                      Return to home
                    </button>
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Project;
