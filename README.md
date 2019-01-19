# Solo-pong

## Description
The aim of the game is to make sure the ball hits all the blocks in the screen.

The ball has to bounce against the bar and avoid going below the playing area, otherwise, the game is over and we have to restart the game. 

This game will have three elements; a **ball** , a **bar** and the **blocks**.

Every time the ball hits a block we gain a point.

At the beginning of the game, the ball will be slow, but as the game progress the ball will speed up and the player will have to be faster.

There are going to be three levels of difficulty. The levels are going to be determined by the amount of points the user gets.

1. Beginner

   Points to get: 15 points

2. Intermediate

   Points to get: 30 points

3. Expert

   Points to get: 48 points

## MVP (DOM – CANVAS)
1. Game initial screen
2. Game screen
3. Winner screen
3. Game over screen
4. Bar
5. Ball
6. Blocks
7. Ball to move around the grid
8. Bar to move with keyboard at the buttom of the grid
9. Score box
10. Level box

## Backlog
1. Add blocks at the top of the grid
2. Blocks to vanish once hitted by the ball

## Data structure

```javascript
class Game {}
class Ball {}
class Bar  {}
class BouncingBox  {}
```
## States y States Transitions

### splashScreen
First screen to appear when the game starts.

### gameScreen
Screen with the environment in which the game is taking place.

### gameOverScreen
Screen to appear once the game is over.

### winScreen
Screen to appear when the player wins.

## Links

* [Trello](https://trello.com/b/2ND8YanY/shot-pong)
* [Solo-pong repo](https://github.com/IONDO/Game-project)
* [Link Deploy](https://iondo.github.io/Game-project/)
* [Solo-pong slides](https://slides.com/inesdelcarmenondobaka)
