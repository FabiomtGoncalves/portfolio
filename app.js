// https://www.youtube.com/watch?v=T33NN_pPeNI -> animate on scroll
// https://codedamn.com/news/javascript/how-to-fix-typeerror-foreach-is-not-a-function-in-javascript -> .forEach is not a function (error) ??

const observer = new IntersectionObserver(entries => {
    entries.forEach((entry) => {
       console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        } else{
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden, .from-left, .fade, .from-top, .from-bottom');
hiddenElements.forEach((el) => observer.observe(el));
//const hiddenElements = document.getElementsByClassName('hidden');
//const arr = Array.from(hiddenElements);
//arr.forEach((el) => observer.observe(el));

