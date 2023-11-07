

function calculateLove(){
    const name1 = document.getElementById("name1").value.trim()
    const name2 = document.getElementById("name2").value.trim()

    if(name1=="" || name2==""){
        alert("PLEASE ENTER BOTH NAMES")

    }
    const lovepercentage=Math.floor(Math.random()*100)
    const result= document.getElementById("result")
    result.innerHTML += `${name1} and ${name2}'s Love Percentage:${lovepercentage}`;

    if(lovepercentage<30){

        result.innerHTML +="<br> NEED UNDERSTANDING"
    }else if(lovepercentage>=30 && lovepercentage <=75){

        result.innerHTML +="<br> GOOD UNDERSTANDING"
    }
    else{

        result.innerHTML +="<br> MADE FOR EACH OTHER , BEST PAIR"

    }

    document.getElementById("name1").value=""
    document.getElementById("name2").value=""
}

function reset(){
    document.getElementById("name1").value = ""
    document.getElementById("name2").value = ""
    const result = document.getElementById("result")
    result.innerHTML = ""
}