var express = require('express');
var router = express.Router();
var mysql = require('mysql');
//Mysql connection
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: ''
});
/*GET Method: webYog will return the Json response*/
router.get('/webYog', function(req, res, next) {

    //Query the Information schema to check the innodb storage engine
    connection.query('SELECT SUPPORT FROM INFORMATION_SCHEMA.ENGINES WHERE ENGINE ="InnoDB"', function(err, rows, fields) {

        if (!err) {

            //check status of InnoDB plugin if enabled or not
            if (rows[0]['SUPPORT'] == 'DEFAULT' || rows[0]['SUPPORT'] == 'YES') {
                //If InnoDB plugin enabled then query the Mysql global variables,check for 'Handler_write' variable.
                //Handler_write will give the total number of disk write in mysql
                connection.query('show global status where Variable_name="Handler_write"', function(err, row, field) {

                    if (!err && row.length) {

                        //response in json with status 200
                        res.status(200).json({
                            "status": "0",
                            "innoDBPluginEnabled": "Yes",
                            "totalNumberOfDiskWrite": row[0]['Value']
                        });

                    } else {
                        //status=1-> Plugin not enabled
                        res.status(200).json({
                            'status': '1',
                            'innoDBPluginEnabled': 'Not enabled',
                            'totalNumberOfDiskWrite': ''
                        });
                    }
                });
            } else {
                //status=1-> Plugin not enabled
                res.status(200).json({
                    'status': '1',
                    'innoDBPluginEnabled': 'Not enabled',
                    'totalNumberOfDiskWrite': ''
                });

            }
        } else {
            //log the error
            console.log('Error while performing Query or May be Mysql Connection is not proper.');
        }
    });
});

module.exports = router;
