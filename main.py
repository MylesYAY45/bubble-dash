@namespace
class SpriteKind:
    Coin = SpriteKind.create()
@namespace
class StatusBarKind:
    HP = StatusBarKind.create()

def on_overlap_tile(sprite, location):
    game.over(False, effects.melt)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile1
    """),
    on_overlap_tile)

def on_on_overlap(sprite2, otherSprite):
    info.change_score_by(1)
    otherSprite.destroy()
sprites.on_overlap(SpriteKind.player, SpriteKind.Coin, on_on_overlap)

def on_a_pressed():
    if Player.vy == 0:
        Player.vy = -150
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

def on_overlap_tile2(sprite3, location2):
    tiles.set_tilemap(tilemap("""
        level 3
    """))
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile4
    """),
    on_overlap_tile2)

def on_overlap_tile3(sprite4, location3):
    info.change_life_by(-1)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile3
    """),
    on_overlap_tile3)

def on_overlap_tile4(sprite5, location4):
    info.change_score_by(3)
    info.set_life(20)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile8
    """),
    on_overlap_tile4)

def on_overlap_tile5(sprite6, location5):
    tiles.set_tilemap(tilemap("""
        Level 2
    """))
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile2
    """),
    on_overlap_tile5)

Coin2: Sprite = None
Player: Sprite = None
info.set_life(5)
scene.set_background_image(assets.image("""
    cityscape
"""))
Player = sprites.create(assets.image("""
    Player
"""), SpriteKind.player)
controller.move_sprite(Player, 100, 0)
tiles.set_tilemap(tilemap("""
    Level 1-1
"""))
scene.camera_follow_sprite(Player)
Player.ay = 350

def on_forever():
    global Coin2
    for value in tiles.get_tiles_by_type(assets.tile("""
        myTile
    """)):
        Coin2 = sprites.create(img("""
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
            """),
            SpriteKind.Coin)
        animation.run_image_animation(Coin2,
            [img("""
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
                """),
                img("""
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
                """),
                img("""
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
                """),
                img("""
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
                """),
                img("""
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
                """),
                img("""
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
                """),
                img("""
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
                """)],
            100,
            True)
        tiles.place_on_tile(Coin2, value)
        tiles.set_tile_at(value, assets.tile("""
            transparency16
        """))
forever(on_forever)
