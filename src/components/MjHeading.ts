import { BodyComponent } from 'mjml-core';
import { registerDependencies } from 'mjml-validator';

import { theme } from '../theme.js';

registerDependencies({
  'mj-column': ['mj-heading'],
});

export class MjHeading extends BodyComponent {
  render(): string {
    return this.renderMJML(`
      <mj-section padding="0">
        <mj-column>
          <mj-text font-size="20px" font-weight="700" color="${theme.colors.primaryText}">
            <h1 style="margin: 10px;">
              ${this.props.children}
            </h1>
          </mj-text>
        </mj-column>
      </mj-section>
    `);
  }
}
