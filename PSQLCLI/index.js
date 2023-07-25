#!/usr/bin/env node
const {Pool} = require('pg');
const { program } = require('commander');

const pool = new Pool({
  user: 'admin',
  host: 'localhost',
  database: 'auth',
  password: 'password',
  port: 5432,
});

pool.on('error', (err,client)=>{
  console.error('Error:', err);
});

//READ operation
program
  .command('read')
  .description('Read data from the database')
  .action(async () => {
    try {
      const client = await pool.connect();
      const result = await client.query('SELECT * FROM test.todos');
      console.log(result.rows);
      client.release();
    } catch (err) {
      console.error('Error executing query:', err);
    }
  });

// CREATE operation
program
  .command('create <id> <description> <status>')
  .description('Create a new todo in the database')
  .action(async (id, description, status) => {
    try {
      const client = await pool.connect();
      const result = await client.query('INSERT INTO test.todos (id, description, status) VALUES ($1, $2, $3)', [id, description, status]);
      console.log('New todo created successfully!');
      client.release();
    } catch (err) {
      console.error('Error executing query:', err);
    }
  });

// UPDATE operation
program
  .command('update <id> <description> <status>')
  .description('Update an existing todo in the database')
  .action(async (id, description, status) => {
    try {
      const client = await pool.connect();
      const result = await client.query('UPDATE test.todos SET description = $1, status = $2 WHERE id = $3', [description, status, id]);
      console.log('Todo updated successfully!');
      client.release();
    } catch (err) {
      console.error('Error executing query:', err);
    }
  });

// DELETE operation
program
  .command('delete <id>')
  .description('Delete a todo from the database')
  .action(async (id) => {
    try {
      const client = await pool.connect();
      const result = await client.query('DELETE FROM test.todos WHERE id = $1', [id]);
      console.log('Todo deleted successfully!');
      client.release();
    } catch (err) {
      console.error('Error executing query:', err);
    }
  });

program.parse(process.argv);