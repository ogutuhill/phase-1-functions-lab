// 1. Function to calculate distance in blocks from Scuber HQ
function distanceFromHqInBlocks(someValue) {
    const hqLocation = 42; // Headquarters is on 42nd Street
    return Math.abs(someValue - hqLocation);
  }
  
  // 2. Function to calculate distance in feet from Scuber HQ
  function distanceFromHqInFeet(someValue) {
    const blocks = distanceFromHqInBlocks(someValue);
    return blocks * 264; // Each block is 264 feet
  }
  
  // 3. Function to calculate the distance travelled in feet between two points
  function distanceTravelledInFeet(start, destination) {
    const blocksTravelled = Math.abs(destination - start);
    return blocksTravelled * 264; // Each block is 264 feet
  }
  
  // 4. Function to calculate the fare price
  function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
  
    if (distance <= 400) {
      return 0; // First 400 feet are free
    } else if (distance > 400 && distance <= 2000) {
      return (distance - 400) * 0.02; // 2 cents per foot after the first 400 feet
    } else if (distance > 2000 && distance <= 2500) {
      return 25; // Flat fare for distances between 2000 and 2500 feet
    } else {
      return 'cannot travel that far'; // Rides over 2500 feet are not allowed
    }
  }
  
  // Export functions for testing (if required by the test suite)
  module.exports = {
    distanceFromHqInBlocks,
    distanceFromHqInFeet,
    distanceTravelledInFeet,
    calculatesFarePrice,
  };
  