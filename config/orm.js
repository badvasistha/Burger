var connection = require('./connection');

var orm = {
    selectAll: function(req, res){
        connection.query('SELECT * FROM burgers', (err, burgers)=>{
            if (err) throw err;
            res(burgers);
        });
    },
    // insertOne: function(req, res){
    //     connection.query('INSERT INTO burgers (burger_name) VALUES ?', (err, burgers)=>{
    //         if (err) throw err;
    //         res.json(burgers);
    //     });
    // },
    // updateOne: function(req, res){
    //     connection.query('UPDATE burgers SET = ? WHERE devoured = ?', (err, burgers)=>{
    //         if (err) throw err;
    //         res.json(burgers);
    //     });
    // }
};

module.exports = orm;