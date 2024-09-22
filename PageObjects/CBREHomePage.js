class CBREHomePage {
   
    constructor(page) {
        this.page = page;
        this.acceptCookiesButton = page.getByRole('button', { name: 'Accept All Cookies' });
        this.searchBox = page.getByLabel('search cbre');
        this.searchInput = page.getByPlaceholder('Search for Reports, Offices,');
      }
      async navigate() {
        await this.page.goto('https://www.cbre.co.uk/');
      }
    
      async acceptCookies() {
        await this.acceptCookiesButton.click();
      }
    
      async searchAddress(address) {
        await this.searchBox.click();
        await this.searchInput.fill(address);
        await this.searchInput.press('Enter');
      }
    
      async verifySearchResult(expectedResult) {
        const result = this.page.getByText(expectedResult, { exact: true });
        await expect(result).toBeVisible();
      }
    }
    
    module.exports = { CBREHomePage };
    
