((window, document, undefined) => {
  window.onload = function () {
    //Global Variables
    const frontEnd = document.getElementById('front-end-resources');
    const backEnd = document.getElementById('back-end-resources');
    const frontEndContainer = document.querySelector(".group-layout__group__front-end");
    const grpName = document.getElementById("group-name");
    const memberName = document.getElementById("member-name");
    const frontEndSelections = [];
    var previousGroupName = undefined;
    var flag = 0;
    var j = 0;

    //JSON File
    const grpData =
      `http://localhost:8080/assets/json/interns.json`;

    //Fetch API
    function fetchData() {
      return fetch(grpData).then((data) => data.json());
    }

    //Deafult display frontend
    function display(valueName, name) {
      if (previousGroupName != valueName) {
        previousGroupName = valueName;
        frontEnd.appendChild(frontEndContainer.cloneNode(flag));
        grpName.innerHTML = valueName;
        memberName.innerHTML = name;
        flag++;
        i = 0;
        j++;
      }
      else {
        i++;
        const memberIdName = "member-name" + i;
        const memberName = document.getElementById(memberIdName);
        memberName.innerHTML = name;
      }
    }

    //Mapping
    const keyValueMap =
      [
        { key: "name", value: "Mercury" },
        { key: "name", value: "Venus" },
        { key: "name", value: "Earth" },
        { key: "name", value: "Mars" }
      ];

    //Store Key Value from API to frontEndSelections
    function renderKeyValue(data, index) {
      keyValueMap.forEach((entry) => {
        if (data[index].groupName == entry.value) {
          const { name } = data[index];
          const { value } = entry;
          frontEndSelections.push({ name, value });
        }
      });
    }

    // Promises
    async function init() {
      const data = await fetchData();
      data.forEach((entry, index) => {
        renderKeyValue(data, index);

      });

      //Front End key value array
      frontEndSelections.forEach((entry) => {
        const getGroupName = entry.value;
        const getMemberName = entry.name;
        display(getGroupName, getMemberName);

      });
    }

    //Event Listner
    document.addEventListener("click", function (e) {

      //Group move to backend
      if (e.target.innerHTML == '+' && e.target.id == 'group-AddBtn') {
        e.target.innerHTML = '-';
        e.target.id = 'group-PrvBtn';
        const frontGroupLayout = e.target.parentNode.parentNode;
        for (let i = 1; i < frontGroupLayout.childElementCount; i++) {
          const frontMemBtn = frontGroupLayout.children[i].lastElementChild.lastElementChild;
          frontMemBtn.innerHTML = '-';
        }
        groupToggle(frontGroupLayout, backEnd);
      }

      //Group move to frontend
      else if (e.target.innerHTML == '-' && e.target.id == 'group-PrvBtn') {
        e.target.innerHTML = '+';
        e.target.id = 'group-AddBtn';
        const backGroupLayout = e.target.parentNode.parentNode;
        for (let i = 1; i < backGroupLayout.childElementCount; i++) {
          const backMemBtn = backGroupLayout.children[i].lastElementChild.lastElementChild;
          backMemBtn.innerHTML = '+';
        }
        groupToggle(backGroupLayout, frontEnd);
      }

    }, false);

    //Toggle Function
    function groupToggle(layout, container) {
      container.appendChild(layout);
    }

    //Default Call
    init();
  }
})(window, document, undefined)