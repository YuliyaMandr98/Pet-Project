import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://innowisepl-test.inno.ws/');
  await expect(page.locator('.new-block-logo > svg')).toBeVisible();
  await expect(page.locator('h1')).toContainText('Global software development company Transparent. Flexible. Reliable.');
  await expect(page.getByRole('link', { name: 'About us' }).first()).toBeVisible();
  await expect(page.locator('body')).toContainText('About us');
  await page.getByRole('link', { name: 'About us' }).first().click();
  await expect(page.locator('h1')).toContainText('About us');
});