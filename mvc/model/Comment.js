//데이터 베이스 선택하는 부분
exports.commentInfos = () => {
  //sql문 실행됐다고 가정하고 반환
  return [
    {
      id: 1,
      userId: "hello",
      date: "2023-08-01",
      comment: "안녕하세요~",
    },
    {
      id: 2,
      userId: "helloWorld",
      date: "2023-08-02",
      comment: "반가워요~",
    },
    {
      id: 3,
      userId: "kiwi",
      date: "2023-08-01",
      comment: "난 키위야",
    },
    {
      id: 4,
      userId: "pineapple",
      date: "2023-08-04",
      comment: "난 파인애플~",
    },
  ];
};
