Feature: Workout Page
Scenario: I can see workout page
  Given I open the app
  When I tap "Plank"
  Then There is "workout-video-tutorial"
  And I can see "PLANK" by id "workout-progress-name"
  And There is "workout-control"
Scenario: I can tap workout control to update reps of current set
  Given I open the app
  And I tap "Plank"
  When I tap by id "workout-control-reps-button"
  Then There is "range-picker-item-10" in "reps-modal-picker"
  When I tap "12" in "reps-modal-picker"
  Then I can see "12" by id "workout-control-reps-count"
