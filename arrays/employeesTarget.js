function getNumberOfTargetHittingEmployees(hours, target) {
    let count = 0;
    for (let i = 0; i < hours.length; i++) {
        if (hours[i] >= target) {
            count++;
        }
    }
    return count;
}
