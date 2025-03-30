function checkShift() {
    let startDate = document.getElementById("startDate").value;
    if (!startDate) {
        alert("Please enter a start date.");
        return;
    }

    let date = new Date(startDate);
    let dayCount = (date - new Date("2025-03-29")) / (1000 * 60 * 60 * 24);
    let shiftCycle = dayCount % 16;

    let shift;
    if (shiftCycle >= 0 && shiftCycle < 6) {
        shift = "Morning Shift (6 AM - 2 PM)";
    } else if (shiftCycle >= 6 && shiftCycle < 8) {
        shift = "Off Days";
    } else if (shiftCycle >= 8 && shiftCycle < 14) {
        shift = "Night Shift (9 PM - 6 AM)";
    } else {
        shift = "Off Days";
    }

    document.getElementById("shiftResult").innerText = shift;
}
