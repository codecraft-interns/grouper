(async () => {

    const intern = `assets/json/interns.json`;

    let index = 0;
    let groupNameMap = {}
    let frontEndSection = []
    let backEndSection = []
    const backEnd = document.getElementById('back-end-resources');
    const frontEnd = document.getElementById('front-end-resources');

    function fetchData() {
        return fetch(intern).then(data => data.json());
    }

    async function fetchJson() {
        const record = await fetchData();
        for (var i = 0; i < record.length; i++) {
            if (record[i].groupName in groupNameMap) {
                groupNameMap[record[i].groupName].push(record[i]);
            } else {
                groupNameMap[record[i].groupName] = [record[i]];
            }
        }
        Object.keys(groupNameMap).map(key => frontEndSection.push(groupNameMap[key]));
    }

    await fetchJson();

    function displayEnd(mainh, groupLayoutBtn, currentSection) {
        const groupLayout = document.createElement('div');
        groupLayout.classList.add('group-layout__group');
        mainh.appendChild(groupLayout);

        //header
        const groupLayoutHeader = document.createElement('div');
        groupLayoutHeader.classList.add('group-layout__group-header');
        groupLayout.appendChild(groupLayoutHeader);
        const groupLayoutHeaderName = document.createElement('div');
        groupLayoutHeaderName.classList.add('group-layout__group-name');
        groupLayoutHeaderName.innerText = currentSection[index][0].groupName;
        groupLayoutHeader.appendChild(groupLayoutHeaderName);
        groupLayoutHeader.appendChild(groupLayoutBtn);

        //items
        for (var i = 0; i < currentSection[index].length; i++) {
            const groupLayoutItems = document.createElement('div');
            groupLayoutItems.classList.add('group-layout__group-items');
            groupLayout.appendChild(groupLayoutItems);
            const groupLayoutItem = document.createElement('div');
            groupLayoutItem.classList.add('group-layout__group-item');
            groupLayoutItems.appendChild(groupLayoutItem);
            const groupLayoutItemName = document.createElement('div');
            groupLayoutItemName.classList.add('group-layout__group-item-name');
            groupLayoutItemName.innerText = currentSection[index][i].name;
            groupLayoutItem.appendChild(groupLayoutItemName);
            groupLayoutItem.appendChild(groupLayoutBtn.cloneNode(true));
        }
    }

    function groupLayoutBtn() {
        const groupLayoutBtn = document.createElement('div');
        groupLayoutBtn.classList.add('group-layout__group-btn');
        return groupLayoutBtn;
    }

    function shiftFrontEnd(e) {
        const demo = groupNameMap[e.target.previousSibling.innerText]
        backEndSection.push(demo);
        frontEndSection.splice(frontEndSection.indexOf(demo), 1)
        frontEnd.innerHTML = ''
        backEnd.innerHTML = ''
        displayBackEnd(backEnd);
        displayFrontEnd(frontEnd)
    }

    function shiftBackEnd(e) {
        const demo = groupNameMap[e.target.previousSibling.innerText]
        frontEndSection.push(demo);
        backEndSection.splice(backEndSection.indexOf(demo), 1)
        frontEnd.innerHTML = ''
        backEnd.innerHTML = ''
        displayBackEnd(backEnd);
        displayFrontEnd(frontEnd)
    }

    function displayBackEnd(backEnd) {
        index = 0;
        for (var i = 0; i < backEndSection.length; i++) {
            const groupLayoutMinusBtn = groupLayoutBtn();
            groupLayoutMinusBtn.innerText = '-';
            displayEnd(backEnd, groupLayoutMinusBtn, backEndSection)

            groupLayoutMinusBtn.addEventListener('click', (e) => {
                shiftBackEnd(e)
            })
            index++;
        }
    }

    function displayFrontEnd(frontEnd) {
        index = 0
        for (var i = 0; i < frontEndSection.length; i++) {
            const groupLayoutAddBtn = groupLayoutBtn();
            groupLayoutAddBtn.innerText = '+';
            displayEnd(frontEnd, groupLayoutAddBtn, frontEndSection)

            groupLayoutAddBtn.addEventListener('click', (e) => {
                shiftFrontEnd(e)
            })
            index++;
        }
    }

    displayFrontEnd(frontEnd);

})()