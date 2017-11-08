// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const app = require('electron').remote.app,
  path = require('path'),
  fs = require('fs'),
  dialog = require('electron').remote.dialog,
  BrowserWindow = require('electron').remote.BrowserWindow,
  puppeteer = require('puppeteer');

async function getPic(url) {
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 250,
    executablePath:
      '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
  });
  const page = await browser.newPage();
  await page.goto(url);
  await page.setViewport({ width: 1200, height: 800 });
  await page.screenshot({ path: 'google.png' });

  await browser.close();
}

document.getElementById('start').addEventListener('click', function() {
  event.preventDefault();
  console.log('start');
  getPic('https://www.google.de');
});
