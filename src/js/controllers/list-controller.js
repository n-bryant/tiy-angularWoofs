// $stateParams gives us access to parameters on state url properties
app.controller('ListController', function(StorageService, StarService, $stateParams) {
  // private variables vs public properties:
    // if you defined with a conts/let you won't be able to access that thing outside the scope
    // if you use 'this', this.allWoofs, you can access it outside the scope
  this.allWoofs = StorageService.get('all-woofs');
  this.toggleStar = function(woofObj) {
    StarService.update(woofObj);
  };

  // setting default filter paremeter value of 'all'
  this.listFilter = $stateParams.filter || 'all';

  // setting dynamic filter values.  angular filter expects an object
  this.filterObj = {
    all: {},
    starred: {
      starred: true
    }
  }
});
