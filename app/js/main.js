const questionBlocks = document.querySelectorAll(".question-block");

questionBlocks.forEach(function (item) {
    item.addEventListener("click", function (e) {
        const questionBlock = e.currentTarget;
        questionBlock.childNodes[1].classList.toggle("open");
        questionBlock.childNodes[3].classList.toggle("rotate");

        //*answerBlock
        const answerBlock = questionBlock.nextElementSibling;
        answerBlock.classList.toggle("open");
    });
});