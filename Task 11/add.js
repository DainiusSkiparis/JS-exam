const BASE_URL = 'https://melon-potent-period.glitch.me';

const addLinkButton = document.getElementById('home-link');

addLinkButton.addEventListener('click', () => {
    window.location.href = 'index.html';
});

const addSkillForm = document.getElementById('add-skill-form');

addSkillForm.addEventListener('submit', async function (event) {
    event.preventDefault();

    const skillInput = document.getElementById('skill');
    const skill = skillInput.value;

    try {
        const response = await fetch(`${BASE_URL}/skills`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ skill }),
        });

        if (response.ok) {
            alert('Skill added successfully.');
            window.location.href = 'index.html';
        } else {
            alert('Error adding skill.');
        }
    } catch (error) {
        console.error(error);
    }
});