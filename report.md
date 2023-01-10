# Zenfit Report
The following is the summary of the changes I did.
I took some personal liberties I wouldn't have otherwise taken with the project since this assignment is used to assess my technical skills, and that's when it came to the following:
1. UI changes were me testing the project and getting to know my way around by making small UI changes
2. Project changes like using typescript and redux-toolkit
### Features
1. Added the ability to delete a recipe from the meal plan.
2. Added the ability to add a recipe via the add alternatives modal
### UI Changes
1. Improved UI of recipes in the add alternatives modal.
2. Improved UI of meals in the meals board.
### Project Changes
1. Replaced the MealPlansContainer with Redux as the main data source.
2. Added typescript and configured the project to allow for mixed js/ts use to allow for gradual typescript adoption.

## Assignments
### Technical test 🧑‍💻
- Coding Challenge
	- Add recipe via alternatives modal ✅
	- Delete recipe from the meal plan ✅
- Testing
	- Write two tests in Jest to test each of the above assignments 🙅🏽‍♂️
	  I focused on other things and didn't get to this.
### Analytical test 📝
##### Architecture
I noticed the following:
1. The project has a lot of missing parts and some parts that were added, I assume, to make it possible for me to work with the project without access to the rest of the project and to the backend.
2. Confusing file structure, while it is not an issue for a small SPA to have this file structure, once the project grows to include other pages it will become difficult to navigate. One example of this is the modules folder, if we are to consider modules as a grouping of features I expect for there to be a single `Plans` module or at most two modules `Plans` and `Recipes` (even though recipes in their current form are just a selection modal that is part of the Plans/Meal Plans feature)
   I like to think of modules as a microservice, or a website that if served alone would hold up as a reliable SPA, one thing is for certain however, and that is that `Modals` and `Settings` are not modules because they are very closely tied and dependant on the Plans.
   I'm writing about modules only to prove a point, I don't find the need to have a modules folder if the app will have only the meal planner features, I would consider other approaches but I don't have all the info available to me (point 1)
3. Typescript is present (index.tsx, interfaces.ts) but not configured.
4. No eslint or prettier configuration in the project.
5. Child components too dependant on parent components.
6. Data is easy to work with because of centralization of all possible data interactions (push, delete, move)
7. I liked working with styled-components, and the way responsiveness is being handled.
The consequences of each differ, some result in potential slowing of development in the future, some make maintanance more difficult, and others result in bad developer experience, that's just mentioning the negative points.
##### Implementation
My approach to typescript integration to the project is to start from the "highest" points and gradually overhaul everything to use typescript, typescript use would not be limited to API calls/logic but will also be used to extensively document the components.
I think the optimal approach is to consider these three things:
1. All new development must be completely in typescript
2. Any maintancance or additions done to existing code is a good oppurtunity to document and correctly type the component/class/funciton/file/whatever
3. Tasks and time should occassionally be set aside during low-pressure periods to strictly focus on documentation and typescript typing of the project.
It was difficult working with javascript again after being used to typescript, and the difference is very noticeable when I switch between the two and get no IDE intelliSense.

P.S: Please excuse any typos, I wrote this quickly and without proofreading.
