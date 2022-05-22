namespace SpriteKind {
    export const Coin = SpriteKind.create()
}
namespace StatusBarKind {
    export const HP = StatusBarKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Coin, function (sprite2, otherSprite) {
    info.changeScoreBy(1)
    otherSprite.destroy()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    game.over(false, effects.melt)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite4, location3) {
    info.changeLifeBy(-1)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Player.vy == 0) {
        Player.vy = -150
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite6, location5) {
    tiles.setTilemap(tilemap`Level 2`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite3, location2) {
    tiles.setTilemap(tilemap`level 3`)
})
let Coin2: Sprite = null
let Player: Sprite = null
info.setLife(1)
scene.setBackgroundImage(assets.image`cityscape`)
Player = sprites.create(assets.image`Player`, SpriteKind.Player)
controller.moveSprite(Player, 100, 0)
tiles.setTilemap(tilemap`Level 1-1`)
scene.cameraFollowSprite(Player)
Player.ay = 350
forever(function () {
    for (let value of tiles.getTilesByType(assets.tile`myTile`)) {
        Coin2 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f f . . . . . 
            . . . f 5 5 5 5 5 5 5 f . . . . 
            . . . f 5 4 4 4 4 5 5 f . . . . 
            . . . f 5 5 5 5 5 5 5 f . . . . 
            . . . f 5 5 5 5 4 4 5 f . . . . 
            . . . f 5 5 5 5 5 4 5 f . . . . 
            . . . f 5 4 5 5 5 5 5 f . . . . 
            . . . f 5 5 5 5 4 5 5 f . . . . 
            . . . . f f f f f f f . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Coin)
        animation.runImageAnimation(
        Coin2,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f f f . . . . 
            . . . . f 5 5 5 5 5 5 5 f . . . 
            . . . f 5 5 5 5 5 5 5 5 5 f . . 
            . . f 5 5 5 5 5 4 4 4 5 5 5 f . 
            . . f 5 5 5 4 5 5 4 5 5 5 5 f . 
            . . f 5 4 5 4 5 5 4 5 5 5 4 f . 
            . . f 5 4 5 5 5 5 4 5 5 5 4 f . 
            . . f 5 5 5 4 5 5 4 5 5 5 5 f . 
            . . f 5 5 5 4 5 5 5 4 4 4 5 f . 
            . . f 5 5 5 5 5 5 5 5 5 5 5 f . 
            . . . f 5 5 5 5 4 4 4 5 5 f . . 
            . . . . f 5 5 5 5 5 5 5 f . . . 
            . . . . . f f f f f f f . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f f f . . . . 
            . . . . f 5 5 5 5 5 5 5 f . . . 
            . . . . f 5 5 5 5 5 5 5 f . . . 
            . . . f 5 5 5 5 4 4 4 5 5 f . . 
            . . . f 5 5 4 5 5 4 5 5 5 f . . 
            . . . f 5 5 4 5 5 4 5 5 4 f . . 
            . . . f 5 5 5 5 5 4 5 5 4 f . . 
            . . . f 5 5 4 5 5 4 5 5 5 f . . 
            . . . f 5 5 4 5 5 5 4 4 5 f . . 
            . . . f 5 5 5 5 5 5 5 5 5 f . . 
            . . . . f 5 5 5 4 4 4 5 f . . . 
            . . . . f 5 5 5 5 5 5 5 f . . . 
            . . . . . f f f f f f f . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f f f . . . . 
            . . . . . f 5 5 5 5 5 f . . . . 
            . . . . . f 5 5 5 5 5 f . . . . 
            . . . . f 5 5 5 4 4 4 5 f . . . 
            . . . . f 5 4 5 5 4 5 5 f . . . 
            . . . . f 5 4 5 5 4 5 4 f . . . 
            . . . . f 5 5 5 5 4 5 4 f . . . 
            . . . . f 5 4 5 5 4 5 5 f . . . 
            . . . . f 5 4 5 5 5 4 5 f . . . 
            . . . . f 5 5 5 5 5 5 5 f . . . 
            . . . . . f 5 5 4 4 4 f . . . . 
            . . . . . f 5 5 5 5 5 f . . . . 
            . . . . . f f f f f f f . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f f f . . . . 
            . . . . . f 5 5 5 5 5 f . . . . 
            . . . . . f 5 5 5 5 5 f . . . . 
            . . . . f 5 5 5 4 4 4 5 f . . . 
            . . . . f 5 4 5 5 4 5 5 f . . . 
            . . . . f 5 4 5 5 4 5 4 f . . . 
            . . . . f 5 5 5 5 4 5 4 f . . . 
            . . . . f 5 4 5 5 4 5 5 f . . . 
            . . . . f 5 4 5 5 5 4 5 f . . . 
            . . . . f 5 5 5 5 5 5 5 f . . . 
            . . . . . f 5 5 4 4 4 f . . . . 
            . . . . . f 5 5 5 5 5 f . . . . 
            . . . . . f f f f f f f . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f f f . . . . 
            . . . . . f 5 5 5 5 5 f . . . . 
            . . . . . f 5 5 5 5 5 f . . . . 
            . . . . f 5 5 5 4 4 4 5 f . . . 
            . . . . f 5 4 5 5 4 5 5 f . . . 
            . . . . f 5 4 5 5 4 5 4 f . . . 
            . . . . f 5 5 5 5 4 5 4 f . . . 
            . . . . f 5 4 5 5 4 5 5 f . . . 
            . . . . f 5 4 5 5 5 4 5 f . . . 
            . . . . f 5 5 5 5 5 5 5 f . . . 
            . . . . . f 5 5 4 4 4 f . . . . 
            . . . . . f 5 5 5 5 5 f . . . . 
            . . . . . f f f f f f f . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f f f . . . . 
            . . . . f 5 5 5 5 5 5 5 f . . . 
            . . . . f 5 5 5 5 5 5 5 f . . . 
            . . . f 5 5 5 5 4 4 4 5 5 f . . 
            . . . f 5 5 4 5 5 4 5 5 5 f . . 
            . . . f 5 5 4 5 5 4 5 5 4 f . . 
            . . . f 5 5 5 5 5 4 5 5 4 f . . 
            . . . f 5 5 4 5 5 4 5 5 5 f . . 
            . . . f 5 5 4 5 5 5 4 4 5 f . . 
            . . . f 5 5 5 5 5 5 5 5 5 f . . 
            . . . . f 5 5 5 4 4 4 5 f . . . 
            . . . . f 5 5 5 5 5 5 5 f . . . 
            . . . . . f f f f f f f . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f f f . . . . 
            . . . . f 5 5 5 5 5 5 5 f . . . 
            . . . f 5 5 5 5 5 5 5 5 5 f . . 
            . . f 5 5 5 5 5 4 4 4 5 5 5 f . 
            . . f 5 5 5 4 5 5 4 5 5 5 5 f . 
            . . f 5 4 5 4 5 5 4 5 5 5 4 f . 
            . . f 5 4 5 5 5 5 4 5 5 5 4 f . 
            . . f 5 5 5 4 5 5 4 5 5 5 5 f . 
            . . f 5 5 5 4 5 5 5 4 4 4 5 f . 
            . . f 5 5 5 5 5 5 5 5 5 5 5 f . 
            . . . f 5 5 5 5 4 4 4 5 5 f . . 
            . . . . f 5 5 5 5 5 5 5 f . . . 
            . . . . . f f f f f f f . . . . 
            `],
        100,
        true
        )
        tiles.placeOnTile(Coin2, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
        animation.runImageAnimation(
        Player,
        [img`
            ....................
            ........eeeee.......
            ......eeeeeeee......
            .....eeefffffe......
            ....eef111111ee.....
            ...eeef1f11f1fee....
            ....eff1f11f1ffe....
            ....ef11111111f.....
            .....f11111111f.....
            .....f11ffff11f.....
            ..fff6f111111f6fff..
            .f11f66ffffff66f11f.
            f111f6666666666f111f
            f11fff66666666fff11f
            f11f.f66666666f.f11f
            f11f.f66666666f.f11f
            f11f.f66666666f.f11f
            ff1f.f66666666f.f1ff
            f.f..f66666666f..f.f
            .....f66666666f.....
            .....ff666666ff.....
            ......ffffffff......
            ......fff..fff......
            ......fff..fff......
            ......fff..fff......
            ....fffff..fffff....
            ...ffffff..ffffff...
            ...ffffff..ffffff...
            `,img`
            ....................
            ....................
            ........eeeee.......
            ......eeeeeeee......
            .....eeefffffe......
            ....eef111111ee.....
            ...eeef1f11f1fee....
            ....eff1f11f1ffe....
            ....ef11111111f.....
            .....f11111111f.....
            ..f..f11ffff11f.ff..
            .f1ff6f111111f6f11f.
            f111f66ffffff66f111f
            f11fff66666666fff11f
            f11f.f66666666f.f11f
            f11f.f66666666f.f11f
            f11f.f66666666f.f11f
            ff1f.f66666666f.f1ff
            f.f..f66666666f..f.f
            .....f66666666f.....
            .....ff666666ff.....
            ......ffffffff......
            ......fff..fff......
            ......fff..fff......
            ......fff..fff......
            ....fffff..fffff....
            ...ffffff..ffffff...
            ...ffffff..ffffff...
            `],
        250,
        true
        )
    }
})
