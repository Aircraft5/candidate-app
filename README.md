# Axcient Candidate Application

The purpose of this application is to display organizations with users and their documents.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)

## Installation

* `git clone git@github.com:AxcientInc/candidate-app.git`
* `cd candidate-app`
* `npm install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

## Challenges

#### First challenge - Update the 'users.edit' page

* Request the user from the API [guide](https://guides.emberjs.com/release/models/finding-records/#toc_retrieving-a-single-record)
  - The model hook of the route needs to fetch the data for the page
* Display the user's basic information
  - "First Name" input should display the user's first name
  - "Last Name" input should display the user's last name
  - "Email Address" input should display the user's email address
  - "Save" button should be the primary button for the form
  - "Cancel" button should be a normal button

#### Second challenge - Add 'cancel' and 'save' actions to the 'users.edit' page

* Cancel button
  - Button should exist and not be the primary button
  - When the button is clicked, it should call the 'cancel' action and revert the changes to the model
* Save Button
  - Button should exist and be the primary button
  - When the button is clicked, it should call the 'saveUser' action and save the user model

#### Third challenge - Finish the 'users.edit' page

* If the user has documents
  - Each document should be listed
  - The document name should link to the "users.documents.edit" route
  - Below the last document, a link labeled "Create a Document" should be displayed which links to the "users.documents.new" page
* If the user has no documents
  - A link labeled "Create a Document" should be displayed which links to the "users.documents.new" page

#### Fourth challenge - Update the 'users.documents.new' page

* Display document fields
  - "Name" input should exist
  - "Contents" input should exist
  - "Save" button should exist and is the primary button for the form
  - "Cancel" button should exist and reset the model

#### Bonus challenges

* Update the "cancelEdit" action in the 'organizations.edit' controller
* Update the "saveOrganization" action in the 'organizations.edit' controller
* Add the ability to delete a user
* Add the ability to update an existing document
* Add the ability to delete a document
* Fix the "Organizations" navigation link to be "active" when viewing a specific organization

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Linting

* `npm run lint:hbs`
* `npm run lint:js`
* `npm run lint:js -- --fix`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
