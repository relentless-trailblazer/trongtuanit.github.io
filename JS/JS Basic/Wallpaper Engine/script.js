window.addEventListener('load', () => {
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ];
  const months = [
    'January', 
    'February',
    'March', 
    'April', 
    'May', 
    'June', 
    'July',
    'August',
    'September',
    'October', 
    'November',
    'December'
  ];

  const dateTime = new Date();
  console.log( dateTime.getHours(), dateTime.getMinutes(), dateTime.getSeconds() , dateTime.getFullYear()  ,months[dateTime.getMonth()], days[dateTime.getDay()], dateTime.getDate());

  const time = document.getElementById('time');
  const date = document.getElementById('date');

  time.innerHTML = getTime(dateTime);
  date.innerHTML = getDate(dateTime);


  setInterval(() => {
    const dateTime = new Date();
    time.innerHTML = getTime(dateTime);
    date.innerHTML = getDate(dateTime);
  },1000)



  function getTime(dateTime)  {
    var hours = dateTime.getHours();
    var minutes = dateTime.getMinutes();
    var second = dateTime.getSeconds();
    if(hours < 10)
      hours=`0${hours}`
    if(minutes < 10)
      minutes=`0${minutes}`;
    if(second < 10)
      second=`0${second}`
    return `${hours} : ${minutes} : ${second} `;
  }
  function getDate(dateTime)  {
    return days[dateTime.getDay()] + ", " + dateTime.getDate() + ", "  + months[dateTime.getMonth()] + ", " + dateTime.getFullYear();
  }
  
})