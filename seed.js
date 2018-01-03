'use strict';

const db = require('./server/db');
const models=require('./server/db/models');
const Students=models.Student;
const Campuses=models.Campus;

const defaultCampuses=[
    {name:'Terra',image:'https://unsplash.it/g/252/200/?image=941'},
    {name:'Europa',image:'https://unsplash.it/g/252/200/?image=961'},
    {name:'Galatea',image:'https://unsplash.it/g/252/200/?image=947'},
    {name:'Io',image:'https://unsplash.it/g/252/200/?image=1015'},
    {name:'Janus',image:'https://unsplash.it/g/252/200/?image=1051'},
    {name:'Oberon',image:'https://unsplash.it/g/252/200/?image=1040'},
    {name:'Tethys',image:'https://unsplash.it/g/252/200/?image=1028'}
];

const defaultStudents=[
    {firstName:'Erica',lastName:'Chuang',email:'erica@email.com', image:'https://unsplash.it/g/200/200/?image=923',campusId:1},
    {firstName:'Monroe',lastName:'Chuang',email:'monroe@email.com', image:'https://unsplash.it/g/200/200/?image=1056',campusId:2},
    {firstName:'Ace',lastName:'Ventura',email:'ace@email.com', image:'https://unsplash.it/g/200/200/?image=949',campusId:3},
    {firstName:'Tim',lastName:'Jones',email:'bob@email.com', image:'https://unsplash.it/g/200/200/?image=921',campusId:4},
    {firstName:'Ann',lastName:'Lively',email:'ann@email.com', image:'https://unsplash.it/g/200/200/?image=921',campusId:5},
    {firstName:'Holy',lastName:'Toledo',email:'holy@email.com', image:'https://unsplash.it/g/200/200/?image=921',campusId:6},
    {firstName:'Cupcakes',lastName:'Forever',email:'cupcake@email.com', image:'https://unsplash.it/g/200/200/?image=921',campusId:7},
    {firstName:'Sally',lastName:'Morton',email:'erica@email.com', image:'https://unsplash.it/g/200/200/?image=923',campusId:1},
    {firstName:'Bill',lastName:'Gladwell',email:'monroe@email.com', image:'https://unsplash.it/g/200/200/?image=1056',campusId:2},
    {firstName:'Mary',lastName:'Johnson',email:'ace@email.com', image:'https://unsplash.it/g/200/200/?image=949',campusId:3},
    {firstName:'Tom',lastName:'Rubenstein',email:'bob@email.com', image:'https://unsplash.it/g/200/200/?image=921',campusId:4},
    {firstName:'Sue',lastName:'Vasquez',email:'ann@email.com', image:'https://unsplash.it/g/200/200/?image=921',campusId:5},
    {firstName:'Harry',lastName:'Kim',email:'holy@email.com', image:'https://unsplash.it/g/200/200/?image=921',campusId:6},
    {firstName:'Liz',lastName:'Choo',email:'cupcake@email.com', image:'https://unsplash.it/g/200/200/?image=921',campusId:7},
    {firstName:'Lawrence',lastName:'Lagerfeld',email:'erica@email.com', image:'https://unsplash.it/g/200/200/?image=923',campusId:1},
    {firstName:'Ethan',lastName:'Chuang',email:'monroe@email.com', image:'https://unsplash.it/g/200/200/?image=1056',campusId:2},
    {firstName:'Victoria',lastName:'Ventura',email:'ace@email.com', image:'https://unsplash.it/g/200/200/?image=949',campusId:3},
    {firstName:'Alice',lastName:'Light',email:'bob@email.com', image:'https://unsplash.it/g/200/200/?image=921',campusId:4},
    {firstName:'Jasmine',lastName:'Lively',email:'ann@email.com', image:'https://unsplash.it/g/200/200/?image=921',campusId:5},
    {firstName:'Justin',lastName:'Bieber',email:'holy@email.com', image:'https://unsplash.it/g/200/200/?image=921',campusId:6},
    {firstName:'Sarah',lastName:'Miller',email:'cupcake@email.com', image:'https://unsplash.it/g/200/200/?image=921',campusId:7}
];

// using .bulkCreate instead of .create
// not working properly - must revisit
db.sync({ force: true })
    .then(() => {return Campuses.bulkCreate(defaultCampuses)})
    .then(() => {return Students.bulkCreate(defaultStudents)})
    .then(() => console.log('hey, it seeded!'))
    .catch(err => console.log('error seeding', err))
    .finally(() => {
        db.close();
        console.log('connection closed!');
    });


// var p1 = new Promise((resolve, reject) => {
//     return db.sync({ force: true });
// });
// var p2 = new Promise((resolve, reject) => {
//     Campuses.bulkCreate(defaultCampuses);
// });
// var p3 = new Promise((resolve, reject) => {
//     Students.bulkCreate(defaultStudents);
// });
// var p4 = new Promise((resolve, reject) => {
//     console.log('hey, it seeded!');
//     db.close();
//     console.log('connection closed!');
// });
// Promise.all([p1, p2, p3, p4]).then(values => {
//     console.log(values);
// })
// .catch(err => console.log('error seeding', err));

//You can also use .catch
// Promise.all([p1, p2, p3, p4, p5]).then(values => {
//     console.log(values);
// }).catch(reason => {
//     console.log(reason)
// });

// db.sync({ force: true })
// .then(() => Bluebird.map(defaultUser, item => User.create(item)))
// .then(() => Bluebird.map(defaultDeck, item => Deck.create(item)))
// .then(() => Bluebird.map(defaultSlide, item => Slide.create(item)))
// .then(() => console.log('hey, it seeded!'))
// .catch(err => console.log('err seeding', err))
// .finally(() => {
//     db.close();
//     console.log('connection closed!');
// });
