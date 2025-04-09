let step = 1;
let messages = [
    'Cảm ơn em thời gian qua đã bên anh',
    'Em bảo rằng anh rất khác với những người khác',
    'Vậy nên, hãy luôn tin vào anh nhé',
    'Thứ gì không tốt anh sẽ thay đổi',
    'Anh HỨA sẽ luôn trân trọng và lắng nghe em, chỉ cần em ko mất niềm tin vào tình ieo này nha',
    'Yêu em!'
]
const totalStep = messages.length;


const messageField = document.getElementById('message');

const nextBtn = document.getElementById('next');


nextBtn.addEventListener('click', () => {
    if(step < totalStep) {
        messageField.innerHTML = messages[step];
        step++;
    } else {
        window.location.href = "./heart.html";
    }
});