function markAttendance(studentId, status) {
    let statusCell = document.getElementById('status-' + studentId);
    
    if (status === 'present') {
        statusCell.innerHTML = 'Present';
        statusCell.style.color = 'green';
    } else {
        statusCell.innerHTML = 'Absent';
        statusCell.style.color = 'red';
    }
}
