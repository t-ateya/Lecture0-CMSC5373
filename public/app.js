
const buttonTag = document.getElementById('button-lucky')
const majorButtonTag = document.getElementById('button-major')
buttonTag.addEventListener('click', buttonClick)
majorButtonTag.addEventListener('click', majorButtonClick)
const messageTag = document.getElementById('message')

function buttonClick (){
   // console.log('button clicked')
        const n1 = Math.floor(Math.random()*100);
        const n2 = Math.floor(Math.random()*100);
        messageTag.innerHTML = 'Your lucky numbers are: '
                                + n1 + " and " + n2 + ".";
}

function majorButtonClick(){
    messageTag.innerHTML = 'My major is CS.';
}
