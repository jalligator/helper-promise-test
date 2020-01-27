export function initialize(appInstance) {
  let store = appInstance.lookup('service:store');
  let record = store.createRecord('myParent', {name: 'abc'});
  record.save();
}

export default {
  initialize
};
