/*import './styles.scss';*/

const mysql = require('mysql')

const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "homeworkdb",
    password: ""
});

conn.connect(err => {
    if(err){

        console.log(err)
        return err;
    }else {
        console.log("database-------ok")
    }
});

let  test = "SELECT * FROM person";

const task1 = "SELECT * FROM person WHERE id_street ORDER BY id_street ASC"
conn.query(task1, (err, result) =>{
    console.log('Вывести общее число жителей')
    console.log(result.length)
})
const task2 = "SELECT avg(age) as age FROM person"
conn.query(task2, (err, result) =>{
    console.log('Вывести средний возраст жителей')
    console.log(result[0].age)
})
const task3 = "SELECT DISTINCT FirstName FROM Person ORDER BY FirstName"

conn.query(task3, (err, result) =>{
    console.log('Вывести отсортированный по алфавиту список фамилий без повторений')
    let name = '';
   for (let i=0;i<result.length;i++){
       name += result[i].FirstName + '\n'
   }
    console.log(name)
})
const task4 = "SELECT lastName, count(lastName) FROM person GROUP BY lastName HAVING count(lastName)>1"
conn.query(task4, (err, result) =>{
    console.log('Вывести список фамилий, с указанием количества повторений этих фамилий в\n' +
        'общем списке')
    console.log(result)
    console.log(result[0].lastName)
})
const task5 = "SELECT * FROM `person` WHERE `lastName` LIKE '_%b%_' ORDER BY `lastName` ASC"
conn.query(task5, (err, result) =>{
    console.log('Вывести фамилии, которые содержат в середине букву «б»')
    console.log(result[0].lastName)
})
const task6 = "SELECT * FROM `person` WHERE `id_street` IS NULL ORDER BY `firstName` ASC"
conn.query(task6, (err, result) =>{
    console.log('Вывести список «бомжей»')
    console.log(result.length)
    console.log(result)
})
const task7 = "SELECT * FROM `person` WHERE `Age` < 18 AND `id_street` = 7 ORDER BY `id` ASC"
conn.query(task7, (err, result) =>{
    console.log('Вывести список несовершеннолетних, проживающих на проспекте Правды')
    console.log(result.length)
    console.log(result)
})
const task8 = "SELECT street.id, street.name, count(person.id) FROM street JOIN person ON street.id = person.id_street GROUP BY street.id, street.name"
conn.query(task8, (err, result) =>{
    console.log('Вывести упорядоченный по алфавиту список всех улиц с указанием, сколько жильцов живёт на улице')
    console.log(result.length)
    let name = '';
    for (let i=0;i<result.length;i++){
        name += result[i].name + '\n'
    }
    console.log(name)
})
const task9 = "SELECT * FROM street WHERE LENGTH(name) = 6"
conn.query(task9, (err, result) =>{
    console.log('Вывести список улиц, название которых состоит из 6-ти букв')
    console.log(result.length)
    console.log(result[0].Name)
})
const task10 = "SELECT street.id, street.name FROM street JOIN person ON street.id = person.id_street GROUP BY street.id, street.name HAVING count(person.id) < 3"
conn.query(task10, (err, result) =>{
    console.log('Вывести список улиц с количеством жильцов на них меньше 3.')
    console.log(result.length)
    console.log(result)
})


