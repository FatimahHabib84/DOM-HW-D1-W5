let contactInfo = document.querySelectorAll('.contactInfo > span')
for(let i=0 ; i<contactInfo.length ; i++){
    if (i%2==0){
        contactInfo[i].setAttribute('class','contactInfoHover');
     } else{
        contactInfo[i].setAttribute('class','contactInfoNoHover')
     }
}

let img = document.querySelectorAll('img')
img[0].setAttribute('class','imgNoHover')
img[1].setAttribute('class','imgHover')

let educationInfo = document.querySelectorAll('.education>div')
educationInfo[0].setAttribute('class','educationHover')
educationInfo[1].setAttribute('class','educationNoHover')

let skillsList = document.querySelectorAll('ul.skillsList')
skillsList[0].setAttribute('class','skillsListHover')
skillsList[1].setAttribute('class','skillsListNoHover')

let languageList = document.querySelectorAll('ul.languageList')
languageList[0].setAttribute('class','languageListHover')
languageList[1].setAttribute('class','languageListNoHover')

let mainParagraph = document.querySelectorAll('.mainParagraph>span')
mainParagraph[0].setAttribute('class','mainParagraphHover')
mainParagraph[1].setAttribute('class','mainParagraphNoHover')

let workExps = document.querySelectorAll('.workExps > div')
for(let i=0 ; i<workExps.length ; i++){
    if (i%2==0){
        workExps[i].setAttribute('class','workExpsHover');
     } else{
        workExps[i].setAttribute('class','workExpsNoHover')
     }
}

let refrencesInfo = document.querySelectorAll('.refrencesInfo > div')
for(let i=0 ; i<refrencesInfo.length ; i++){
    if(i%2==0){
        refrencesInfo[i].setAttribute('class','refrencesInfoHover')
    } else {
        refrencesInfo[i].setAttribute('class','refrencesInfoNoHover')
    }
}

let uname = document.querySelectorAll('.uname > span')
uname[0].setAttribute('class','unameHover')
uname[1].setAttribute('class','unameNoHover')


let major = document.querySelectorAll('.major > span')
major[0].setAttribute('class','majorHover')
major[1].setAttribute('class','majorNoHover')