const prevMonthButton = document.getElementById('prevMonth');
const nextMonthButton = document.getElementById('nextMonth');
const currentMonthElement = document.getElementById('currentMonth');
const calendarDaysElement = document.getElementById('calendarDays');

let currentDate = new Date();
let currentMonth = currentDate.getMonth();
let currentYear = currentDate.getFullYear();

const updateCalendar = () => {
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

  calendarDaysElement.innerHTML = '';

  for (let i = 0; i < firstDayOfMonth; i++) {
    const emptyDay = document.createElement('div');
    calendarDaysElement.appendChild(emptyDay);
  }

  for (let i = 1; i <= daysInMonth; i++) {
    const day = document.createElement('div');
    day.textContent = i;
    calendarDaysElement.appendChild(day);
  }

  currentMonthElement.textContent = new Date(currentYear, currentMonth).toLocaleString('default', { month: 'long' });
};

updateCalendar();

prevMonthButton.addEventListener('click', () => {
  if (currentMonth === 0) {
    currentYear--;
    currentMonth = 11;
  } else {
    currentMonth--;
  }
  updateCalendar();
});

nextMonthButton.addEventListener('click', () => {
  if (currentMonth === 11) {
    currentYear++;
    currentMonth = 0;
  } else {
    currentMonth++;
  }
  updateCalendar();
});
