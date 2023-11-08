import { BodyComponent } from 'mjml-core';
import { registerDependencies } from 'mjml-validator';

const headerImageUrl =
  'https://raw.githubusercontent.com/medici-uy/identity/main/assets/logo-name.svg';

registerDependencies({
  'mj-layout': [
    'mj-accordion',
    'mj-button',
    'mj-carousel',
    'mj-divider',
    'mj-html',
    'mj-image',
    'mj-raw',
    'mj-section',
    'mj-social',
    'mj-spacer',
    'mj-table',
    'mj-text',
    'mj-navbar',
  ],
  'mj-body': ['mj-layout'],
});

export class MjLayout extends BodyComponent {
  render(): string {
    return this.renderMJML(`
      <mj-section>
        <mj-column>
          <mj-image
            src="${headerImageUrl}"
            href="https://medici.uy"
            width="100px"
            alt="Logo de medici."
          ></mj-image>
          <mj-divider border-color="#0511fa" border-width="2px"></mj-divider>
        </mj-column>
      </mj-section>
      ${this.renderChildren(this.props.children, { rawXML: true })}
    `);
  }
}
