# test-task-goit
Tweet Card Interactive Component

This project is aimed at creating tweet cards with interactive functionality. The tweet cards can be in two states: "Follow" and "Following". When the user clicks the Follow button, the button text changes to "Following", the button color is updated, and the follower count increases by one.


Features
Interactive tweet cards with Follow and Following states
Fixed layout in pixels, semantic, and valid markup
Error-free console in the browser
Implementation in native JavaScript or React with bundlers
Preserving the final user action result even after page refresh
Reverting the button text, color, and follower count on subsequent clicks

Technical Requirements

Use the provided design to implement user cards
Upon clicking the Follow button, the text should change to "Following" and the button color should update
Add your own follower count to the initial follower count (e.g., from 100,500 to 100,501)
Preserve the final user action result after page refresh
Clicking the button again should revert the text, color, and follower count to their initial states (e.g., from 100,501 to 100,500)
Represent the number 100,500 as a single value (100500) in the code, and display it with a comma (100,500) in the UI
Backend Setup
To develop and test the application, a custom backend needs to be created using the UI service mockapi.io. Follow the steps below:

Create a resource called "users" in mockapi.io.
Use the resource constructor to define the user object with the following fields:
id: Unique identifier for each user
user: User name or handle
tweets: Number of tweets by the user
followers: Number of followers for the user
avatar: URL of the user's avatar image
Getting Started
Clone this repository to your local machine.
Install the required dependencies.
Configure the backend using mockapi.io and obtain the necessary API endpoint.
Update the application code to fetch user data from the backend API.
Start the development server and open the application in your browser.
Feel free to customize the design, styling, and additional features as per your requirements.

Happy coding!
