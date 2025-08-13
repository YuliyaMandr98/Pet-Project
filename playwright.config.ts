import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
    retries: 2,
    testDir: './tests',
    expect: {
        timeout: 5000,
    },
    reporter: [['list'], ['html', { open: 'never' }], ['allure-playwright']],
    use: {
        headless: true,
        viewport: { width: 1280, height: 720 },
        ignoreHTTPSErrors: true,
        video: 'retain-on-failure',
        screenshot: 'only-on-failure',
    },
    projects: [
        {
            name: 'chromium',
            use: { ...devices['Desktop Chrome'] },
        },
        {
            name: 'firefox',
            use: { ...devices['Desktop Firefox'] },
        },
        {
            name: 'webkit',
            use: { ...devices['Desktop Safari'] },
        },
    ],
});
