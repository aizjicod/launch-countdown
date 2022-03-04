let output = document.querySelector('.output');
output.innerHTML = '';
//for some reason i cant put this loop in an html page,, search for help


for(i=10; i>=0; i--){
    const para = document.createElement('p');

    if(i===10){
        para.textContent =`countdown ${i}` ;
    }
    if(i>0){
        para.textContent=`${i}`;
    }else{
        para.textContent="blast off!!";
    }

    output.appendChild(para);

}