# Spark Jam Code Challenge

## Setup

```
npm install

#Install pre-commit hooks before first commit
npx husky install

npm run dev
```

## General Considerations

Allocate two separate time blocks: one for setup and one for completing the exercise. This is to ensure that if there are any issues during the setup, we can intervene without impacting your exercise time.

N.B. The Spark Jam codebase has been stripped down for this exercise to simplify the initial setup for you. What was left can be used, but you may also come across irrelevant artifacts (ex: non-functional storybook setup).

## Exercise

It's possible for users with admin powers to inadvertently perform critical actions that have significant consequences. For this exercise, we want you to create a reusable confirmation modal that helps the user understand the action before committing to it. We aim to have a modal that mimics the behavior of the native browser 'confirm' method, but with a custom style.

The modal should be employed just before sensitive operations, such as deleting an account, leaving a team, or banning a user.

You will need to style the modal yourself, in line with Spark Jam's established identity. We are looking to see if you can create a visually appealing and balanced component without a designer's aid. Your component should also demonstrate your understanding of good coding practices. We do not expect a UI masterpiece, or an engineering feat, as the reality of the work is that you are in a startup that will need to move quickly amid a lot of ambiguity.

You can use anything that is available in this partial Spark Jam codebase.

Once you are done, please record a short video that walks us through:

- Questions you would try to get answers to before creating the component, and what answers or axioms you used to complete this exercise.
- A general demo of the feature.
- Why you designed and organized the component the way you did.
- The known limitations and possible future improvements.

To send us the code, please fork the repository and send an invite to eliastouil on github (https://github.com/EliasTouil)

## Setup Problems and Further Questions

If you encounter any problems while setting up, write directly to Elias at elias -at- sparkjam.com. We are deliberately leaving certain aspects open to interpretation to assess how you handle ambiguous situations. As such, we won't hold a preliminary question round before the exercise.
