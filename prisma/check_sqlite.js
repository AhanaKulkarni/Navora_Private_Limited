const Database = require('better-sqlite3');
const db = new Database('dev.db', { readonly: true });
const jobs = db.prepare('SELECT * FROM Job').all();
console.log("JOBS:", jobs);
const tests = db.prepare('SELECT * FROM Testimonial').all();
console.log("TESTS:", tests);
