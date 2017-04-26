var config = {
username: '{{alarm_login}}',
password: '{{alarm_password}}'
};

var verisureApi = require('./alarm-api').setup( config );

// alarm state changes
verisureApi.on( 'alarmChange', log );

function log ( data ) {
console.log( JSON.stringify(data));
process.exit(1);
}
