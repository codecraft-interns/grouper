((window,document,undefined) => {
  let frontend_resource=document.getElementById("front-end-resources");
  let backend_resource=document.getElementById("back-end-resources");
 let json_data=data;
 
  let backend_data;
 unique = [...new Set(json_data.map(a => a.groupName))];
  

//initialization
 function init(){
  unique.forEach(element => {
  let grp=group_header(element);
     data.forEach(value => {
       if(value.groupName==element){
         grp.appendChild(group_member(value.name));
       }
      });
     frontend_resource.appendChild(grp);
  });
 
}
//group heading

 function group_header(name){
  const group = document.createElement('div');
  group.classList.add('group-layout__group');
  
  const group_header=document.createElement('div');
  group_header.classList.add('group-layout__group-header');
  
  const group_name=document.createElement('div');
  group_name.classList.add('group-layout__group-name');
  group_name.innerText=name;
  
  const group_btn_add=document.createElement('div');
  group_btn_add.classList.add('group-layout__group-btn');
  group_btn_add.innerText="+";
  group_header.appendChild(group_name);
  group_header.appendChild(group_btn_add);
  group.appendChild(group_header);

  group_btn_add.addEventListener('click', (e) => {
    if(group_btn_add.innerText=="+"){
      group_btn_add.innerText="-";
      backend_resource.appendChild(group);
    }
    else{
      group_btn_add.innerText="+";
      frontend_resource.appendChild(group);
    }
    
  
}, false);
 
  return group;
 }

//members
 function group_member(name)
 {
     
     const group_items=document.createElement('div');
     group_items.classList.add('group-layout__group-items');

     const group_item=document.createElement("div");
     group_item.classList.add('group-layout__group-item');

     const group_item_name=document.createElement("div");
     group_item_name.classList.add('group-layout__group-item-name');
     group_item_name.innerText=name;

     const group_btn_add=document.createElement("div");
  
     group_btn_add.classList.add('group-layout__group-btn');
     group_btn_add.innerText="+";

     group_item.appendChild(group_item_name);
     group_item.appendChild(group_btn_add);
     group_items.appendChild(group_item);

     group_btn_add.addEventListener('click', (e) => {
      let grp,grp_name;
      if(backend_data==null){
      data.forEach(value => {
        if(value.name==name){
          grp=group_header(value.groupName);
        }
       });
       grp.appendChild(group_items)
       backend_data=grp;
      }
      else{
        add_member(group_items);
      }
      backend_resource.appendChild(grp);
    }, false);
  return group_items;
     
 }



function add_member(name)
{
  if(backend_data.childNodes.length<=3){
  backend_data.appendChild(name);
}
else{
  backend_data=null;
}
  
}

init();

})(window,document);

