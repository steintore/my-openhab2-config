
function startTime() {
    document.getElementById('time').innerHTML = moment().locale('nb').format('HH mm ss');
    document.getElementById('date').innerHTML = moment().locale('nb').format('dddd Do MMMM YYYY');
    
};

function setDayNames() {
		document.getElementById('day1').innerHTML = moment().locale('nb').add(1, 'days').format('dddd');
		document.getElementById('day2').innerHTML = moment().locale('nb').add(2, 'days').format('dddd');
		document.getElementById('day3').innerHTML = moment().locale('nb').add(3, 'days').format('dddd');
};

window.onload = function() {
	setInterval(startTime, 1000);
	setDayNames();
};