document.addEventListener('DOMContentLoaded', () => {
    fetchProfileData();
});

async function fetchProfileData() {
    try {
        const response = await fetch('data/profile.json');
        const data = await response.json();
        populateContent(data);
    } catch (error) {
        console.error('Error fetching profile data:', error);
    }
}

function populateContent(data) {
    document.getElementById('biography').innerHTML = `<p>${data.biography}</p>`;
    document.getElementById('education').innerHTML = data.education.map(edu => `
        <div>
            <h3>${edu.degree}</h3>
            <p><li>${edu.institution}, ${edu.year}</li></p>
        </div>
    `).join('');

    document.getElementById('work-experience').innerHTML = data.experience.map(exp => `
        <div>
            <h3>${exp.role}</h3>
            <p><li>${exp.company}, ${exp.duration}</li></p>
            <p><ul><li>${exp.description}</li></ul></p>
        </div>
    `).join('');

    document.getElementById('skills').innerHTML = `${data.skills.map(skill => `<li>${skill}</li>`).join('')}`;

    document.getElementById('research-interests').innerHTML = `<p>${data.researchInterests.join(', ')}</p>`;

    document.getElementById('current-projects').innerHTML = data.currentProjects.map(project => `
        <div>
            <h3>${project.title}</h3>
            <p>${project.description}</p>
        </div>
    `).join('');

    document.getElementById('past-projects').innerHTML = data.pastProjects.map(project => `
        <div>
            <h3>${project.title}</h3>
            <p>${project.description}</p>
        </div>
    `).join('');

    // document.getElementById('journal-papers').innerHTML = data.publications.map(pub => `
    //     <div>
    //         <p>${pub.authors}. (${pub.year}). ${pub.title}. ${pub.journal}, ${pub.volume}(${pub.issue}), ${pub.pages}.</p>
    //     </div>
    // `).join('');

    document.getElementById('conference-presentations').innerHTML = data.conferences.map(conf => `
        <div>
            <p><ul><li>${conf.title} - ${conf.conference}, ${conf.location}, ${conf.date}, <span><a href="${conf.link}">read article</a></span></li></ul></p>
        </div>
    `).join('');

    document.getElementById('blog-posts').innerHTML = data.blogPosts.map(post => `
        <div>
            <h3>${post.title}</h3>
            <p>${post.date}</p>
            <p>${post.excerpt}</p>
            <a href="${post.link}">Read more</a>
        </div>
    `).join('');

    document.getElementById('social-media').innerHTML = ` 
        <p>Email: ${data.contact.email}</p>
        <p>LinkedIn: <a href="${data.contact.linkedin}">${data.contact.linkedin}</a></p>
        <p>ResearchGate: <a href="${data.contact.researchgate}">${data.contact.researchgate}</a></p>
        <p>Twitter: <a href="${data.contact.twitter}">${data.contact.twitter}</a></p>
    `;
}

document.addEventListener('DOMContentLoaded', function() {
    var currentYear = new Date().getFullYear();
    document.getElementById('copyright').innerHTML = '&copy; ' + currentYear + ' Jude Crener Junior Pierre. All rights reserved.';
});
