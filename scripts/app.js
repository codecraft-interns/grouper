(() => {
let l=data;
const frontEnd=document.getElementById("front-end-resources");
const backEnd=document.getElementById("back-end-resources");

function addingMembers(i,parent,side)
{
    var itemGroup=document.createElement('div');
    itemGroup.classList.add("group-layout__group-items");
    
    var members=document.createElement('div');
    members.classList.add("group-layout__group-item");
    
    
    var memberName=document.createElement('div');
    memberName.classList.add('group-layout__group-item-name');
    memberName.textContent=l[i]["name"];
    memberName.id=i++;
    
    var btnAdd=document.createElement('div');
    btnAdd.classList.add("group-layout__group-btn");
    if(side==frontEnd)
      btnAdd.textContent="+";
    else
      btnAdd.textContent="-";
      
    parent.appendChild(itemGroup);
    itemGroup.appendChild(members);
    members.appendChild(memberName);
    members.appendChild(btnAdd);
}

function init()
{
  for(var i=0;i<=l.length+1;i++)
  {    
      if(i==0)
      {
        var parentId=createGroup(i,frontEnd);
        addingMembers(i,parentId,frontEnd);
        addingMembers(i+1,parentId,frontEnd);
      }
      else
      {
        for(var j=i+1;j<=i+1;j++)
        {
          if(j<l.length)
            if(l[i]["groupName"]!=l[j]["groupName"])
            {
              var parentId=createGroup(j,frontEnd);
              addingMembers(j,parentId,frontEnd);
            }
            else
            addingMembers(j,parentId,frontEnd);
        }
      }
  }
}


  function createGroup(i,side){
  var parents=document.createElement('div');
  parents.classList.add("group-layout__group");
  parents.id=l[i]["groupId"];

  var groupHeading=document.createElement('div');
  groupHeading.classList.add("group-layout__group-header");
 
  var groupName=document.createElement("div");
  groupName.classList.add("group-layout__group-name");
  groupName.textContent=l[i]["groupName"];

  var addBtn=document.createElement('div');
  addBtn.classList.add("group-layout__group-btn");
  if(side==frontEnd)
  addBtn.innerHTML="+";
  else
    addBtn.innerHTML="-";

  side.appendChild(parents);
  parents.appendChild(groupHeading);
  groupHeading.appendChild(groupName);
  groupHeading.appendChild(addBtn);

  return parents;

}



function toCheckGroup(side,grpId,n,divGroup,groupLength)
{
  var presentElements=side.children;
  var childArray=divGroup.children;
  if(presentElements.length!=0)
  {
      for(var j=0;j<presentElements.length;j++)
      {
        if(presentElements[j].id==grpId)
        {
          for(var i=1;i<divGroup.children.length;i++)
          {
            var member=childArray[i].firstChild.firstChild.id;    
            addingMembers(member,presentElements[j],side);
          }
          return 1;
        }   
      }
  }
  else
  {
    var rootNode=createGroup(n,side);
    for(var j=0;j<groupLength-1;j++)
      addingMembers(n++,rootNode,side);
      return 1;
  }

return 0;
}
//function to shift group with its elements
function shiftGroup(grpId,groupLength,side,divGroup)
{
  var n=0,m=3,k=6,h=9;
  switch (grpId) {
    case "GP_01":
      var num=toCheckGroup(side,grpId,n,divGroup,groupLength);
      if(num==0)
      {
        var rootNode=createGroup(n,side);
      for(var j=0;j<groupLength-1;j++)
        addingMembers(n++,rootNode,side);
      }
        break;
    case "GP_02":
      var num=toCheckGroup(side,grpId,m,divGroup,groupLength);
      if(num==0)
      {
        var rootNode=createGroup(m,side);
      for(var j=0;j<groupLength-1;j++)
        addingMembers(m++,rootNode,side);
      }
      break;
    case "GP_03":  
      var num=toCheckGroup(side,grpId,k,divGroup,groupLength);
      if(num==0)
      {
        var rootNode=createGroup(k,side);
      for(var j=0;j<groupLength-1;j++)
        addingMembers(k++,rootNode,side);
      }
      break;
    case "GP_04":
      var num=toCheckGroup(side,grpId,h,divGroup,groupLength);
      if(num==0)
      {
        var rootNode=createGroup(h,side);
      for(var j=0;j<groupLength-1;j++)
        addingMembers(h++,rootNode,side);
      }
      break;
      
    default:console.log("no deletion");
      break;
  }
}

function rightShift(memberId,side,grpArray,v)
{
  if(side.children.length==0)
  var parent=createGroup(memberId,side)
  for (var i=0;i<grpArray.length;i++)
  {
    for(var j=0;j<grpArray.length;j++)
     { if(grpArray[j].id==v)
        return grpArray[j];  
     }
    
    var parent=createGroup(memberId,side);
    return parent; 
  }
}

//funtion for shifting the members to left and right both
function memberShift(member,side)
{
var memberId=member.firstChild.firstChild.id;
var v=member.parentNode.id;
if(side==backEnd)
  var grpArray=backEnd.children;
else
  var grpArray=frontEnd.children;

var parent=rightShift(memberId,side,grpArray,v);

addingMembers(memberId,parent,side);

}

function elementsShift(s,side)
{
  var divGroup=s.parentNode;
  var grpId=s.parentNode.id;//id of group
  if(grpId=="")
  { 
    memberShift(divGroup,side);
    if(divGroup.parentNode.children.length>2)
      divGroup.remove();
    else  
      divGroup.parentNode.remove();
  }
  else{
    var groupLength=divGroup.children.length;
    shiftGroup(grpId,groupLength,side,divGroup);
    divGroup.remove();
  }
}

frontEnd.addEventListener('click',function(e){
  if(e.target.classList.contains("group-layout__group-btn"))
  var s=e.target.parentNode;
  elementsShift(s,backEnd);
})

backEnd.addEventListener('click',function(e){
if(e.target.classList.contains("group-layout__group-btn"))
var s=e.target.parentNode;
elementsShift(s,frontEnd);

//
})
init();
})()

