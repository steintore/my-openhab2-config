var returnValue = 'OFF'
var value = JSON.parse(input).data.level.value

if (value == 0 || value == 'false') returnValue == 'OFF'
else if (value == 255 || value == 'true' || value == true) returnValue = 'ON'
returnValue;