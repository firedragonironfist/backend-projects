const {program} = require('commander');
const {Pool} = require('pg');
const Cursor = require('pg-cursor');
/*
const {Client} = require('pg'); 
const connectionString = 'postgres://admin:password@localhost:5432/auth';
const client = new Client({connectionString});
 */

const pool = new Pool({
  user: 'admin',
  host: 'localhost',
  database: 'auth',
  password: 'password',
  port: 5432,
});

/* client.connect()
  .then(()=> console.log('connected to the database'))
  .catch(err => console.error('Error connecting to the database:',err.stack)); */

pool.on('error', (err,client)=>{
  console.error('Error:', err);
});

const query = `
SELECT *
FROM test.todos
`;

(async () => {
  const client = await pool.connect();
  const query = 'SELECT * FROM users';

  const cursor = await client.query(new Cursor(query));

  cursor.read(1, (err, rows) => {
      console.log('We got the first row set');
      console.log(rows);

      cursor.read(1, (err, rows) => {
          console.log('This is the next row set');
          console.log(rows);
      });
  });
})();

//Inserting values

/* const insert = `
INSERT INTO test.todos(id, description, status)
VALUES (3, 'fakfa', true)
`; 

/* client.query(insert, (err,res)=>{
  if(err){
    console.log(err);
    return;
  }
  console.log('Data Inserted successfully');
  client.end();
}); 
*/


// Selecting values

/* const select = `
SELECT *
FROM test.todos
`;

client.query(select, (err,res)=>{
  if(err){
    console.error(err);
    return;
  }
  for(let row of res.rows){
    console.log(row);
  }
  client.end();
});
 */

// Specific selection

/* const query = `
SELECT *
FROM test.todos
WHERE id<2
`;

client.query(query, (err, res) => {
  if (err) {
      console.error(err);
      return;
  }
  for (let row of res.rows) {
      console.log(row);
  }
  client.end();
}); */


//Specific updation

/* const query = `
UPDATE test.todos
SET status = false
WHERE description = 'Finish the report'
`;

client.query(query, (err, res) => {
  if (err) {
      console.error(err);
      return;
  }
  if (err) {
      console.error(err);
      return;
  }
  console.log('Data update successful');
  client.end();
}); */

// Delete specific row

/* const query = `
DELETE FROM test.todos
WHERE id = 3
`;

client.query(query, (err, res) => {
  if (err) {
      console.error(err);
      return;
  }
  if (err) {
      console.error(err);
      return;
  }
  console.log('Data delete successful');
  client.end();
}); */