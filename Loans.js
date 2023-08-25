document.addEventListener("DOMContentLoaded", function () {
    const loanForm = document.getElementById("loan-form");
    
    loanForm.addEventListener("submit", function (event) {
        event.preventDefault();
        
        const savingsAmount = parseFloat(document.getElementById("savingsAmount").value);
        const fullName = document.getElementById("fullName").value;
        const email = document.getElementById("email").value;
        
        // You can perform further validation and processing here
        
        // For now, let's just show an alert
        alert(`Thank you, ${fullName}! Your loan application with savings of $${savingsAmount} has been submitted.`);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const calculateButton = document.getElementById("calculate-loan");
    const savingsInput = document.getElementById("savings-amount");
    const loanInput = document.getElementById("loan-amount");
    
    calculateButton.addEventListener("click", function () {
        const savings = parseFloat(savingsInput.value);
        if (!isNaN(savings)) {
            const calculatedLoan = savings * 10; // Multiply by 1000% (10 times)
            loanInput.value = calculatedLoan.toFixed(2); // Display two decimal places
        }
    });
});

