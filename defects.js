function submitDefect() {
    let title = document.getElementById("defectTitle").value;
    let description = document.getElementById("defectDescription").value;
    
    let defects = JSON.parse(localStorage.getItem("defects")) || [];
    defects.push({ title, description });
    localStorage.setItem("defects", JSON.stringify(defects));

    alert("Defect reported successfully!");
}
