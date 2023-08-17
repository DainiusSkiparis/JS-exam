const BASE_URL = 'https://melon-potent-period.glitch.me';

const addLinkButton = document.getElementById('add-link');

addLinkButton.addEventListener('click', () => {
    window.location.href = 'add.html';
});

const skillsList = document.getElementById('skills-list');

// Function display skills
async function fetchSkills() {
    try {
        const response = await fetch(`${BASE_URL}/skills`);
        const skills = await response.json();

        skillsList.innerHTML = '';

        skills.forEach(skill => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${skill.id}</td>
                <td>${skill.skill}</td>
                <td><button class="delete-button" data-skill-id="${skill.id}">Delete</button></td>`;
            skillsList.appendChild(row);
        });
    } catch (error) {
        console.error(error);
    }
}

// Delete function
async function deleteSkill(skillId) {
    try {
        const response = await fetch(`${BASE_URL}/skills/${skillId}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            fetchSkills();
        } else {
            console.error('Failed to delete skill');
        }
    } catch (error) {
        console.error(error);
    }
}

// Add event listeners for delete buttons
const deleteButtons = document.querySelectorAll('#delete-button');
deleteButtons.forEach(button => {
    button.addEventListener('click', () => {
        const skillId = button.getAttribute('data-skill-id');
        deleteSkill(skillId);
    });
});

fetchSkills();