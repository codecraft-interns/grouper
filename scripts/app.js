"use strict";
((window, document, undefined) => {

    window.onload = function() {
        // const local_json = data;
        const frontEndId = document.getElementById('front-end-resources');
        const backEndId = document.getElementById('back-end-resources');
        
        //testing
        const local_json = {
            'Mercury': ['Ranjith','Athish','Pragathi'],
            'Venus': ['Shriram','Dhanalakshmi','Kiran'],
            'Earth': ['Ashfan','Mithun','Abida'],
            'Mars': ['Deekshith','Tejas','Mohinuddin']
        };

        const grpNm = ['Mercury','Venus','Earth','Mars'];
        // var local_json = data;
        // var test = [];
        // for(let i=0; i<data.length; i++){
        //     let test1 = data[i]['groupname']
        // }
        // console.log(data[1]['groupName']);

        function memberFunc(group_layout) {
            var memberOne = document.createElement('div');
            memberOne.classList.add('group-layout__group-item');
            group_layout.appendChild(memberOne);


            var memberNameOne = document.createElement('div');
            memberNameOne.classList.add('group-layout__group-item-name');
            memberNameOne.innerText = '##';
            memberOne.appendChild(memberNameOne);


            var memberBtnOne = document.createElement('div');
            memberBtnOne.classList.add('group-layout__group-btn','group-layout__group-btn--add');
            memberBtnOne.innerText = '+';
            memberOne.appendChild(memberBtnOne);
        } 

                
        function groupFunc(group) {
            var group_header = document.createElement('div');
            group_header.classList.add('group-layout__group-header');
            group.appendChild(group_header);
    
    
            var group_name = document.createElement('div');
            group_name.classList.add('group-layout__group-name');
            group_name.innerText = '###';
            group_header.appendChild(group_name);
    
    
            var group_btn = document.createElement('div');
            group_btn.classList.add('group-layout__group-btn','group-layout__group-btn--add');
            group_btn.innerText = '+';
            group_header.appendChild(group_btn);

            var group_layout = document.createElement('div');
            group_layout.classList.add('group-layout__group-items');
            group.appendChild(group_layout);

            for(let i=0;i<4;i++){
                memberFunc(group_layout);
            }
        }

        function layoutFunc(pos) {
            var group = document.createElement('div');
            group.classList.add('group-layout__group');
            frontEndId.appendChild(group);
            groupFunc(group);
        }




        // //firstMember
        // const memberOne = document.createElement('div');
        // memberOne.classList.add('group-layout__group-item');

        // const memberNameOne = document.createElement('div');
        // memberNameOne.classList.add('group-layout__group-item-name');
        // memberNameOne.innerText = '##';

        // const memberBtnOne = document.createElement('div');
        // memberBtnOne.classList.add('group-layout__group-btn','group-layout__group-btn--add');
        // memberBtnOne.innerText = '+';

        // //secondMember
        // const memberTwo = document.createElement('div');
        // memberTwo.classList.add('group-layout__group-item');

        // const memberNameTwo = document.createElement('div');
        // memberNameTwo.classList.add('group-layout__group-item-name');
        // memberNameTwo.innerText = '##';

        // const memberBtnTwo = document.createElement('div');
        // memberBtnTwo.classList.add('group-layout__group-btn','group-layout__group-btn--add');
        // memberBtnTwo.innerText = '+';

        // //thirdMember
        // const memberThree = document.createElement('div');
        // memberThree.classList.add('group-layout__group-item');

        // const memberNameThree = document.createElement('div');
        // memberNameThree.classList.add('group-layout__group-item-name');
        // memberNameThree.innerText = '##';

        // const memberBtnThree = document.createElement('div');
        // memberBtnThree.classList.add('group-layout__group-btn','group-layout__group-btn--add');
        // memberBtnThree.innerText = '+';

        // //fourthMember
        // const memberFour = document.createElement('div');
        // memberFour.classList.add('group-layout__group-item');

        // const memberNameFour = document.createElement('div');
        // memberNameFour.classList.add('group-layout__group-item-name');
        // memberNameFour.innerText = '##';

        // const memberBtnFour = document.createElement('div');
        // memberBtnFour.classList.add('group-layout__group-btn','group-layout__group-btn--add');
        // memberBtnFour.innerText = '+';
        

        // group_layout.appendChild(memberTwo);
        // memberTwo.appendChild(memberNameTwo);
        // memberTwo.appendChild(memberBtnTwo);

        // group_layout.appendChild(memberThree);
        // memberThree.appendChild(memberNameThree);
        // memberThree.appendChild(memberBtnThree);

        // group_layout.appendChild(memberFour);
        // memberFour.appendChild(memberNameFour);
        // memberFour.appendChild(memberBtnFour);

        const groupAdd = document.getElementsByClassName('group-layout__group');
        groupAdd.addEventListener('click', (e) => {
                if(e.target.classList=='group-layout__group-btn--add'){
                    var groupend = document.createElement('div');
                    groupend.classList.add('group-layout__group');
                    backEndId.appendChild(groupend);
                    groupFunc(groupend);

                }
            },false);
        function init() {
            var pos = 'frontEndId'
            layoutFunc(pos);        
        }
        init();
    }
})(window, document, undefined);