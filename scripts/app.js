(() => {
    window.onload = function () {

        const mainView = document.getElementById('front-end-resources');
        const swapiAPI = () => ` http://localhost:3000/groupname/?format=json`;
        function getRecord() {
            return fetch(swapiAPI()).then(res => {
                res.json().then(
                    data => {
                        if (data.length > 0) {

                            grouped = {};
                            function addCoucounnter() {
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
                                    let groupHtml = `<div class="group-layout__group">
                                    <div class="group-layout__group-header" >
                                        <div class="group-layout__group-name" id="group_name">${d}</div>
                                        <div class="group-layout__group-btn group-layout__group-btn--add" id=""group1" >+</div>
                                    </div>`;
                                    mainView.innerHTML += groupHtml;
                                    for (let list of groupedItems[d]) {
                                        const counterTemplate = `
                                        <div class="group-layout__group-item">
                                                    <div class="group-layout__group-item-name" id="${list.name}">${list.name}</div>
                                                    <div class="group-layout__group-btn  group-layout__group-btn--add" id="member" >+</div>
                                                </div>
                                            </div>}
                                        
                                        </div>  `;
                                        mainView.innerHTML += counterTemplate;

                                    }
                                }
                            }
                            // function delet(){
                            //     var element=document.getElementById("group_name");
                            //     element.classList.remove("group-layout__group-name");
                            //     console.log("class deleted ")
                            // }
                            // delet();
                            addCoucounnter();


                        }


                    });
            }

            )
        }
        getRecord();
        // console.log('write your code here');
    }
})()