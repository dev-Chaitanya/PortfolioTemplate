let  TypingSpan=document.querySelector('.typing-text');



let presentValue=TypingSpan.innerText;
let count=0;
let timer;

let menuBtn=document.querySelector('.menuBar');
let headContainer=document.querySelector('.headerContainer');
let closebtn=document.querySelector('.closebtn')
let navLinks=document.querySelector('.nav-links');
let brandName=document.querySelector('.brandList')

menuBtn.addEventListener('click',()=>{
    headContainer.classList.toggle('open');
})
function deflt(){
    if(count===0){
        TypingSpan.innerText="DEVELOPER";
        inter();
    }

}

function inter(){
timer=setInterval(()=>{
count++;
if(count===3){
    TypingSpan.innerText="UI/DESIGNER";
}

if(count===6){
    TypingSpan.innerText="UX/DESIGNER";
}

if(count===9){
    count=0;
    clearInterval(timer)
    deflt();
}

},1000)
}


deflt();




let ResumeTitle= document.querySelectorAll('.ResumeTitles > li >a');
let Homelink=document.querySelector('.Homelink');
let Aboutlink=document.querySelector('.Aboutlink');
let Resumelink=document.querySelector('.Resumelink');
let Serviceslink=document.querySelector('.Serviceslink');
let Projectslink=document.querySelector('.Projectslink');
let Bloglink=document.querySelector('.Bloglink');
let Contactlink=document.querySelector('.Contactlink');

$(window).on("scroll", function(){
    var targetTop1 = $("#Education").offset().top;
    var targetTop2 = $("#Experience").offset().top;
    var targetTop3 = $("#Skills").offset().top;
    var targetTop4 = $("#Awards").offset().top;
    var targetTop5 = $("#targetText1").offset().top;

    var targetTop6 = $("#Home").offset().top;
    var targetTop7 = $("#AboutContainer").offset().top;
    var targetTop8 = $("#Resume").offset().top;
    var targetTop9=$('#Services').offset().top;
    var targetTop10=$('#Projects').offset().top;
    var targetTop11=$('#Blog').offset().top;
    var targetTop12=$('#Contact').offset().top;

// selection for fade effect

    let Home=document.querySelector('#Home');
    let About=document.querySelector('#AboutContainer');
    let Resume=document.querySelector('#Resume');
    let Services=document.querySelector('#Services');
    let Projects=document.querySelector('#Projects');
    let Blog=document.querySelector('#Blog');
    let Contact=document.querySelector('#Contact');

    var windowHeight = $(window).height();
    var windowBottom = $(window).scrollTop() + windowHeight;
    var scrollPosition = $(window).scrollTop();
    console.log(scrollPosition)
    var fadeApplied = false;

    // Naviage Home Links Acording to position of targets
    if(scrollPosition>=targetTop6-500){
        Homelink.classList.add('nav-effect');
        Aboutlink.classList.remove('nav-effect')
        
    }
    else{
       
        Homelink.classList.remove('nav-effect');
    }
    if(scrollPosition>=targetTop7-300){
        Homelink.classList.remove('nav-effect');
        Resumelink.classList.remove('nav-effect');
        Aboutlink.classList.add('nav-effect')
       
    }
   
    if(scrollPosition>=targetTop8-300){
        Aboutlink.classList.remove('nav-effect');
        Resumelink.classList.add('nav-effect')
        Serviceslink.classList.remove('nav-effect')
        Bloglink.classList.remove('nav-effect');
        
    }
    if(scrollPosition>=targetTop9-300){
        Resumelink.classList.remove('nav-effect')
        Serviceslink.classList.add('nav-effect')
        Projectslink.classList.remove('nav-effect')
        Bloglink.classList.remove('nav-effect');

    }
    if(scrollPosition>=targetTop10-300){
        Resumelink.classList.remove('nav-effect')
        Serviceslink.classList.remove('nav-effect')
        Projectslink.classList.add('nav-effect')
        Bloglink.classList.remove('nav-effect');
    }
    if(scrollPosition>=targetTop11-300){
        Resumelink.classList.remove('nav-effect')
        Serviceslink.classList.remove('nav-effect')
        Projectslink.classList.remove('nav-effect')
        Bloglink.classList.add('nav-effect')
        Contactlink.classList.remove('nav-effect')
    }
    if(scrollPosition>=targetTop12-300){
        Resumelink.classList.remove('nav-effect')
        Serviceslink.classList.remove('nav-effect')
        Projectslink.classList.remove('nav-effect')
        Bloglink.classList.remove('nav-effect')
        Contactlink.classList.add('nav-effect')
    }



// Box-effect


if(scrollPosition>=targetTop5){
    headContainer.classList.add('Box-effect');
}
else{
    headContainer.classList.remove('Box-effect')
}

// Navigate Title links Of Resume Titles

if(scrollPosition>=targetTop1-500&& scrollPosition<targetTop2-500){
    ResumeTitle[0].classList.add('TitleLinks')
}
else{
    ResumeTitle[0].classList.remove('TitleLinks')
}

  
if(scrollPosition>=targetTop2-300&& scrollPosition<targetTop3-300){
    ResumeTitle[1].classList.add('TitleLinks')
}
else{
    ResumeTitle[1].classList.remove('TitleLinks')
}

if(scrollPosition>=targetTop3-300&& scrollPosition<targetTop4-300){
    ResumeTitle[2].classList.add('TitleLinks')
}
else{
    ResumeTitle[2].classList.remove('TitleLinks')
}
console.log(targetTop3,"target")
console.log(targetTop4,"target")

if(scrollPosition>=targetTop4-300&& scrollPosition<'5988'){
    ResumeTitle[3].classList.add('TitleLinks')
}
else{
    ResumeTitle[3].classList.remove('TitleLinks')
}


  });
  