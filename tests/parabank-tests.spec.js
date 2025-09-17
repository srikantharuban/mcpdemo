const { test, expect } = require('@playwright/test');

test.describe('Parabank Test Suite - Core Functionality', () => {
  
  test('TC 001 - Verify user registration functionality', async ({ page }) => {
    console.log('🔍 Starting TC 001 - User Registration Test');
    
    // Navigate to Parabank
    await page.goto('https://parabank.parasoft.com/parabank/index.htm');
    await expect(page).toHaveTitle(/ParaBank/);
    console.log('✅ Successfully navigated to Parabank homepage');
    
    // Click Register link
    await page.click('a[href="register.htm"]');
    await expect(page).toHaveTitle(/Register for Free Online Account Access/);
    console.log('✅ Registration form loaded');
    
    // Generate unique username
    const timestamp = Date.now();
    const username = `testuser${timestamp}`;
    console.log(`🆔 Generated unique username: ${username}`);
    
    // Fill registration form
    await page.fill('#customer\\.firstName', 'Test');
    await page.fill('#customer\\.lastName', 'User');
    await page.fill('#customer\\.address\\.street', '123 Test Street');
    await page.fill('#customer\\.address\\.city', 'TestCity');
    await page.fill('#customer\\.address\\.state', 'CA');
    await page.fill('#customer\\.address\\.zipCode', '12345');
    await page.fill('#customer\\.phoneNumber', '555-123-4567');
    await page.fill('#customer\\.ssn', '123-45-6789');
    await page.fill('#customer\\.username', username);
    await page.fill('#customer\\.password', 'TestPass123!');
    await page.fill('#repeatedPassword', 'TestPass123!');
    console.log('✅ Registration form filled successfully');
    
    // Submit form
    await page.click('input[value="Register"]');
    console.log('🚀 Registration form submitted');
    
    // Verify registration success
    await expect(page.locator('h1.title')).toContainText('Welcome');
    await expect(page.locator('.smallText')).toContainText('Your account was created successfully');
    console.log('🎉 Registration completed successfully!');
  });
  
  test('TC 002 - Verify valid login functionality', async ({ page }) => {
    console.log('🔍 Starting TC 002 - Valid Login Test');
    
    // First register a user (prerequisite)
    await page.goto('https://parabank.parasoft.com/parabank/index.htm');
    await page.click('a[href="register.htm"]');
    
    const timestamp = Date.now();
    const username = `loginuser${timestamp}`;
    const password = 'LoginTest123!';
    console.log(`🆔 Creating test user: ${username}`);
    
    // Fill registration form
    await page.fill('#customer\\.firstName', 'Login');
    await page.fill('#customer\\.lastName', 'TestUser');
    await page.fill('#customer\\.address\\.street', '123 Login Street');
    await page.fill('#customer\\.address\\.city', 'TestCity');
    await page.fill('#customer\\.address\\.state', 'CA');
    await page.fill('#customer\\.address\\.zipCode', '12345');
    await page.fill('#customer\\.phoneNumber', '555-123-4567');
    await page.fill('#customer\\.ssn', '123-45-6789');
    await page.fill('#customer\\.username', username);
    await page.fill('#customer\\.password', password);
    await page.fill('#repeatedPassword', password);
    await page.click('input[value="Register"]');
    console.log('✅ Test user created successfully');
    
    // Logout
    await page.click('a[href="logout.htm"]');
    console.log('🔓 Logged out successfully');
    
    // Now test login
    await page.goto('https://parabank.parasoft.com/parabank/index.htm');
    await page.fill('input[name="username"]', username);
    await page.fill('input[name="password"]', password);
    await page.click('input[value="Log In"]');
    console.log('🔐 Login attempt made');
    
    // Verify successful login
    await expect(page.locator('.smallText')).toContainText(`Welcome ${username}`);
    await expect(page).toHaveTitle(/ParaBank | Accounts Overview/);
    console.log('🎉 Login completed successfully!');
  });
  
  test('TC 003 - Verify invalid login functionality', async ({ page }) => {
    console.log('🔍 Starting TC 003 - Invalid Login Test');
    
    await page.goto('https://parabank.parasoft.com/parabank/index.htm');
    
    // Try invalid credentials
    await page.fill('input[name="username"]', 'invaliduser123');
    await page.fill('input[name="password"]', 'invalidpass123');
    await page.click('input[value="Log In"]');
    console.log('🚫 Invalid login attempt made');
    
    // Verify error message
    await expect(page.locator('.error')).toContainText('The username and password could not be verified');
    console.log('✅ Error message displayed correctly');
  });
});