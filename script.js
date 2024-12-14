let taskArray=[]


function saveTask(){


    let taskName= document.getElementById("taskName").value
    
    let taskStatus= document.getElementById("taskStatus").value
    

    let task = {
            name : taskName,
            stats : taskStatus
    }

    taskArray.push(task)

    console.log(taskArray);


    document.getElementById("taskName").value ="";


    if(task.stats == "Completed" ){
        addTask("task-completed", task.name)
    }
    else if(task.stats == "In_Progress"){
        addTask("task-in-progress", task.name)
    }
    else if(task.stats == "To_Do"){
        addTask("task-to-do", task.name)
    }
    else{
        console.log("choose task status");
        
    }

}


function addTask(taskTitle, taskName){
    
    let container;

    if(taskTitle == "task-completed"){
        
       container=  document.getElementById("task-list1")
    }
    else if(taskTitle == "task-in-progress"){
        container =  document.getElementById("task-list2")
    }
    else{
        container =  document.getElementById("task-list3")
    }
    
    // let container = document.getElementById(taskTitle).querySelector(".task-list")

    let taskDiv = document.createElement("div");
    taskDiv.classList.add("task-item", "p-2", "mb-2", "rounded", "border-dark", "text-dark");

    let div1= document.createElement("div")

    let icon = document.createElement("i");
    icon.classList.add("bi", "bi-check-circle-fill", "text-dark","w-5"); // Change "bi-check-circle" to the desired icon
    icon.style.fontSize = "1.2rem";

    let taskNameSpan = document.createElement("span");
    taskNameSpan.classList.add("text-dark","px-2", "fs-5","flex-grow","w-70")
    taskNameSpan.innerHTML = `${taskName}`;

    div1.appendChild(icon)
    div1.appendChild(taskNameSpan)

    let div2= document.createElement("div")
    let icon2 = document.createElement("i");

    icon2.classList.add("bi", "bi-trash-fill", "text-dark","w-30"); 
    icon2.style.fontSize = "1.5rem";

    icon2.addEventListener("click", ()=>{
        removeElement(taskTitle, taskName)
    })
   

    div2.appendChild(icon2)

    taskDiv.appendChild(div1);
    taskDiv.appendChild(div2);

    container.appendChild(taskDiv);
}

function removeElement(taskTitle, taskName){
    console.log(taskTitle);
    console.log(taskName);

    if(taskTitle=="task-completed"){
        console.log(taskArray);
        
        // removing that element from array 
        taskArray = taskArray.filter((item)=>{
            return item.name!= taskName 
        })


        console.log(taskArray);
        // Removing all the element from UI present inside task list one

            let list1 = document.getElementById('task-list1');
            let childDivs = Array.from(list1.querySelectorAll(":scope > div")); // Direct child divs only

            // let childDivs = Array.from(list1.querySelectorAll("div"));
            childDivs.forEach((child) => {
                list1.removeChild(child);
            })
    
        console.log(taskArray);
        
        // Adding element on UI having stats as completed
        taskArray.map((item)=>{
            if(item.stats=="Completed"){
                addTask("task-completed", item.name)
            }
        })
    }

    else if(taskTitle=="task-in-progress"){
        console.log(taskArray);
        
        // removing that element from array 
        taskArray = taskArray.filter((item)=>{
            return item.name!= taskName 
        })


        console.log(taskArray);
        // Removing all the element from UI present inside task list one

            let list2 = document.getElementById('task-list2');
            let childDivs = Array.from(list2.querySelectorAll(":scope > div")); // Direct child divs only

            // let childDivs = Array.from(list1.querySelectorAll("div"));
            childDivs.forEach((child) => {
                list2.removeChild(child);
            })
    
        console.log(taskArray);
        
        // Adding element on UI having stats as completed
        taskArray.map((item)=>{
            if(item.stats=="In_Progress"){
                addTask("task-in-progress", item.name)
            }
        })
    }

    else{
        console.log(taskArray);
        
        // removing that element from array 
        taskArray = taskArray.filter((item)=>{
            return item.name!= taskName 
        })


        console.log(taskArray);
        // Removing all the element from UI present inside task list one

            let list3 = document.getElementById('task-list3');
            let childDivs = Array.from(list3.querySelectorAll(":scope > div")); // Direct child divs only

            // let childDivs = Array.from(list1.querySelectorAll("div"));
            childDivs.forEach((child) => {
                list3.removeChild(child);
            })
    
        console.log(taskArray);
        
        // Adding element on UI having stats as completed
        taskArray.map((item)=>{
            if(item.stats=="To_Do"){
                addTask("task-to-do", item.name)
            }
        })
    }

}

//Step1 : Add event on icon and then call a function passing a data

//Step2: Remove that element from the array

//Step3 : Remove all the present task present inside task-completed, task-in-progress, task-to-do

//Step4 : Iterate over an array and add element one by one in the respective task list on ui

