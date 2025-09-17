# 🧪 Parabank Test Automation with CI/CD Pipeline

A comprehensive test automation framework for the Parabank demo application featuring automated testing with Playwright and a complete CI/CD pipeline using GitHub Actions.

## 🌟 Features

- **🚀 Automated Testing**: Cross-browser testing with Playwright (Chromium, Firefox, WebKit)
- **🔄 CI/CD Pipeline**: Automated testing on every push/PR with GitHub Actions
- **📊 Test Reporting**: Beautiful HTML reports and real-time dashboards
- **🌐 GitHub Pages**: Automated deployment of test results dashboard
- **📱 Multi-Browser Support**: Tests run across desktop and mobile browsers
- **⚡ Fast Execution**: Optimized for CI/CD environments
- **🔧 Easy Setup**: One-command local setup

## 🏗️ Project Structure

```
mcpdemo/
├── .github/
│   └── workflows/
│       └── ci-cd.yml              # GitHub Actions workflow
├── tests/
│   └── parabank-tests.spec.js     # Test specifications
├── package.json                   # Dependencies and scripts
├── playwright.config.js           # Playwright configuration
├── TestSuite.md                  # Manual test cases
├── Test_Execution_Report.html    # Latest test results
└── README.md                     # This file
```

## 🚀 Quick Start

### Prerequisites

- **Node.js 16+** (recommended: Node.js 18)
- **Git** for version control

### Local Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/srikantharuban/mcpdemo.git
   cd mcpdemo
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Install Playwright browsers**
   ```bash
   npm run install-browsers
   ```

4. **Run tests locally**
   ```bash
   # Run all tests
   npm test
   
   # Run tests in headed mode
   npm run test:headed
   
   # Run tests for specific browser
   npm run test:chromium
   npm run test:firefox
   npm run test:webkit
   
   # Debug tests
   npm run test:debug
   ```

5. **View test report**
   ```bash
   npm run report
   ```

## 🔄 CI/CD Pipeline

### Automated Triggers

The CI/CD pipeline automatically runs when:

- **Push to main/develop branches**
- **Pull requests to main branch**  
- **Daily at 2 AM UTC** (scheduled)
- **Manual trigger** via GitHub Actions UI

### Pipeline Features

#### 🧪 Test Execution
- **Multi-browser testing**: Chromium, Firefox, WebKit
- **Parallel execution**: Tests run simultaneously across browsers
- **Retry mechanism**: Automatic retry on CI failures (2 retries)
- **Artifact collection**: Screenshots, videos, and reports

#### 📊 Reporting
- **HTML Reports**: Detailed Playwright reports
- **JSON/JUnit**: Machine-readable test results
- **Screenshots**: Captured on test failures
- **Videos**: Recorded for failed test sessions

#### 🚀 Deployment
- **GitHub Pages**: Automatic deployment of test dashboard
- **Real-time updates**: Dashboard updates with every pipeline run
- **Cross-browser results**: Consolidated view across all browsers

### Manual Pipeline Trigger

1. Go to **Actions** tab in GitHub repository
2. Select **🚀 Test Automation CI/CD Pipeline**
3. Click **Run workflow**
4. Choose browser option:
   - `all` - Run tests on all browsers (default)
   - `chromium` - Chrome/Edge testing
   - `firefox` - Firefox testing  
   - `webkit` - Safari testing

## 📊 Test Dashboard

View live test results at: **[https://srikantharuban.github.io/mcpdemo/](https://srikantharuban.github.io/mcpdemo/)**

The dashboard includes:
- ✅ **Test Statistics**: Pass/fail rates and execution times
- 🌐 **Cross-browser Results**: Results for all supported browsers
- 📈 **Trend Analysis**: Historical test execution data
- 🔗 **Direct Links**: Access to detailed reports and artifacts

## 🧪 Test Cases

### Core Test Suite

| Test ID | Description | Status |
|---------|-------------|--------|
| **TC 001** | Customer Registration Verification | ✅ PASSING |
| **TC 002** | Valid Login Functionality | ✅ PASSING |
| **TC 003** | Invalid Login Validation | ✅ PASSING |

### Test Coverage

- **User Registration**: Account creation with validation
- **Authentication**: Login/logout functionality
- **Error Handling**: Invalid credential scenarios
- **Cross-browser Compatibility**: All major browsers
- **Responsive Design**: Desktop and mobile viewports

## 🔧 Configuration

### Playwright Configuration

The `playwright.config.js` includes:

```javascript
{
  testDir: './tests',
  fullyParallel: true,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: ['html', 'json', 'junit'],
  use: {
    baseURL: 'https://parabank.parasoft.com',
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure'
  }
}
```

### CI/CD Configuration

The GitHub Actions workflow includes:

- **Multi-browser matrix strategy**
- **Node.js 18 environment**
- **Automatic browser installation**
- **Test artifact collection**
- **GitHub Pages deployment**
- **Failure notifications**

## 🛠️ Available Scripts

```bash
# Test execution
npm test                    # Run all tests
npm run test:headed         # Run tests with browser UI
npm run test:debug          # Debug mode with inspector
npm run test:chromium       # Chrome/Edge only
npm run test:firefox        # Firefox only  
npm run test:webkit         # Safari only
npm run test:ci             # CI optimized run

# Reporting
npm run report              # Open HTML report
npm run install-browsers    # Install Playwright browsers
npm run setup               # Complete project setup
```

## 📁 Artifacts & Reports

### Local Reports
- **HTML Report**: `playwright-report/index.html`
- **Test Results**: `test-results.json`, `test-results.xml`
- **Screenshots**: `test-results/` directory
- **Videos**: `test-results/` directory

### CI/CD Artifacts
- **Test Reports**: Available in GitHub Actions artifacts
- **Screenshots**: Collected on failures
- **Videos**: Recorded for debugging
- **Dashboard**: Deployed to GitHub Pages

## 🔍 Debugging

### Local Debugging

```bash
# Debug specific test
npx playwright test --debug tests/parabank-tests.spec.js

# Run with trace viewer
npx playwright test --trace on

# Show trace for failed tests
npx playwright show-trace test-results/trace.zip
```

### CI/CD Debugging

1. **Check Actions Tab**: View workflow execution logs
2. **Download Artifacts**: Access screenshots and videos
3. **Review Dashboard**: Check test results summary
4. **Inspect Logs**: Detailed step-by-step execution

## 🤝 Contributing

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/new-test`
3. **Add your tests**: Follow existing patterns in `tests/`
4. **Run tests locally**: `npm test`
5. **Submit a pull request**: Pipeline will automatically validate

### Test Development Guidelines

- ✅ Use descriptive test names
- ✅ Add console logging for debugging
- ✅ Generate unique test data (timestamps)
- ✅ Include proper assertions
- ✅ Handle async operations correctly

## 📈 Performance

### Execution Times
- **Single browser**: ~45-60 seconds
- **All browsers**: ~2-3 minutes (parallel)
- **CI overhead**: ~1-2 minutes (setup)

### Optimization Features
- **Parallel execution**: Tests run simultaneously
- **Browser reuse**: Efficient resource utilization
- **Selective installation**: Only required browsers
- **Artifact streaming**: Real-time result collection

## 🔧 Environment Variables

For advanced configuration, you can set:

```bash
# Browser selection
BROWSER=chromium|firefox|webkit

# Test environment
CI=true                     # Enable CI optimizations
HEADLESS=true              # Run without browser UI
DEBUG=true                 # Enable debug logging
```

## 📚 Resources

- **[Playwright Documentation](https://playwright.dev)**
- **[GitHub Actions Guide](https://docs.github.com/en/actions)**
- **[Parabank Demo](https://parabank.parasoft.com)**
- **[Node.js Best Practices](https://nodejs.org/en/docs/guides/)**

## 📧 Support

For questions or issues:

1. **Check existing issues**: [GitHub Issues](https://github.com/srikantharuban/mcpdemo/issues)
2. **Review documentation**: This README and inline comments
3. **Check pipeline logs**: GitHub Actions execution details
4. **Create new issue**: Include steps to reproduce and environment details

---

**🚀 Happy Testing!** This framework provides a solid foundation for automated testing with modern CI/CD practices.