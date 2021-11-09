import { storiesOf } from '@storybook/angular';
import { MatExpansionModule } from '@angular/material/expansion';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { PruebaComponent } from 'src/app/components/prueba/prueba.component';

storiesOf('Expansion Panel', module)
  .add('Basic', () => ({
    component: PruebaComponent,
    props: {
      // onChange: action('change')
    },
    moduleMetadata: {
      imports: [MatExpansionModule, BrowserAnimationsModule]
    }
  }));