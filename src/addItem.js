// click handler for add button
// import statements
import addToList from './addToList'
import createItem from './createItem';

title = document.querySelector("#title");
desc = document.querySelector('#description');
due = document.querySelector('#due');
priority = document.querySelector('#priority');

newItem = createItem(title.value, desc.value, due.value, priority.value)

addToList(newItem);