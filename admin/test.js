const TopClient = require('./sdk/lib/api/topClient').TopClient;

/**
	正式：http://gw.api.taobao.com/router/rest
	沙箱：http://gw.api.tbsandbox.com/router/rest
*/
const client = new TopClient({
	'appkey': '25107141',
	'appsecret': '64a58f2e43a8a77bbd93b0cf4c466f30',
	'REST_URL': 'http://gw.api.tbsandbox.com/router/rest'
});

client.execute('taobao.tbk.sc.optimus.material', {
	'adzone_id': 44748650142,
	'site_id': 146000351,
	'content_id': 579097796857
}, (error, response) => {
	if (!error){
		console.log(JSON.stringify(response));
	}else{
		console.log(error)
	}
})

