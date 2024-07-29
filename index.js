// Code your solution in this file!

//function distanceFromHqInBlocks(blocksToHq, pickupLocation){
    //const blocksToHq = 42;
    //let pickupLocation = 1
    //return blocksToHq - pickupLocation;
   //}

function distanceFromHqInBlocks(pickupLocation) {
    const blocksToHq = 42;
    if (pickupLocation > blocksToHq) {
        return pickupLocation - blocksToHq
    } else { return blocksToHq - pickupLocation };
}

function distanceFromHqInFeet(pickupLocation) {
    let blocks = distanceFromHqInBlocks(pickupLocation)
    return blocks * 264;
}
function distanceTravelledInFeet(start, end) {  
    if (end > start) {
        return (end - start) * 264}
        else if (end < start) {
            return (start - end) * 264}
}
function calculatesFarePrice(start, end) {
    let distanceInFeet = distanceTravelledInFeet(start, end) 
        if (distanceInFeet <= 400) {
            return 0;
        } else if (distanceInFeet >= 400 && distanceInFeet <= 2000 )
            return (distanceInFeet - 400) * 0.02;
            else if (distanceInFeet > 2000 && distanceInFeet < 2500) {
                return 25;
            } else if (distanceInFeet > 2500) {
                    return ('cannot travel that far');
                }
        }


