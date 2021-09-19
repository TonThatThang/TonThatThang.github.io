function sc() {
    rng = prompt('Enter the range');
    res = rng.split("-");
    if (res.length != 2) {
    alert("invalid range ");
    return;// Hàm xử lý nhập các số giữ các số ngăn cách bằng 1 dấu '-' nếu không nhập hoặc nhập 2 dấu trở lên thì sẽ ra hộp thoại báo lỗi
    }
    first = parseInt(res[0]);
    second = parseInt(res[1]);
    if (first > second) {
    alert("invalid range ");
    return;// Hàm xử lý nếu nhập số đầu lớn hơn số sau thì sẽ ra hộp thoại báo lỗi
    }
    str = "<table border=2><tr><th>Number</th><th>Square</th><th>Cube</th></tr>";
    for (i = first; i <= second; i++) {
    str = str + "<tr><td>" + i + "<td>" + (i * i) + "<td>" + (i * i * i);
    }// Hàm tạo bảng và xử lý kết quả trong từng cột, cột 1 là giá trị các số đã nhập vào, cột 2 là bình phương, cột 3 là lập phương
    document.write(str);
   }