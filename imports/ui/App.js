import { Template } from 'meteor/templating';
import { TasksCollection } from '../api/TasksCollection';
import './App.html';

Template.mainContainer.helpers({
  tasks() {
    return TasksCollection.find({}, { sort: { createdAt: -1 } });
  }
});

Template.form.events({
  'submit .task-form'(event){
    // console.log(event);
    // prevent default browser form submit
    event.preventDefault();

    // get value from form element
    const target = event.target;
    const text = target.text.value;

    // Insert a task into the collection
    TasksCollection.insert({
      text,
      createdAt: new Date(), // currernt time
    });

    // clear form
    target.text.value = '';

  }
});