// Apply Functional Programming to Convert Strings to URL Slugs

function urlSlug(title) {
    return title.toLowerCase().trim().split(/\s+/).join("-");
  }
  console.log(urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone"));


// Use the every Method to Check that Every Element in an Array Meets a Criteria

function checkPositive(arr) {
    return arr.every(val => val > 0);
  }
  console.log(checkPositive([1, 2, 3, -4, 5]));




// Use the some Method to Check that Any Elements in an Array Meet a Criteria

function checkPositive(arr) {
  
    return arr.some(val => val > 0);
  }
  console.log(checkPositive([1, 2, 3, -4, 5]));