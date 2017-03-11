// passing in the $state service so we can switch states on form submit
app.controller('NewWoofController', function($state, StorageService) {
  this.maxTextLength = 120;
  this.allWoofsArray = [];
  this.create = function(woofMessage) {
    this.allWoofsArray = StorageService.get('all-woofs');

    // capturing submitted woof
    let woofObj = {
      body: woofMessage,
      starred: false,
      id: Date.now()
    };
    this.allWoofsArray.push(woofObj);
    StorageService.set('all-woofs', this.allWoofsArray);
    $state.go('woofParent.listWoofs');
  };
});
