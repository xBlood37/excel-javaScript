import {ExcelComponent} from '@core/ExcelComponent';
import {createTable} from './table.tamplate';

import {resizeHandler} from './table.resize';
import {shouldResize} from './table.function';

export class Table extends ExcelComponent {
  static className = 'excel__table';

  constructor($root) {
    super($root, {
      listeners: ['mousedown'],
    });
  }

  toHTML() {
    return createTable(15);
  }

  onMousedown(event) {
    if (shouldResize(event)) {
      resizeHandler(this.$root, event);
    }
  }
}
