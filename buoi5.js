function tinhDienTich(chieuDai, chieuRong) {
    return chieuDai * chieuRong;

}

let area1 = tinhDienTich(5, 10);
console.log("Diện tích hình chữ nhật là: " + area1);

let area2 = tinhDienTich(7, 3);
console.log("Diện tích hình chữ nhật là: " + area2);


function tinhChuVi(chieuDai, chieuRong) {
    return (chieuDai + chieuRong) * 2;
}

let perimeter1 = tinhChuVi(8, 4);
console.log("Chu vi hình chữ nhật là: " + perimeter1);

let perimeter2 = tinhChuVi(16, 9);
console.log("Chu vi hình chữ nhật là: " + perimeter2);

function sayHello(name) {
    console.log("Xin chào " + name);
}
sayHello("Nguyen Van A");


function tinhTong(a, b,c) {
    return a + b + c;
}

let sum = tinhTong(5, 10, 15);
console.log("Tổng là: " + sum);

function tinhHieu(a, b) {
    return a - b;
}

let difference = tinhHieu(20, 8);
console.log("Hiệu là: " + difference);

function tinhTich(a, b) {
    return a * b;
}

let product = tinhTich(4, 6);
console.log("Tích là: " + product);

function tinhThuong(a, b) {
    if (b !== 0) {
        return a / b;
    } else {
        console.log("Không thể chia cho 0");
        return null;
    }
}

let quotient = tinhThuong(12, 3);
console.log("Thương là: " + quotient);

let quotient2 = tinhThuong(10, 0);
console.log("Thương là: " + quotient2);

//nháp
X = 5
Y = "5"
Z = X == Y
W = X === Y
console.log("Kết quả so sánh X == Y: " + Z);
console.log("Kết quả so sánh X === Y: " + W);

number = [1, 2, 3, 4, 5];
let arraySum = 0;
for (let i = 0; i < number.length; i++) {
    arraySum += number[i];
}
console.log("Tổng các số trong mảng là: " + arraySum);

document.getElementById("heading").innerHTML = "Nội dung mới"

//Thực hành

//bài 1
function tinhTongCacSoTu1DenN(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

let sumOfNumbers = tinhTongCacSoTu1DenN(parseInt(prompt("(Tổng các số từ 1 đến N) Nhập một số nguyên dương:")));
console.log("Tổng các số từ 1 đến " + sumOfNumbers + " là: " + sumOfNumbers);

//bài 2
function songuyenTo(n) {
    if (n < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

let number = parseInt(prompt("(Số nguyên tố) Nhập một số nguyên:"));
if (songuyenTo(number)) {
    console.log(number + " là số nguyên tố.");
} else {
    console.log(number + " không phải là số nguyên tố.");
}

//bài 3
function tinhGiaithuaSoNguyenDuong(n) {
    if (n < 0) {
        return "Không thể tính giai thừa của số âm";
    } else if (n === 0 || n === 1) {
        return 1;
    } else {
        let result = 1;
        for (let i = 2; i <= n; i++) {
            result *= i;
        }
        return result;
    }
}

let num = parseInt(prompt("(Giai thừa) Nhập một số nguyên dương:"));
let factorial = tinhGiaithuaSoNguyenDuong(num);
console.log("Giai thừa của " + num + " là: " + factorial);

//bài 4
function chuyenTuDoCSangDoF(doC) {
    let doF = (doC * 9 / 5) + 32;
    return doF;
}
let celsius = parseFloat(prompt("(Chuyển đổi nhiệt độ) Nhập nhiệt độ ở độ C:"));
let fahrenheit = chuyenTuDoCSangDoF(celsius);
console.log(celsius + " độ C tương đương với " + fahrenheit + " độ F");


