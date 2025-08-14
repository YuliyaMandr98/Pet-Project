import test, { expect } from "@playwright/test";
import fs from 'fs';

test.describe('Screenshot Tests', () => {
    // test('create logo baseline', async ({ page }) => {
    //     const baselinePath = 'tests/screenshots/logo.png';
    //     if (!fs.existsSync(baselinePath)) {
    //         await page.goto('https://innowisepl-test.inno.ws/');
    //         await page.setViewportSize({ width: 1280, height: 720 });
    //         const logo = page.locator('.new-block-logo').first();
    //         await logo.screenshot({ path: baselinePath });
    //         console.log('Эталон создан:', baselinePath);
    //     }
    // });

    // test('compare logo with baseline', async ({ page }) => {
    //     await page.goto('https://innowisepl-test.inno.ws/');
    //     await page.setViewportSize({ width: 1280, height: 720 });
    //     const logo = page.locator('.new-block-logo').first();
    //     await expect(logo).toHaveScreenshot('logo.png', { maxDiffPixelRatio: 0.01 });
    // });
});