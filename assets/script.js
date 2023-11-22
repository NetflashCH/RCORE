var whiteboards = {};

var whiteboardList = document.getElementById('whiteboards_list');
var root = document.getElementById('root'); 
var searchbar = document.getElementById('searchbar');
var returnToOverview = document.querySelector("#details > button");

var changePosition = document.getElementById('detailsChangePosition');
var changeScaleform = document.getElementById('detailsChangeScaleform');
var teleportBoard = document.getElementById('detailsTeleport');

whiteboards['databaseId'] = {
    'id': 'normalid',
    'model': 'whiteboard1',
    'url': 'https://youtube.com/',
    'position': {
        'x': 0,
        'y': 0,
        'z': 0
    },
    'settings': {
        'readOnly': false,
        'acePermissions': 'false',
        'interactionDistance': 2,
    },
    'jobs': [],
    'grades': []
};

for(var i = 0; i < 10; i++) {
    whiteboards['databaseId' + i] = {
        'id': 'normalid' + i,
        'model': 'whiteboard1' + i,
        'url': 'https://youtube.com/',
        'position': {
            'x': 0,
            'y': 0,
            'z': 0
        },
        'settings': {
            'readOnly': false,
            'acePermissions': 'false',
            'interactionDistance': 2,
        },
        'jobs': [],
        'grades': []
    };
}

reloadWhiteboards();
function reloadWhiteboards() {
    whiteboardList.innerHTML = '';
    searchbar.value = '';

    for (const [databaseId, whiteboard] of Object.entries(whiteboards)) {
        addWhiteboardElement(databaseId, whiteboard);
    }
}

function addWhiteboardElement(databaseId, whiteboard) {
    var li = document.createElement('li');
    li.classList.add('grid', 'gap-[1.5rem]', 'p-[1rem]', 'bg-[#161621]', 'rounded-[.5rem]');
    li.id = databaseId;
    li.style.height = '14rem';

    var div = document.createElement('div');
    div.classList.add('flex', 'center', 'justify-between', 'gap-[1rem]', 'h-[24px]');
    li.appendChild(div);

    var h3 = document.createElement('h3');
    h3.classList.add('font-[500]', 'text-[20]');
    h3.innerText = whiteboard.id;
    div.appendChild(h3);

    var div2 = document.createElement('div');
    div2.classList.add('flex', 'items-center', 'gap-[1rem]', 'w-max', 'h-max');
    div.appendChild(div2);

    var p = document.createElement('p');
    p.classList.add('tooltip_teleport');
    div2.appendChild(p);

    p.innerHTML = '<svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_6_181)"><path d="M24.25 0.875V0H22.5V0.875V1.75H21.625H20.75V3.5H21.625H22.5V4.375V5.25H24.25V4.375V3.5H25.125H26V1.75H25.125H24.25V0.875ZM1.5 6.125V5.25H-0.25V6.125V7H-1.125H-2V8.75H-1.125H-0.25V9.625V10.5H1.5V9.625V8.75H2.375H3.25V7H2.375H1.5V6.125ZM12 1.75C12.1724 1.75 12.343 1.78395 12.5023 1.84991C12.6615 1.91587 12.8062 2.01255 12.9281 2.13442C13.05 2.2563 13.1466 2.40099 13.2126 2.56023C13.2786 2.71947 13.3125 2.89014 13.3125 3.0625C13.3125 3.23486 13.2786 3.40553 13.2126 3.56477C13.1466 3.72401 13.05 3.8687 12.9281 3.99058C12.8062 4.11245 12.6615 4.20913 12.5023 4.27509C12.343 4.34105 12.1724 4.375 12 4.375C11.8276 4.375 11.657 4.34105 11.4977 4.27509C11.3385 4.20913 11.1938 4.11245 11.0719 3.99058C10.95 3.8687 10.8534 3.72401 10.7874 3.56477C10.7214 3.40553 10.6875 3.23486 10.6875 3.0625C10.6875 2.89014 10.7214 2.71947 10.7874 2.56023C10.8534 2.40099 10.95 2.2563 11.0719 2.13442C11.1938 2.01255 11.3385 1.91587 11.4977 1.84991C11.657 1.78395 11.8276 1.75 12 1.75ZM12 6.125C12.8122 6.125 13.5912 5.80234 14.1655 5.22801C14.7398 4.65368 15.0625 3.87473 15.0625 3.0625C15.0625 2.25027 14.7398 1.47132 14.1655 0.896985C13.5912 0.322655 12.8122 0 12 0C11.1878 0 10.4088 0.322655 9.83449 0.896985C9.26016 1.47132 8.9375 2.25027 8.9375 3.0625C8.9375 3.87473 9.26016 4.65368 9.83449 5.22801C10.4088 5.80234 11.1878 6.125 12 6.125ZM20.75 24.5H19.875H4.125H3.25V25.375V27.125V28H5V27.125V26.25H19V27.125V28H20.75V27.125V25.375V24.5ZM6.75 7V8.75H7.625H16.375H17.25V7H16.375H7.625H6.75ZM5 10.5V12.25H5.875H18.125H19V10.5H18.125H5.875H5ZM3.25 14V15.75H4.125H19.875H20.75V14H19.875H4.125H3.25ZM6.75 17.5V19.25H7.625H16.375H17.25V17.5H16.375H7.625H6.75ZM6.75 21V22.75H7.625H16.375H17.25V21H16.375H7.625H6.75Z" fill="#F29E20"></path></g><defs><clippath id="clip0_6_181"><rect width="24" height="24" fill="white"></rect></clippath></defs></svg>'
    var svg = p.children[0];
    svg.id = 'teleport_' + databaseId;
    svg.classList.add('teleport');

    var button = document.createElement('button');
    button.type = 'button';
    button.classList.add('flex', 'place-content-center', 'gap-[.5rem]', 'bg-[#F29E20]', 'w-[90px]', 'h-[32px]', 'rounded-[.5rem]');
    div2.appendChild(button);

    var svg2 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg2.setAttribute("width", "24");
    svg2.setAttribute("height", "24");
    svg2.setAttribute("viewBox", "0 0 24 24");
    svg2.setAttribute("fill", "#282B43");
    svg2.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    svg2.classList.add('my-auto');
    button.appendChild(svg2);

    var path2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path2.setAttribute("d", "M12.8995 6.85431L17.1421 11.0969L7.24264 20.9964H3V16.7538L12.8995 6.85431ZM14.3137 5.44009L16.435 3.31877C16.8256 2.92825 17.4587 2.92825 17.8492 3.31877L20.6777 6.1472C21.0682 6.53772 21.0682 7.17089 20.6777 7.56141L18.5563 9.68273L14.3137 5.44009Z");
    svg2.appendChild(path2);

    var span = document.createElement('span');
    span.classList.add('text-[18]', 'font-[500]', 'my-auto');
    span.style.color = '#282B43';
    span.innerText = 'Edit';
    button.appendChild(span);

    var ul = document.createElement('ul');
    ul.classList.add('bg-[#282B43]', 'rounded-[.5rem]', 'grid', 'gap-[1rem]', 'py-[1rem]', 'px-[1.5rem]', 'tooltip_details');
    li.appendChild(ul);

    var li2 = document.createElement('li');
    li2.classList.add('flex', 'center', 'text-[18]', 'font-[500]');
    ul.appendChild(li2);

    var span2 = document.createElement('span');
    span2.classList.add('w-[35%]');
    span2.innerText = 'Model';
    li2.appendChild(span2);

    var span3 = document.createElement('span');
    span3.innerText = whiteboard.model;
    li2.appendChild(span3);

    var li3 = document.createElement('li');
    li3.classList.add('flex', 'center', 'text-[18]', 'font-[500]');
    ul.appendChild(li3);

    var span4 = document.createElement('span');
    span4.classList.add('w-[35%]');
    span4.innerText = 'URL';
    li3.appendChild(span4);

    var span5 = document.createElement('span');
    span5.innerText = whiteboard.url;
    li3.appendChild(span5);

    var li4 = document.createElement('li');
    li4.classList.add('flex', 'center', 'text-[18]', 'font-[500]');
    ul.appendChild(li4);

    var span6 = document.createElement('span');
    span6.classList.add('w-[35%]');
    span6.innerText = 'Position';
    li4.appendChild(span6);

    var span7 = document.createElement('span');
    span7.innerText = 'X:' + whiteboard.position.x + ', Y:' + whiteboard.position.y + ', Z:' + whiteboard.position.z;
    li4.appendChild(span7);

    p.onclick = function () {
        teleport(databaseId);
    }

    ul.onclick = function () {
        details(databaseId);
    }

    whiteboardList.appendChild(li);
}   

function position(databaseId) {
    root.setAttribute("state", "hidden");
    console.log(databaseId);
}

function scaleform(databaseId) {
    root.setAttribute("state", "hidden");
    console.log(databaseId);
}

function teleport(databaseId) {
    root.setAttribute("state", "hidden");
    console.log(databaseId);
}

function details(databaseId) {
    if(whiteboards[databaseId]!=null) {
        var whiteboard = whiteboards[databaseId];
        document.getElementById('detailsId').innerHTML = whiteboard.id;   
        document.getElementById('detailsModel').innerHTML = whiteboard.model;
        document.getElementById('detailsPosition').innerHTML = 'X:' + whiteboard.position.x + ', Y:' + whiteboard.position.y + ', Z:' + whiteboard.position.z;
        document.getElementById('detailsRead').innerHTML = whiteboard.settings.readOnly;
        document.getElementById('detailsPermissions').innerHTML = whiteboard.settings.acePermissions;
        document.getElementById('detailsDistance').innerHTML = whiteboard.settings.interactionDistance;

        if(whiteboard.url.length == 0) {
            document.getElementById('detailsUrl').innerHTML = '- ';
        } else {
            document.getElementById('detailsUrl').innerHTML = whiteboard.url;
        }

        if(whiteboard.jobs.length == 0) {
            document.getElementById('detailsJobs').innerHTML = '- ';
        } else {
            document.getElementById('detailsJobs').innerHTML = whiteboard.jobs.join(', ');
        }

        if(whiteboard.grades.length == 0) {
            document.getElementById('detailsGrades').innerHTML = '- ';
        } else {
            document.getElementById('detailsGrades').innerHTML = whiteboard.grades.join(', ');
        }

        root.setAttribute("state", "details");
    } else {
        reloadWhiteboards();
    }
}

function closeWhiteboard() {
    root.setAttribute("state", "hidden");
    console.log('close');
}

function search(input) {
    var inp = input.toLowerCase();
    var type = 0;

    if (inp.startsWith('model:')) {
        type = 1;
        inp = inp.replace('model:', '');
    } else if (inp.startsWith('url')) {
        type = 2;
        inp = inp.replace('url:', '');
    } else if (inp.startsWith('distance')) {
        type = 3;
        inp = inp.replace('distance:', '');
    }

    var results = [];
    for (const [databaseId, whiteboard] of Object.entries(whiteboards)) {
        if(type == 1) {
            if (whiteboard.model.toLowerCase().includes(inp)) {
                results.push([databaseId, whiteboard]);
            }
        } else if(type == 2) {
            if(whiteboard.url.toLowerCase().includes(inp)) {
                results.push([databaseId, whiteboard]);
            }
        } else if(type == 3) {
            inp = inp.replace(' ', '');
            if(checkWhiteboardDistance(whiteboard, inp)) {
                results.push([databaseId, whiteboard]);
            }
        } else {
            if (whiteboard.id.toLowerCase().includes(inp)) {
                results.push([databaseId, whiteboard]);
            }
        }
    }

    whiteboardList.innerHTML = '';
    for (const [databaseId, whiteboard] of results) {
        addWhiteboardElement(databaseId, whiteboard);
    }
}

function checkWhiteboardDistance(whiteboard, distance) {
    var conditions = [];
    
    while(distance.includes('>')) {
        var result = ">";
        var nr = distance.split('>')[1];

        if(nr.startsWith('=')) {
            result += '=';
            nr = nr.replace('=', '');
        }

        for(var i = 0; i < nr.length; i++) {
            if(isNaN(nr[i])) {
                break;
            } else {
                result += nr[i];
            }
        }

        conditions.push(result);
        distance = distance.replace(result, '');
    }

    while(distance.includes('<')) {
        var result = "<";
        var nr = distance.split('<')[1];

        if(nr.startsWith('=')) {
            result += '=';
            nr = nr.replace('=', '');
        }
        
        for(var i = 0; i < nr.length; i++) {
            if(isNaN(nr[i])) {
                break;
            } else {
                result += nr[i];
            }
        }

        conditions.push(result);
        distance = distance.replace(result, '');
    }

    while(distance.includes('>')) {
        var result = ">";
        var nr = distance.split('>')[1];

        if(nr.startsWith('=')) {
            result += '=';
            nr = nr.replace('=', '');
        }

        for(var i = 0; i < nr.length; i++) {
            if(isNaN(nr[i])) {
                break;
            } else {
                result += nr[i];
            }
        }

        conditions.push(result);
        distance = distance.replace(result, '');
    }

    if(conditions.length == 0) {
        if(distance == whiteboard.settings.interactionDistance) {
            return true;
        } else {
            return false;
        }
    } else {
        for(var i = 0; i < conditions.length; i++) {
            if(conditions[i].startsWith('>=')) {
                if(!(whiteboard.settings.interactionDistance >= parseInt(conditions[i].replace('>=', '')))) {
                    return false;
                }
            } else if(conditions[i].startsWith('<=')) {
                if(!(whiteboard.settings.interactionDistance <= parseInt(conditions[i].replace('<=', '')))) {
                    return false;
                }
            } else if(conditions[i].startsWith('>')) {
                if(!(whiteboard.settings.interactionDistance > parseInt(conditions[i].replace('>', '')))) {
                    return false;
                }
            } else if(conditions[i].startsWith('<')) {
                if(!(whiteboard.settings.interactionDistance < parseInt(conditions[i].replace('<', '')))) {
                    return false;
                }
            }
        }

        return true;
    }
}

document.addEventListener('keydown', function (event) {
    if(event.target == searchbar && searchbar.value != '') {
        if(event.key === 'Escape') {
            searchbar.value = '';
            search('');
        }

        return;
    } else if (event.key === 'Escape') { 
        if(root.getAttribute("state") === 'overview') {
            closeWhiteboard();
        } else {
            root.setAttribute("state", "overview");
        }
    }
});

searchbar.addEventListener('input', function (event) {
    search(event.target.value);
});

returnToOverview.addEventListener('click', function(event) {
    root.setAttribute("state", "overview");
});

changePosition.addEventListener('click', function(event) {
    var databaseId = document.getElementById('detailsId').innerHTML;
    position(databaseId);
});

changeScaleform.addEventListener('click', function(event) {
    var databaseId = document.getElementById('detailsId').innerHTML;
    scaleform(databaseId);
});

teleportBoard.addEventListener('click', function(event) {
    var databaseId = document.getElementById('detailsId').innerHTML;
    teleport(databaseId);
});

