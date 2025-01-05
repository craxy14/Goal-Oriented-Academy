const btn = document.getElementById("arrowBtn");
const form = document.getElementById("myForm");

const dayError = document.getElementById("dayError");
const monthError = document.getElementById("monthError");
const yearError = document.getElementById("yearError");

const dayLabel = document.getElementById("dayLabel");
const monthLabel = document.getElementById("monthLabel");
const yearLabel = document.getElementById("yearLabel");

btn.addEventListener("click", function () {
    const day = form.dayInput.value;
    const month = form.monthInput.value;
    const year = form.yearInput.value;

    dayError.textContent = "";
    monthError.textContent = "";
    yearError.textContent = "";
    form.dayInput.style.borderColor = "";
    form.monthInput.style.borderColor = "";
    form.yearInput.style.borderColor = "";
    dayLabel.style.color = "";
    monthLabel.style.color = "";
    yearLabel.style.color = "";

    if (day && month && year) {
        let valid = true;

    if (day > 31 || day < 1) {
        form.dayInput.style.borderColor = "red";
        dayError.textContent = "Must be a valid day";
        dayLabel.style.color = "rgba(255, 0, 0, 0.65)";
        valid = false;
    }

    if (month > 12 || month < 1) {
        form.monthInput.style.borderColor = "red";
        monthError.textContent = "Must be a valid month";
        monthLabel.style.color = "rgba(255, 0, 0, 0.65)";
        valid = false;
    }

    if (year > 2025 || year < 1000) {
        form.yearInput.style.borderColor = "red";
        yearError.textContent = "Must be a valid year";
        yearLabel.style.color = "rgba(255, 0, 0, 0.65)";
        valid = false;
    }

    if (valid) {
        const currentDate = new Date();
        const currentYear = currentDate.getFullYear();
        const currentMonth = currentDate.getMonth() + 1;
        const currentDay = currentDate.getDate();

        let age = currentYear - year;

        if (month > currentMonth || (month === currentMonth && day > currentDay)) {
            age--;
        }

        let months = currentMonth - month;
        if (months < 0) {
            months += 12;
        }
        let days = currentDay - day;

        resultDiv.innerHTML = `
            <p class="resultP"><span class="dashSpan">${age}</span> years</p>
            <p class="resultP"><span class="dashSpan">${month}</span> months</p>
            <p class="resultP"><span class="dashSpan">${days}</span> days</p>
        `;
    }
}
}
);