// NOTE: step defs are ony tested on iOS

import { Given, Then, When } from '@cucumber/cucumber'
import { expect } from 'detox';

Given('I open the app', async () => {
  await device.reloadReactNative();
});

When('I tap by id {string}', async (testId: string) => {
  const el = element(by.id(testId));
  await expect(el).toBeVisible();
  await el.tap();
});

When('I tap {string} by id {string}', async (text: string, testId: string) => {
  const el = element(by.id(testId).and(by.text(text)));
  await expect(el).toBeVisible();
  await el.tap();
});

When('I tap {string} in {string}', async (label: string, parentTestId: string) => {
  await element(by.id(parentTestId)).setColumnToValue(0, label);
});

Then('I can see {string} by id {string}', async (text: string, testId: string) => {
  const el = element(by.id(testId).and(by.text(text)));
  await expect(el).toBeVisible();
});

Then('There is {string}', async (testId: string) => {
  await expect(element(by.id(testId))).toBeVisible();
});

Then('There is {string} in {string}', async (testId: string, parentTestId: string) => {
  const el = element(by.id(parentTestId).withDescendant(by.id(testId)))
  await expect(el).toBeVisible();
});
