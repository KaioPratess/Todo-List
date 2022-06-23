import dom from './dom.js';
import events from './pubSub.js';

const handleDates = (function() {
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October','November', 'December'];

  window.addEventListener('load', () => {
    const date = new Date();
    let today = date.getUTCDate();
    let currentMonth = date.getUTCMonth();
    let currentYear = date.getUTCFullYear();
    let month = months[currentMonth];
    let dateString;

    function calculateDays(month) {
      let maxDays;

      if (month === 'February') {
        maxDays = 28;
      } else if(month === 'April' || month === 'June' || month === 'September' || month === 'November') {
        maxDays = 30
      } else {
        maxDays = 31
      }
  
      return maxDays
    }

    dom.select.date.textContent = `${today} ${month} ${currentYear}`;
  
    dom.select.arrowBackward.addEventListener('click', () => {
      if(today < 2) {
        if(currentMonth === 0) {
          --currentYear;
          currentMonth = 11;
          month = months[currentMonth];
          const maxDays = calculateDays(month);
          today = maxDays + 1;
        } else {
            let previousMonth = --currentMonth;
            month = months[previousMonth]
            const maxDays = calculateDays(month);
            today = maxDays + 1;
        }
      }
      today--;
      dom.select.date.textContent = `${today} ${month} ${currentYear}`;
      dateString = `${currentYear}-${('0' + (currentMonth+1)).slice(-2)}-${('0' + today).slice(-2)}`;
      events.publish('fullDate', dateString);
    })

    dom.select.arrowForward.addEventListener('click', () => {
      const maxDays = calculateDays(month);
      if(today === maxDays) {
        if(currentMonth === 11) {
          ++currentYear;
          currentMonth = 0;
          month = months[currentMonth];
        } else {
          let nextMonth = ++currentMonth;
          month = months[nextMonth];
        }
        today = 0;
      }
      today++;
      dom.select.date.textContent = `${today} ${month} ${currentYear}`;
      dateString = `${currentYear}-${('0' + (currentMonth+1)).slice(-2)}-${('0' + today).slice(-2)}`;
      events.publish('fullDate', dateString);
    })

    dateString = `${currentYear}-${('0' + (currentMonth+1)).slice(-2)}-${('0' + today).slice(-2)}`;
    
    events.publish('fullDate', dateString);

    events.subscribe('tasks', events.events, () => {
      events.publish('fullDate', dateString);
    });

    dom.select.todayBtn.addEventListener('click', () => {
      today = date.getUTCDate();
      currentMonth = date.getUTCMonth();
      currentYear = date.getUTCFullYear();
      dom.select.date.textContent = `${today} ${month} ${currentYear}`;
      dateString = `${currentYear}-${('0' + (currentMonth+1)).slice(-2)}-${('0' + today).slice(-2)}`;
      events.publish('fullDate', dateString);
      dom.select.headSec.textContent = '';
      dom.select.headSec.append(dom.select.dateWrapper);
    })
  })
})();

export default handleDates;