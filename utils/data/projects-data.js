import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'MaidEase',
        description: "There are numerous platforms that provide customers individual household services, but they are not always available. Even if some services are now in operation, they lack a website or other online platform to advertise their offerings. Therefore, MaidEase enters the picture to address this significant issue. Anyone can use this program, whether they are a working professional or a frequent traveler, as the consumer receives all household services on one platform. Additionally, we offer a significant platform for service providers to list their company and draw in new clients. Many people's life will be made easier by this application. The customer will receive the services he wants, and the service provider will continue to add new clients. If this project is unsuccessful in any way and is not completed, the median between customers and household service providers will not be determined. Customers will always be looking for these services nearby, so the service provider won't see an increase in business.",
        tools: ['MySQL', 'ReactJS', 'JavaScript', 'NodeJS', 'AWS', 'ExpressJS', 'Jenkins', 'JIRA'],
        role: 'Full Stack Developer',
        code: 'https://github.com/RushdaMansuri/Maid-Ease',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'Movie Recommendation App',
        description: "This app is a comprehensive movie recommendation platform, akin to IMDB, offering users an array of features including movie ratings and detailed character insights. It enhances user experience by incorporating essential functionalities such as login and registration processes, supported by the robust Google authentication system. Additionally, the app excels in its search capabilities, allowing users to effortlessly find specific movies.",
        tools: ['ReactJS', 'JavaScript', "Ionic Framework", "Github", "Firebase", "CSS"],
        role: 'Full Stack Developer',
        code: 'https://github.com/RushdaMansuri/Movie-Recommendation-App',
        demo: 'https://final-project-f3913.web.app/login',
        image: travel,
    },
    {
        id: 3,
        name: 'ConnectOne',
        description: "ConnectOne is a versatile mobile application designed as a comprehensive platform for showcasing various NGOs. It serves as a one-stop solution catering to two key audiences: investors seeking to financially support NGOs, and individuals eager to volunteer with nearby organizations. This cross-platform app simplifies the process of connecting with NGOs, streamlining both donations and volunteer engagements. Whether you're looking to contribute funds or offer your time and skills, ConnectOne offers an efficient and user-friendly way to engage with a wide range of non-profit organizations, enhancing community involvement and support.",
        tools: ['ReactNative', 'MySQL', 'NodeJS'],
        code: '',
        role: 'Full Stack Developer',
        demo: '',
        image: realEstate,
    },
    {
        id: 4,
        name: 'Online Examination Portal',
        description:"This portal is a versatile online platform designed for use in colleges, schools, and DMVs. It offers a dual functionality: enabling test-takers to complete exams and view their results, and allowing examiners to administer tests and manage results. This efficient system streamlines the testing process, making it easier for students and candidates to access and complete their assessments, while also providing educators and officials with robust tools for exam creation, delivery, and result management. Its user-friendly interface ensures a seamless experience for all users, making it an ideal solution for educational and regulatory testing needs.",
        tools: ['MSSQL', 'C#', '.NET Framework 4.5'],
        code: '',
        demo: '',
        image: ayla,
        role: 'Full Stack Developer',
    }
];
