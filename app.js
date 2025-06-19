document.addEventListener('DOMContentLoaded', () => {
    const projects = [
      { name: "Project One", description: "Description of project one." },
      { name: "Project Two", description: "Description of project two." }
    ];
  
    const projectsList = document.getElementById('projects-list');
    projects.forEach(project => {
      const projectDiv = document.createElement('div');
      projectDiv.innerHTML = `<h3>${project.name}</h3><p>${project.description}</p>`;
      projectsList.appendChild(projectDiv);
    });
  });
  
