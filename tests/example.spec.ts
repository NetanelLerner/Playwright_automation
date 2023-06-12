import { test, expect } from '@playwright/test'

test('simple basic test', async ({ page }) =>{
    await page.goto("https://www.way2automation.com/")
    const pageTitle = await page.locator('#post-17 > div > div > section.elementor-section.elementor-top-section.elementor-element.elementor-element-1e537621.elementor-section-boxed.elementor-section-height-default.elementor-section-height-default > div > div > div > section > div > div.elementor-column.elementor-col-25.elementor-inner-column.elementor-element.elementor-element-b3fcb42 > div > div.elementor-element.elementor-element-ee9b1e1.elementor-view-default.elementor-mobile-position-top.elementor-vertical-align-top.elementor-widget.elementor-widget-icon-box > div > div > div.elementor-icon-box-content > h3 > span')
    await expect(pageTitle).toContainText(' Corporate Training ')
})

// send keys and click
test('simple basic test2', async ({ page }) =>{
    await page.goto("https://www.amazon.com/")
    await page.type('#twotabsearchtextbox', "guitar")
    await page.click('#nav-search-submit-button')
})


// assertions
test('simple basic test2', async ({ page }) =>{
    await page.goto("https://www.amazon.com/")
    await expect(page).toHaveURL("https://www.amazon.com/")
    await expect(page).toHaveTitle("its need to be under the head tag")
    const element = await page.locator('#nav-search-submit-button')
    await expect(element).toBeVisible()
    await expect(element).toHaveText("some text")
    await expect(element).toHaveCount(1)
    await expect(element).not.toBeVisible()
})