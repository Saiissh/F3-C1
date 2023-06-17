

let arr=[];

document.querySelector('.addbtn').addEventListener('click', ()=>{

    let name=document.getElementById('name').value;
    let prof=document.getElementById('prof').value;
    let age=document.getElementById('age').value;
    if (name.trim() === '' || prof.trim() === '' || age.trim() === '') 
    {
        document.getElementById('show-emp').innerHTML='Error : Please Make sure All the fields are filled before adding in an employee !';
        document.getElementById('show-emp').style.color='red';
        return;
    }
    // console.log(name,prof,age);

    document.getElementById('name').value='';
    document.getElementById('prof').value='';
    document.getElementById('age').value='';
    // console.log('hi');

    arr.push({name:name,age:age,prof:prof});
   
     if(arr.length > 0) {
        document.getElementById('show-emp').innerHTML='Success Added';
        document.getElementById('show-emp').style.color='green';
       }
    showdata();
});


function showdata() {

   if(arr.length == 0) {
    document.getElementById('show-emp').innerHTML='You have 0 employee';
    document.getElementById('show-emp').style.color='white';
   }

    let result=document.getElementById('results');
   result.innerHTML='';
   arr.map((val,i)=>{
    
    let data=document.createElement('div');
    data.setAttribute('class','indi-data');
    let id=document.createElement('div');
    let name=document.createElement('div');
    let prof=document.createElement('div');
    let age=document.createElement('div');
    let deluser=document.createElement('button');
    deluser.setAttribute('class','delbtn')
    deluser.textContent='Delete user';
    
    id.innerHTML=i+1;
    name.innerHTML=val.name;
    prof.innerHTML=val.prof;
    age.innerHTML=val.age;

    data.appendChild(id);
    data.appendChild(name);
    data.appendChild(prof);
    data.appendChild(age);
    data.appendChild(deluser);

    result.appendChild(data);

    deluser.addEventListener('click', ()=>{
        document.getElementById('results').removeChild(data);
        arr.splice(i,1);
        document.getElementById('show-emp').innerHTML='Deleted Employee';
        document.getElementById('show-emp').style.color='red';
        showdata();
    })

   })
    
}

