import Helper from '@ember/component/helper';
import { getOwner } from '@ember/application';

export default class MyRecords2Helper extends Helper  {

  compute([modelName]){
    return getOwner(this).lookup('service:store').findAll(modelName);
  }
}
