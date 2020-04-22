(() => {

    const frontEndSection = document.getElementById("front-end-resources");

    const backEndSection = document.getElementById("back-end-resources");

    //const memberButton = document.querySelectorAll('.group-layout__group-btn group-layout__group-btn--add');

    var groups = {};
    for (var i = 0; i < data.length; i++){
        if(data[i].groupName in groups){
            groups[data[i].groupName].push(data[i]);
        }else{
            groups[data[i].groupName] = [data[i]];
        }
    }

    //function init(){

    for(let i = 0; i < data.length; i++){
        let teamName = document.createElement('div');
        if(i > 0 && data[i].groupId == data[i-1].groupId){
            teamName.innerHTML = `<div class="group-layout__group-item">
            <div class="group-layout__group-item-name">${data[i].name}</div>
            <div class="group-layout__group-btn group-layout__group-btn--add">+</div>
            </div>`;
            frontEndSection.appendChild(teamName);
        }else{
        teamName.innerHTML =`<br/><div class="group-layout__group-header">
            <div class="group-layout__group-name">${data[i].groupName}</div>
            <div class="group-layout__group-btn group-layout__group-btn--add">+</div>
            </div>
            <div class="group-layout__group-item">
            <div class="group-layout__group-item-name">${data[i].name}</div>
            <div class="group-layout__group-btn group-layout__group-btn--add" id="memberBtn">+</div>
            </div>`;
        frontEndSection.appendChild(teamName);

        const memberButton = document.getElementById("memberBtn");

        memberButton.addEventListener('click', (e) => {
            frontEndSection.removeChild(teamName);
            addBackEnd();
        }, false);
       
        
    }    

    }

    //const memberButton = document.getElementById("memberBtn");
    memberButton.addEventListener('click', (e) => {

        const changer =frontEndSection.removeChild(teamName);
        let addElement = document.createElement('div');
        addElement.innerHTML = changer;
        backEndSection.appendChild(addElement);
        console.log('deleted');

        //deleteFrontEnd();
        // function deleteFrontEnd(){
        //     const changer = frontEndSection.removeChild(teamName);
        // let addElement = document.createElement('div');
        // addElement.innerHTML = changer;
        // backEndSection.appendChild(addElement);
        // }
    }, false);

    //}

    // const memberButton = document.getElementById("memberBtn");

    // memberButton.addEventListener('click', (e) => {
    //     console.log('hi');
    //     deleteFrontEnd();
    // }, false);

    function addBackEnd(){
        
        let addElement = document.createElement('div');
        addElement.innerHTML = `<div class="group-layout__group-header">
        <div class="group-layout__group-name"></div>
        <div class="group-layout__group-btn group-layout__group-btn--minus">-</div>
        </div>`;
        backEndSection.appendChild(addElement);
    }
    

    //init();
    console.log(groups);

})()