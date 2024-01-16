namespace SpriteKind {
    export const Dart = SpriteKind.create()
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    let myDart: Dart = null
    mySprite2 = darts.create(img`
        . . 6 6 6 6 . . 
        . 6 1 4 4 4 6 . 
        6 d 4 4 4 4 4 6 
        c b b 1 1 4 d c 
        . c b b 4 1 c . 
        . . c c c c . . 
        `, SpriteKind.Player)
    myDart.controlWithArrowKeys(true)
    myDart.throwDart()
    animation.runImageAnimation(
    mySprite2,
    [img`
        . . 6 6 6 6 . . 
        . 6 d 4 4 4 b . 
        . c b 1 1 4 4 b 
        . c b b 4 4 d b 
        . . c b b d 1 c 
        . . . c c b b . 
        `,img`
        . . 6 6 6 6 . . 
        . 6 d 1 1 4 6 . 
        6 d 4 4 4 4 1 6 
        c b b 4 4 4 d c 
        . c b b 4 d c . 
        . . c c c c . . 
        `,img`
        . . 6 6 6 6 . . 
        . 6 d d 4 4 6 . 
        6 d 4 4 4 4 d 6 
        c b b 4 4 4 d c 
        . c b b 4 d c . 
        . . c c c c . . 
        `],
    100,
    true
    )
    mySprite2.follow(mySprite, 135)
    pause(600)
    if (true) {
        timer.debounce("Catch", 0 % 1, function () {
            sprites.destroy(mySprite2)
        })
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (true) {
        game.reset()
    }
})
let mySprite2: Dart = null
let mySprite: Sprite = null
let mySprite3 = sprites.create(assets.image`myImage`, SpriteKind.Player)
mySprite = sprites.create(img`
    . . . . 2 2 2 2 2 e . . . . . . 
    . . . 2 2 2 2 d 2 2 e . . . . . 
    . . e 2 2 2 2 2 2 2 e . . . . . 
    . . e 2 2 2 2 2 2 2 e . . . . . 
    . . e 2 2 2 2 2 e f f c c . . . 
    . . e e 2 2 e f f f f b c . . . 
    . e e e f e 2 b f f f d c . . . 
    e e 2 2 d f 2 1 1 1 1 b c . . . 
    e e 2 2 d f e e c c c . . . . . 
    b 1 1 d e 2 2 e e c . . . . . . 
    . f f e 2 2 2 2 e . . . . . . . 
    . . f f d d 2 2 f f d d . . . . 
    . . f f d d e e f f d d . . . . 
    . . . f f f f . . . . . . . . . 
    . . e e e f f f . . . . . . . . 
    . . e e e e f f f . . . . . . . 
    `, SpriteKind.Player)
mySprite2 = sprites.create(assets.image`myImage1`, SpriteKind.Player)
scene.setBackgroundImage(assets.image`myImage0`)
mySprite3.setScale(0.65, ScaleAnchor.Middle)
mySprite3.setPosition(50, 94)
mySprite3.sayText("HIKE!", 1000, true)
mySprite.setPosition(49, 110)
mySprite2.setPosition(50, 93)
if (true) {
	
}
forever(function () {
    controller.moveSprite(mySprite, 40, 38)
    characterAnimations.loopFrames(
    mySprite,
    [img`
        . . . . 2 2 2 2 2 e . . . . . . 
        . . . 2 2 2 2 d 2 2 e . . . . . 
        . . e 2 2 2 2 2 2 2 e . . . . . 
        . . e 2 2 2 2 2 2 2 e . . . . . 
        . . e 2 2 2 2 2 e f f c c . . . 
        . . e e 2 2 e f f f f b c . . . 
        . e e e f e 2 b f f f d c . . . 
        e e 2 2 d f 2 1 1 1 1 b c . . . 
        e e 2 2 d f e e c c c . . . . . 
        b 1 1 d e 2 2 e e c . . . . . . 
        . f f e 2 2 2 2 e . . . . . . . 
        . . f f d d 2 2 f f d d . . . . 
        . . f f d d e e f f d d . . . . 
        . . . f f f f . . . . . . . . . 
        . . e e e f f f . . . . . . . . 
        . . e e e e f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 2 2 2 2 2 e . . . . 
        . . . . . 2 2 2 2 d 2 2 e . . . 
        . . . . e 2 2 2 2 2 2 2 e . . . 
        . . . . e 2 2 2 2 2 2 2 e . . . 
        . . . . e 2 2 2 2 2 e f f c c . 
        . . . . e e 2 2 e f f f f b c . 
        . . . e e e f e 2 b f f f d c . 
        . . e e 2 2 d f 2 1 1 1 1 b c . 
        . . e e 2 2 d f e e c c c . . . 
        . . b 1 1 d e 2 e e c . . . . . 
        . . f f f f d d f . . . . . . . 
        f f f f f f d d . . . . . . . . 
        f f f . f f f e . . . . . . . . 
        f f . . . . e e e . . . . . . . 
        . . . . . . e e e e . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 2 2 2 2 2 e . . . . 
        . . . . . 2 2 2 2 d 2 2 e . . . 
        . . . . e 2 2 2 2 2 2 2 e . . . 
        . . . . e 2 2 2 2 2 2 2 e . . . 
        . . . . e 2 2 2 2 2 e f f c c . 
        . . . . e e 2 2 e f f f f b c . 
        . . e e e f e 2 2 b f f f d c . 
        . e e 2 2 d f e 2 1 1 1 1 b c . 
        . e e 2 2 d f e e e c c c . . . 
        . b 1 1 e e 2 2 e e c . . . . . 
        . . f d d 2 2 2 f f f d d . . . 
        e e f d d e e e . f f d d . . . 
        e e e f f f f f . . . . . . . . 
        e e . . . . f f f . . . . . . . 
        . . . . . . f f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . 2 2 2 2 2 e . . . 
        . . . . . . 2 2 2 2 d 2 2 e . . 
        . . . . . e 2 2 2 2 2 2 2 e . . 
        . . . . . e 2 2 2 2 2 2 2 e . . 
        . . . . . e 2 2 2 2 2 e f f c c 
        . . . . . e e 2 2 e f f f f b c 
        . . . e e e f e 2 2 b f f f d c 
        . . e e 2 2 d f e 2 1 1 1 1 b c 
        . . e e 2 2 d f e e e c c c . . 
        . . b 1 1 d e 2 2 e e c . . . . 
        . . . f f f d d 2 2 f d d . . . 
        . . . . f f d d e e f d d . . . 
        . . . . . f f f f f . . . . . . 
        . . . . e e e f f . . . . . . . 
        . . . . e e e e f f . . . . . . 
        `],
    100,
    characterAnimations.rule(Predicate.MovingRight)
    )
    characterAnimations.loopFrames(
    mySprite,
    [img`
        . . . . . . e 2 2 2 2 2 . . . . 
        . . . . . e 2 2 d 2 2 2 2 . . . 
        . . . . . e 2 2 2 2 2 2 2 e . . 
        . . . . . e 2 2 2 2 2 2 2 e . . 
        . . . c c f f e 2 2 2 2 2 e . . 
        . . . c b f f f f e 2 2 e e . . 
        . . . c d f f f b 2 e f e e e . 
        . . . c b 1 1 1 1 2 f d 2 2 e e 
        . . . . . c c c e e f d 2 2 e e 
        . . . . . . c e e 2 2 e d 1 1 b 
        . . . . . . . e 2 2 2 2 e f f . 
        . . . . d d f f 2 2 d d f f . . 
        . . . . d d f f e e d d f f . . 
        . . . . . . . . . f f f f . . . 
        . . . . . . . . f f f e e e . . 
        . . . . . . . f f f e e e e . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . e 2 2 2 2 2 . . . . . . 
        . . . e 2 2 d 2 2 2 2 . . . . . 
        . . . e 2 2 2 2 2 2 2 e . . . . 
        . . . e 2 2 2 2 2 2 2 e . . . . 
        . c c f f e 2 2 2 2 2 e . . . . 
        . c b f f f f e 2 2 e e . . . . 
        . c d f f f b 2 e f e e e . . . 
        . c b 1 1 1 1 2 f d 2 2 e e . . 
        . . . c c c e e f d 2 2 e e . . 
        . . . . . c e e 2 e d 1 1 b . . 
        . . . . . . . f d d f f f f . . 
        . . . . . . . . d d f f f f f f 
        . . . . . . . . e f f f . f f f 
        . . . . . . . e e e . . . . f f 
        . . . . . . e e e e . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . e 2 2 2 2 2 . . . . . . 
        . . . e 2 2 d 2 2 2 2 . . . . . 
        . . . e 2 2 2 2 2 2 2 e . . . . 
        . . . e 2 2 2 2 2 2 2 e . . . . 
        . c c f f e 2 2 2 2 2 e . . . . 
        . c b f f f f e 2 2 e e . . . . 
        . c d f f f b 2 2 e f e e e . . 
        . c b 1 1 1 1 2 e f d 2 2 e e . 
        . . . c c c e e e f d 2 2 e e . 
        . . . . . c e e 2 2 e e 1 1 b . 
        . . . d d f f f 2 2 2 d d f . . 
        . . . d d f f . e e e d d f e e 
        . . . . . . . . f f f f f e e e 
        . . . . . . . f f f . . . . e e 
        . . . . . . f f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . e 2 2 2 2 2 . . . . . . . 
        . . e 2 2 d 2 2 2 2 . . . . . . 
        . . e 2 2 2 2 2 2 2 e . . . . . 
        . . e 2 2 2 2 2 2 2 e . . . . . 
        c c f f e 2 2 2 2 2 e . . . . . 
        c b f f f f e 2 2 e e . . . . . 
        c d f f f b 2 2 e f e e e . . . 
        c b 1 1 1 1 2 e f d 2 2 e e . . 
        . . c c c e e e f d 2 2 e e . . 
        . . . . c e e 2 2 e d 1 1 b . . 
        . . . d d f 2 2 d d f f f . . . 
        . . . d d f e e d d f f . . . . 
        . . . . . . f f f f f . . . . . 
        . . . . . . . f f e e e . . . . 
        . . . . . . f f e e e e . . . . 
        `],
    100,
    characterAnimations.rule(Predicate.MovingLeft)
    )
    mySprite.setScale(0.65, ScaleAnchor.Middle)
})
forever(function () {
    if (mySprite.y < 75) {
        mySprite.setPosition(mySprite.x, 75)
    }
})
