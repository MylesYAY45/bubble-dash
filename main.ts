namespace StatusBarKind {
    export const HP = StatusBarKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    Player.vy = -50
})
let Player: Sprite = null
scene.setBackgroundImage(assets.image`cityscape`)
Player = sprites.create(assets.image`myImage`, SpriteKind.Player)
controller.moveSprite(Player, 100, 0)
tiles.setTilemap(tilemap`level1`)
Player.ay = 50
