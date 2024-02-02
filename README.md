In this course, you will be building a real-time News application using New York Times news API.

Let us grab a quick look at how your application should look like. By building this news app, you would be proving your mastery in Angular2. Following are the few concepts you would be using:

Routing
API Calls
Dependency Injection
State Management using NgRx

================

Understanding the App
Let us understand the app folder structure.You will be given a project template, primarily divided into three folders, in the following sequence:

Components (SectionsComponent, NavbarComponent, NewsComponent, and NewsIemComponent)
Services (NewsService)
Store (Actions, Reducers, and Selectors)


================

The app has the following components:

AppComponent: Main Component
HeaderComponent: Display the logo
SectionsComponent: Display different sections of news
NavbarComponent: Display sub-sections of news
NewsComponent: Will fetch the complete list of news and send to NewsItemComponent
NewsItemComponent: Display each news item
Let us now see the last four components in detail.

================

SectionsComponent
This component should display different sections of news

Subscribe and fetch the list of sections from store.
Loop through the array and display each section name as routerLink.
It should change the URL as /section/sectionName.

================

Display Subsections

Get the list of news from the store.
Multiple news might be categorized in one subsection. Filter the list of unique subsections from the list and display in the navbar.

Filter News

When a user clicks on subsection, it has to dispatch action and sends the subsection name as a parameter to the store.
This action has to update the filter variable in the store.

================

NewsComponent
This component should fetch the complete list of news and send to NewsItemComponent

Send the name of the selected section to Service and get the list of news.
Send this list of news to update the store.
Now subscribe store to get the news list and send it to NewsItemComponent.

================

NewsItemComponent
Get news item from NewsComponent and display it.
Show image and caption when clicked on "Read More".

================

NewsService
The Service will have a function called getSectionNews().

This function will fetch news list of the selected section, from the NY Times API.

API URL:

url = 'https://api.nytimes.com/svc/topstories/v2/' + sectionName + '.json?api-key=315a5a51483b469a918246dc2753b339'

================

Action
Implement the following two actions:

LOAD_SECTION_NEWS: Will be dispatched when the user wants to load a new section.
FILTER_SUBSECTION: Will be dispatched when one of the news sub-section is clicked.

================

Reducer: Sections
Implement LOAD_SECTIONS action.
When this action is dispatched, the reducer will return the state having a list of sections.

================

Reducer: News
This reducer will implement two actions:

LOAD_SECTION_NEWS: This will load news from selected section to newsList in store.
FILTER_SUBSECTION: Sets the value of filter in store.

================

Selector
This will get the news list and filter from the reducer.
Return a new list of news, based on the selected subsection.

================

All Set!
It's time to hit the keyboard.

Click Launch to start your Hands-on in the next card.
Do Project->Install to install the dependency from package.json.
Do Project->Run to start your application.
Do Project-> Test to run the test cases.
Try to clear all the test cases for a better score.
Read, Steady, Po!