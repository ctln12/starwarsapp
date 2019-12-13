# Star Wars Fan App

It’s a simple app, where a user can get a quick overview over all Star Wars resources like heroes, planets...

The following use cases should be implemented:

### UC1

The user opens your app and gets a login screen. He has to login. After a successful login he is navigated to the overview page (UC2).
(Bonus: If the user is logged in, he can refresh the browser and has not to login again)
(Note: To simplify this task, handle the authentication locally in your app and not consume any external services like auth0)

### UC2

The user has a list of all Star Wars resources, where he can filter for resource types (like people, starships...).

### UC3

The list in UC2 should be extended. Add a search element, which searches anything in the any resource (fuzzy search).

### UC4

The user clicks on a resource item and gets a detail view over it.

## How to run the app

Clone the app: `git clone git@github.com:ctln12/starwarsapp.git <your_folder>`

Go in `<your_folder>`: `cd <your_folder>`

Start a server: `rails s`

Open new browser window and go to `localhost:3000`
