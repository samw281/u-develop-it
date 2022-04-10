const mysql = require('mysql2');
const express = require('express');

// port designation
const PORT = process.env.PORT || 3001;
const app = express();

// express middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'Samw1995',
        database: 'election'
    },
    console.log('connected to the election database')
);
// get all candidates

// db.query(`SELECT * FROM candidates`, (err, rows) => {
//     console.log(rows);
// });

// get a single candidate
db.query(`SELECT * FROM candidates WHERE id = 1`, (err, row) => {
    if (err) {
        console.log(err);
    }
    console.log(row);
})

// Delete a candidate
// db.query(`DELETE FROM candidates WHERE id = ?`, 1, (err, result) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log(result);
//   });

//   Create a candidate
const sql = `INSERT INTO candidates (id, first_name, last_name, industry_connected)

              VALUES (?, ?, ?,?)`;

const params = [1, 'Ronald', 'Firbank', 1];


db.query(sql, params, (err, results) => {
    if (err) {
        console.log(err);
    }
    console.log(results);
})

// default response for any other request (not found)
app.use((req, res) => {
    res.status(404).end();
});
app.listen(PORT, () => {
    console.log(`server running on port http://localhost:${PORT}`);
});