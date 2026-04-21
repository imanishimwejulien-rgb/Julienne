// document.getElementById('reportForm').addEventListener('submit', function(event) {
//     event.preventDefault(); // Stop page from refreshing

//     const itemName = document.getElementById('itemName').value;
//     const userEmail = document.getElementById('userEmail').value;
//     const feedback = document.getElementById('feedback');

//     // Simple validation logic
//     if (itemName.length < 3) {
//         feedback.innerHTML = `<div class="alert alert-danger">Please enter a descriptive item name.</div>`;
//         return;
//     }

//     // If valid, show success message
//     feedback.innerHTML = `<div class="alert alert-success">Thank you! Your report for "${itemName}" has been submitted.</div>`;
    
//     // Clear the form
//     this.reset();
// });