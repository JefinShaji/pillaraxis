document.getElementById('calculate-button').addEventListener('click', () => {
    const travelDate = document.getElementById('travel-date').value;
    const resultDiv = document.getElementById('result');

    if (!travelDate) {
        resultDiv.textContent = "Please select a travel date.";
        return;
    }

    const travelDateObj = new Date(travelDate);
    const bookingDateObj = new Date(travelDateObj);
    bookingDateObj.setDate(bookingDateObj.getDate() - 60); // 60-day rule

    const formattedBookingDate = bookingDateObj.toISOString().split('T')[0];
    const bookingDateInWords = new Intl.DateTimeFormat('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }).format(bookingDateObj);

    resultDiv.innerHTML = `
        <p>Your earliest booking date is:</p>
        <strong>${formattedBookingDate}</strong>
        <p>(${bookingDateInWords})</p>
    `;
});
