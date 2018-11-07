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

// 查询
const searchAPI = (key, cat, page) => {
	return new Promise((resolve, reject) => {
		client.execute('taobao.tbk.dg.material.optional', {
			'q': key,
			'cat': cat,
			'has_coupon': true,
			'page_no': page,
			'sort': 'total_sales_des',
			'adzone_id': '44748650142'
		}, (error, response) => {
			if (!error){
				resolve(response);
			}else{
				reject(error)
			}
		})
	})
}

module.exports = {
	searchAPI
}