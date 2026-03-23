document.addEventListener('DOMContentLoaded', function() {
    const studentListContainer = document.getElementById('student-list');
    let students = JSON.parse(localStorage.getItem('students')) || [];

    function renderStudents() {
        studentListContainer.innerHTML = ''; 

        if (students.length === 0) {
            studentListContainer.innerHTML = '<p class="text-center mt-4 text-muted">Chưa có sinh viên nào.</p>';
            return;
        }

        students.forEach(student => {
            const div = document.createElement('div');
            div.className = 'student-item d-flex justify-content-between align-items-center p-3 border-bottom';
            
            div.innerHTML = `
                <div>
                    <div class="fw-bold mb-1" style="font-size: 16px;">${student.fullname}</div>
                    <div class="text-muted" style="font-size: 13px;">
                        Mã SV: ${student.msv} | Email: ${student.email} | SĐT: ${student.phone} <br>
                        Ngành: ${student.study} | Giới tính: ${student.gender}
                    </div>
                </div>
                <div>
                    <button class="btn btn-warning btn-sm me-2 text-dark fw-bold" onclick="editStudent('${student.msv}')">Sửa</button>
                    <button class="btn btn-danger btn-sm fw-bold" onclick="deleteStudent('${student.msv}')">Xoá</button>
                </div>
            `;
            studentListContainer.appendChild(div);
        });
    }

    window.editStudent = function(msv) {
        window.location.href = `register-student.html?id=${msv}`;
    };

    window.deleteStudent = function(msv) {
        if (confirm(`Bạn có chắc chắn muốn xoá sinh viên mã ${msv} không?`)) {
            students = students.filter(s => s.msv !== msv);
            localStorage.setItem('students', JSON.stringify(students));
            renderStudents();
        }
    };

    renderStudents();
});