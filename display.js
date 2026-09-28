// Build portfolio sections using template literals and for loops.

let headerHTML = `
    <header>
        <h1>${portfolio.owner.name}</h1>
        <p class="tagline">${portfolio.owner.title}</p>
        <p class="location">📍 ${portfolio.owner.location}</p>
    </header>
`;


let skillsHTML = '<section id="skills"><h2>My Skills</h2><ul class="skills-list">';

// Using a basic for loop to add each skill
for (let i = 0; i < portfolio.skills.length; i++) {
    skillsHTML = skillsHTML + `<li>${portfolio.skills[i]}</li>`;
}

skillsHTML = skillsHTML + '</ul></section>';

let projectsHTML = '<section id="projects"><h2>My Projects</h2><div class="projects-grid">';

for (let i = 0; i < portfolio.projects.length; i++) {
    let project = portfolio.projects[i];
    
    // Build the technologies list
    let techList = project.technologies.join(", ");
    
    projectsHTML = projectsHTML + `
        <article class="project-card">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <p class="tech">Technologies: ${techList}</p>
            <p class="date">Completed: ${project.completionDate}</p>
        </article>
    `;
}

projectsHTML = projectsHTML + '</div></section>';
