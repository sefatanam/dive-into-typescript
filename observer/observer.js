let input = document.querySelector('#name')
let list = document.querySelector('#list')
let button = document.querySelector('#push')
let schedule = document.querySelector('#schedule')
let time = document.querySelector('#time')

const observer = {
    observer: new Set(),
    add(obs) {
        this.observer.add(obs)
    },
    notify() {
        this.observer.forEach(obs => obs())
    }
}

class User {
    #names = []


    getNames() {
        return this.#names;
    }

    setName(name) {
        this.#names.push(name);
        this.notify()

    }

    static instance = null;

    static {
        this.instance = new User();
    }

    static getInstance() {
        return this.instance;
    }

}

class StudentClass {
    #schedule = {}

    setSchedule(scd) {
        this.schedule = scd;
        this.notify()
    }

    getSchedule() {
        return this.schedule;
    }

    static instance = null;
    static {
        this.instance = new StudentClass();
    }

    static getInstance() {
        return this.instance;
    }
}

Object.assign(User.prototype, observer)
Object.assign(StudentClass.prototype, observer)

const user = User.getInstance();
const studentClass = StudentClass.getInstance();

user.add(renderList)
studentClass.add(updateSchedule)

function renderList() {
    list.innerHTML = ""
    user.getNames().forEach((name) => {
        let li = document.createElement('li');
        li.innerText = name;
        list.appendChild(li);
    })
}

function updateSchedule() {
    time.innerHTML = "";
    const res = interpolateHTML(schedule.innerHTML, studentClass.getSchedule())
    time.innerHTML = res
}

button.addEventListener('click', () => {
    let name = input.value;
    user.setName(name)
})


const interpolateHTML = (template, object) => {
    const props = Object.keys(object);
    const values = Object.values(object)
    const parseTemplate = `return \`${template}\`;`
    return new Function(...props, parseTemplate)(...values)
}

let classNo = 1;
setInterval(() => {
    studentClass.setSchedule({
        name: "Science",
        time: classNo % 2 == 0 ? "Re-Scheduled" : "Solve class",
        classNo: `Class ${classNo}`
    })
    classNo++;
}, 3000)