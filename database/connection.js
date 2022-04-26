const mysql = require(`mysql`);

const DB = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "",
    database : "blog"
})



DB.connect((err) =>{
    if(!err){
        console.log(`connected to db`)
        DB.query(`SELECT 1 FROM blogs`, (err, result) =>{
            if(err){
                console.log(`wait creating table `);
                DB.query(`CREATE TABLE blogs(
                    id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
                    title VARCHAR(60) NOT NULL,
                    img_url TEXT NOT NULL,
                    description VARCHAR(1000) NOT NULL,
                    created TIMESTAMP DEFAULT CURRENT_TIMESTAMP)`)
                    console.log(`table created`);
            }
            else{
                console.log(`table already exits`)
            }
        })
    }
    else{
        console.log(`failed to connect`)
    }
})




module.exports = DB