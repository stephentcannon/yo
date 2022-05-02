import { Meteor } from 'meteor/meteor';

// you can use this or what follows
// import "/imports/api/TasksCollection";

import { TasksCollection } from "/imports/api/TasksCollection";


const insertTask = taskText => TasksCollection.insert({ text: taskText});
