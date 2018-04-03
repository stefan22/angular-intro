 # Mode-View-ViewModel (MVVM)

- a commonly used pattern solution for designing a user interface with some      
  functionality attached to it. Angular is not restricted to MVVM.

- key components of MVVM architecture:
    
1. Model (represents and holds raw data - from database or REST api)
    + some of this data, may be displayed in the view
    + can also contain logic to retrieve the data from source (ajax call to server)
    + contains `no logic associated with displaying model`

2. View (user interface)
    + in a web app, it's just html and css
    + only displays data that it is given
    + never changes the data
    + broadcasts events, but never handles them

3. ViewModel (representation of the state of the view)
    + holds the data that i'ts displayed in the view
    + reponds to view events, it does the presentation logic
    + if there's any business logic, it usually calls other funcitonality to get that done.
    + `never asks the view to display anything` (never directly manipulates the DOM)

4. Declarative Binder (declaratively binds the model of the ViewModel to the View)
    + declarative meaning done automatically by framework - no code to write


<br/>
<kbd>Model-View-ViewModel</kbd>
<br/>
![](images/mvvm.png)
















