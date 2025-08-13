import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://innowisepl-test.inno.ws/');
  await expect(page.getByRole('link', { name: 'Talk to us' })).toBeVisible();
  await expect(page.locator('body')).toContainText('Talk to us');
  await page.getByRole('link', { name: 'Talk to us' }).click();
});