(() => {
    window.onload = function () {

        const mainView = document.getElementById('front-end-resources');
        const rightmainView = this.document.getElementById('back-end-resources');
        const groupAPI = () => ` http://localhost:3000/groupname/?format=json`;
        function getRecord() {
            return fetch(groupAPI()).then(res => {
                res.json().then(
                    data => {
                        if (data.length > 0) {

                            grouped = {};

                            function display() {
                                let groups = [];
                                let groupedItems = {};
                                data.map(e => {
                                    if (groupedItems[e.groupName]) {
                                        groupedItems[e.groupName].push(e)
                                    } else {
                                        groups.push(e.groupName);
                                        groupedItems[e.groupName] = [e];
                                    }
                                });
                                console.log(groupedItems);
                                console.log(groups);
                                for (let d of groups) {
                                    let groupHtml = `<div class="group-layout__group" id="group">
                                    <div class="group-layout__group-header" >
                                        <div class="group-layout__group-name" id="group_name">${d}</div>
                                        <div class="group-layout__group-btn group-layout__group-btn--add" id="remove_group"  >+</div>
                                    </div>`;
                                    mainView.innerHTML += groupHtml;
                                    for (let list of groupedItems[d]) {
                                        const memberHtml = `
                                        <div class="group-layout__group-item" id="member">
                                                    <div class="group-layout__group-item-name" id="${list.name}">${list.name}</div>
                                                    <div class="group-layout__group-btn  group-layout__group-btn--add" id="remove_member" >+</div>
                                                </div>
                                            </div>}
                                        
                                        </div>  `;
                                        mainView.innerHTML += memberHtml;

                                    }
                                }
                            }

                            display();

                            function visibility() {
                                //            document.getElementById("remove_group").onclick = function () {

                                document.getElementById("grouponly").style.visibility = "hidden";
                            }




                            //window.onload=function(){
                            //      document.getElementById("remove_group").onclick=function(){
                            //     function hide_group(){

                            //  document.getElementById("grouponly").style.visibility="hidden";

                            // }hide_group();
                            //  }



                            function delet() {
                                const group1 = document.getElementById("group");
                                const remove_group = document.getElementById("remove_group");
                                const member_remove = document.getElementById("member");
                                const remove_member = document.getElementById("remove_member");
                                if (remove_group) {
                                    remove_group.addEventListener('click', function (e) {
                                        group1.remove(mainView);
                                        member_remove.remove(mainView)
                                    }, false)
                                }
                                if (remove_member) {
                                    remove_member.addEventListener('click', function (e) {
                                        member_remove.remove(mainView);
                                    }, false)
                                }
                            }

                            delet();
                        }
                    });
            }
            )
        }
        getRecord();

    }
})();