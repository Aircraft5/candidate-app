import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, fillIn, click } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | document-editor', function(hooks) {
  setupRenderingTest(hooks);

  test('should display document name input field', async function (assert) {
    await render(hbs`<DocumentEditor />`);
    assert.dom('.document-name').exists('document name input should exist');
  });

  test('should display document contents input field', async function (assert) {
    await render(hbs`<DocumentEditor />`);
    assert.dom('.document-contents').exists('document contents input should exist');
  });

  test('should display Save button', async function (assert) {
    await render(hbs`<DocumentEditor />`);
    assert.dom('.document-save-button').exists('document Save button should exist');
  });

  test('should display Cancel button', async function (assert) {
    await render(hbs`<DocumentEditor />`);
    assert.dom('.document-cancel-button').exists('document Cancel button should exist');
  });

  test('Save button should be of submit type', async function (assert) {
    await render(hbs`<DocumentEditor />`);
    assert.equal(
      this.element.querySelector('.document-save-button').getAttribute('type'),
      'submit',
      'should be of submit type'
    );
  });

  test('Cancel button should reset the form', async function (assert) {
    await render(hbs`<DocumentEditor />`);
    await fillIn(this.element.querySelector('.document-name'), 'Document name');
    await fillIn(this.element.querySelector('.document-contents'), 'Document contents');

    await click('.document-cancel-button');

    assert.equal(this.element.querySelector('.document-name').value, '', 'document name was cleared');
    assert.equal(this.element.querySelector('.document-contents').value, '', 'document contents was cleared');
  });
});
