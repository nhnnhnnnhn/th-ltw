document.addEventListener('DOMContentLoaded', () => {
  // Kiểm tra và hiển thị thông tin sinh viên
  const studentInfoJson = localStorage.getItem('studentInfo');
  if (!studentInfoJson) {
    // Nếu không có thông tin sinh viên, chuyển hướng về trang chủ
    window.location.href = 'index.html';
    return;
  }

  const studentInfo = JSON.parse(studentInfoJson);
  
  // Hiển thị thông tin sinh viên
  document.getElementById('displayFullName').textContent = studentInfo.fullName;
  document.getElementById('displayBirthDate').textContent = studentInfo.birthDate;
  document.getElementById('displayCCCD').textContent = studentInfo.CCCD;
  document.getElementById('displayAddress').textContent = studentInfo.address;

  // Tạo câu hỏi từ file questions.js
  const questions = generateQuestions();
  
  // Giới hạn số lượng câu hỏi mỗi loại
  const limitedQuestions = {
    trueFalse: questions.trueFalse.slice(0, 10),
    multipleChoice: questions.multipleChoice.slice(0, 10),
    multiSelect: questions.multiSelect.slice(0, 10),
    essay: questions.essay.slice(0, 10)
  };

  // Biến lưu trữ câu trả lời
  const answers = {
    trueFalse: {},
    multipleChoice: {},
    multiSelect: {},
    essay: {}
  };

  // Render câu hỏi đúng/sai
  const trueFalseContainer = document.getElementById('trueFalseQuestions');
  limitedQuestions.trueFalse.forEach((question, index) => {
    const questionHTML = createTrueFalseQuestion(question, index);
    trueFalseContainer.appendChild(questionHTML);
  });

  // Render câu hỏi trắc nghiệm
  const multipleChoiceContainer = document.getElementById('multipleChoiceQuestions');
  limitedQuestions.multipleChoice.forEach((question, index) => {
    const questionHTML = createMultipleChoiceQuestion(question, index + 10);
    multipleChoiceContainer.appendChild(questionHTML);
  });

  // Render câu hỏi nhiều đáp án
  const multiSelectContainer = document.getElementById('multiSelectQuestions');
  limitedQuestions.multiSelect.forEach((question, index) => {
    const questionHTML = createMultiSelectQuestion(question, index + 20);
    multiSelectContainer.appendChild(questionHTML);
  });

  // Render câu hỏi tự luận
  const essayContainer = document.getElementById('essayQuestions');
  limitedQuestions.essay.forEach((question, index) => {
    const questionHTML = createEssayQuestion(question, index + 30);
    essayContainer.appendChild(questionHTML);
  });

  // Xử lý nút nộp bài
  const submitBtn = document.getElementById('submitBtn');
  submitBtn.addEventListener('click', () => {
    submitExam(limitedQuestions);
  });

  // Hàm tạo câu hỏi đúng/sai
  function createTrueFalseQuestion(question, index) {
    const questionDiv = document.createElement('div');
    questionDiv.className = 'question-item';
    questionDiv.dataset.id = question.id;
    questionDiv.dataset.type = 'trueFalse';
    
    const questionText = document.createElement('p');
    questionText.className = 'question-text';
    questionText.innerHTML = `<span class="question-number">Câu ${index + 1}:</span> ${question.text}`;
    
    const optionsDiv = document.createElement('div');
    optionsDiv.className = 'true-false-options';
    
    // Tạo lựa chọn Đúng
    const trueLabel = document.createElement('label');
    trueLabel.className = 'option-label';
    trueLabel.innerHTML = `
      <input type="radio" name="tf-${question.id}" value="true">
      <span>Đúng</span>
    `;
    
    // Tạo lựa chọn Sai
    const falseLabel = document.createElement('label');
    falseLabel.className = 'option-label';
    falseLabel.innerHTML = `
      <input type="radio" name="tf-${question.id}" value="false">
      <span>Sai</span>
    `;
    
    // Thêm sự kiện khi chọn đáp án
    trueLabel.querySelector('input').addEventListener('change', function() {
      answers.trueFalse[question.id] = true;
      trueLabel.classList.add('selected');
      falseLabel.classList.remove('selected');
    });
    
    falseLabel.querySelector('input').addEventListener('change', function() {
      answers.trueFalse[question.id] = false;
      falseLabel.classList.add('selected');
      trueLabel.classList.remove('selected');
    });
    
    // Thêm các phần tử vào container
    optionsDiv.appendChild(trueLabel);
    optionsDiv.appendChild(falseLabel);
    
    // Tạo phần hiển thị kết quả (ban đầu ẩn đi)
    const feedbackDiv = document.createElement('div');
    feedbackDiv.className = 'answer-feedback hidden';
    feedbackDiv.id = `feedback-${question.id}`;
    
    // Thêm tất cả vào question item
    questionDiv.appendChild(questionText);
    questionDiv.appendChild(optionsDiv);
    questionDiv.appendChild(feedbackDiv);
    
    return questionDiv;
  }

  // Hàm tạo câu hỏi trắc nghiệm
  function createMultipleChoiceQuestion(question, index) {
    const questionDiv = document.createElement('div');
    questionDiv.className = 'question-item';
    questionDiv.dataset.id = question.id;
    questionDiv.dataset.type = 'multipleChoice';
    
    const questionText = document.createElement('p');
    questionText.className = 'question-text';
    questionText.innerHTML = `<span class="question-number">Câu ${index + 1}:</span> ${question.text}`;
    
    const optionsDiv = document.createElement('div');
    optionsDiv.className = 'multiple-choice-options';
    
    // Tạo các lựa chọn
    question.options.forEach(option => {
      const optionLabel = document.createElement('label');
      optionLabel.className = 'option-label';
      optionLabel.innerHTML = `
        <input type="radio" name="mc-${question.id}" value="${option.id}">
        <span>${option.text}</span>
      `;
      
      // Thêm sự kiện khi chọn đáp án
      optionLabel.querySelector('input').addEventListener('change', function() {
        answers.multipleChoice[question.id] = option.id;
        
        // Loại bỏ class selected từ tất cả các lựa chọn
        Array.from(optionsDiv.querySelectorAll('.option-label')).forEach(label => {
          label.classList.remove('selected');
        });
        
        // Thêm class selected cho lựa chọn hiện tại
        optionLabel.classList.add('selected');
      });
      
      optionsDiv.appendChild(optionLabel);
    });
    
    // Tạo phần hiển thị kết quả (ban đầu ẩn đi)
    const feedbackDiv = document.createElement('div');
    feedbackDiv.className = 'answer-feedback hidden';
    feedbackDiv.id = `feedback-${question.id}`;
    
    // Thêm tất cả vào question item
    questionDiv.appendChild(questionText);
    questionDiv.appendChild(optionsDiv);
    questionDiv.appendChild(feedbackDiv);
    
    return questionDiv;
  }

  // Hàm tạo câu hỏi nhiều đáp án
  function createMultiSelectQuestion(question, index) {
    const questionDiv = document.createElement('div');
    questionDiv.className = 'question-item';
    questionDiv.dataset.id = question.id;
    questionDiv.dataset.type = 'multiSelect';
    
    const questionText = document.createElement('p');
    questionText.className = 'question-text';
    questionText.innerHTML = `<span class="question-number">Câu ${index + 1}:</span> ${question.text}`;
    
    const hintText = document.createElement('p');
    hintText.className = 'multiple-select-hint';
    hintText.textContent = '(Chọn tất cả các đáp án đúng)';
    
    const optionsDiv = document.createElement('div');
    optionsDiv.className = 'multiple-select-options';
    
    // Khởi tạo mảng lưu trữ câu trả lời cho câu hỏi này
    answers.multiSelect[question.id] = [];
    
    // Tạo các lựa chọn
    question.options.forEach(option => {
      const optionLabel = document.createElement('label');
      optionLabel.className = 'option-label';
      optionLabel.innerHTML = `
        <input type="checkbox" name="ms-${question.id}" value="${option.id}">
        <span>${option.text}</span>
      `;
      
      // Thêm sự kiện khi chọn đáp án
      optionLabel.querySelector('input').addEventListener('change', function(e) {
        if (e.target.checked) {
          // Thêm vào danh sách đáp án đã chọn
          answers.multiSelect[question.id].push(option.id);
          optionLabel.classList.add('selected');
        } else {
          // Loại bỏ khỏi danh sách đáp án đã chọn
          const index = answers.multiSelect[question.id].indexOf(option.id);
          if (index !== -1) {
            answers.multiSelect[question.id].splice(index, 1);
          }
          optionLabel.classList.remove('selected');
        }
      });
      
      optionsDiv.appendChild(optionLabel);
    });
    
    // Tạo phần hiển thị kết quả (ban đầu ẩn đi)
    const feedbackDiv = document.createElement('div');
    feedbackDiv.className = 'answer-feedback hidden';
    feedbackDiv.id = `feedback-${question.id}`;
    
    // Thêm tất cả vào question item
    questionDiv.appendChild(questionText);
    questionDiv.appendChild(hintText);
    questionDiv.appendChild(optionsDiv);
    questionDiv.appendChild(feedbackDiv);
    
    return questionDiv;
  }

  // Hàm tạo câu hỏi tự luận
  function createEssayQuestion(question, index) {
    const questionDiv = document.createElement('div');
    questionDiv.className = 'question-item';
    questionDiv.dataset.id = question.id;
    questionDiv.dataset.type = 'essay';
    
    const questionText = document.createElement('p');
    questionText.className = 'question-text';
    questionText.innerHTML = `<span class="question-number">Câu ${index + 1}:</span> ${question.text}`;
    
    const textarea = document.createElement('textarea');
    textarea.className = 'essay-textarea';
    textarea.placeholder = 'Nhập câu trả lời của bạn...';
    
    // Thêm sự kiện khi nhập câu trả lời
    textarea.addEventListener('input', function(e) {
      answers.essay[question.id] = e.target.value;
    });
    
    // Tạo phần hiển thị gợi ý đáp án (ban đầu ẩn đi)
    const suggestedAnswer = document.createElement('div');
    suggestedAnswer.className = 'suggested-answer hidden';
    suggestedAnswer.id = `suggested-${question.id}`;
    suggestedAnswer.innerHTML = `
      <p class="suggested-answer-title">Gợi ý đáp án:</p>
      <p>${question.suggestedAnswer}</p>
    `;
    
    // Thêm tất cả vào question item
    questionDiv.appendChild(questionText);
    questionDiv.appendChild(textarea);
    questionDiv.appendChild(suggestedAnswer);
    
    return questionDiv;
  }

  // Hàm xử lý nộp bài
  function submitExam(questions) {
    let score = 0;
    
    // Kiểm tra câu hỏi đúng/sai
    questions.trueFalse.forEach(question => {
      const userAnswer = answers.trueFalse[question.id];
      const feedbackDiv = document.getElementById(`feedback-${question.id}`);
      
      feedbackDiv.classList.remove('hidden');
      
      if (userAnswer === question.correctAnswer) {
        score++;
        feedbackDiv.classList.add('correct-feedback');
        feedbackDiv.textContent = "Chính xác!";
      } else {
        feedbackDiv.classList.add('incorrect-feedback');
        feedbackDiv.textContent = `Không chính xác. Đáp án đúng là: ${question.correctAnswer ? "Đúng" : "Sai"}`;
      }
      
      // Đánh dấu đáp án đúng và sai
      const options = document.querySelectorAll(`[name="tf-${question.id}"]`);
      options.forEach(option => {
        const optionLabel = option.closest('.option-label');
        const isTrue = option.value === "true";
        
        // Vô hiệu hóa input
        option.disabled = true;
        
        // Đánh dấu đáp án đúng
        if (isTrue === question.correctAnswer) {
          optionLabel.classList.add('correct');
        }
        
        // Đánh dấu lựa chọn của người dùng nếu sai
        if (userAnswer !== null && isTrue === userAnswer && userAnswer !== question.correctAnswer) {
          optionLabel.classList.add('incorrect');
        }
      });
    });
    
    // Kiểm tra câu hỏi trắc nghiệm
    questions.multipleChoice.forEach(question => {
      const userAnswer = answers.multipleChoice[question.id];
      const feedbackDiv = document.getElementById(`feedback-${question.id}`);
      
      feedbackDiv.classList.remove('hidden');
      
      if (userAnswer === question.correctAnswer) {
        score++;
        feedbackDiv.classList.add('correct-feedback');
        feedbackDiv.textContent = "Chính xác!";
      } else {
        feedbackDiv.classList.add('incorrect-feedback');
        const correctOption = question.options.find(opt => opt.id === question.correctAnswer);
        feedbackDiv.textContent = `Không chính xác. Đáp án đúng là: ${correctOption.text}`;
      }
      
      // Đánh dấu đáp án đúng và sai
      const options = document.querySelectorAll(`[name="mc-${question.id}"]`);
      options.forEach(option => {
        const optionLabel = option.closest('.option-label');
        const optionValue = option.value;
        
        // Vô hiệu hóa input
        option.disabled = true;
        
        // Đánh dấu đáp án đúng
        if (optionValue === question.correctAnswer) {
          optionLabel.classList.add('correct');
        }
        
        // Đánh dấu lựa chọn của người dùng nếu sai
        if (userAnswer && optionValue === userAnswer && userAnswer !== question.correctAnswer) {
          optionLabel.classList.add('incorrect');
        }
      });
    });
    
    // Kiểm tra câu hỏi nhiều đáp án
    questions.multiSelect.forEach(question => {
      const userAnswer = answers.multiSelect[question.id] || [];
      const feedbackDiv = document.getElementById(`feedback-${question.id}`);
      
      feedbackDiv.classList.remove('hidden');
      
      const isCorrect = 
        userAnswer.length === question.correctAnswer.length && 
        userAnswer.every(ans => question.correctAnswer.includes(ans));
      
      if (isCorrect) {
        score++;
        feedbackDiv.classList.add('correct-feedback');
        feedbackDiv.textContent = "Chính xác!";
      } else {
        feedbackDiv.classList.add('incorrect-feedback');
        
        // Tạo danh sách đáp án đúng
        const correctLabels = question.correctAnswer.map(id => {
          const option = question.options.find(opt => opt.id === id);
          return option ? option.text : '';
        });
        
        // Hiển thị đáp án đúng dưới dạng danh sách
        feedbackDiv.innerHTML = `
          <p>Không chính xác. Đáp án đúng là:</p>
          <ul style="margin-left: 20px; margin-top: 5px;">
            ${correctLabels.map(text => `<li>${text}</li>`).join('')}
          </ul>
        `;
      }
      
      // Đánh dấu đáp án đúng và sai
      const options = document.querySelectorAll(`[name="ms-${question.id}"]`);
      options.forEach(option => {
        const optionLabel = option.closest('.option-label');
        const optionValue = option.value;
        
        // Vô hiệu hóa input
        option.disabled = true;
        
        // Đánh dấu đáp án đúng
        if (question.correctAnswer.includes(optionValue)) {
          optionLabel.classList.add('correct');
        }
        
        // Đánh dấu lựa chọn của người dùng nếu sai
        if (userAnswer.includes(optionValue) && !question.correctAnswer.includes(optionValue)) {
          optionLabel.classList.add('incorrect');
        }
      });
    });
    
    // Hiển thị gợi ý cho câu hỏi tự luận
    questions.essay.forEach(question => {
      const suggestedAnswer = document.getElementById(`suggested-${question.id}`);
      suggestedAnswer.classList.remove('hidden');
      
      // Vô hiệu hóa textarea
      const textarea = document.querySelector(`[data-id="${question.id}"] textarea`);
      textarea.disabled = true;
    });
    
    // Hiển thị điểm số
    document.getElementById('score').textContent = score;
    document.getElementById('resultContainer').classList.remove('hidden');
    
    // Ẩn nút nộp bài
    submitBtn.style.display = 'none';
    
    // Cuộn lên đầu trang
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}); 