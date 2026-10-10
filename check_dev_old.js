const Database = require('better-sqlite3');
const db = new Database('dev_old.db', { readonly: true });
const jobs = db.prepare('SELECT * FROM Job').all();
console.log("JOBS COUNT:", jobs.length);
console.dir(jobs, { depth: null });
const tests = db.prepare('SELECT * FROM Testimonial').all();
console.log("TESTS COUNT:", tests.length);
console.dir(tests, { depth: null });
