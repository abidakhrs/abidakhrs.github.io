// Import images
import Nadma1 from '../images/nadma.png';
import Nadma2 from '../images/nadmaLogo.png';
import Nadma3 from '../images/nadma2.png';
import SmartScore1 from '../images/smartscore1.png';
import SmartScore2 from '../images/smartscore2.png';
import SmartScore3 from '../images/smartscore3.png';
import Sales1 from '../images/salesdb.png';
import Obesity1 from '../images/obesity.png';
import Pledges1 from '../images/pledges.png';
import Image3 from '../images/mobile-project-1.jpg';
import Image4 from '../images/mobile-project-1.jpg';
import Image5 from '../images/web-project-1.jpg';
import Image6 from '../images/ui-project-2.jpg';
// Import icons
import {
	FiFacebook,
	FiInstagram,
	FiLinkedin,
	FiTwitter,
	FiYoutube,
} from 'react-icons/fi';

export const singleProjectData = (projectId) => {
	const projectsData = {
		1: {
			ProjectHeader: {
				title: 'NADMA Care',
				publishDate: '-',
				tags: 'Mobile Application',
			},
			ProjectImages: [
				{
					id: 1,
					title: 'Kabul Project Management UI',
					img: Nadma1,
				},
				{
					id: 2,
					title: 'Kabul Project Management UI',
					img: Nadma2,
				},
				{
					id: 3,
					title: 'Kabul Project Management UI',
					img: Nadma3,
				},
			],
			ProjectInfo: {
				ClientHeading: 'About Client',
				CompanyInfo: [
					{
						id: 1,
						title: 'Name',
						details: '-',
					},
					{
						id: 2,
						title: 'Services',
						details: '-',
					},
					{
						id: 3,
						title: 'Website',
						details: '-',
					},
					{
						id: 4,
						title: 'Phone',
						details: '-',
					},
				],
				ObjectivesHeading: 'Objective',
				ObjectivesDetails:
					'This project aims to provide a platform for NADMA to manage disaster and detect dangers in Malaysia.',
				Technologies: [
					{
						title: 'Tools & Technologies',
						techs: [
							'JAVA',
							'XML',
							'Firebase',
							'Git',
							'Android Studio',
							'Figma',
						],
					},
				],
				ProjectDetailsHeading: 'Challenge',
				ProjectDetails: [
					{
						id: 1,
						details:	
							'NADMA Care is a mobile application developed to assist in disaster management and danger detection in Malaysia. Designed using Android Studio with Java and XML, the app leverages Firebase for real-time database and user authentication functionalities.',
					},
					{
						id: 2,
						details:
							'Key features of NADMA Care include location tracking, compass-based direction detection, and internet connectivity checks to ensure users are aware of their environment during emergencies. The map feature is implemented using OpenStreetMap, providing accurate and open-source geospatial data.',
					},
					{
						id: 3,
						details:
							'This project was collaboratively developed by a team of three developers. Each team member was responsible for different modules, and we used Git for version control and project integration, ensuring smooth collaboration and code management.',
					},
					{
						id: 4,
						details:
							'The app integrates sensors such as: GPS Location – for tracking user location during disasters, Compass – for orientation and navigation, Internet connectivity – to ensure data communication and alertsNADMA Care aims to enhance public safety by offering reliable and real-time disaster awareness tools for the people of Malaysia.',
					},
				],
				SocialSharingHeading: 'Share This',
				SocialSharing: [
					{
						id: 1,
						name: 'Twitter',
						icon: <FiTwitter />,
						url: '/',
					},
					{
						id: 2,
						name: 'Instagram',
						icon: <FiInstagram />,
						url: '/',
					},
					{
						id: 3,
						name: 'Facebook',
						icon: <FiFacebook />,
						url: '/',
					},
					{
						id: 4,
						name: 'LinkedIn',
						icon: <FiLinkedin />,
						url: '/',
					},
					{
						id: 5,
						name: 'Youtube',
						icon: <FiYoutube />,
						url: '/',
					},
				],
			},
			// RelatedProject: {
			// 	title: 'Related Projects',
			// 	Projects: [
			// 		{
			// 			id: 1,
			// 			title: 'Mobile UI',
			// 			img: Image4,
			// 		},
			// 		{
			// 			id: 2,
			// 			title: 'Web Application',
			// 			img: Image5,
			// 		},
			// 		{
			// 			id: 3,
			// 			title: 'UI Design',
			// 			img: Image6,
			// 		},
			// 		{
			// 			id: 4,
			// 			title: 'Kabul Mobile App UI',
			// 			img: Nadma1,
			// 		},
			// 	],
			// },
		},
		2: {
			ProjectHeader: {
				title: 'SmartScore',
				publishDate: '-',
				tags: 'Web Application',
			},
			ProjectImages: [
				{
					id: 1,
					title: 'Mobile UI Design',
					img: SmartScore1,
				},
				{
					id: 2,
					title: 'Mobile UI Design',
					img: SmartScore2,
				},
				{
					id: 3,
					title: 'Mobile UI Design',
					img: SmartScore3,
				},
			],
			ProjectInfo: {
				ClientHeading: 'About Client',
				CompanyInfo: [
					{
						id: 1,
						title: 'Name',
						details: '-',
					},
					{
						id: 2,
						title: 'Services',
						details: '-',
					},
					{
						id: 3,
						title: 'Website',
						details: '-',
					},
					{
						id: 4,
						title: 'Phone',
						details: '-',
					},
				],
				ObjectivesHeading: 'Objective',
				ObjectivesDetails:
					'To give insights for students to improve their academic performance by calculating their score and gap between their actual score and target score every semesters.',
				Technologies: [
					{
						title: 'Tools & Technologies',
						techs: [
							'PHP',
							'mySQL',
							'Bootstrap 5',
							'Git',
							'ChartJS',
							'Figma',
						],
					},
				],
				ProjectDetailsHeading: 'Challenge',
				ProjectDetails: [
					{
						id: 1,
						details:
							'SmartScore is a web-based academic score management system and performance calculator designed to help students efficiently track their academic progress and achieve their target GPA. Developed as part of my Bachelor’s Degree Final Year Project (FYP), this system empowers students to manage their course marks, calculate GPA, and visualize performance trends over time.',
					},
					{
						id: 2,
						details:
							'Built using PHP, MySQL, Bootstrap 5, and Chart.js, SmartScore offers a responsive and user-friendly interface for managing academic data. The system supports four user levels (Admin, Lecturer, Student, and Academic Advisor), each with tailored access and functionalities to ensure secure and role-specific interactions.',
					},
					{
						id: 3,
						details:
							'Key features include: Mark entry and management, GPA calculation, and performance visualization. The system also includes a user-friendly interface for easy navigation and data management.',
					},
					{
						id: 4,
						details:
							'The project was developed individually using the Agile methodology, allowing for iterative development and continuous improvement based on user feedback and testing. SmartScore aims to enhance academic self-awareness and support students in making informed decisions to improve their academic journey.',
					},
				],
				SocialSharingHeading: 'Share This',
				SocialSharing: [
					{
						id: 1,
						name: 'Twitter',
						icon: <FiTwitter />,
						url: '/',
					},
					{
						id: 2,
						name: 'Instagram',
						icon: <FiInstagram />,
						url: '/',
					},
					{
						id: 3,
						name: 'Facebook',
						icon: <FiFacebook />,
						url: '/',
					},
					{
						id: 4,
						name: 'LinkedIn',
						icon: <FiLinkedin />,
						url: '/',
					},
					{
						id: 5,
						name: 'Youtube',
						icon: <FiYoutube />,
						url: '/',
					},
				],
			},
			
		},
		3: {
			ProjectHeader: {
				title: 'Sales Dashboard',
				publishDate: '-',
				tags: 'Data Analytics',
			},
			ProjectImages: [
				{
					id: 1,
					title: 'Mobile UI Design',
					img: Sales1,
				},
			],
			ProjectInfo: {
				ClientHeading: 'About Client',
				CompanyInfo: [
					{
						id: 1,
						title: 'Name',
						details: '-',
					},
					{
						id: 2,
						title: 'Services',
						details: '-',
					},
					{
						id: 3,
						title: 'Website',
						details: '-',
					},
					{
						id: 4,
						title: 'Phone',
						details: '-',
					},
				],
				ObjectivesHeading: 'Objective',
				ObjectivesDetails: 'To give insights for sales team to improve their sales performance',
				Technologies: [
					{
						title: 'Tools & Technologies',
						techs: [
							'Microsoft Power BI',
							'Microsoft Excel',
						],
					},
				],
				ProjectDetailsHeading: 'Challenge',
				ProjectDetails: [
					{
						id: 1,
						details:
						'The sales dashboard project was developed to provide real-time insights and analytics for the sales team. Using Microsoft Power BI and Excel, I created an interactive dashboard that visualizes key sales metrics and KPIs to help the team track their performance and identify areas for improvement.'
					},
					
				],
				SocialSharingHeading: 'Share This',
				SocialSharing: [
					{
						id: 1,
						name: 'Twitter',
						icon: <FiTwitter />,
						url: '/',
					},
					{
						id: 2,
						name: 'Instagram',
						icon: <FiInstagram />,
						url: '/',
					},
					{
						id: 3,
						name: 'Facebook',
						icon: <FiFacebook />,
						url: '/',
					},
					{
						id: 4,
						name: 'LinkedIn',
						icon: <FiLinkedin />,
						url: '/',
					},
					{
						id: 5,
						name: 'Youtube',
						icon: <FiYoutube />,
						url: '/',
					},
				],
			},
			
		},
		4: {
			ProjectHeader: {
				title: 'Obesity Detector',
				publishDate: '-', 
				tags: 'Artificial Intelligence',
			},
			ProjectImages: [
				{
					id: 1,
					title: 'Obesity Detector',
					img: Obesity1,
				}
			],
			ProjectInfo: {
				ClientHeading: 'About Client',
				CompanyInfo: [
					{
						id: 1,
						title: 'Name',
						details: '-',
					},
					{
						id: 2,
						title: 'Services',
						details: '-',
					},
					{
						id: 3,
						title: 'Website',
						details: '-',
					},
					{
						id: 4,
						title: 'Phone',
						details: '-',
					},
				],
				ObjectivesHeading: 'Objective',
				ObjectivesDetails:
					'To detect obesity level of a person based on their body measurements using Fuzzy Logic in Artificial Intelligence technique',
				Technologies: [
					{
						title: 'Tools & Technologies',
						techs: [
							'Fuzzy Logic',
							'Python',
							'Scikit-learn',
							'Pandas',
							'Numpy',
							'Matplotlib'
						],
					},
				],
				ProjectDetailsHeading: 'Challenge',
				ProjectDetails: [
					{
						id: 1,
						details:
							'The Obesity Detector is an AI-powered application that utilizes Fuzzy Logic to determine a person\'s obesity level based on their body measurements. Built using Python and key data science libraries including Scikit-learn, Pandas, and NumPy, the system processes input measurements through a fuzzy inference system to provide accurate obesity classifications.'
					},
					{
						id: 2,
						details:
							'Key challenges included: Defining appropriate fuzzy membership functions and rules for different body measurements, selecting relevant features from the dataset that best indicate obesity levels, data cleaning to handle missing values and outliers, and fine-tuning the fuzzy inference system parameters to achieve accurate classifications. The implementation required careful consideration of medical guidelines and expert knowledge to establish meaningful relationships between input variables and obesity levels.'
					},
					{
						id: 3,
						details:
							'Through this project, I gained hands-on experience with Python data science libraries and AI techniques. I developed strong skills in data preprocessing using Pandas and NumPy, data visualization with Matplotlib, and implementing fuzzy logic systems. The project enhanced my understanding of machine learning concepts, feature selection, and parameter tuning. Additionally, I learned how to translate medical domain knowledge into computational rules and gained experience in evaluating and improving model accuracy through systematic testing and validation.'
					}
				],
				SocialSharingHeading: 'Share This',
				SocialSharing: [
					{
						id: 1,
						name: 'Twitter',
						icon: <FiTwitter />,
						url: '/',
					},
					{
						id: 2,
						name: 'Instagram',
						icon: <FiInstagram />,
						url: '/',
					},
					{
						id: 3,
						name: 'Facebook',
						icon: <FiFacebook />,
						url: '/',
					},
					{
						id: 4,
						name: 'LinkedIn',
						icon: <FiLinkedin />,
						url: '/',
					},
					{
						id: 5,
						name: 'Youtube',
						icon: <FiYoutube />,
						url: '/',
					},
				],
			},
			
		},
		5: {
			ProjectHeader: {
				title: 'Predicting Organ Donor Pledges in Malaysia',
				publishDate: '-',
				tags: 'Machine Learning',
			},
			ProjectImages: [
				{
					id: 1,
					title: 'Project 5',
					img: Pledges1,
				}
			],
			ProjectInfo: {
				ClientHeading: 'About Client',
				CompanyInfo: [
					{
						id: 1,
						title: 'Name',
						details: '-',
					},
					{
						id: 2,
						title: 'Services',
						details: '-',
					},
					{
						id: 3,
						title: 'Website',
						details: '-',
					},
					{
						id: 4,
						title: 'Phone',
						details: '-',
					},
				],
				ObjectivesHeading: 'Objective',
				ObjectivesDetails: 'To predict the number of organ donor pledges in Malaysia using Simple Linear Regression in Machine Learning',
				Technologies: [
					{
						title: 'Tools & Technologies',
						techs: [
							'Python',
							'Scikit-learn',
							'Pandas',
							'Numpy',
							'Matplotlib'
						],
					},
				],
				ProjectDetailsHeading: 'Challenge',
				ProjectDetails: [
					{
						id: 1,
						details: 'This project utilizes Simple Linear Regression to predict organ donor pledge numbers in Malaysia. Using Python and key data science libraries like Scikit-learn, Pandas, and NumPy, I developed a model that analyzes historical pledge data to forecast future trends. The analysis includes data preprocessing, model training, and visualization of results using Matplotlib to help understand pledge patterns and support healthcare planning.'
					},
					{
						id: 2,
						details: 'The main challenge was to ensure the model\'s accuracy and interpretability, while also addressing the limitations of the dataset and the complexity of the real-world factors influencing organ donor pledges.'
					},
					{
						id: 3,
						details: 'Through this project, I gained hands-on experience with Python data science libraries and machine learning techniques. I developed strong skills in data preprocessing using Pandas and NumPy, data visualization with Matplotlib, and implementing linear regression models. The project enhanced my understanding of machine learning concepts, feature selection, and parameter tuning. Additionally, I learned how to translate historical data into predictive models and gained experience in evaluating and improving model accuracy through systematic testing and validation.'
					}
				],
				SocialSharingHeading: 'Share This',
				SocialSharing: [
					{
						id: 1,
						name: 'Twitter',
						icon: <FiTwitter />,
						url: '/',
					},
					{
						id: 2,
						name: 'Instagram',
						icon: <FiInstagram />,
						url: '/',
					},
					{
						id: 3,
						name: 'Facebook',
						icon: <FiFacebook />,
						url: '/',
					},
					{
						id: 4,
						name: 'LinkedIn',
						icon: <FiLinkedin />,
						url: '/',
					},
					{
						id: 5,
						name: 'Youtube',
						icon: <FiYoutube />,
						url: '/',
					},
				],
			},
		},
	};

	return projectsData[projectId] || projectsData[1]; // Return default project if ID not found
};
