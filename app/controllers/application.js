import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    handleUpdate(number, metaData) {
      this.set('number', number)
      this.setProperties(metaData)
      console.log('metaData', metaData);
    }
  }
});
