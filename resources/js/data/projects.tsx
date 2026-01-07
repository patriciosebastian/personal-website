import Salos from '../../../resources/images/Salos_Homepage_Opt.webp'
import TouchBase from '../../../resources/images/TouchBaseApp_Optimized.webp'
import ClearCalc from '../../../resources/images/ClearCalc_Optimized.webp'
import { Link } from '@inertiajs/react'

export const projects = [
    {
        title: "SALOS",
        summary: "Fully featured Bible based AI Chat (RAG)",
        description: "SALOS is a Bible powered AI chat application that uses Retrieval Augmented Generation (RAG) to provide accurate and relevant answers to user questions. Its built with Laravel on the backend, React on the frontend via Inertia, and PostgreSQL. I leverage a custom Pinecone vector store which holds the entire chunked and vectorized Bible. OpenAI's GPT-5-nano and text-embedding-3-large models are used for embedding and natural language processing. Real-time streaming gives it a seamless feel. Check it out and ask it anything regarding your faith or the Bible!",
        link: "https://salosai.com",
        image: Salos,
        imageAltText: "SALOS Homepage Screenshot",
        techStack: [
            'Laravel',
            'Inertia',
            'React',
            'PostgreSQL',
            'Pinecone',
            'gpt-5-nano',
            'text-embedding-3-large',
            'Real Time Streaming',
            'RAG',
        ],
    },
    {
        title: "Touch Base",
        summary: "Full stack React Contacts Management app",
        description: (
            <>
                Touch Base uses React-Router for frontend navigation and Node.js & Express for its backend API, connected to a PSQL database. It features a fully responsive design, full CRUD capabilities for contacts and groups, Firebase Auth, and Resend for email functionality. AWS S3 is used for image hosting and you can now import contacts from a CSV file. A demo login lets you easily tour the app and safely perform all actions. Go try it out or <Link href='/blog/how-i-added-csv-importing-in-my-react-project' className='underline' prefetch>read my post</Link> about how I implemented CSV importing.
            </>
        ),
        link: "https://touchbaseapp.co",
        image: TouchBase,
        imageAltText: "Touch Base App Screenshot",
        techStack: [
            'CSS',
            'React',
            'Node.js',
            'Express',
            'PostgreSQL',
            'Firebase',
            'Resend',
            'AWS S3',
        ],
    },
    {
        title: "ClearCalc",
        summary: "ClearCalc is a collection of Personal Finance tools written in JavaScript",
        description: "ClearCalc tools include the Amortization Schedule Generator, Home Buying Power Calculator, and more, as well as a blog. It relies heavily on user inputs to calculate details and generate results with all the data you would expect to see. Built with JavaScript and Bootstrap, it's designed to be straightforward and easy to use. Of course, it's fully responsive. Try it out now!",
        link: "https://clearcalc.app",
        image: ClearCalc,
        imageAltText: "ClearCalc Homepage Screenshot",
        techStack: [
            'HTML',
            'CSS',
            'Bootstrap 5',
            'JavaScript',
        ],
    },
    {
        title: "Project 4",
        summary: "Description for project 4",
        description: "",
        link: "https://patriciosalazar.dev",
        techStack: [
            'example',
        ],
    }
];
