
document.addEventListener("DOMContentLoaded", function () {

  const employmentHistory = [
    {
      id: 1,
      title: "Junior Full - Stack developer",
      company: "Vegannection",
      years: "08.2023 - Present",
      description:
        "Small start-up - reward/cashback app. Technology stack: API with Nodejs(TypeScript), MongoDB with moongose, React.js with styled components and TypeScript. Mono-repository with nx workspace and version control with Git(Source Tree)",
    },
    {
      id: 2,
      title: "Junior Java Developer",
      company: "Fortech",
      years: "01.2023 - 08.2023",
      description:
        "Since I have started here as an intern, I have gained further experience in Java. My main tasks included doing unit tests with JUNIT5. Since I have an interest in front-end I also developed basic features using React with Typescript and styled-components.",
    },
    {
      id: 3,
      title: "Intern Full - Stack developer",
      company: "Fortech",
      years: "08.2022 - 12.2022",
      description:
        "I have learned to work in an Agile environment and how to develop applications using Javascript and Java languages as well as React and Spring Boot framework. I have familiarized myself with Postman, Rest Services and GIT workflow. In addition to these skills, I have aquired soft skills like fast learning, adaptability to new frameworks and googling my way around when I am stuck on something.",
    },
  ];

  const timeline = document.getElementById("timeline");

  employmentHistory.forEach((job) => {
    const entry = document.createElement("div");
    entry.className = "entry";
    entry.id = "entry-" + job.id;

    const header = document.createElement("div");
    header.className = "entry-header";
    header.innerText = job.title;

    const content = document.createElement("div");
    content.className = "entry-content";
    content.innerHTML = `<strong>Company:</strong> ${job.company}<br>
                             <strong>Years:</strong> ${job.years}<br>
                             <p>${job.description}</p>`;
    content.style.display = "none";

    entry.appendChild(header);
    entry.appendChild(content);

    header.addEventListener("click", function () {
      const isContentShown = content.style.display === "block";

      document.querySelectorAll(".entry-content").forEach((el) => {
        el.style.display = "none";
      });

      document.querySelectorAll(".entry").forEach((el) => {
        el.classList.remove("active");
      });

      if (!isContentShown) {
        content.style.display = "block";
        entry.classList.add("active");
      }
    });

    timeline.appendChild(entry);
  });

  // Visitor counter

  const counter = document.querySelector('.counter-number')
  async function updateCounter(){
    let response = await fetch('https://ejkvu0n4s5.execute-api.us-east-1.amazonaws.com/count')
    let data = await response.json()
    console.log(data)
    counter.innerHTML = `Views ${data}`
  }
   
  updateCounter()
});

