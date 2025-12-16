/* Створити масив із 7 користувачів (користувач - об'єкт). 
Кожен користувач повинен мати властивість 'groups', яка є масивом. 
Це список груп, в яких складається користувач 
(прим. ['admins', 'moderators', 'content-manager',....)). 
Для користувачів у масиві деякі групи повинні повторюватися деякі ні. 
Створити функцію, яка приймає масив цих користувачів і повертає уніфікований масив 
усіх груп у користувачів у масиві. */

const users = [
  {
    id: 1,
    name: "Alice",
    groups: ["admins", "moderators"]
  },
  {
    id: 2,
    name: "Bob",
    groups: ["users"]
  },
  {
    id: 3,
    name: "Charlie",
    groups: ["users", "content-manager"]
  },
  {
    id: 4,
    name: "Diana",
    groups: ["moderators"]
  },
  {
    id: 5,
    name: "Ethan",
    groups: ["admins", "users"]
  },
  {
    id: 6,
    name: "Fiona",
    groups: ["support", "users"]
  },
  {
    id: 7,
    name: "George",
    groups: ["content-manager"]
  }
];

// console.log(users.length)
function getAllGroups(users) {

    let arr = []
    for (let i = 0; i < users.length; i++) {
        // console.log(users[i].groups)
        for (let j = 0; j < users[i].groups.length; j++) {
            arr.push(users[i].groups[j])
        }
    }
    // console.log(arr);

    let set = new Set(arr);

    let arrWithoutDublicates = [];

    for(let value of set) {
        arrWithoutDublicates.push(value)
    }
    
    return arrWithoutDublicates
}

console.log(getAllGroups(users))
