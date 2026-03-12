// kịch bản 
// b1 : khi bấm nút thêm kiểm tra họ tene != trống , điểm hợp lệ (0-10) sai hiện alerf
let inputName = document.getElementById("name");
let inputScore = document.getElementById("score");
let btnAdd = document.getElementById("btn-add");
let btnDelete = document.getElementById("btn-delete");
let tableBody = document.getElementById("tbody");

btnAdd.addEventListener("click", function(event){
    event.preventDefault();
    let ten = inputName.value.trim();
    let diem = inputScore.value.trim();
    if(!ten || isNaN(diem) || diem < 0 || diem > 10){
        alert("Tên hoặc điểm không hợp lệ");
        return;
    }
    
    let xeploai = "";
    if (diem < 5 ) xeploai= "Yếu";
    else if(diem < 7) xeploai ="Trung Bình";
    else if(diem <8.5) xeploai ="khá";
    else xeploai ="Giỏi";
    let stt = tableBody.rows.length + 1;
    let hangmoi = document.createElement("tr");
    if(diem < 5)
    {
        hangmoi.style.backgroundColor = "#c2a851";
    }
    hangmoi.innerHTML = `
    <td> ${stt}</td>
    <td> ${ten}</td>
    <td> ${diem}</td>
    <td> ${xeploai}</td>
    <td><button class="btn-delete">Xóa</button></td>
    `;
    tableBody.appendChild(hangmoi);
    inputName.value ="";
    inputScore.value ="";
    inputName.focus();
})
function updateSTT()
{
    let newstt = tableBody.rows;
    for(i=0;i<newstt.length;i++)
    {
        newstt[i].cells[0].innerText = i + 1;
    }
}

tableBody.addEventListener("click", function(event){
    if(event.target.classList.contains("btn-delete"))
    {
        let xoahang = event.target.parentElement.parentElement;
        let xacnhan = confirm("Đồng ý xóa?");
        if(xacnhan){
            xoahang.remove();
        }
    }
    updateSTT()
})
