const calculutbtn = document.getElementById('calculate-btn');
const results = document.getElementById('cgpa-result');
const popover = document.getElementById('pop')

const closePopOver = document.getElementById("close-pop")

calculutbtn.addEventListener('click', function(){

    //to get scores from input fields

    const score1 = parseInt(document.getElementById('course1').value);
    const score2 = parseInt(document.getElementById('course2').value);
    const score3 = parseInt(document.getElementById('course3').value);
    const score4 = parseInt(document.getElementById('course4').value);
    const score5 = parseInt(document.getElementById('course5').value);


    const averageScore = (score1+score2+score3+score4+score5)/5;
    let cgpa = 0
    if(averageScore >= 80){
        cgpa = 4.0
    }
    else if(averageScore >= 75){
        cgpa = 3.5
    }
    else if(averageScore >= 70){
        cgpa=3.0
    }
    else if(averageScore >=65){
        cgpa = 2.5;
    
    }
    else if(averageScore>=60){
        cgpa = 2.0;

    }
    else if(averageScore>=55){
        cgpa = 1.5;
    }
    else if(averageScore>=50){
        cgpa = 1.0
    }
    else{
        cgpa = 0.0
    }


   
    popover.style.display = 'block'
    // popover.style.display.results = `You CGPA is: ${cgpa.toFixed('2')}`;
    // display result
    // window.alert(results.textContent = `Your CGPA is:${cgpa.toFixed('2')}`);

    if(cgpa>=3.6|| cgpa<=4.0){
        results.textContent = `Your CGPA is:${cgpa.toFixed('2')}`;
        results.textContent ="You have first class";
        
    }
    else if(cgpa>=3.0|| cgpa<=3.6){
        results.textContent = `Your CGPA is:${cgpa.toFixed('2')}`;
        results.textContent ="You have second class upper";

    }
    else if(cgpa>=2.5|| cgpa<=3.0){
        results.textContent = `Your CGPA is:${cgpa.toFixed('2')}`;
        results.textContent ="You have second class lower";

    }
    else if(cgpa>=2.0||cgpa<=2.5){
        results.textContent = `Your CGPA is:${cgpa.toFixed('2')}`;
        results.textContent ="You have third class";

    }
    else{
        results.textContent = `Your CGPA is:${cgpa.toFixed('2')}`;
        results.textContent ="You have pass";

    }

    // setTimeout(()=>{
    //     popover.style.display = 'none'
    // },3000)
})

closePopOver.addEventListener('click',()=>{
    popover.style.display = 'none'

})