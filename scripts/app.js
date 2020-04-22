(() =>{                                   
    console.log('write your code here')
    var local = data;
    var index = 0;
    
    var a = document.getElementById("front-end-resources");
    var c = document.getElementById("back-end-resources"); 

    var sectionFront = document.createElement('div');
    sectionFront.classList.add('group-layout__group');
    a.append(sectionFront);

    header = document.createElement('div');
    header.classList.add('group-layout__group-header');
    sectionFront.append(header);

    groupItems = document.createElement('div');
    groupItems.classList.add('group-layout__group-items');
    console.log("hello")
    sectionFront.append(groupItems);

    function parent() {       
        groupName = document.createElement('div');
        groupName.classList.add('group-layout__group-name');
        groupName.innerText = local[0].groupName;
        header.append(groupName);
        
        groupButton = document.createElement('button');
        groupButton.classList.add('group-layout__group-btn');
        groupButton.innerText = "+";
        header.append(groupButton);
        }
    function  child(){
        groupItem = document.createElement('div');
        groupItem.classList.add('group-layout__group-item');
        groupItems.append(groupItem);
                
        groupItemName = document.createElement('div');
        groupItemName.classList.add('group-layout__group-item-name');
        groupItemName.innerText = local[index].name;
        groupItem.append(groupItemName);
                
        groupButton = document.createElement('button');
        groupButton.classList.add('group-layout__group-btn');
        groupButton.innerText = "+";
        groupItem.append(groupButton);
        index ++;
        }

     
    function init() {
       parent();
       while(index != 3){
        child();
       }
       index = 0;
    }
  
     init();

    a.addEventListener("click", function(e){
        if(e.target.classList.contains("group-layout__group-btn")){   
                console.log("hi");
                var sectionEnd = document.createElement('div');
                sectionEnd.classList.add('group-layout__group');
                c.append(sectionEnd);
    
                header = document.createElement('div');
                header.classList.add('group-layout__group-header');
                sectionEnd.append(header);
                
                groupItems = document.createElement('div');
                groupItems.classList.add('group-layout__group-items');
                sectionEnd.append(groupItems);
                sectionFront.remove();
                init();
            }

        },false);
        
        c.addEventListener("click", function(e){
            if(e.target.classList.contains("group-layout__group-btn")){
               
            sectionEnd = document.createElement('div');
            sectionFront = document.createElement('div');
            sectionFront.classList.add('group-layout__group');
            a.append(sectionFront);

            header = document.createElement('div');
            header.classList.add('group-layout__group-header');
            sectionFront.append(header);

            groupItems = document.createElement('div');
            groupItems.classList.add('group-layout__group-items');
            sectionFront.append(groupItems);
            init();
            c.remove();
        }
    },false);
          
}
)();

    



