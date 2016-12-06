# Context
Put in practice the things learned during the lessons part of the tutorial by creating a basic application on which we'll start adding new (and more complex, yey) features.

# Scope
- Create a very basic model for a ticket
  - Basic fields: summary, description, id, status
- Create an index page
  - The index page should contain only a link (for now) which will change the page to a page for creating new tickets
- Create a page for adding a new ticket
  - The page should display a form with all the ticket's details
  - The page will contain 2 actions: Save and Cancel
  - The *Save* action will do the following upon being triggered:
    - Will persist the new ticket
    - Will take the user back to the index page
  - The *Cancel* action
    - Will discard all the details about the ticket that the user might have filled in
    - Will take the user to the index page
- Update the index page to display an unordered list with all the tickets’ summaries

> Implementation details:
1. All code should go into the provided index.html file provided as input in this folder
2. All pages should be defined as routes
3. In order to make it easy to actually *persist* the newly created ticket upon saving it's recommended to use a global variable to store the array of tickets that is created over time. We'll improve this hack in future sessions
