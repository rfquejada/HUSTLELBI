# HUSTLELBI
not yet settled:
1. Sign In Page (try this yourself)
2. Dynamically compute average rating per published review for both client and freelancer
3. Include the rate of the job in the information displayed. This should be optional for the user. Also include a rate field in the forms: `Post.js` and `OfferJob.js`
4. Handle required form fields. Add placeholders, fix wording etc. 
5. Implement "semi-auth":
    - Per sign in, the ID of the user should be updated using setSignedInUser (this should also work for sign up)
    - Currently, the id: 1 for user and client are different people, this should not be the case. One user should be associated to one id. It is only done this way for easier testing. Therefore, when a user signs up as freelancer, and wants to post a job, building a client profile is necessary. This should also work vice versa.
    -If a user is signed in, they should not see the `offer job` button on their own profile page. 
    -Only signed in users can access their `in progress` and `awaiting` tab as client and `direct offers` tab as freelancer

### Important Notes: 
1. uncomment `import "./index.css";` to enable Tailwind, enabling Tailwind strips off all styling from HTML so it can be confusing if pushed like this
2. add dummy data 
3. all UI logic should be working right now, contact [@cazhiareese] if you have questions
4. you can always fix and modify the rendered data, it should be understandable enough using basic HTML, just don't modify the functions
5. check `./Components/Post.js` to know how to render a dialog box using Tailwind. The principle should be the same, the dialog box will close when cancel is clicked. 

Thank you! Good luck HUSTLELBI! 
