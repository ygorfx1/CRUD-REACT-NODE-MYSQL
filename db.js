import mysql from "mysql"

export const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "ygordev123",
    database: "crud2"
});

/**/
