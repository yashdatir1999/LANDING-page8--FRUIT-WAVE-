var slideright = document.querySelector(".right")
var slideleft = document.querySelector(".left")
var page = document.querySelector(".page1")
var li1 = document.querySelector(".li1")
var li2 = document.querySelector(".li2")
var li3 = document.querySelector(".li3")
var li4 = document.querySelector(".li4")
var logo = document.querySelector("h1")

var slider = 0

slideright.addEventListener("click",function(){
    if(slider <= 2734){
        slider +=1367
        page.scrollTo(slider , 0)
               
        if(slider == 0){
            logo.style.color="yellow"
            li1.style.color="yellow"
            li2.style.color="yellow"
            li3.style.color="yellow"
            li4.style.color="yellow"
        }else if(slider == 1367){
            logo.style.color=`rgb(246,170,69)`
            li1.style.color=`rgb(246,170,69)`
            li2.style.color=`rgb(246,170,69)`
            li3.style.color=`rgb(246,170,69)`
            li4.style.color=`rgb(246,170,69)`
        }else if(slider == 2734){
            logo.style.color="green"
            li1.style.color="green"
            li2.style.color="green"
            li3.style.color="green"
            li4.style.color="green"
        }
    }else{
        slider = 2734
    }  


    console.log(slider)
})

slideleft.addEventListener("click",function(){
    slider -=1367
    if(slider >= 0){
        page.scrollTo(slider , 0)

        if(slider == 0){
            logo.style.color="yellow"
            li1.style.color="yellow"
            li2.style.color="yellow"
            li3.style.color="yellow"
            li4.style.color="yellow"
        }else if(slider == 1367){
            logo.style.color=`rgb(246,170,69)`
            li1.style.color=`rgb(246,170,69)`
            li2.style.color=`rgb(246,170,69)`
            li3.style.color=`rgb(246,170,69)`
            li4.style.color=`rgb(246,170,69)`
        }else if(slider == 2734){
            logo.style.color="green"
            li1.style.color="green"
            li2.style.color="green"
            li3.style.color="green"
            li4.style.color="green"
        }
    }else{
        slider = 0
    }
})

