function findLMV() {
    var str = document.getElementById('t1').value
    for (i = 0; i < str.length; i++) {
        if (str.charAt(i) == 'a' || str.charAt(i) == 'e'
            || str.charAt(i) == 'i' || str.charAt(i) == 'o' || str.charAt(i) == 'u')
            return ("Left most vowel of " + str + " is at location " + (i + 1));
    }// Hàm xử lý chữ cái, tìm kiếm vị trí các nguyên âm u e o a i trong 1 từ, 
    //  dùng vòng lặp for để duyệt chuỗi và trả về vị trí nguyên âm đầu tiên kiếm được.
    return ("No vowels found for string " + str);
}
function reverse(num) {
    rnum = 0;
    temp = num;
    if (isNaN(num)) {
        return "invalid number";
    }// Hàm kiểm tra kí tự nhập vào có phải là số hay không.
    while (num != 0) {
        rnum *= 10;
        rnum += num % 10;
        num -= num % 10;
        num = Math.floor(num / 10);// Dùng để làm tròn số nguyên gần nhất
    }// Vòng lặp dùng để đảo vị trí của các số 
    return "Reverse of num " + temp + " is " + rnum;
}
