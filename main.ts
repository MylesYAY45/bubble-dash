namespace SpriteKind {
    export const Coin = SpriteKind.create()
}
namespace StatusBarKind {
    export const HP = StatusBarKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    game.over(false, effects.melt)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Coin, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    otherSprite.destroy()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Player.vy == 0) {
        Player.vy = -150
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    tiles.setTilemap(tilemap`level3`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    info.changeLifeBy(-1)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    tiles.setTilemap(tilemap`Level 2`)
})
let Coin: Sprite = null
let Player: Sprite = null
info.setLife(5)
scene.setBackgroundImage(assets.image`cityscape`)
Player = sprites.create(assets.image`myImage`, SpriteKind.Player)
controller.moveSprite(Player, 100, 0)
tiles.setTilemap(tilemap`Level 1-1`)
scene.cameraFollowSprite(Player)
Player.ay = 350
for (let value of tiles.getTilesByType(assets.tile`myTile`)) {
    Coin = sprites.create(img`
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
    Coin,
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
    tiles.placeOnTile(Coin, value)
    tiles.setTileAt(value, assets.tile`transparency16`)
}
