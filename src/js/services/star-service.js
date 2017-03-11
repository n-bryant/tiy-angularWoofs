// setting StorageService as a dependency for StarService
app.service('StarService', function(StorageService) {
  // get a woof object by id
  function findWolfByID(woofsArray, id) {
    let woofMatch;
    woofsArray.forEach((woofItem) => {
      if (woofItem.id === id) {
        woofMatch = woofItem;
      }
    });
    return woofMatch;
  }

  // toggle starred status on woof, and updates the woof's star value in local storage
  function updateStarValue(woofObj) {
    woofObj.starred = !woofObj.starred;
    let allWoofsArray = StorageService.get('all-woofs');
    let woofToUpdate = findWolfByID(allWoofsArray, woofObj.id);

    // copy() is an angular method that creates a copy of an object or array
    // the left argument overwrites the right argument
    angular.copy(woofObj, woofToUpdate);
    StorageService.set('all-woofs', allWoofsArray);
  }

  return {
    update: updateStarValue
  };
});
