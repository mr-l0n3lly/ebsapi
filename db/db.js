const mysql = require('mysql')

const conn = mysql.createPool({
	connectionLimit: 100,
	host: 'localhost',
	user: 'root',
	password: 'l@mbd@m3',
	database: 'products'
})

// conn.connect((err) => {
// 	if (err) {
// 		// eslint-disable-next-line no-console
// 		return console.log(err)
// 	}
//
// 	return true
// })

module.exports = conn