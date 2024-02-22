const letsgo = [
  {
    level: 1,
    isBack: false,
    question: {
      data: 'hang out ?',
    },
    answers: [
      'yess|CONTINUE',
      'nah|END',
    ]
  },
  {
    level: 2,
    isBack: true,
    question: {
      data: 'cho cậu chọn ngày nhé',
    },
    answers: [
      'thứ 2 nhé',
      'thứ 3 đi',
      'thứ 2 vậy :>',
      'thứ 5 thì sao',
      'thứ 6 okie ?',
      'thứ 7 đc nghỉ nè ?',
      'hay chủ nhật',
      'system:text|hoy để tớ chọn'
    ]
  },
  {
    level: 3,
    isBack: true,
    question: {
      data: 'thế còn thời gian :>',
    },
    answers: [
      'system:time|'
    ]
  },
  {
    level: 4,
    isBack: true,
    question: {
      data: 'anh đón em nhé 😎',
    },
    answers: [
      'yeahhhh',
      'nahh :<'
    ]
  },
  {
    level: 5,
    isBack: true,
    question: {
      data: 'em thích buổi này chúng mình làm gì nhỉ :3',
    },
    answers: [
      'lượn',
      'just coffee/milk tea...',
      'ăn tôi',
      'film ?',
      'thử mấy môn hay hay :> (bowling/patin/...)',
      'đi học @@',
      "system:text|nah, thử cái này với em hơm (●'◡'●)",
      'system:text|tôi sợ anh làm gì tôi lắm, chỉ đi ra đây thôi >_<',
    ]
  },
];

let result = letsgo.map(item => {
  return {
    question: item.question.data,
    answer: ''
  }
})

const isDoneAnswer = (currentLevel, letsgoArr = letsgo) => {
  return currentLevel === letsgoArr[letsgoArr.length - 1];
}

function startRender() {
  let isVisited = localStorage.getItem("letsgo-david");
  if(isVisited !== null || isVisited !== undefined || isVisited === true)
    return
  
  localStorage.setItem("letsgo-david", true);

}