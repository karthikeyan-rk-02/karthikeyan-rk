import test from 'node:test';
import assert from 'node:assert/strict';
import {
  filterProjects,
  formatHUDClock,
  validateContactForm,
  processCLICommand
} from './telemetryUtils';
import { INITIAL_PROJECTS } from '../data/portfolioData';

test('filterProjects filters correctly by category and query', () => {
  // Test All category
  const all = filterProjects(INITIAL_PROJECTS, 'all', '');
  assert.equal(all.length, INITIAL_PROJECTS.length);

  // Test web-apps category
  const webApps = filterProjects(INITIAL_PROJECTS, 'web-apps', '');
  assert.ok(webApps.length > 0);
  assert.ok(webApps.every(p => p.category === 'web-apps'));

  // Test keyword search
  const queryResult = filterProjects(INITIAL_PROJECTS, 'all', 'kanban');
  assert.equal(queryResult.length, 1);
  assert.equal(queryResult[0].id, 'taskflow');

  // Test tag search
  const tagResult = filterProjects(INITIAL_PROJECTS, 'all', 'three.js');
  assert.equal(tagResult.length, 1);
  assert.equal(tagResult[0].id, 'echo-portfolio');
});

test('formatHUDClock returns formatted 12-hour timestamp with AM/PM', () => {
  const morning = new Date(2026, 10, 7, 9, 5, 2);
  const formattedMorning = formatHUDClock(morning);
  assert.equal(formattedMorning, '09:05:02 AM');

  const night = new Date(2026, 10, 7, 22, 24, 37);
  const formattedNight = formatHUDClock(night);
  assert.equal(formattedNight, '10:24:37 PM');
});

test('validateContactForm accurately validates inputs', () => {
  const invalid = validateContactForm({
    name: 'A',
    email: 'bad-email',
    subject: 'hi',
    message: 'short'
  });
  assert.ok(invalid.name);
  assert.ok(invalid.email);
  assert.ok(invalid.subject);
  assert.ok(invalid.message);

  const valid = validateContactForm({
    name: 'Alex Morgan',
    email: 'alex@company.com',
    subject: 'Project Inquiry',
    message: 'We would love to talk to you about a new architecture project.'
  });
  assert.deepEqual(valid, {});
});

test('processCLICommand handles commands properly', () => {
  const helpCmd = processCLICommand('help');
  assert.equal(helpCmd.action, 'help');

  const projCmd = processCLICommand('projects');
  assert.equal(projCmd.action, 'navigate');
  assert.equal(projCmd.targetSection, '#projects-section');

  const emptyCmd = processCLICommand('   ');
  assert.equal(emptyCmd.isError, true);
});
