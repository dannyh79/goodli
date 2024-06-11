Feature: Workout Page
Scenario: I can see workout page
  Given I open the app
  When I tap "Plank"
  Then I can see "(Video section)"
  And I can see "PLANK" from "workout-progress-name"
  And There is "workout-control"
