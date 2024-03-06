function isPalindrome(str){
    const strFormatada = str.replace(/\s/g, '').toLowerCase();

    while(strFormatada === strFormatada.split('').reverse().join('')){
        return true
    }

    return false
}

function arrayMaxMin(arr){
    let arrMin = arr[0];
    let arrMax = 0;

    for(let i = 0; i < arr.length; i++) {
       if(arr[i] < arrMin){
        arrMin = arr[i];
       } if(arrMax < arr[i]){
        arrMax = arr[i];
        }
    }
    return [arrMin, arrMax];
}