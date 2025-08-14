import test, { expect } from "@playwright/test";
import fs from 'fs';

test('screenshot tests', async ({ page }) => {
    // await page.goto('https://innowisepl-test.inno.ws/');
    // await page.setViewportSize({ width: 1280, height: 720 });
    // const baselinePath = 'tests/screenshots/logo.png';
    // const logo = page.locator('.new-block-logo').first();
    // if (!fs.existsSync(baselinePath)) {
    //     await logo.screenshot({ path: baselinePath });
    //     console.log('Эталонный скриншот сохранён:', baselinePath);
    // }
    // await expect(logo).toHaveScreenshot('logo.png', {
    //     maxDiffPixelRatio: 0.01,
    // });
});