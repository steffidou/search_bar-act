document.addEventListener("DOMContentLoaded", function () {
    fetch("https://raw.githubusercontent.com/steffidou/search_bar-act/refs/heads/main/courses.json")  
        .then(response => response.json())
        .then(data => {
            const coursesTable = document.getElementById("courses-list");

            data.courses.forEach(course => {
                let row = document.createElement("tr");

                row.innerHTML = `
                    <td>${course.year_level}</td>
                    <td>${course.sem}</td>
                    <td>${course.code}</td>
                    <td>${course.description}</td>
                    <td>${course.credit}</td>
                `;

                coursesTable.appendChild(row);
            });
        })
        .catch(error => console.error("Error loading courses:", error));
});

// Function to filter courses dynamically
function filterSubjects() {
    let input = document.getElementById("search-box").value.toLowerCase();
    let rows = document.querySelectorAll("#courses-list tr");

    rows.forEach(row => {
        let description = row.cells[3].innerText.toLowerCase(); // Get course description
        row.style.display = description.includes(input) ? "" : "none"; // Show or hide row
    });
}