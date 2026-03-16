let products =[{ten: "iPhone 15", gia: 20},
    {ten: "Samsung A54", gia: 8},
    {ten: "Xiaomi Redmi 12", gia: 4},
    {ten: "Oppo Reno 10", gia: 11}

];
let btnALL = document.getElementById("btn-tat-ca");
let ulDS = document.getElementById("danh-sach-sp");
let btnGia = document.getElementById("btn-gia-re");
let btnSX = document.getElementById("btn-sap-xep");

// hàm giao diẹn
function GiaoDien(spham)
{
    ulDS.innerHTML = "";
    for(let i=0;i<spham.length;i++)
    {
        let li = document.createElement("li");
        li.innerText = spham[i].ten + " - Giá " + spham[i].gia + " Triệu VND";
        ulDS.appendChild(li);
}
    }
    
GiaoDien(products);


// gán sk cho nút all
btnALL.addEventListener("click", function(){
    GiaoDien(products);
})

// gán sự kiện cho nút lọc
btnGia.addEventListener("click", function(){
    let loc = [];
    for(let i = 0;i<products.length;i++)
    {
        if(products[i].gia < 10){
            loc.push(products[i]);
        }
        GiaoDien(loc);
    }
})

// gán sự kiện nút tăng dần

btnSX.addEventListener("click", function()
{
    let mangSX = Array.from(products);
    mangSX.sort(function(a,b) {return a.gia - b.gia; })
    GiaoDien(mangSX)    
})