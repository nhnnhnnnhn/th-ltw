const generateId = () => {
  return Math.random().toString(36).substring(2, 15);
};

const trueFalseQuestions = [
  {
    id: generateId(),
    text: "Con người sử dụng khoảng 10% não bộ",
    correctAnswer: false,
    type: "trueFalse",
  },
  {
    id: generateId(),
    text: "Trái Đất là hành tinh duy nhất trong hệ Mặt Trời có nước ở trạng thái lỏng",
    correctAnswer: true,
    type: "trueFalse",
  },
  {
    id: generateId(),
    text: "Con cá vàng có trí nhớ chỉ kéo dài 3 giây",
    correctAnswer: false,
    type: "trueFalse",
  },
  {
    id: generateId(),
    text: "Việt Nam là quốc gia có hơn 100 triệu dân",
    correctAnswer: false,
    type: "trueFalse",
  },
  {
    id: generateId(),
    text: "Trung Quốc là quốc gia đông dân nhất thế giới",
    correctAnswer: true,
    type: "trueFalse",
  },
  {
    id: generateId(),
    text: "Hổ là loài mèo lớn nhất thế giới",
    correctAnswer: false,
    type: "trueFalse",
  },
  {
    id: generateId(),
    text: "Chocolate có thể gây độc cho chó",
    correctAnswer: true,
    type: "trueFalse",
  },
  {
    id: generateId(),
    text: "Cà rốt giúp cải thiện thị lực vào ban đêm",
    correctAnswer: true,
    type: "trueFalse",
  },
  {
    id: generateId(),
    text: "Đà Nẵng là thủ đô của Việt Nam",
    correctAnswer: false,
    type: "trueFalse",
  },
  {
    id: generateId(),
    text: "Con người có thể sống được khoảng một tháng không cần ăn",
    correctAnswer: true,
    type: "trueFalse",
  },
];

const multipleChoiceQuestions = [
  {
    id: generateId(),
    text: "Đâu là loài động vật có vú duy nhất có khả năng bay?",
    options: [
      { id: "a", text: "Chim cánh cụt" },
      { id: "b", text: "Dơi" },
      { id: "c", text: "Chuột túi" },
      { id: "d", text: "Cá heo" },
    ],
    correctAnswer: "b",
    type: "multipleChoice",
  },
  {
    id: generateId(),
    text: "Quốc gia nào có diện tích lớn nhất thế giới?",
    options: [
      { id: "a", text: "Trung Quốc" },
      { id: "b", text: "Mỹ" },
      { id: "c", text: "Nga" },
      { id: "d", text: "Canada" },
    ],
    correctAnswer: "c",
    type: "multipleChoice",
  },
  {
    id: generateId(),
    text: "Nước nào sau đây không nằm ở Đông Nam Á?",
    options: [
      { id: "a", text: "Thái Lan" },
      { id: "b", text: "Indonesia" },
      { id: "c", text: "Bangladesh" },
      { id: "d", text: "Philippines" },
    ],
    correctAnswer: "c",
    type: "multipleChoice",
  },
  {
    id: generateId(),
    text: "Đâu là món ăn truyền thống của Ý?",
    options: [
      { id: "a", text: "Sushi" },
      { id: "b", text: "Pizza" },
      { id: "c", text: "Paella" },
      { id: "d", text: "Kebab" },
    ],
    correctAnswer: "b",
    type: "multipleChoice",
  },
  {
    id: generateId(),
    text: "Vạn Lý Trường Thành nằm ở quốc gia nào?",
    options: [
      { id: "a", text: "Nhật Bản" },
      { id: "b", text: "Hàn Quốc" },
      { id: "c", text: "Trung Quốc" },
      { id: "d", text: "Việt Nam" },
    ],
    correctAnswer: "c",
    type: "multipleChoice",
  },
  {
    id: generateId(),
    text: "Bộ phim nào đạt doanh thu cao nhất mọi thời đại (tính đến 2023)?",
    options: [
      { id: "a", text: "Avengers: Endgame" },
      { id: "b", text: "Titanic" },
      { id: "c", text: "Avatar" },
      { id: "d", text: "Star Wars: The Force Awakens" },
    ],
    correctAnswer: "c",
    type: "multipleChoice",
  },
  {
    id: generateId(),
    text: "Năm bao nhiêu Việt Nam giành được độc lập từ Pháp?",
    options: [
      { id: "a", text: "1945" },
      { id: "b", text: "1954" },
      { id: "c", text: "1975" },
      { id: "d", text: "1986" },
    ],
    correctAnswer: "a",
    type: "multipleChoice",
  },
  {
    id: generateId(),
    text: "Đâu là hành tinh lớn nhất trong hệ Mặt Trời?",
    options: [
      { id: "a", text: "Sao Hoả" },
      { id: "b", text: "Sao Thổ" },
      { id: "c", text: "Sao Mộc" },
      { id: "d", text: "Trái Đất" },
    ],
    correctAnswer: "c",
    type: "multipleChoice",
  },
  {
    id: generateId(),
    text: "Ai là người đầu tiên đặt chân lên Mặt Trăng?",
    options: [
      { id: "a", text: "Neil Armstrong" },
      { id: "b", text: "Buzz Aldrin" },
      { id: "c", text: "Yuri Gagarin" },
      { id: "d", text: "Alan Shepard" },
    ],
    correctAnswer: "a",
    type: "multipleChoice",
  },
  {
    id: generateId(),
    text: "Loài động vật nào chạy nhanh nhất trên mặt đất?",
    options: [
      { id: "a", text: "Ngựa" },
      { id: "b", text: "Báo" },
      { id: "c", text: "Sư tử" },
      { id: "d", text: "Báo săn (Cheetah)" },
    ],
    correctAnswer: "d",
    type: "multipleChoice",
  },
];

const multiSelectQuestions = [
  {
    id: generateId(),
    text: "Những quốc gia nào sau đây thuộc khu vực Đông Nam Á?",
    options: [
      { id: "a", text: "Việt Nam" },
      { id: "b", text: "Nhật Bản" },
      { id: "c", text: "Thái Lan" },
      { id: "d", text: "Hàn Quốc" },
    ],
    correctAnswer: ["a", "c"],
    type: "multiSelect",
  },
  {
    id: generateId(),
    text: "Đâu là các món ăn truyền thống của Việt Nam?",
    options: [
      { id: "a", text: "Phở" },
      { id: "b", text: "Sushi" },
      { id: "c", text: "Bánh mì" },
      { id: "d", text: "Pizza" },
    ],
    correctAnswer: ["a", "c"],
    type: "multiSelect",
  },
  {
    id: generateId(),
    text: "Những loài động vật nào sau đây sống dưới nước?",
    options: [
      { id: "a", text: "Cá heo" },
      { id: "b", text: "Chim cánh cụt" },
      { id: "c", text: "Hải cẩu" },
      { id: "d", text: "Voi" },
    ],
    correctAnswer: ["a", "c"],
    type: "multiSelect",
  },
  {
    id: generateId(),
    text: "Những quốc gia nào sau đây thuộc châu Âu?",
    options: [
      { id: "a", text: "Pháp" },
      { id: "b", text: "Brazil" },
      { id: "c", text: "Đức" },
      { id: "d", text: "Nhật Bản" },
    ],
    correctAnswer: ["a", "c"],
    type: "multiSelect",
  },
  {
    id: generateId(),
    text: "Những màu nào xuất hiện trên quốc kỳ Việt Nam?",
    options: [
      { id: "a", text: "Đỏ" },
      { id: "b", text: "Xanh lá" },
      { id: "c", text: "Vàng" },
      { id: "d", text: "Trắng" },
    ],
    correctAnswer: ["a", "c"],
    type: "multiSelect",
  },
  {
    id: generateId(),
    text: "Những thành phố nào sau đây thuộc miền Nam Việt Nam?",
    options: [
      { id: "a", text: "TP Hồ Chí Minh" },
      { id: "b", text: "Hà Nội" },
      { id: "c", text: "Cần Thơ" },
      { id: "d", text: "Hải Phòng" },
    ],
    correctAnswer: ["a", "c"],
    type: "multiSelect",
  },
  {
    id: generateId(),
    text: "Những loại quả nào sau đây mọc ở Việt Nam?",
    options: [
      { id: "a", text: "Nhãn" },
      { id: "b", text: "Kiwi" },
      { id: "c", text: "Vải" },
      { id: "d", text: "Dâu tây" },
    ],
    correctAnswer: ["a", "c"],
    type: "multiSelect",
  },
  {
    id: generateId(),
    text: "Những loại nhạc cụ nào sau đây là nhạc cụ dân tộc Việt Nam?",
    options: [
      { id: "a", text: "Đàn bầu" },
      { id: "b", text: "Piano" },
      { id: "c", text: "Đàn tranh" },
      { id: "d", text: "Guitar" },
    ],
    correctAnswer: ["a", "c"],
    type: "multiSelect",
  },
  {
    id: generateId(),
    text: "Những ngày lễ nào sau đây là lễ hội truyền thống của Việt Nam?",
    options: [
      { id: "a", text: "Tết Nguyên Đán" },
      { id: "b", text: "Giáng Sinh" },
      { id: "c", text: "Tết Trung Thu" },
      { id: "d", text: "Halloween" },
    ],
    correctAnswer: ["a", "c"],
    type: "multiSelect",
  },
  {
    id: generateId(),
    text: "Những loại rau nào sau đây thường được dùng trong ẩm thực Việt Nam?",
    options: [
      { id: "a", text: "Rau muống" },
      { id: "b", text: "Bắp cải tím" },
      { id: "c", text: "Rau ngót" },
      { id: "d", text: "Măng tây" },
    ],
    correctAnswer: ["a", "c"],
    type: "multiSelect",
  },
];

const essayQuestions = [
  {
    id: generateId(),
    text: "Bạn thích món ăn Việt Nam nào nhất và tại sao?",
    suggestedAnswer: "Phở là món ăn truyền thống của Việt Nam được nhiều người yêu thích bởi hương vị thơm ngon, đậm đà từ nước dùng xương hầm kết hợp với các gia vị đặc trưng như hồi, quế, gừng và thịt bò hoặc gà. Đây không chỉ là món ăn mà còn là biểu tượng văn hóa ẩm thực của Việt Nam được công nhận trên toàn thế giới.",
    type: "essay",
  },
  {
    id: generateId(),
    text: "Nếu có thể du lịch đến bất kỳ quốc gia nào, bạn sẽ chọn đi đâu và tại sao?",
    suggestedAnswer: "Nhật Bản là điểm đến lý tưởng với sự kết hợp hài hòa giữa truyền thống và hiện đại. Du khách có thể trải nghiệm văn hóa độc đáo qua các đền chùa cổ kính, vườn thiền, lễ hội truyền thống, đồng thời khám phá công nghệ tiên tiến và cuộc sống hiện đại tại Tokyo. Ẩm thực, phong cảnh thiên nhiên bốn mùa và sự thân thiện của người dân cũng là những lý do khiến Nhật Bản trở thành điểm đến hấp dẫn.",
    type: "essay",
  },
  {
    id: generateId(),
    text: "Theo bạn, điều gì làm nên một cuộc sống hạnh phúc?",
    suggestedAnswer: "Một cuộc sống hạnh phúc thường bao gồm nhiều yếu tố: sức khỏe tốt, các mối quan hệ ý nghĩa với gia đình và bạn bè, công việc thỏa mãn đam mê, tài chính ổn định, và thời gian cho sở thích cá nhân. Quan trọng hơn là thái độ biết trân trọng những gì mình đang có, sống trong hiện tại, và khả năng vượt qua nghịch cảnh. Hạnh phúc không phải là đích đến mà là cách ta sống mỗi ngày.",
    type: "essay",
  },
  {
    id: generateId(),
    text: "Mô tả một kỷ niệm đáng nhớ nhất trong cuộc đời bạn.",
    suggestedAnswer: "Một trong những kỷ niệm đáng nhớ nhất có thể là chuyến đi biển đầu tiên cùng gia đình. Cảm giác ngắm bình minh trên biển, những buổi tối ngồi bên bờ biển nghe sóng vỗ, và những bữa tiệc hải sản tươi ngon đều tạo nên những kỷ niệm khó quên. Những khoảnh khắc gia đình quây quần bên nhau, cùng tạo nên những trải nghiệm và kỷ niệm đẹp là những điều quý giá nhất trong cuộc sống.",
    type: "essay",
  },
  {
    id: generateId(),
    text: "Nếu có thể thay đổi một điều trong xã hội, bạn sẽ thay đổi điều gì?",
    suggestedAnswer: "Nếu có thể thay đổi một điều trong xã hội, đó sẽ là cải thiện hệ thống giáo dục để phát triển toàn diện các kỹ năng sống, tư duy phản biện và sáng tạo cho học sinh. Giáo dục nên tập trung vào việc khơi dậy đam mê học tập, tôn trọng sự khác biệt giữa các cá nhân, và chuẩn bị cho thế hệ trẻ khả năng thích ứng với một thế giới luôn thay đổi thay vì chỉ tập trung vào điểm số và các kỳ thi.",
    type: "essay",
  },
  {
    id: generateId(),
    text: "Theo bạn, công nghệ hiện đại đã thay đổi cuộc sống con người như thế nào?",
    suggestedAnswer: "Công nghệ hiện đại đã thay đổi sâu sắc cuộc sống con người trên nhiều phương diện. Internet và điện thoại thông minh đã cách mạng hóa cách chúng ta giao tiếp, làm việc và giải trí. Y học tiên tiến giúp kéo dài tuổi thọ và nâng cao chất lượng cuộc sống. Tuy nhiên, công nghệ cũng tạo ra những thách thức như sự phụ thuộc quá mức, vấn đề bảo mật thông tin, và mở rộng khoảng cách số. Quan trọng là chúng ta cần sử dụng công nghệ một cách cân bằng, như một công cụ phục vụ cuộc sống chứ không phải để nó chi phối cuộc sống.",
    type: "essay",
  },
  {
    id: generateId(),
    text: "Bạn nghĩ gì về vai trò của nghệ thuật trong cuộc sống hiện đại?",
    suggestedAnswer: "Nghệ thuật đóng vai trò quan trọng trong cuộc sống hiện đại bằng cách mang đến cái đẹp, kích thích sáng tạo và cung cấp phương tiện biểu đạt cảm xúc. Nó giúp kết nối con người thông qua trải nghiệm chung, phản ánh và thách thức các chuẩn mực xã hội, đồng thời lưu giữ di sản văn hóa. Trong thời đại công nghệ số, nghệ thuật còn là phương tiện để cân bằng cuộc sống, giảm stress và tăng cường sức khỏe tinh thần, đóng góp vào một xã hội toàn diện và sâu sắc hơn.",
    type: "essay",
  },
  {
    id: generateId(),
    text: "Bạn nghĩ gì về ảnh hưởng của mạng xã hội đối với giới trẻ?",
    suggestedAnswer: "Mạng xã hội có những tác động đa chiều đến giới trẻ. Tích cực, nó tạo điều kiện kết nối, chia sẻ thông tin, khám phá cơ hội và thể hiện bản thân. Tuy nhiên, tiêu cực, nó có thể gây ra các vấn đề như nghiện sử dụng, ảnh hưởng đến sức khỏe tâm lý qua so sánh xã hội, lo âu, trầm cảm, và phơi nhiễm thông tin sai lệch. Cách tiếp cận cân bằng là cần thiết: giáo dục kỹ năng phân tích thông tin, khuyến khích sử dụng có chọn lọc và tạo không gian cho các hoạt động offline.",
    type: "essay",
  },
  {
    id: generateId(),
    text: "Làm thế nào để bảo vệ môi trường trong cuộc sống hàng ngày?",
    suggestedAnswer: "Để bảo vệ môi trường trong cuộc sống hàng ngày, chúng ta có thể thực hiện nhiều hành động đơn giản như: giảm sử dụng nhựa một lần, phân loại và tái chế rác, tiết kiệm điện nước, sử dụng phương tiện giao thông công cộng hoặc xe đạp, mua sắm có ý thức về môi trường, và tiêu thụ thực phẩm theo mùa, địa phương. Những hành động nhỏ này, khi được nhiều người cùng thực hiện, sẽ tạo ra tác động tích cực đáng kể đối với môi trường.",
    type: "essay",
  },
  {
    id: generateId(),
    text: "Bạn nghĩ gì về tầm quan trọng của việc học ngoại ngữ?",
    suggestedAnswer: "Học ngoại ngữ có tầm quan trọng to lớn trong thế giới toàn cầu hóa hiện nay. Nó không chỉ mở ra cơ hội nghề nghiệp và giáo dục rộng lớn hơn, mà còn giúp chúng ta hiểu sâu sắc về các nền văn hóa khác, nâng cao khả năng giao tiếp và xây dựng mối quan hệ quốc tế. Nghiên cứu cũng chỉ ra rằng học ngoại ngữ cải thiện khả năng nhận thức, tăng cường trí nhớ và thậm chí có thể trì hoãn sự khởi phát của chứng mất trí. Với internet và các ứng dụng học ngôn ngữ, việc học ngoại ngữ ngày nay trở nên dễ tiếp cận hơn bao giờ hết.",
    type: "essay",
  },
];

const shuffleArray = (array) => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

const generateQuestions = () => {
  return {
    trueFalse: shuffleArray(trueFalseQuestions),
    multipleChoice: shuffleArray(multipleChoiceQuestions),
    multiSelect: shuffleArray(multiSelectQuestions),
    essay: shuffleArray(essayQuestions)
  };
}; 