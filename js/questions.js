// Hàm tạo ID ngẫu nhiên
const generateId = () => {
  return Math.random().toString(36).substring(2, 15);
};

// Các câu hỏi đúng/sai demo
const trueFalseQuestions = [
  {
    id: generateId(),
    text: "HTML là ngôn ngữ lập trình",
    correctAnswer: false,
    type: "trueFalse",
  },
  {
    id: generateId(),
    text: "JavaScript là ngôn ngữ lập trình client-side",
    correctAnswer: true,
    type: "trueFalse",
  },
  {
    id: generateId(),
    text: "CSS được sử dụng để thêm tính năng tương tác cho trang web",
    correctAnswer: false,
    type: "trueFalse",
  },
  {
    id: generateId(),
    text: "React là một JavaScript framework",
    correctAnswer: false,
    type: "trueFalse",
  },
  {
    id: generateId(),
    text: "Node.js cho phép chạy JavaScript ở phía server",
    correctAnswer: true,
    type: "trueFalse",
  },
  {
    id: generateId(),
    text: "HTTP là giao thức truyền tải siêu văn bản",
    correctAnswer: true,
    type: "trueFalse",
  },
  {
    id: generateId(),
    text: "URL là viết tắt của Uniform Resource Locator",
    correctAnswer: true,
    type: "trueFalse",
  },
  {
    id: generateId(),
    text: "JSON là một định dạng dữ liệu dựa trên JavaScript",
    correctAnswer: true,
    type: "trueFalse",
  },
  {
    id: generateId(),
    text: "API là viết tắt của Application Programming Integration",
    correctAnswer: false,
    type: "trueFalse",
  },
  {
    id: generateId(),
    text: "Để tạo một trang web, bạn cần ít nhất 3 ngôn ngữ: HTML, CSS và JavaScript",
    correctAnswer: false,
    type: "trueFalse",
  },
];

// Các câu hỏi trắc nghiệm demo
const multipleChoiceQuestions = [
  {
    id: generateId(),
    text: "Đâu là ngôn ngữ đánh dấu được sử dụng để cấu trúc nội dung trang web?",
    options: [
      { id: "a", text: "CSS" },
      { id: "b", text: "HTML" },
      { id: "c", text: "JavaScript" },
      { id: "d", text: "PHP" },
    ],
    correctAnswer: "b",
    type: "multipleChoice",
  },
  {
    id: generateId(),
    text: "Đâu là thuộc tính CSS được sử dụng để thay đổi màu chữ?",
    options: [
      { id: "a", text: "background-color" },
      { id: "b", text: "text-style" },
      { id: "c", text: "color" },
      { id: "d", text: "font-color" },
    ],
    correctAnswer: "c",
    type: "multipleChoice",
  },
  {
    id: generateId(),
    text: "Đâu là hàm JavaScript được sử dụng để thực hiện các tác vụ sau một khoảng thời gian nhất định?",
    options: [
      { id: "a", text: "setTimeout()" },
      { id: "b", text: "setInterval()" },
      { id: "c", text: "setDelay()" },
      { id: "d", text: "wait()" },
    ],
    correctAnswer: "a",
    type: "multipleChoice",
  },
  {
    id: generateId(),
    text: "Đâu là thẻ HTML được sử dụng để tạo danh sách có thứ tự?",
    options: [
      { id: "a", text: "<ul>" },
      { id: "b", text: "<ol>" },
      { id: "c", text: "<li>" },
      { id: "d", text: "<dl>" },
    ],
    correctAnswer: "b",
    type: "multipleChoice",
  },
  {
    id: generateId(),
    text: "Đâu là thuộc tính JavaScript được sử dụng để lấy độ dài của một mảng?",
    options: [
      { id: "a", text: "length" },
      { id: "b", text: "size" },
      { id: "c", text: "count" },
      { id: "d", text: "items" },
    ],
    correctAnswer: "a",
    type: "multipleChoice",
  },
  {
    id: generateId(),
    text: "Đâu là Framework JavaScript phổ biến nhất hiện nay?",
    options: [
      { id: "a", text: "Angular" },
      { id: "b", text: "Vue.js" },
      { id: "c", text: "React" },
      { id: "d", text: "jQuery" },
    ],
    correctAnswer: "c",
    type: "multipleChoice",
  },
  {
    id: generateId(),
    text: "Phương thức HTTP nào được sử dụng để lấy dữ liệu từ server?",
    options: [
      { id: "a", text: "POST" },
      { id: "b", text: "PUT" },
      { id: "c", text: "DELETE" },
      { id: "d", text: "GET" },
    ],
    correctAnswer: "d",
    type: "multipleChoice",
  },
  {
    id: generateId(),
    text: "Đâu là cách khai báo biến trong JavaScript hiện đại?",
    options: [
      { id: "a", text: "var" },
      { id: "b", text: "let" },
      { id: "c", text: "const" },
      { id: "d", text: "Cả B và C" },
    ],
    correctAnswer: "d",
    type: "multipleChoice",
  },
  {
    id: generateId(),
    text: "Đâu là công cụ quản lý package phổ biến nhất cho JavaScript?",
    options: [
      { id: "a", text: "npm" },
      { id: "b", text: "yarn" },
      { id: "c", text: "bower" },
      { id: "d", text: "webpack" },
    ],
    correctAnswer: "a",
    type: "multipleChoice",
  },
  {
    id: generateId(),
    text: "Đâu là phương thức JavaScript dùng để chọn một phần tử HTML theo ID?",
    options: [
      { id: "a", text: "document.querySelector()" },
      { id: "b", text: "document.getElement()" },
      { id: "c", text: "document.getElementById()" },
      { id: "d", text: "document.find()" },
    ],
    correctAnswer: "c",
    type: "multipleChoice",
  },
];

// Các câu hỏi nhiều đáp án demo
const multiSelectQuestions = [
  {
    id: generateId(),
    text: "Chọn các ngôn ngữ lập trình front-end:",
    options: [
      { id: "a", text: "JavaScript" },
      { id: "b", text: "Python" },
      { id: "c", text: "TypeScript" },
      { id: "d", text: "Java" },
    ],
    correctAnswer: ["a", "c"],
    type: "multiSelect",
  },
  {
    id: generateId(),
    text: "Các phương thức HTTP nào dưới đây thường được sử dụng trong REST API?",
    options: [
      { id: "a", text: "GET" },
      { id: "b", text: "POST" },
      { id: "c", text: "SEND" },
      { id: "d", text: "DELETE" },
    ],
    correctAnswer: ["a", "b", "d"],
    type: "multiSelect",
  },
  {
    id: generateId(),
    text: "Đâu là các thuộc tính CSS liên quan đến layout?",
    options: [
      { id: "a", text: "color" },
      { id: "b", text: "display" },
      { id: "c", text: "position" },
      { id: "d", text: "font-family" },
    ],
    correctAnswer: ["b", "c"],
    type: "multiSelect",
  },
  {
    id: generateId(),
    text: "Chọn các công nghệ thuộc MERN stack:",
    options: [
      { id: "a", text: "MongoDB" },
      { id: "b", text: "Express.js" },
      { id: "c", text: "React" },
      { id: "d", text: "Next.js" },
    ],
    correctAnswer: ["a", "b", "c"],
    type: "multiSelect",
  },
  {
    id: generateId(),
    text: "Đâu là các thư viện UI phổ biến cho React?",
    options: [
      { id: "a", text: "Material UI" },
      { id: "b", text: "Ant Design" },
      { id: "c", text: "jQuery UI" },
      { id: "d", text: "Bootstrap" },
    ],
    correctAnswer: ["a", "b", "d"],
    type: "multiSelect",
  },
  {
    id: generateId(),
    text: "Các thuộc tính CSS nào liên quan đến định dạng văn bản?",
    options: [
      { id: "a", text: "font-size" },
      { id: "b", text: "text-align" },
      { id: "c", text: "padding" },
      { id: "d", text: "font-weight" },
    ],
    correctAnswer: ["a", "b", "d"],
    type: "multiSelect",
  },
  {
    id: generateId(),
    text: "Đâu là những công cụ quản lý state trong React?",
    options: [
      { id: "a", text: "Redux" },
      { id: "b", text: "Context API" },
      { id: "c", text: "Axios" },
      { id: "d", text: "Zustand" },
    ],
    correctAnswer: ["a", "b", "d"],
    type: "multiSelect",
  },
  {
    id: generateId(),
    text: "Chọn các phương thức Array trong JavaScript:",
    options: [
      { id: "a", text: "push()" },
      { id: "b", text: "map()" },
      { id: "c", text: "fetch()" },
      { id: "d", text: "filter()" },
    ],
    correctAnswer: ["a", "b", "d"],
    type: "multiSelect",
  },
  {
    id: generateId(),
    text: "Đâu là các CSS preprocessor phổ biến?",
    options: [
      { id: "a", text: "SASS" },
      { id: "b", text: "LESS" },
      { id: "c", text: "PostCSS" },
      { id: "d", text: "Stylus" },
    ],
    correctAnswer: ["a", "b", "d"],
    type: "multiSelect",
  },
  {
    id: generateId(),
    text: "Chọn các thuộc tính box model trong CSS:",
    options: [
      { id: "a", text: "margin" },
      { id: "b", text: "padding" },
      { id: "c", text: "border" },
      { id: "d", text: "color" },
    ],
    correctAnswer: ["a", "b", "c"],
    type: "multiSelect",
  },
];

// Các câu hỏi tự luận demo
const essayQuestions = [
  {
    id: generateId(),
    text: "Giải thích khái niệm về Responsive Web Design và tại sao nó quan trọng?",
    suggestedAnswer: "Responsive Web Design là phương pháp thiết kế web thích ứng với mọi thiết bị và kích thước màn hình. Nó quan trọng vì giúp trang web có trải nghiệm người dùng tốt trên mọi thiết bị, từ điện thoại di động đến máy tính để bàn.",
    type: "essay",
  },
  {
    id: generateId(),
    text: "Trình bày sự khác biệt giữa JavaScript và TypeScript.",
    suggestedAnswer: "TypeScript là ngôn ngữ mở rộng của JavaScript, bổ sung thêm tính năng kiểu dữ liệu tĩnh và các tính năng của lập trình hướng đối tượng. JavaScript là ngôn ngữ động, không có kiểu dữ liệu tĩnh. TypeScript giúp phát hiện lỗi sớm hơn trong quá trình phát triển và tăng khả năng bảo trì code.",
    type: "essay",
  },
  {
    id: generateId(),
    text: "Giải thích về khái niệm API và vai trò của nó trong phát triển web hiện đại.",
    suggestedAnswer: "API (Application Programming Interface) là một tập hợp các quy tắc cho phép các ứng dụng giao tiếp với nhau. Trong phát triển web hiện đại, API giúp front-end và back-end có thể giao tiếp độc lập, tạo ra kiến trúc phân tách và linh hoạt, giúp phát triển ứng dụng nhanh hơn và dễ bảo trì hơn.",
    type: "essay",
  },
  {
    id: generateId(),
    text: "Trình bày các nguyên tắc cơ bản của Clean Code.",
    suggestedAnswer: "Clean Code có các nguyên tắc cơ bản như: đặt tên biến/hàm rõ ràng, hàm ngắn gọn và chỉ làm một việc, tránh code trùng lặp, viết comment hợp lý, xử lý lỗi đúng cách, và tuân thủ các quy tắc coding style. Clean Code giúp code dễ đọc, dễ hiểu và dễ bảo trì.",
    type: "essay",
  },
  {
    id: generateId(),
    text: "Giải thích khái niệm Single Page Application (SPA) và so sánh với Multiple Page Application (MPA).",
    suggestedAnswer: "SPA là ứng dụng web chỉ tải một trang HTML duy nhất và cập nhật nội dung động thông qua JavaScript. MPA là ứng dụng web truyền thống, tải lại toàn bộ trang khi chuyển trang. SPA có trải nghiệm người dùng mượt mà hơn, giảm tải server nhưng khó SEO hơn và tăng độ phức tạp của frontend. MPA dễ SEO nhưng trải nghiệm người dùng kém hơn do phải tải lại trang.",
    type: "essay",
  },
  {
    id: generateId(),
    text: "Trình bày về Virtual DOM trong React và lợi ích của nó.",
    suggestedAnswer: "Virtual DOM là một bản sao nhẹ của DOM thật trong bộ nhớ. React sử dụng Virtual DOM để so sánh trạng thái trước và sau khi có thay đổi, từ đó chỉ cập nhật những phần thực sự thay đổi trên DOM thật. Lợi ích của Virtual DOM là tăng hiệu suất bằng cách giảm thiểu việc tương tác với DOM thật (vốn tốn kém về mặt hiệu suất) và đơn giản hóa mô hình lập trình.",
    type: "essay",
  },
  {
    id: generateId(),
    text: "Giải thích cách hoạt động của Promise trong JavaScript và lợi ích so với callback truyền thống.",
    suggestedAnswer: "Promise là một đối tượng đại diện cho một giá trị có thể chưa có sẵn ngay lập tức nhưng sẽ có trong tương lai (thành công hoặc thất bại). Promise giải quyết vấn đề callback hell, giúp code dễ đọc hơn với các phương thức .then() và .catch(), và cho phép xử lý lỗi tốt hơn. Async/await là cú pháp hiện đại dựa trên Promise giúp code bất đồng bộ trông giống như code đồng bộ, dễ đọc hơn.",
    type: "essay",
  },
  {
    id: generateId(),
    text: "Trình bày về các design pattern phổ biến trong phát triển phần mềm.",
    suggestedAnswer: "Các design pattern phổ biến bao gồm: Singleton (đảm bảo một class chỉ có một instance), Factory (tạo đối tượng mà không cần chỉ định class), Observer (định nghĩa mối quan hệ một-nhiều giữa các đối tượng), MVC (Model-View-Controller), và nhiều pattern khác. Design pattern giúp giải quyết các vấn đề thiết kế phổ biến và tạo ra code có cấu trúc tốt, dễ bảo trì.",
    type: "essay",
  },
  {
    id: generateId(),
    text: "Giải thích về cách hoạt động của JWT (JSON Web Token) trong xác thực người dùng.",
    suggestedAnswer: "JWT là một chuẩn mở để truyền thông tin an toàn dưới dạng JSON. JWT gồm 3 phần: header, payload và signature. Khi người dùng đăng nhập, server tạo JWT và gửi cho client. Client lưu token này và gửi kèm trong các request tiếp theo. Server xác thực token bằng cách kiểm tra chữ ký mà không cần truy vấn database, giúp hệ thống stateless và có thể mở rộng dễ dàng.",
    type: "essay",
  },
  {
    id: generateId(),
    text: "Trình bày về khái niệm Microservices và so sánh với kiến trúc Monolithic.",
    suggestedAnswer: "Microservices là kiến trúc phần mềm chia ứng dụng thành các dịch vụ nhỏ, độc lập và có thể triển khai riêng biệt. Monolithic là kiến trúc truyền thống, toàn bộ ứng dụng là một đơn vị duy nhất. Microservices có ưu điểm về khả năng mở rộng, triển khai độc lập và phù hợp với team lớn, nhưng phức tạp hơn về vận hành và giao tiếp giữa các dịch vụ. Monolithic đơn giản hơn khi bắt đầu nhưng khó mở rộng và bảo trì khi ứng dụng lớn lên.",
    type: "essay",
  },
];

// Trộn ngẫu nhiên mỗi danh sách câu hỏi
const shuffleArray = (array) => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

// Tạo danh sách câu hỏi
const generateQuestions = () => {
  return {
    trueFalse: shuffleArray(trueFalseQuestions),
    multipleChoice: shuffleArray(multipleChoiceQuestions),
    multiSelect: shuffleArray(multiSelectQuestions),
    essay: shuffleArray(essayQuestions)
  };
}; 