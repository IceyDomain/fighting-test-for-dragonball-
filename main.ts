namespace SpriteKind {
    export const Player_fighting_mode = SpriteKind.create()
    export const Player_Ki_Mode = SpriteKind.create()
}
namespace StatusBarKind {
    export const Experience = StatusBarKind.create()
    export const Speed = StatusBarKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    if (mySprite.kind() == SpriteKind.Player_Ki_Mode && mySprite.image.equals(img`
        . . . . . f f f f f f . . . . . 
        . . . f f e e e e f 2 f . . . . 
        . . f f e e e e f 2 2 2 f . . . 
        . . f e e e f f e e e e f . . . 
        . . f f f f e e 2 2 2 2 e f . . 
        . . f e 2 2 2 f f f f e 2 f . . 
        . f f f f f f f e e e f f f . . 
        . f f e 4 4 e b f 4 4 e e f . . 
        . f e e 4 d 4 1 f d d e 8 8 . . 
        . . f e e e 4 d d d d 8 9 9 8 . 
        . . . f f e e 4 e e 8 9 9 9 8 . 
        . . . . f 2 2 2 4 d 8 9 9 9 8 . 
        . . . . e 2 2 2 e d 8 9 9 9 8 . 
        . . . . f 4 4 4 f e e 8 8 8 8 . 
        . . . . . f f f f f f . . . . . 
        . . . . . . f f f . . . . . . . 
        `)) {
        Kamehameha = sprites.createProjectileFromSprite(img`
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..8888888888888888888888888888
            ..9999999999999999999999999999
            ..1111111111111111111111111111
            ..1111111111111111111111111111
            ..9999999999999999999999999999
            ..8888888888888888888888888888
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            `, mySprite, 50, 50)
        mySprite.setImage(img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 2 2 2 2 2 2 e e f . . 
            . . f e 2 f f f f f f 2 e f . . 
            . . f f f f e e e e f f f f . . 
            . f f e f b f 4 4 f b f e f f . 
            . f e e 4 1 f d d f 1 4 e e f . 
            . . f e e d d d d d d e e f . . 
            . . . f e e 4 4 4 4 e e f . . . 
            . . e 4 f 2 2 2 2 2 2 f 4 e . . 
            . . 4 d f 2 2 2 2 2 2 f d 4 . . 
            . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `)
    } else if (mySprite.kind() == SpriteKind.Player_Ki_Mode && mySprite.image.equals(img`
        . . . . . f f f f f f . . . . . 
        . . . f f e e e e f 2 f . . . . 
        . . f f e e e e f 2 2 2 f . . . 
        . . f e e e f f e e e e f . . 9 
        . . f f f f e e 2 2 2 2 e f . 9 
        . . f e 2 2 2 f 9 9 f e 2 f 9 9 
        . f f f f f f f e 9 9 f f f 9 . 
        . f f e 4 4 e b f 4 9 e e f . . 
        . f e e 4 d 4 1 f d d e 8 8 . . 
        . . f e e 9 4 d d d d 8 9 9 8 . 
        . . . f f 9 9 4 e e 8 9 9 9 8 . 
        . . . . f 2 9 9 9 d 8 9 9 9 8 . 
        . . . . e 2 2 2 e d 8 9 9 9 8 . 
        . . . . f 4 4 4 f e e 8 8 8 8 . 
        . . . . . f f f f f f . . . . . 
        . . . . . . f f f . 9 9 9 . . . 
        `)) {
        Kamehameha = sprites.createProjectileFromSprite(img`
            888888888888888888888888888888
            888888888888888888888888888888
            999999999999999999999999999999
            999999999999999999999999999999
            111111111111111111111111111111
            111111111111111111111111111111
            111111111111111111111111111111
            111111111111111111111111111111
            999999999999999999999999999999
            999999999999999999999999999999
            888888888888888888888888888888
            888888888888888888888888888888
            ..............................
            ..............................
            ..............................
            ..............................
            `, mySprite, 50, 50)
        mySprite.setImage(img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 2 2 2 2 2 2 e e f . . 
            . . f e 2 f f f f f f 2 e f . . 
            . . f f f f e e e e f f f f . . 
            . f f e f b f 4 4 f b f e f f . 
            . f e e 4 1 f d d f 1 4 e e f . 
            . . f e e d d d d d d e e f . . 
            . . . f e e 4 4 4 4 e e f . . . 
            . . e 4 f 2 2 2 2 2 2 f 4 e . . 
            . . 4 d f 2 2 2 2 2 2 f d 4 . . 
            . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `)
    } else if (mySprite.kind() == SpriteKind.Player_Ki_Mode && mySprite.image.equals(img`
        . . . . . f f f f f f . . . . . 
        . . . f f e e e e f 2 f . . . . 
        . . f f e e e e f 2 2 2 f . . . 
        . . f e e e 9 f e e e e f . . 9 
        . . f f f f 9 9 2 2 2 2 e f . 9 
        . . f e 2 2 2 f 9 9 f e 2 f 9 9 
        . f f f f f f f e 9 9 f f f 9 . 
        . f 9 e 4 4 e b f 4 9 9 9 9 9 . 
        . f 9 9 4 d 4 1 f 9 9 9 8 8 9 9 
        . . f 9 9 9 4 d d 9 9 8 9 9 8 9 
        . . . f f 9 9 4 e 9 8 9 9 9 8 9 
        . . . . f 2 9 9 9 9 8 9 9 9 8 9 
        . . . . e 2 2 2 9 9 8 9 9 9 8 9 
        . . . . f 4 4 4 f 9 9 8 8 8 9 9 
        . . . . . f f f f f 9 9 9 9 9 . 
        . . . . . . f f f 9 9 9 9 . . . 
        `)) {
        Kamehameha = sprites.createProjectileFromSprite(img`
            888888888888888888888888888888888888888888888888888888888888
            888888888888888888888888888888888888888888888888888888888888
            888888888888888888888888888888888888888888888888888888888888
            888888888888888888888888888888888888888888888888888888888888
            999999999999999999999999999999999999999999999999999999999999
            999999999999999999999999999999999999999999999999999999999999
            999999999999999999999999999999999999999999999999999999999999
            999999999999999999999999999999999999999999999999999999999999
            111111111111111111111111111111111111111111111111111111111111
            111111111111111111111111111111111111111111111111111111111111
            111111111111111111111111111111111111111111111111111111111111
            111111111111111111111111111111111111111111111111111111111111
            111111111111111111111111111111111111111111111111111111111111
            111111111111111111111111111111111111111111111111111111111111
            111111111111111111111111111111111111111111111111111111111111
            111111111111111111111111111111111111111111111111111111111111
            999999999999999999999999999999999999999999999999999999999999
            999999999999999999999999999999999999999999999999999999999999
            999999999999999999999999999999999999999999999999999999999999
            999999999999999999999999999999999999999999999999999999999999
            888888888888888888888888888888888888888888888888888888888888
            888888888888888888888888888888888888888888888888888888888888
            888888888888888888888888888888888888888888888888888888888888
            888888888888888888888888888888888888888888888888888888888888
            ............................................................
            ............................................................
            ............................................................
            ............................................................
            ............................................................
            ............................................................
            ............................................................
            ............................................................
            `, mySprite, 50, 50)
        mySprite.setImage(img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 2 2 2 2 2 2 e e f . . 
            . . f e 2 f f f f f f 2 e f . . 
            . . f f f f e e e e f f f f . . 
            . f f e f b f 4 4 f b f e f f . 
            . f e e 4 1 f d d f 1 4 e e f . 
            . . f e e d d d d d d e e f . . 
            . . . f e e 4 4 4 4 e e f . . . 
            . . e 4 f 2 2 2 2 2 2 f 4 e . . 
            . . 4 d f 2 2 2 2 2 2 f d 4 . . 
            . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `)
    } else {
    	
    }
})
function Earth_Enemies (myImage: Image, myImage2: Image, myImage3: Image, myImage4: Image, myImage5: Image) {
    _1 = sprites.create(myImage, SpriteKind.Enemy)
    _2 = sprites.create(myImage2, SpriteKind.Enemy)
    _3 = sprites.create(myImage3, SpriteKind.Enemy)
    _4 = sprites.create(myImage4, SpriteKind.Enemy)
    _5 = sprites.create(myImage5, SpriteKind.Enemy)
    a = statusbars.create(20, 4, StatusBarKind.EnemyHealth)
    a.max = randint(100, 200)
    a.value = a.max
    a.attachToSprite(_1)
    a.setColor(7, 2)
    a.setBarBorder(1, 15)
    a.setLabel("HP", 15)
    b = statusbars.create(20, 4, StatusBarKind.EnemyHealth)
    c = statusbars.create(20, 4, StatusBarKind.EnemyHealth)
    d = statusbars.create(20, 4, StatusBarKind.EnemyHealth)
    e = statusbars.create(20, 4, StatusBarKind.EnemyHealth)
}
controller.A.onEvent(ControllerButtonEvent.Repeated, function () {
    if (mySprite.kind() == SpriteKind.Player_Ki_Mode && Energy_Bar.value > 0) {
        Energy_Bar.value += randint(-20, -30)
        mySprite.setImage(img`
            . . . . . f f f f f f . . . . . 
            . . . f f e e e e f 2 f . . . . 
            . . f f e e e e f 2 2 2 f . . . 
            . . f e e e f f e e e e f . . . 
            . . f f f f e e 2 2 2 2 e f . . 
            . . f e 2 2 2 f f f f e 2 f . . 
            . f f f f f f f e e e f f f . . 
            . f f e 4 4 e b f 4 4 e e f . . 
            . f e e 4 d 4 1 f d d e 8 8 . . 
            . . f e e e 4 d d d d 8 9 9 8 . 
            . . . f f e e 4 e e 8 9 9 9 8 . 
            . . . . f 2 2 2 4 d 8 9 9 9 8 . 
            . . . . e 2 2 2 e d 8 9 9 9 8 . 
            . . . . f 4 4 4 f e e 8 8 8 8 . 
            . . . . . f f f f f f . . . . . 
            . . . . . . f f f . . . . . . . 
            `)
        timer.after(1000, function () {
            if (mySprite.kind() == SpriteKind.Player_Ki_Mode && Energy_Bar.value > 50) {
                Energy_Bar.value += randint(-30, -50)
                mySprite.setImage(img`
                    . . . . . f f f f f f . . . . . 
                    . . . f f e e e e f 2 f . . . . 
                    . . f f e e e e f 2 2 2 f . . . 
                    . . f e e e f f e e e e f . . 9 
                    . . f f f f e e 2 2 2 2 e f . 9 
                    . . f e 2 2 2 f 9 9 f e 2 f 9 9 
                    . f f f f f f f e 9 9 f f f 9 . 
                    . f f e 4 4 e b f 4 9 e e f . . 
                    . f e e 4 d 4 1 f d d e 8 8 . . 
                    . . f e e 9 4 d d d d 8 9 9 8 . 
                    . . . f f 9 9 4 e e 8 9 9 9 8 . 
                    . . . . f 2 9 9 9 d 8 9 9 9 8 . 
                    . . . . e 2 2 2 e d 8 9 9 9 8 . 
                    . . . . f 4 4 4 f e e 8 8 8 8 . 
                    . . . . . f f f f f f . . . . . 
                    . . . . . . f f f . 9 9 9 . . . 
                    `)
            }
        })
        timer.after(5000, function () {
            if (mySprite.kind() == SpriteKind.Player_Ki_Mode && Energy_Bar.value > 100) {
                Energy_Bar.value += randint(-50, -100)
                mySprite.setImage(img`
                    . . . . . f f f f f f . . . . . 
                    . . . f f e e e e f 2 f . . . . 
                    . . f f e e e e f 2 2 2 f . . . 
                    . . f e e e 9 f e e e e f . . 9 
                    . . f f f f 9 9 2 2 2 2 e f . 9 
                    . . f e 2 2 2 f 9 9 f e 2 f 9 9 
                    . f f f f f f f e 9 9 f f f 9 . 
                    . f 9 e 4 4 e b f 4 9 9 9 9 9 . 
                    . f 9 9 4 d 4 1 f 9 9 9 8 8 9 9 
                    . . f 9 9 9 4 d d 9 9 8 9 9 8 9 
                    . . . f f 9 9 4 e 9 8 9 9 9 8 9 
                    . . . . f 2 9 9 9 9 8 9 9 9 8 9 
                    . . . . e 2 2 2 9 9 8 9 9 9 8 9 
                    . . . . f 4 4 4 f 9 9 8 8 8 9 9 
                    . . . . . f f f f f 9 9 9 9 9 . 
                    . . . . . . f f f 9 9 9 9 . . . 
                    `)
            }
        })
    }
})
statusbars.onStatusReached(StatusBarKind.Experience, statusbars.StatusComparison.GTE, statusbars.ComparisonType.Percentage, 100, function (status) {
    Experience_Bar.value = 0
    Experience_Bar.max = Experience_Bar.max * 5
    story.startCutscene(function () {
        story.cancelSpriteMovement(mySprite)
        story.printDialog("You Leveled Up", 80, 90, 50, 150, 15, 1)
        story.showPlayerChoices("Strength", "Stamina", "Defense", "Energy")
        if (story.checkLastAnswer("Strength") && Experience_Bar.max < 500) {
            info.changeScoreBy(10)
        } else if (story.checkLastAnswer("Strength") && Experience_Bar.max >= 500) {
            info.changeScoreBy(20)
        } else if (story.checkLastAnswer("Stamina")) {
            info.changeScoreBy(5)
            SpeedBar.value += 10
        } else if (story.checkLastAnswer("Defense")) {
            info.changeScoreBy(5)
            Health_Bar.max += 50
        } else if (story.checkLastAnswer("Energy")) {
            info.changeScoreBy(5)
            Energy_Bar.max += 50
        }
    })
})
function Earth () {
    tiles.setCurrentTilemap(tilemap`level4`)
    Earth_Enemies(img`
        . . . . . . 5 . 5 . . . . . . . 
        . . . . . f 5 5 5 f f . . . . . 
        . . . . f 1 5 2 5 1 6 f . . . . 
        . . . f 1 6 6 6 6 6 1 6 f . . . 
        . . . f 6 6 f f f f 6 1 f . . . 
        . . . f 6 f f d d f f 6 f . . . 
        . . f 6 f d f d d f d f 6 f . . 
        . . f 6 f d 3 d d 3 d f 6 f . . 
        . . f 6 6 f d d d d f 6 6 f . . 
        . f 6 6 f 3 f f f f 3 f 6 6 f . 
        . . f f d 3 5 3 3 5 3 d f f . . 
        . . f d d f 3 5 5 3 f d d f . . 
        . . . f f 3 3 3 3 3 3 f f . . . 
        . . . f 3 3 5 3 3 5 3 3 f . . . 
        . . . f f f f f f f f f f . . . 
        . . . . . f f . . f f . . . . . 
        `, img`
        . . . . . f f 4 4 f f . . . . . 
        . . . . f 5 4 5 5 4 5 f . . . . 
        . . . f e 4 5 5 5 5 4 e f . . . 
        . . f b 3 e 4 4 4 4 e 3 b f . . 
        . . f 3 3 3 3 3 3 3 3 3 3 f . . 
        . f 3 3 e b 3 e e 3 b e 3 3 f . 
        . f 3 3 f f e e e e f f 3 3 f . 
        . f b b f b f e e f b f b b f . 
        . f b b e 1 f 4 4 f 1 e b b f . 
        f f b b f 4 4 4 4 4 4 f b b f f 
        f b b f f f e e e e f f f b b f 
        . f e e f b d d d d b f e e f . 
        . . e 4 c d d d d d d c 4 e . . 
        . . e f b d b d b d b b f e . . 
        . . . f f 1 d 1 d 1 d f f . . . 
        . . . . . f f b b f f . . . . . 
        `, img`
        . f f f . f f f f . f f f . 
        f f f f f c c c c f f f f f 
        f f f f b c c c c b f f f f 
        f f f c 3 c c c c 3 c f f f 
        . f 3 3 c c c c c c 3 3 f . 
        . f c c c c 4 4 c c c c f . 
        . f f c c 4 4 4 4 c c f f . 
        . f f f b f 4 4 f b f f f . 
        . f f 4 1 f d d f 1 4 f f . 
        . . f f d d d d d d f f . . 
        . . e f e 4 4 4 4 e f e . . 
        . e 4 f b 3 3 3 3 b f 4 e . 
        . 4 d f 3 3 3 3 3 3 c d 4 . 
        . 4 4 f 6 6 6 6 6 6 f 4 4 . 
        . . . . f f f f f f . . . . 
        . . . . f f . . f f . . . . 
        `, img`
        . . . . f f f f . . . . . 
        . . f f f f f f f f . . . 
        . f f f f f f c f f f . . 
        f f f f f f c c f f f c . 
        f f f c f f f f f f f c . 
        c c c f f f e e f f c c . 
        f f f f f e e f f c c f . 
        f f f b f e e f b f f f . 
        . f 4 1 f 4 4 f 1 4 f . . 
        . f e 4 4 4 4 4 4 e f . . 
        . f f f e e e e f f f . . 
        f e f b 7 7 7 7 b f e f . 
        e 4 f 7 7 7 7 7 7 f 4 e . 
        e e f 6 6 6 6 6 6 f e e . 
        . . . f f f f f f . . . . 
        . . . f f . . f f . . . . 
        `, img`
        . . . . f f f f . . . . 
        . . f f e e e e f f . . 
        . f f e e e e e e f f . 
        f f f f 4 e e e f f f f 
        f f f 4 4 4 e e f f f f 
        f f f 4 4 4 4 e e f f f 
        f 4 e 4 4 4 4 4 4 e 4 f 
        f 4 4 f f 4 4 f f 4 4 f 
        f e 4 d d d d d d 4 e f 
        . f e d d b b d d e f . 
        . f f e 4 4 4 4 e f f . 
        e 4 f b 1 1 1 1 b f 4 e 
        4 d f 1 1 1 1 1 1 f d 4 
        4 4 f 6 6 6 6 6 6 f 4 4 
        . . . f f f f f f . . . 
        . . . f f . . f f . . . 
        `)
    tiles.placeOnTile(_1, tiles.getTileLocation(randint(1, 16), randint(1, 16)))
    tiles.placeOnTile(_2, tiles.getTileLocation(randint(1, 16), randint(1, 16)))
    tiles.placeOnTile(_3, tiles.getTileLocation(randint(1, 16), randint(1, 16)))
    tiles.placeOnTile(_4, tiles.getTileLocation(randint(1, 16), randint(1, 16)))
    tiles.placeOnTile(_5, tiles.getTileLocation(randint(1, 16), randint(1, 16)))
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (controller.A.isPressed() && (mySprite.kind() == SpriteKind.Player_fighting_mode && info.score() > randint(100, 200))) {
        mySprite.setKind(SpriteKind.Player_Ki_Mode)
    } else if (controller.A.isPressed() && mySprite.kind() == SpriteKind.Player_Ki_Mode) {
        mySprite.setKind(SpriteKind.Player_fighting_mode)
    } else {
    	
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.kind() == SpriteKind.Player_fighting_mode) {
        Punch = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . b b . b b b . . . . . 
            . . . . b 1 1 b 1 1 1 b . . . . 
            . . b b 3 1 1 d d 1 d d b b . . 
            . b 1 1 d d b b b b b 1 1 b . . 
            . b 1 1 1 b . . . . . b d d b . 
            . . 3 d d b . . . . . b d 1 1 b 
            . b 1 d 3 . . . . . . . b 1 1 b 
            . b 1 1 b . . . . . . b b 1 d b 
            . b 1 d b . . . . . . b d 3 d b 
            . b b d d b . . . . b d d d b . 
            . b d d d d b . b b 3 d d 3 b . 
            . . b d d 3 3 b d 3 3 b b b . . 
            . . . b b b d d d d d b . . . . 
            . . . . . . b b b b b . . . . . 
            `, mySprite, 100, 100)
        Experience_Bar.value += 25 + Experience_Bar.max / info.score()
    } else if (mySprite.kind() == SpriteKind.Player_Ki_Mode && Energy_Bar.value > 0) {
        Ki_Blast = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . 8 8 8 8 . . . 
            . . . . . . . 8 8 1 1 1 1 8 . . 
            . . . . 8 8 9 9 1 1 1 1 1 1 . . 
            . . 9 9 9 9 1 1 1 1 1 1 1 1 . . 
            . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
            . . 9 9 8 8 9 1 1 1 1 1 1 1 . . 
            . . . . . . 8 8 9 1 1 1 1 8 . . 
            . . . . . . . . . 8 8 8 8 . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, mySprite, 100, 100)
        Experience_Bar.value += 50 + Experience_Bar.max * 5 / 2
        Energy_Bar.value += -25
    }
})
controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Menu_open == 0) {
        Menu()
        Menu_open = 1
    } else if (Menu_open == 1) {
        sprites.destroyAllSpritesOfKind(SpriteKind.MiniMenu)
        Experience_Bar.setFlag(SpriteFlag.Invisible, false)
        Menu_open = 0
    }
})
statusbars.onStatusReached(StatusBarKind.Energy, statusbars.StatusComparison.GT, statusbars.ComparisonType.Percentage, 100, function (status) {
    while (info.score() >= 8000 && info.score() < 90000) {
        for (let index = 0; index < 1; index++) {
            mySprite.sayText("Zenkai Boost")
            info.changeScoreBy(info.score() * randint(2, 7))
            Energy_Bar.value = 0
        }
    }
})
controller.B.onEvent(ControllerButtonEvent.Repeated, function () {
    if (mySprite.kind() == SpriteKind.Player_Ki_Mode && info.score() > randint(100, 1000)) {
        animation.runImageAnimation(
        mySprite,
        [img`
            ..............................
            ..............................
            ..............................
            .................11...........
            .................111..........
            .................1.11.........
            ...............111..1.........
            .............11.....11........
            .............1.......1........
            ..........111.........11......
            .........11............11.....
            ........11..............11....
            ........1................1....
            ........1................11...
            .......11......ffff.......1...
            .......1.....fff22fff.....1...
            ......11....fff2222fff....11..
            ......1....fffeeeeeefff....1..
            .....11....ffe222222eef....1..
            .....1.....fe2ffffff2ef....1..
            .....1.....ffffeeeeffff.....1.
            .....1....ffefbf44fbfeff....11
            .....1....fee41fddf14eef.....1
            ....11.....feeddddddeef......1
            ....1.......fee4444eef......11
            ....1......e4f222222f4e.....1.
            ....1......4df222222fd4.....11
            ....1......44f445544f44......1
            ....1.........ffffff.........1
            ....1.........ff..ff.........1
            `,img`
            ..............................
            ..............................
            ..............................
            ............11................
            ............111...............
            ............1.11..............
            ..........111..1..............
            ........11.....11.............
            ........1.......1.............
            .....111.........11111........
            ....11...............11.......
            ....1.................1111....
            ....11.................111....
            ......1..................11...
            ......11.......ffff.......1...
            ......11.....fff22fff.....1...
            ......11....fff2222fff....11..
            ......1....fffeeeeeefff....1..
            .....11....ffe222222eef....1..
            .....1.....fe2ffffff2ef....1..
            .....1.....ffffeeeeffff.....1.
            .....1....ffefbf44fbfeff....11
            .....1....fee41fddf14eef.....1
            ....11.....feeddddddeef......1
            ....1.......fee4444eef......11
            ....1......e4f222222f4e.....1.
            ....1......4df222222fd4.....11
            ....1......44f445544f44......1
            ....1.........ffffff.........1
            ....1.........ff..ff.........1
            `,img`
            ..............................
            ..............................
            ..............................
            .....................11.......
            .....................111......
            .....................1.11.....
            ...................111..1.....
            .................11.....11....
            .................1.......1....
            ..............111........1....
            ............111..........1....
            ..........1111.........111....
            .........11.............11....
            .......111...............11...
            ......11.......ffff.......1...
            ......11.....fff22fff.....1...
            ......11....fff2222fff....11..
            ......1....fffeeeeeefff....1..
            .....11....ffe222222eef....1..
            .....1.....fe2ffffff2ef....1..
            .....1.....ffffeeeeffff.....1.
            .....1....ffefbf44fbfeff....11
            .....1....fee41fddf14eef.....1
            ....11.....feeddddddeef......1
            ....1.......fee4444eef......11
            ....1......e4f222222f4e.....1.
            ....1......4df222222fd4.....11
            ....1......44f445544f44......1
            ....1.........ffffff.........1
            ....1.........ff..ff.........1
            `,img`
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ...............ffff...........
            .............fff22fff.........
            ............fff2222fff........
            ...........fffeeeeeefff.......
            ...........ffe222222eef.......
            ...........fe2ffffff2ef.......
            ...........ffffeeeeffff.......
            ..........ffefbf44fbfeff......
            ..........fee41fddf14eef......
            ...........feeddddddeef.......
            ............fee4444eef........
            ...........e4f222222f4e.......
            ...........4df222222fd4.......
            ...........44f445544f44.......
            ..............ffffff..........
            ..............ff..ff..........
            `],
        500,
        false
        )
        Energy_Bar.value += 5
    }
})
function Name (MyName: string) {
    Player_Name = textsprite.create(MyName, 1, 15)
    Player_Name.setOutline(1, 6)
    Player_Name.setBorder(1, 6)
    Player_Name.setFlag(SpriteFlag.RelativeToCamera, true)
    Player_Name.setPosition(33, 10)
    console.log(MyName)
    console.logValue(MyName, 1)
}
function Menu () {
    Menu_open = 1
    myMenu = miniMenu.createMenu(
    miniMenu.createMenuItem("Stats"),
    miniMenu.createMenuItem("Setting"),
    miniMenu.createMenuItem("Profile"),
    miniMenu.createMenuItem("Mastery"),
    miniMenu.createMenuItem("Exit")
    )
    myMenu.setTitle("Menu")
    myMenu.setFrame(img`
        88888..8888888888888888....88888.
        87768888777877787778777888867778.
        87777686767876767678767688777778.
        87767767667676676676766786776768.
        8677676767767767677677678676778..
        .877768777686767776867678667768..
        .886668888888888888888888886688..
        .888888866666666666666668877768..
        88677786666666666666666668766778.
        87766686666666666666666668776678.
        87667786666666666666666668677778.
        87777686666666666666666668866888.
        88866886666666666666666668677778.
        87777686666666666666666668776678.
        87667786666666666666666668666778.
        87766786666666666666666668777688.
        88677786666666666666666668766778.
        87766686666666666666666668776678.
        87667786666666666666666668677778.
        87777686666666666666666668866888.
        88866886666666666666666668677778.
        87777686666666666666666668776678.
        87667786666666666666666668666778.
        87766786666666666666666668777688.
        .867778866666666666666668888888..
        .886688888888888888888888866688..
        .867766876768677767686777867778..
        .8776768767767767677677676767768.
        86767768766767667667676676776778.
        87777788676787676767876768677778.
        87776888877787778777877788886778.
        88888..88888888888888888....8888.
        .................................
        `)
    myMenu.setFlag(SpriteFlag.RelativeToCamera, true)
    Experience_Bar.setFlag(SpriteFlag.Invisible, true)
    myMenu.setPosition(125, 32)
    myMenu.onButtonPressed(controller.A, function (selection, selectedIndex) {
        if (selection == "Stats") {
            myMenu.close()
            myMenu2 = miniMenu.createMenu(
            miniMenu.createMenuItem("Health"),
            miniMenu.createMenuItem("Ki"),
            miniMenu.createMenuItem("Speed"),
            miniMenu.createMenuItem("Attack"),
            miniMenu.createMenuItem("Exit")
            )
            myMenu2.setTitle("Stats")
            myMenu2.setFlag(SpriteFlag.RelativeToCamera, true)
            myMenu2.setPosition(125, 32)
            myMenu2.setFrame(img`
                88888..8888888888888888....88888.
                87768888777877787778777888867778.
                87777686767876767678767688777778.
                87767767667676676676766786776768.
                8677676767767767677677678676778..
                .877768777686767776867678667768..
                .886668888888888888888888886688..
                .888888866666666666666668877768..
                88677786666666666666666668766778.
                87766686666666666666666668776678.
                87667786666666666666666668677778.
                87777686666666666666666668866888.
                88866886666666666666666668677778.
                87777686666666666666666668776678.
                87667786666666666666666668666778.
                87766786666666666666666668777688.
                88677786666666666666666668766778.
                87766686666666666666666668776678.
                87667786666666666666666668677778.
                87777686666666666666666668866888.
                88866886666666666666666668677778.
                87777686666666666666666668776678.
                87667786666666666666666668666778.
                87766786666666666666666668777688.
                .867778866666666666666668888888..
                .886688888888888888888888866688..
                .867766876768677767686777867778..
                .8776768767767767677677676767768.
                86767768766767667667676676776778.
                87777788676787676767876768677778.
                87776888877787778777877788886778.
                88888..88888888888888888....8888.
                .................................
                `)
            myMenu2.onButtonPressed(controller.A, function (selection, selectedIndex) {
                if (selection == "Health") {
                    game.showLongText("Health Max: " + Health_Bar.max, DialogLayout.Bottom)
                    game.showLongText("Health Current value: " + Health_Bar.value, DialogLayout.Bottom)
                } else if (selection == "Ki") {
                    game.showLongText(" KI Max: " + Energy_Bar.max, DialogLayout.Bottom)
                    game.showLongText("KI Current value:" + Energy_Bar.value, DialogLayout.Bottom)
                } else if (selection == "Speed") {
                    game.showLongText("Speed current value:" + SpeedBar.value, DialogLayout.Bottom)
                } else if (selection == "Attack") {
                	
                } else if (selection == "Exit") {
                    myMenu2.close()
                    Menu()
                }
            })
        } else if (selection == "Setting") {
            myMenu.close()
            myMenu3 = miniMenu.createMenu(
            miniMenu.createMenuItem("Language"),
            miniMenu.createMenuItem("Text"),
            miniMenu.createMenuItem("Codes"),
            miniMenu.createMenuItem("Exit")
            )
            myMenu3.setTitle("Settings")
            myMenu3.setFlag(SpriteFlag.RelativeToCamera, true)
            myMenu3.setPosition(125, 32)
        } else if (selection == "Profile") {
        	
        } else if (selection == "Mastery") {
        	
        } else if (selection == "Exit") {
            myMenu.close()
            Menu_open = 0
            Experience_Bar.setFlag(SpriteFlag.Invisible, false)
            controller.moveSprite(mySprite)
        }
    })
}
scene.onOverlapTile(SpriteKind.Player_fighting_mode, sprites.dungeon.collectibleInsignia, function (sprite, location) {
    Earth()
})
let myMenu3: miniMenu.MenuSprite = null
let myMenu2: miniMenu.MenuSprite = null
let myMenu: miniMenu.MenuSprite = null
let Player_Name: TextSprite = null
let Ki_Blast: Sprite = null
let Punch: Sprite = null
let e: StatusBarSprite = null
let d: StatusBarSprite = null
let c: StatusBarSprite = null
let b: StatusBarSprite = null
let a: StatusBarSprite = null
let _5: Sprite = null
let _4: Sprite = null
let _3: Sprite = null
let _2: Sprite = null
let _1: Sprite = null
let Kamehameha: Sprite = null
let Menu_open = 0
let Experience_Bar: StatusBarSprite = null
let Energy_Bar: StatusBarSprite = null
let Health_Bar: StatusBarSprite = null
let SpeedBar: StatusBarSprite = null
let mySprite: Sprite = null
tiles.setCurrentTilemap(tilemap`level2`)
mySprite = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player_fighting_mode)
scene.cameraFollowSprite(mySprite)
info.setScore(randint(5, 30))
SpeedBar = statusbars.create(0, 0, StatusBarKind.Speed)
SpeedBar.max = 1000000000000000
SpeedBar.value = 100 + info.score()
controller.moveSprite(mySprite, SpeedBar.value, SpeedBar.value)
Health_Bar = statusbars.create(50, 5, StatusBarKind.Health)
Health_Bar.max = 100 + info.score()
Health_Bar.value = 100 + info.score()
Health_Bar.setBarBorder(1, 15)
Health_Bar.setLabel("HP", 15)
Health_Bar.setFlag(SpriteFlag.RelativeToCamera, true)
Health_Bar.setPosition(33, 20)
Energy_Bar = statusbars.create(50, 5, StatusBarKind.Energy)
Energy_Bar.max = 100
Energy_Bar.value = 100
Energy_Bar.setColor(8, 9, 1)
Energy_Bar.setBarBorder(1, 15)
Energy_Bar.setLabel("KI", 15)
Energy_Bar.setFlag(SpriteFlag.RelativeToCamera, true)
Energy_Bar.setPosition(33, 30)
Experience_Bar = statusbars.create(50, 5, StatusBarKind.Experience)
Experience_Bar.max = 100
Experience_Bar.value = 0
Experience_Bar.setColor(6, 8, 9)
Experience_Bar.setBarBorder(1, 15)
Experience_Bar.setLabel("Exp", 15)
Experience_Bar.setFlag(SpriteFlag.RelativeToCamera, true)
Experience_Bar.setFlag(SpriteFlag.Ghost, true)
Experience_Bar.setPosition(100, 20)
Menu_open = 1
Name(game.askForString("What is your name"))
Menu_open = 0
game.onUpdate(function () {
    controller.moveSprite(mySprite, SpeedBar.value, SpeedBar.value)
})
game.onUpdateInterval(10000, function () {
    if (Health_Bar.value < Health_Bar.max) {
        Health_Bar.value += 10
    }
    if (Energy_Bar.value < Energy_Bar.max && Energy_Bar.value > 0) {
        Energy_Bar.value += Energy_Bar.max / Energy_Bar.value
    }
})
