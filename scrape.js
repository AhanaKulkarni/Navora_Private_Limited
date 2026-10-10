const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  await page.goto('https://navora.maritimesolutionsltd.com/');
  
  // Wait for jobs to load
  try {
    await page.waitForSelector('text=Loading current openings...', { state: 'hidden', timeout: 5000 });
  } catch(e) {}
  
  // Extract all text content
  const textContent = await page.evaluate(() => document.body.innerText);
  console.log("HOMEPAGE CONTENT:");
  console.log(textContent);
  
  await browser.close();
})();
