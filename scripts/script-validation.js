let e = document.getElementById("languages");
let strUser = e.value;
console.log(strUser)

document.getElementById("languages").onchange = changeListener;
  
  function changeListener(){
  let value = this.value
    console.log(value);
    
    if (value == "english"){
      document.getElementById('questions').style.display  = 'inherit'
      document.getElementById('level').style.display = 'none'
    }else{
        document.getElementById('questions').style.display = 'none'
        document.getElementById('level').style.display = 'inherit'
    }
    
  }