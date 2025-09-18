document.addEventListener('DOMContentLoaded', function () {
    // --- Tag Input System ---
    const tagsContainer = document.getElementById('tags-container');
    const skillsInput = document.getElementById('skills-input');

    skillsInput.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' && skillsInput.value.trim() !== '') {
            e.preventDefault();
            const skill = skillsInput.value.trim();
            addTag(skill);
            skillsInput.value = '';
        }
    });

    function addTag(skill) {
        const tag = document.createElement('span');
        tag.className = 'skill-tag';
        tag.textContent = skill;

        const removeBtn = document.createElement('button');
        removeBtn.textContent = '×';
        removeBtn.addEventListener('click', function () {
            tagsContainer.removeChild(tag);
        });

        tag.appendChild(removeBtn);
        tagsContainer.appendChild(tag);
    }

    // --- Conditional Offline Options ---
    const preferenceRadios = document.querySelectorAll('input[name="preference"]');
    const offlineOptions = document.getElementById('offline-options');

    preferenceRadios.forEach(radio => {
        radio.addEventListener('change', function () {
            if (this.value === 'offline') {
                offlineOptions.style.display = 'block';
            } else {
                offlineOptions.style.display = 'none';
            }
        });
    });

    // --- Form Submission Handler (for demonstration) ---
    const form = document.getElementById('application-form');
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Application Submitted! (This is a demo)');
        window.location.href = './dashboard.html';
    });
});