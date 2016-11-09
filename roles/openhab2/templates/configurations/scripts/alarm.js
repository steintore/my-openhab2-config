var config = {
username: '{{alarm_username}}',
password: '{{alarm_password}}'
};

var verisureApi = require('./alarm-api').setup( config );

// alarm state changes
verisureApi.on( 'alarmChange', log );

function log ( data ) {
console.log( data );
process.exit(1);
}