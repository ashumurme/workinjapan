// Sample job data
const jobs = [
    { title: "Software Engineer", experience: 2, type: "remote" },
    { title: "Data Analyst", experience: 1, type: "office" },
    { title: "Web Developer", experience: 3, type: "remote" },
    { title: "Marketing Specialist", experience: 2, type: "office" },
    { title: "UX Designer", experience: 4, type: "remote" }
];

function filterJobs() {
    const minExperience = parseInt(document.getElementById("minExperience").value);
    const jobType = document.getElementById("jobType").value;

    let filteredJobs = jobs.filter(job => {
        return job.experience >= minExperience && (jobType === "all" || job.type === jobType);
    });

    displayJobs(filteredJobs);
}

function displayJobs(jobs) {
    const jobList = document.getElementById("jobList");
    jobList.innerHTML = "";

    if (jobs.length === 0) {
        jobList.textContent = "No jobs found.";
        return;
    }

    const ul = document.createElement("ul");
    jobs.forEach(job => {
        const li = document.createElement("li");
        li.textContent = `${job.title} - ${job.experience} years of experience (${job.type === "remote" ? "Remote" : "Office"})`;
        ul.appendChild(li);
    });
    jobList.appendChild(ul);
}

// Initial display of all jobs
displayJobs(jobs);


// Sample company data
const companies = [
    { name: "TechCorp", type: "remote" },
    { name: "InnoTech", type: "office" },
    { name: "WebWorks", type: "remote" },
    { name: "DigitalSolutions", type: "office" },
    { name: "DataTech", type: "remote" }
];

function filterCompanies() {
    const jobType = document.getElementById("jobType").value;

    let filteredCompanies = companies.filter(company => {
        return jobType === "all" || company.type === jobType;
    });

    displayCompanies(filteredCompanies);
}

function displayCompanies(companies) {
    const companyList = document.getElementById("companyList");
    companyList.innerHTML = "";

    if (companies.length === 0) {
        companyList.textContent = "No companies found.";
        return;
    }

    const ul = document.createElement("ul");
    companies.forEach(company => {
        const li = document.createElement("li");
        li.textContent = `${company.name} (${company.type === "remote" ? "Remote" : "Office"})`;
        ul.appendChild(li);
    });
    companyList.appendChild(ul);
}

// Initial display of all companies
displayCompanies(companies);




// courses...

// Sample course data
const courses = [
    { title: "Introduction to Programming", description: "Learn the basics of programming with this introductory course." },
    { title: "Web Development Fundamentals", description: "Explore the fundamentals of web development including HTML, CSS, and JavaScript." },
    { title: "Database Management", description: "Learn about database management systems and SQL." },
    { title: "Cybersecurity Essentials", description: "Discover the essentials of cybersecurity and how to protect digital assets." },
    { title: "Cloud Computing", description: "Explore cloud computing concepts and platforms such as AWS, Azure, and Google Cloud." }
];

function displayCourses() {
    const courseList = document.getElementById("courseList");

    if (courses.length === 0) {
        courseList.textContent = "No courses found.";
        return;
    }

    const ul = document.createElement("ul");
    courses.forEach(course => {
        const li = document.createElement("li");
        li.innerHTML = `<h2>${course.title}</h2><p>${course.description}</p>`;
        ul.appendChild(li);
    });
    courseList.appendChild(ul);
}

// Initial display of all courses
displayCourses();


