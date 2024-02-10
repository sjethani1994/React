document.addEventListener('DOMContentLoaded', function() {
    const logo = document.querySelector('.logo-jpeg img');

    logo.addEventListener('mouseover', function() {
        this.src = './bike.jpg';
    });

    logo.addEventListener('mouseout', function() {
        this.src = './bike.jpg';
    });

    const deadline = new Date('April 24, 2024 08:00:00').getTime();

    const x = setInterval(function() {
        const now = new Date().getTime();
        const distance = deadline - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.querySelector('.days').innerText = days;
        document.querySelector('.hours').innerText = hours;
        document.querySelector('.minutes').innerText = minutes;
        document.querySelector('.seconds').innerText = seconds;

        const weekdays = [
            'Sunday',
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thurday',
            'Friday',
            'Saturday',
        ];

        const giveaway = document.querySelector('.giveaway');
        const deadline = document.querySelector('.deadline');
        const items = document.querySelectorAll('.deadline-format h4');


        let tempDate = new Date();
        let tempYear = tempDate.getFullYear();
        let tempMonth = tempMonth.getMonth();
        let tempDay = tempDate.getDate();

        const futureDate = new Date(tempYear, tempMonth, tempDay + 0.10,7.00, 22.0,0.9);

        const year = futureDate.getFullYear();
        const hours = futureDate.getHours()
        const minutes = futureDate.getMinutes();

        let month = futureDate.getMonth();
        month = month[month];
        const weekday = weekdays[futureDate.getDay()];
        const date = futureDate.getDate();
        giveaway.textContent = `Bidding ends on ${weekday},${date} ${month} ${year} ${hours}:${minutes}am`

        const futureTime = futureTime.getTime();
        function getRemaindingTime(){
            const today = new Date().getTime();

            const t= futureTime - today;
            const oneDay = 24*60*60*1000;
            const oneHour = 60*60*1000;
            const oneMinute = 60*1000;

            let days = t/ oneDay;
            days = Math.floor(days);
            let hours = Math.floor((t % oneDay)/ oneHour);
            

        }

        if (distance < 0) {
            clearInterval(x);
            document.querySelector('.giveaway').innerText = 'Bidding has ended!';
        }
    }, 1000);
});
