let sonuç = document.getElementById('cevap')
let btn = document.getElementById('luckybutton')
let number = document.getElementById('number')

btn.addEventListener("click",()=>{
    if(number.value == 0){
        alert('Lütfen sayi giriniz.')  
    }
    let i = 1;
    
    while(i<=+(number.value)){
        let liste = [];
        let random1 = Math.floor(Math.random()*90)+1;
        let random2 = Math.floor(Math.random()*90)+1;
        let random3 = Math.floor(Math.random()*90)+1;
        let random4 = Math.floor(Math.random()*90)+1;
        let random5 = Math.floor(Math.random()*90)+1;
        let random6 = Math.floor(Math.random()*90)+1;
        let random7 = Math.floor(Math.random()*90)+1;
        let random8 = Math.floor(Math.random()*90)+1;
        liste.push(random1,random2,random3,random4,random5,random6);
        liste.sort((a,b)=> a-b)
        if((random1!== random7)&&(random2!== random7)&&(random3!== random7)&&(random4!== random7)&&(random5!== random7)&&(random6 !== random7)){
            liste.push(random7)
            
            
    
        }
        if(random8){
            liste.push(random8)
        }
        let li = document.createElement("p")
        let text = document.createTextNode(liste.join(" "))
        li.appendChild(text)
        sonuç.appendChild(li)
        i++
    
    
    }
    
    
    })































