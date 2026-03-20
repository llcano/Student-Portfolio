function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // Show selected section
    document.getElementById(sectionId).style.display = 'block';
}

function addCertification() {
    const fileInput = document.getElementById('cert-upload');
    const gallery = document.getElementById('cert-gallery');

    if (fileInput.files && fileInput.files[0]) {
        const reader = new FileReader();

        reader.onload = function(e) {
            const div = document.createElement('div');
            div.className = 'cert-item';
            
            // Check if it's a PDF or Image
            if (fileInput.files[0].type === "application/pdf") {
                div.innerHTML = `<p>📄 PDF Certificate</p><a href="${e.target.result}" target="_blank">View Document</a>`;
            } else {
                div.innerHTML = `<img src="${e.target.result}" alt="Certificate"><p>${fileInput.files[0].name}</p>`;
            }
            
            gallery.appendChild(div);
        };

        reader.readAsDataURL(fileInput.files[0]);
    } else {
        alert("Please select a file first.");
    }
}
