document.addEventListener('DOMContentLoaded', () => {
  // Lấy form
  const studentForm = document.getElementById('studentForm');
  
  // Xử lý sự kiện submit form
  studentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Lấy giá trị từ form
    const fullName = document.getElementById('fullName').value;
    const birthDate = document.getElementById('birthDate').value;
    const CCCD = document.getElementById('CCCD').value;
    const address = document.getElementById('address').value;
    
    // Lưu thông tin vào localStorage
    const studentInfo = {
      fullName,
      birthDate,
      CCCD,
      address
    };
    
    localStorage.setItem('studentInfo', JSON.stringify(studentInfo));
    
    // Chuyển hướng đến trang bài thi
    window.location.href = 'exam.html';
  });
}); 