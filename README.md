# MTA Tracking App

#### TO DO LIST
-  [ ]  Use of MTA GTFS Real Time tracking Data 
-  [ ]  Init a call / look up on a certain line of bus / train from the frontend
-  [ ]  API call to MTA and Parse the GTFS file to Json and serve it using React
-  [ ]  Show the next train schedule to the user based on the selection of his/her choice of train



#### STACK
  *  React Native (Mobile first in mind...)
  *  Express / Node.js (Api calls / Auths / etc)
  *  React Native Maps (Showing user / train locations)

#### ORDER OF CONCERNS / TASKS
  *  show a component where the user is able to select a train of his choice from the list provided (side note: This list will eventually turn into grabbing user location and offering him / her a choice of nearby trains within a certain amount of radius)

  *  init a call to MTA and fetch the train data (already done!) However, this needs to be prop looped thus setInterval logic needs to be implemented. (gap between each api call MUST be more than 30 secs per MTA docs)

  *  A component ro render the train data. Train data should include...
       *  number of trains in route on that line
       *  time of arrival of trains to the user location
    
    

