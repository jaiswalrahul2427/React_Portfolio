import React from 'react';

function Project() {
  const projects = [
    {
      id: 1,
      title: "Book-store",
      dis: "The 'Book-Store' is a React-based single-page application designed to provide a user-friendly interface for a book store. The project utilizes Vite for an optimized development and build process, ensuring quick iterations and efficient builds. It includes ESLint configuration to maintain code quality and uses Tailwind CSS for streamlined and responsive styling. The project is primarily written in JavaScript, with supplementary use of CSS and HTML to enhance functionality and presentation.",
      live_link: "https://collectionbooks.netlify.app/",
      repo_link: "https://github.com/jaiswalrahul2427/Book-Store-Frontend.git",
      img: "/projectImg/Book_app.png"
    },
    {
      id: 2,
      title: "Travel-app",
      dis: "The 'Tour-and-Travel' project is a comprehensive web application designed to facilitate users in exploring and booking travel destinations. Featuring a modern tech stack with React and Vite, it ensures efficient development and high performance. Users can browse various tours, view detailed travel packages including itineraries and prices, and make bookings directly through the app.",
      live_link: "https://nomadman.netlify.app/",
      repo_link: "https://github.com/jaiswalrahul2427/Tour-and-travel.git",
      img: "/projectImg/travel.png"
    },
    {
      id: 3,
      title: "Social Media Dashboard",
      dis: "The 'Social Media Dashboard' project is a web application built using HTML, CSS, and JavaScript. It allows users to perform various social media functions, such as posting stories, writing posts, liking, commenting, and sharing content. The application includes navigation bars, search functionality, user settings, shortcuts, and displays sections like news, friends, groups, events, and advertisements.",
      live_link: "https://jaiswalrahul2427.github.io/Social-Media-Dashboard/",
      repo_link: "https://github.com/jaiswalrahul2427/Social-Media-Dashboard.git",
      img: "/projectImg/social_media.png"
    },
    {
      id: 4,
      title: "Hospital Website",
      dis: "This repository contains the code for a landing page designed for a healthcare website. The landing page is structured to provide information about the healthcare services offered, facilities available, patient reviews, and a means to make appointments.",
      live_link: "https://jaiswalrahul2427.github.io/Responsive-Hospital-Website/",
      repo_link: "https://github.com/jaiswalrahul2427/Responsive-Hospital-Website.git",
      img: "/projectImg/hospital.png"
    },
    {
      id: 5,
      title: "Recipe-Book-App",
      dis: "Recipe Book App is a web application that allows users to discover and explore various recipes. It fetches random recipes from the Spoonacular API and displays them in a visually appealing manner. Each recipe is presented with an image, title, list of ingredients, and a link to view the full recipe. Displays recipes with images, titles, ingredients, and links to view the full recipe. Allows users to explore a variety of recipes conveniently.",
      live_link: "https://jaiswalrahul2427.github.io/Recipe-Book-App/",
      repo_link: "https://github.com/jaiswalrahul2427/Recipe-Book-App.git",
      img: "/projectImg/recepi.png"
    },
    {
      id: 6,
      title: "Expense Tracker Web App",
      dis: "Expense Tracker App is a simple web application designed to help users track their expenses conveniently. Users can input their expenses by selecting a category, entering the amount, and specifying the date. The app then displays the expenses in a table format along with a total amount. Users also have the option to delete specific expenses from the list.",
      live_link: "https://jaiswalrahul2427.github.io/Expense-Tracker-Web-App/",
      repo_link: "https://github.com/jaiswalrahul2427/Expense-Tracker-Web-App.git",
      img: "/projectImg/expense_tracker.png"
    },
    {
      id: 7,
      title: "User Dashboard System",
      dis: "User Dashboard This repository contains the code for a user dashboard web application built using HTML, CSS, and JavaScript. The dashboard provides users with a visually appealing interface to navigate various sections and access relevant information.",
      live_link: "https://jaiswalrahul2427.github.io/User-Dashboard-System/",
      repo_link: "https://github.com/jaiswalrahul2427/User-Dashboard-System.git",
      img: "/projectImg/course_dashboard.png"
    },
    {
      id: 8,
      title: "Bike Web Site",
      dis: "This project is a collection of beautifully designed and fully responsive landing pages for bike-related websites. Whether you're running a bike shop, organizing cycling events, or promoting biking accessories, these landing pages provide a sleek and modern interface to captivate your audience.",
      live_link: "https://jaiswalrahul2427.github.io/Bike_Landing_Pages_with_Tailwind_CSS/",
      repo_link: "https://github.com/jaiswalrahul2427/Bike_Landing_Pages_with_Tailwind_CSS.git",
      img: "/projectImg/Bike_webpage.png"
    },
    {
      id: 9,
      title: "Calculator",
      dis: "Welcome to the Simple Calculator Code Repository! Here, you'll find a collection of code files for a basic calculator implemented in various programming languages.",
      live_link: "https://jaiswalrahul2427.github.io/CODSOFT_Calculator/",
      repo_link: "https://github.com/jaiswalrahul2427/CODSOFT_Calculator.git",
      img: "/projectImg/Calculator.png"
    }
  ];

  return (
    <>
      <div className='pt-10 text-center text-white bg-black'>
        <h1 className='text-3xl font-kalam'>Project</h1>
        <p className='text-2xl font-poppins'>Some of my most recent works.</p>
      </div>
      <div className='grid grid-cols-1 px-5 pt-12 text-white bg-black md:px-12 gap-x-4 md:grid-cols-3'>
        {projects.map((project) => (
          <div key={project.id} className='p-5 text-center border-t-2 border-r-2 rounded shadow-md sm:my-2 sm:mx-1 md:m-5 sm:w-full md:h-92 md:w-92 bg-base-100 bg-zinc-950 shadow-cyan-100'>
            <figure className='bg-cover h-42'>
              <img src={project.img} className='container object-contain rounded-xl' alt="Project Image" />
            </figure>
            <h1 className='pt-3 text-xl font-bold underline font-poppins'>{project.title}</h1>
            <p>{project.dis}</p>
            <div className='flex flex-wrap justify-center gap-x-2 md:justify-between'>
              <button className='px-5 py-1 mt-2 duration-200 bg-green-600 rounded shadow-lg hover:py-2 hover:px-6 shadow-cyan-500/50'>
                <a className='text-xl font-kalam' href={project.live_link}>Live link</a>
              </button>
              <button className='px-5 py-1 mt-2 duration-200 bg-green-600 rounded shadow-lg hover:py-2 hover:px-6 shadow-cyan-500/50'>
                <a className='text-xl font-kalam' href={project.repo_link}>Repo Link</a>
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Project;
