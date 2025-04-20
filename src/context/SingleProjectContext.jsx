import { useState, createContext, useEffect } from 'react';
import { singleProjectData as singleProjectDataJson } from '../data/singleProjectData';
import { projectsData } from '../data/projects';

const SingleProjectContext = createContext();

export const SingleProjectProvider = ({ children, projectId }) => {
	const project = projectsData.find(p => p.id === parseInt(projectId));
	const [singleProjectData, setSingleProjectData] = useState(
		project ? singleProjectDataJson(project.id) : singleProjectDataJson(1)
	);

	// Update the data when projectId changes
	useEffect(() => {
		const project = projectsData.find(p => p.id === parseInt(projectId));
		setSingleProjectData(project ? singleProjectDataJson(project.id) : singleProjectDataJson(1));
	}, [projectId]);

	return (
		<SingleProjectContext.Provider
			value={{ singleProjectData, setSingleProjectData }}
		>
			{children}
		</SingleProjectContext.Provider>
	);
};

export default SingleProjectContext;
