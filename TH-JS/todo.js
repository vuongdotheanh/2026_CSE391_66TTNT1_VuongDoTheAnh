// Bước 1: Truy xuất các phần tử DOM cần tác động
const inputTaskName = document.getElementById("inputTaskName");
const btnAddTask = document.getElementById("btnAddTask");
const taskListContainer = document.getElementById("taskList");
const taskCountInfo = document.getElementById("taskCountInfo");

// Bước 2: Gắn sự kiện click cho nút "Thêm"
btnAddTask.addEventListener("click", function () {
    // Bước 2.1: Lấy giá trị từ ô input và loại bỏ khoảng trắng thừa
    const taskName = inputTaskName.value.trim();

    // Bước 2.2: Kiểm tra nếu ô input trống thì hiển thị thông báo
    if (taskName === "") {
        alert("Vui lòng nhập tên công việc!");
        return;
    }

    // Bước 2.3: Tạo phần tử <li> mới chứa tên công việc
    const newTaskItem = document.createElement("li");
    newTaskItem.classList.add("todo-item");

    // Bước 2.4: Tạo <span> chứa tên công việc
    const taskSpan = document.createElement("span");
    taskSpan.textContent = taskName;

    // Bước 2.5: Tạo nút "Xoá" cho mục công việc
    const btnDelete = document.createElement("button");
    btnDelete.textContent = "Xoá";
    btnDelete.classList.add("btn-delete");
    // nút chỉnh sửa
    const btnEdit = document.createElement("button");
    btnEdit.textContent = "Edit";
    btnEdit.classList.add("btn-edit");
    // Bước 2.6: Gắn sự kiện click cho nút "Xoá"
    btnDelete.addEventListener("click", function () {
        // Xoá phần tử <li> cha ra khỏi danh sách
        taskListContainer.removeChild(newTaskItem);
        // Sau khi xoá, gọi hàm cập nhật số lượng
        updateTaskCount();
    });

    // Bước 2.7: Ghép các phần tử lại và thêm vào danh sách
    newTaskItem.appendChild(taskSpan);
    newTaskItem.appendChild(btnDelete);
    newTaskItem.appendChild(btnEdit);
    taskListContainer.appendChild(newTaskItem);

    // Bước 2.8: Xoá giá trị ô input và cập nhật số lượng
    inputTaskName.value = "";
    updateTaskCount();
});

// Bước 3: Hàm cập nhật số lượng công việc
function updateTaskCount() {
    // Đếm số phần tử con của taskListContainer
    const count = taskListContainer.children.length;
    // Cập nhật nội dung taskCountInfo
    taskCountInfo.textContent = `Tổng: ${count} công việc`;
}
localStorage.clear();




fuction readDatalocal()
{
    let todos = JISON.parse(localStorage.getItem("todos")) || [];
    todos.forEach(function(todos))
    {
        btnAddTask.addEventListener("click", function () {})
    
}}