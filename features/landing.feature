Feature: Landing Page
Scenario: I can see landing page
  Given I open the app
  Then I can see "Welcome!" by id "index-headline"
  And I can see "Push up" by id "index-link-push-up"
  And I can see "Plank" by id "index-link-plank"
