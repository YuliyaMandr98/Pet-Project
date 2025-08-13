import test, { expect } from "@playwright/test";

test.describe('UI Tests', () => {
    test('check elements sizes', async ({ page }) => {
        await page.goto('https://innowisepl-test.inno.ws/');
        const element = page.locator('.new-menu-in .new-block-logo').first();
        const box = await element.boundingBox();
        expect(box).not.toBeNull();
        expect(box!.width).toBe(213);
        expect(box!.height).toBe(76);
    });

    test('check elements color', async ({ page }) => {
        await page.goto('https://innowisepl-test.inno.ws/');
        await page.setViewportSize({ width: 1278, height: 720 });
        const element = page.locator('.elementor-178237 .elementor-element.elementor-element-f717281 .elementor-heading-title').first();
        const fontSize = await element.evaluate(el => {
            return window.getComputedStyle(el).getPropertyValue('font-size');
        });
        expect(fontSize).toBe('46px');
    });
});

