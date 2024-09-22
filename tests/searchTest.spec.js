const { test, expect } = require('@playwright/test');
const { CBREHomePage } = require('../PageObjects/CBREHomePage');

test('should navigate to CBRE homepage and search for an address', async ({ page }) => {
  const cbreHomePage = new CBREHomePage(page);

  // Navigate to CBRE homepage
  await cbreHomePage.navigate();

  // Verify page title
  await expect(page).toHaveTitle('Global Commercial Real Estate Services | CBRE UK');

  // Accept cookies
  await cbreHomePage.acceptCookies();

  // Search for address
  await cbreHomePage.searchAddress('61 Southwark street');

  // Verify the result
  await cbreHomePage.verifySearchResult('61 Southwark Street');
});


