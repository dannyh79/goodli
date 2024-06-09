import { Given, Then } from '@cucumber/cucumber'
import { expect } from 'detox';

Given('I open the app', async () => {
  await device.reloadReactNative();
});

Then('I can see {string}', async (text: string) => {
  await expect(element(by.text(text))).toBeVisible();
});
