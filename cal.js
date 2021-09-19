function f(d) {
    if (d == 'c') {
        document.getElementById('res').value = "";
        return;
    }//  Xử lý xóa hết các kí tự đã nhập vào ô có Id là res
    
    res = document.getElementById('res').value;
    if (res == 0 && d == 0)// Kiếm tra nếu res = 0 và giá trị nhập vô = 0
        return;
    
    if (d == '+' || d == '-' || d == '*' || d == '/') {
        opr = d;
        num = parseFloat(res);
        document.getElementById('res').value = d;
        return;// Hàm lưu các phép tính và giá trị đã nhập
    }
    if (d == '=') {
        num1 = parseFloat(res);
        switch (opr) {
            case '+': ans = num + num1; break;
            case '-': ans = num - num1; break;
            case '*': ans = num * num1; break;
            case '/': ans = parseInt(num / num1); break;
        }
        document.getElementById('res').value = ans;
        return;// Hàm xử lý các phép toán 
    }
    if (d == '--') {
        document.getElementById('res').value *= -1;
        return;// Hàm chuyển giá trị nguyên dương, nguyên âm của các số
    }
    if (!isNaN(document.getElementById('res').value))
        document.getElementById('res').value += d;
    else
        document.getElementById('res').value = d;// thực hiện tiếp các phép toán

}