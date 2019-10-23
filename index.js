const { Pool } = require('pg');

const config = {
    user: 'postgres',
    host: 'localhost',
    password: 'password',
    database: 'library'
};

const pool = new Pool(config);

// Listado de datos
const getBooks = async () => {
    try {
        const res = await pool.query('select * from books');
        console.log(res.rows);
        pool.end();
    } catch (e) {
        console.log(e)
    }
}

// Insertando datos
const insertUser = async () => {
    try {
        const text = 'INSERT INTO users(usernam, password) VALUES($1, $2)';
        const values = ['jhon', 'jhon1234'];

        const res = await pool.query(text, values);
        console.log(res);
        pool.end();
    } catch (e) {
        console.log(e);
    }
}

const deleteUser = async () => {
    const text = 'DELETE FROM users WHERE usernam = $1';
    const value = ['cameron'];

    const res = await pool.query(text, value);
    console.log(res)
}

const editUser = async () => {
    const text = 'UPDATE users SET usernam = $1, password = $2 WHERE usernam = $3';
    const values = ['Bruce', 'bruce123', 'John'];
    const res = await pool.query(text, values);
    console.log(res)
};

// getBooks();
// insertUserr();
// deleteUser();
editUser();