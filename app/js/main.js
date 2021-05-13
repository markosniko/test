const questionBlocks = document.querySelectorAll(".question-block");
let previous = null;

questionBlocks.forEach(function (item) {
    item.addEventListener("click", function (e) {
        const questionBlock = e.currentTarget;
        const questionHeader = questionBlock.childNodes[1];
        questionHeader.classList.toggle("active");
        questionBlock.childNodes[3].classList.toggle("rotate");

        if (previous == questionBlock) {

        }
        else {
            questionBlocks.forEach(function (item) {
                if (previous == item) {
                    console.log("what");
                    if (item.childNodes[1].classList.contains("active")) {
                        item.childNodes[1].classList.remove("active");
                        item.childNodes[3].classList.remove("rotate");
                        item.nextElementSibling.style.maxHeight = "0px";
                        item.childNodes[1].style.paddingBottom = "0px";
                    }
                }
                else {
                }
            })
        }
        previous = questionBlock;
        //*answerBlock
        const answerBlock = questionBlock.nextElementSibling;
        if (questionHeader.classList.contains("active")) {
            let height = answerBlock.scrollHeight;
            answerBlock.style.maxHeight = `${height}px`;
            questionHeader.style.paddingBottom = "1.125rem";
        }
        else {
            answerBlock.style.maxHeight = `0px`;
            questionHeader.style.paddingBottom = "0px";
        }
    });
});