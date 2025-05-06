// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');
  
    // Function to simulate sending OTP
    function sendOTP() {
      const generatedOTP = Math.floor(100000 + Math.random() * 900000); // 6-digit OTP
      localStorage.setItem('otp', generatedOTP); // Store in browser storage temporarily
      alert(`Your OTP is: ${generatedOTP} (simulated)`); // In production, you'd send via SMS/Email
    }
  
    // Form submission
    form.addEventListener('submit', function (event) {
      event.preventDefault();
  
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
  
      if (!name || !email || !message) {
        alert('Please complete all fields.');
        return;
      }
  
      // Simulate OTP sending
      sendOTP();
  
      // Prompt user to enter OTP
      const enteredOTP = prompt("Enter the OTP sent to your device:");
  
      if (enteredOTP === localStorage.getItem('otp')) {
        alert(`Thank you, ${name}. Your appointment request has been submitted successfully.`);
        form.reset(); // Clear the form
        localStorage.removeItem('otp');
      } else {
        alert("Incorrect OTP. Please try again.");
      }
    });
  });
  