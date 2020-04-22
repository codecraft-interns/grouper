((window, document, undefined) => {      
  window.onload = function() {
//global bariable initialization
    var frontEndSelections=[];
    var previousGroupName=undefined;
    var flag=0;
    var i=0;
    var j=0;
    var k=0;
    var pFlag=0;
//fetching the json data 
  const groupData =  `assets/json/interns.json`;
    function getGroup() {
    return fetch(groupData).then((data) => data.json());
      }
//displaying the front end part
  function display(groupName,name)
  {  
    if(previousGroupName!=groupName)
   { 
    i=0;
    j++;
    k++;
    previousGroupName=groupName;

    const bttnFrontEndGroupId = document.querySelector('.group-layout__group-btn--add');
    const bttnBackEndGroupId=document.querySelector('.group-layout__group-btn--minus');

    bttnFrontEndGroupId.setAttribute("id","add-button"+j);
    bttnBackEndGroupId.setAttribute("id","remove-button"+j);

    const mainDivFrontEnd=document.getElementById("front-end-resources");
    const mainDivBackEnd=document.getElementById("back-end-resources");

    const groupContainerFrontEnd=document.querySelector(".group-layout__group__front-end");
    const groupContainerBackEnd=document.querySelector(".group-layout__group__back-end");

    mainDivFrontEnd.appendChild(groupContainerFrontEnd.cloneNode(flag));
    mainDivBackEnd.appendChild(groupContainerBackEnd.cloneNode(flag));

    groupContainerFrontEnd.setAttribute("id","group-container"+k);
    groupContainerBackEnd.setAttribute("id","group-container"+k)



    const editGroupNameFrontEnd=document.getElementById("front-end-group-name");
    const editMemberNameFrontEnd=document.getElementById("front-end-member-name"+j);

    const editGroupNameBackEnd=document.getElementById("back-end-group-name");
    const editMemberNameBackEnd=document.getElementById("back-end-member-name"+j);


    editGroupNameFrontEnd.innerHTML=groupName;
    editMemberNameFrontEnd.innerHTML=name;
    editGroupNameBackEnd.innerHTML=groupName;
    editMemberNameBackEnd.innerHTML=name;
    flag++;
    i++;
       } 

else
     { 
           i++;
           const idNameFrontEnd="front-end-member-name"+i;
           const idNameBackEnd="back-end-member-name"+i;

           const editMemberNameFrontEnd=document.getElementById(idNameFrontEnd);
           const editMemberNameBackEnd=document.getElementById(idNameBackEnd);

           editMemberNameFrontEnd.innerHTML=name;
           editMemberNameBackEnd.innerHTML=name;
           j=0;
           
          
     }
    }


function backEndDisplay(getId){
  
const mainID=document.getElementById("back-end-resources");
  mainID.style.display="block";
  for(i=0;i<=4;i++){
   if( mainID.children[i].id==getId){
      mainID.children[i].style.display="block";
    }
    else{
      if(mainID.children[i].style.display=="block"){
        continue;
      }
      else{
      mainID.children[i].style.display="none";
      }
    }
}
for(i=0;i<=4;i++){
  if( mainID.children[i].style.display=="block"){
     pFlag=1;
   }
   else{
     pFlag=0;
     break;
     }

}
}

function frontEndDisplay(getId){
const mainID=document.getElementById("front-end-resources");
mainID.style.display="block";
for(i=0;i<=4;i++){
 if( mainID.children[i].id==getId){
    mainID.children[i].style.display="block"
  }
  else{
    if(pFlag==true){
    if(mainID.children[i].style.display=="block"){
      continue;
    }
    else{
    mainID.children[i].style.display="none";
    }
  }
}
}
}

    const keyValueMap = 
      [  { key: "name", value: "Mercury" }, 
         { key: "name", value: "Venus" },
         { key: "name", value: "Earth" },
         { key: "name", value: "Mars" } ];

      function nameAssign(data,index) {
         keyValueMap.forEach((entry) => {  
         if(data[index].groupName==entry.value){
         const {name} = data[index];
         const {value}=entry;
         frontEndSelections.push({name,value});
           }
         });
       }
//when the page loads 
       async function init()
       {
        const data=await getGroup();
        data.forEach((entry,index) => {
        nameAssign(data,index);
         });
      frontEndSelections.forEach((entry,index) =>
       {
       const getGroupName=entry.value;
       const getMemberName=entry.name;
       display(getGroupName,getMemberName);
        });
        document.getElementById("back-end-resources").style.display="none";
      
       
        }
        init();



        document.addEventListener("click",function(e){
          if(e.target.innerHTML=='+'&&(e.target.id=='add-button' || e.target.id=='add-button1'|| e.target.id=='add-button2'||e.target.id=='add-button3'||e.target.id=='add-button4' ))
          {
             const getContainer=e.target.parentNode.parentElement.id;
             document.getElementById(getContainer).style.display="none";
             backEndDisplay(getContainer);
          }
          else
          {
      
          }
           
        },false);
   

        document.addEventListener("click",function(e){
          if(e.target.innerHTML=='-'&&(e.target.id=='remove-button' || e.target.id=='remove-button1'|| e.target.id=='remove-button2'||e.target.id=='remove-button3'||e.target.id=='remove-button4' ))
          {
             const getContainer=e.target.parentNode.parentElement.id;
             const getClass=e.target.parentNode.parentElement;
             getClass.style.display="none";
             frontEndDisplay(getContainer);
            
          }
            else {
           
            }
           
        },false);
    
      }

})(window, document, undefined);




