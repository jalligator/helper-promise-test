import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';

export default class MyRecordsComponentComponent extends Component {
  @service store;

  @computed() // <- this has to be here otherwise you get the same maximum call stack size exceeded message
  get records(){
    return this.store.findAll(this.args.modelName);
  }

}
