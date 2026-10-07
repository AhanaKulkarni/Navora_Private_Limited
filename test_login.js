const https = require('https');

const data = '1=%5B%7B%22email%22%3A%22roohi%40maritimesolutionsltd.com%22%2C%22password%22%3A%22admin%402026%22%7D%5D';

const options = {
  hostname: 'navora-private-limited.vercel.app',
  port: 443,
  path: '/admin/login',
  method: 'POST',
  headers: {
    'Content-Type': 'text/plain;charset=UTF-8',
    'Next-Action': '1b6f0faeb0a955cbcc4eb3a1f94ea3cb1b7643b1',
    'Content-Length': data.length
  }
};

const req = https.request(options, (res) => {
  console.log('statusCode:', res.statusCode);
  res.on('data', (d) => {
    process.stdout.write(d);
  });
});

req.on('error', (e) => {
  console.error(e);
});

req.write(data);
req.end();
