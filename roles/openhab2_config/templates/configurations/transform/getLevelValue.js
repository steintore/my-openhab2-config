var value = JSON.parse(input).level.value
var returnValue = 'OFF'

if (returnValue == 'false' || returnValue == 0 || !value) returnValue = 'OFF'
else returnValue = 'ON'

returnValue
