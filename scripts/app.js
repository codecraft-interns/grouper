(() => {
    window.onload = function() {

        const frontEnd = document.getElementById('front-end-resources');
        const backEnd = document.getElementById('back-end-resources');

        const genericGrouper = () => ` http://localhost:3000/data/?format=json`;

        function getRecord() {
            return fetch(genericGrouper()).then(res => {
                    res.json().then(data => {
                        let groupedElement = [];
                        let member = {};
                        data.map(i => {
                            if (member[i.groupName]) {
                                member[i.groupName].push(i)
                            } else {
                                groupedElement.push(i.groupName);
                                member[i.groupName] = [i];
                            }
                        });
                        console.log(groupedElement)
                            // for (let groupname of groupedElement) {
                        function group() {
                            for (let groupname of groupedElement) {
                                const group_name = `<div class="group-layout__group" id="group">
                                                    <div class="group-layout__group-header" id=${'group-'+groupname}>
                                                         <div class="group-layout__group-name">${groupname}</div>
                                                        <div class="group-layout__group-btn group-layout__group-btn--add" id="remove-group">+</div>
                                                    </div>`;
                                frontEnd.innerHTML += group_name;

                                function memberName() {
                                    for (let members of member[groupname]) {
                                        const member_name = `<div class="group-layout__group-item" id="member-name">
                                                <div class="group-layout__group-item-name" id=${'group-'+members.name}>${members.name}</div>
                                                <div class="group-layout__group-btn  group-layout__group-btn--add" id="remove-member" >+</div>
                                            
                                        </div>}`;

                                        frontEnd.innerHTML += member_name;
                                    }
                                    ` < /div>  `;

                                    function deletgroup() {
                                        const deleteGroupMember = document.getElementById('group');
                                        const child = document.getElementById('remove-group');
                                        const groupMember = document.getElementById('member-name');
                                        const deleteMember = document.getElementById('remove-member');

                                        child.addEventListener('click', function(e) {
                                            backEnd.appendChild(deleteGroupMember);
                                            backEnd.appendChild(groupMember);
                                        }, false);

                                        deleteMember.addEventListener('click', function(e) {
                                            // backEnd.appendChild(deleteGroupMember);
                                            backEnd.appendChild(groupMember);
                                            // deleteMember.remove(frontEnd);
                                        }, false);
                                    }

                                    deletgroup();
                                }
                                memberName();
                            }
                        }
                        group();
                    });

                }

            )
        }
        console.log("get record data" + getRecord());
        console.log('write your code here');
    }
})()