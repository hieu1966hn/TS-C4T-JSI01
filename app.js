// //  ES6
// const sum = (a, b) => {
//   return a + b;
// }

// // function sum1(a, b) {
// //   return a + b;
// // }

// console.log(sum(1, 2)); // KQ: 

// DOM: document object model

// Tương tác trực tiếp với HTML: Lấy ra thẻ h1 và in ra nó
// C1: sử dụng document.getElementById()
// let h1 = document.getElementById('title');

// C2: Sử dụng
// let h1 = document.querySelector('#title');
// h1.style.color = "blue"

// console.log(h1);



/////////////JS cơ bản

// khai báo biến: let, var, const (ưu tiên dùng let, const).
// Lý do: var dùng để khai báo biến toàn cục: => ko rõ phạm hoạt động.

// {
//   {
//     let a = 1
//     {
//       // console.log(a); // 1, ko in
//     }
//   }
// }
// console.log(a);// in ra ?


// loop: while, do-while, for

// VD: in ra từ 1 -> 10 bằng while (Lưu ý: trong (<điều kiện dừng>))
// let i = 1;
// while (i <= 10) { // kiểm tra dk (đúng) => chạy code bên trong
//   // code bên trong
//   console.log(i);// 1//2.../10
//   i = i + 1; //  i++//2//3 ../11
// }

///////////////// do - while
// do {
//   // code bên trong
//   console.log(i); //1
//   i++; // 2

// }
// while (i <= 10);


/////// vòng lặp for();

// for (let i = 1; i <= 10; i++) {
//   // code trong for
//   console.log(i);

// }




///////// Array: Mảng

// khai báo mảng
let arr = [1, "Hiếu", "Sơn", "Minh"]; // khai báo thành công 1 mảng rỗng
console.log(arr);


// Create,Read,Update,Delete với mảng

/// hàm nên học để thao tác với mảng: filter, find, indexOf, map(), ..

// Thêm phần tử vào mảng: array.push();

// arr.push("Việt")
// console.log("Mảng sau khi thêm phần tử là", arr);

// // thêm phần tử vào vị trí chỉ định: Sử dụng phương thức Array.splice()
// let vitriHieu = arr.indexOf("Hiếu")
// // Sử dụng hàm indexOf để tìm vị trí đầu tiên của ... trong mảng
// console.log(vitriHieu);
// arr.splice(vitriHieu + 1, 0, "Dạy");
// console.log(`Mảng sau khi thêm phần tử ở vị trí thứ ${vitriHieu + 1} là`, arr);



// update phần tử mảng: 
// let vitriHieu = arr.indexOf("Hiếu")
// arr[vitriHieu] = "HieuPro"

// console.log(`Mảng sau khi update phần tử ở vị trí thứ ${vitriHieu} là`, arr);


/// Delete phần tử mảng
// let son = arr.indexOf("Sơn")
// console.log(son);

// // xóa
// arr.splice(son, 1);
// console.log(`Mảng sau khi delete phần tử ở vị trí thứ ${son} là`, arr);