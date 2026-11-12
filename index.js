const inputTag = document.querySelector("input");

const ulTag = document.querySelector("ul");

let data = [];



// adding a data
function addData() {
    console.log(inputTag.value);
    data.push(inputTag.value);

    inputTag.value = " ";                                   //belive in yourself arjun!!!
     render();
}

//editing a data
function editData(index) {                                 //edit completed bro come on you can do it
    console.log(index);
    console.log(data[index])

   let editData = prompt("EDIT" , data[index])
   
   data[index] = editData;

   render(); 
}

//deleting a data

function deleteData(index) {

    console.log(index);
    data.splice(index,1)

    render()
}

function render() {

    ulTag.innerHTML = " ";

    data.forEach((elements,index)=>{
         
    const liTag = document.createElement("li");
    liTag.innerHTML = ` ${elements}<button onClick ="editData(${index})">EDIT</button> <button onClick ="deleteData(${index})">DELETE</button>`
    ulTag.appendChild(liTag);
   })
    
}




