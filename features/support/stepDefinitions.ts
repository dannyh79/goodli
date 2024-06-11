import { Given, Then, When } from '@cucumber/cucumber'
import { expect } from 'detox';

Given('I open the app', async () => {
  await device.reloadReactNative();
});

When('I tap {string}', async (text: string) => {
  await element(by.text(text)).tap();
});

Then('I can see {string}', async (text: string) => {
  await expect(element(by.text(text))).toBeVisible();
});

Then('I can see {string} from {string}', async (text: string, testId: string) => {
  const el = element(by.id(testId).and(by.text(text)));
  await expect(el).toBeVisible();
});

Then('There is {string}', async (testId: string) => {
  await expect(element(by.id(testId))).toBeVisible();
});
