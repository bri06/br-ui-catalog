import { html, fixture, expect } from '@open-wc/testing';

import '../br-button.js';

describe('BrButton', () => {

  it('passes the a11y audit', async () => {
    const el = await fixture(html`
      <br-button></br-button>
    `);

    await expect(el).shadowDom.to.be.accessible();
  });
});
