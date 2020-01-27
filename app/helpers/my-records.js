import Helper from '@ember/component/helper';
import { inject as service } from '@ember/service';

export default class MyRecordsHelper extends Helper  {
  @service store;

  compute([modelName]){
    return this.store.findAll(modelName);
  }
}
