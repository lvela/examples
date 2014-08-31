class Asteroid < Thing
  COLOR = C['#ffffff']
  RADIUS_PER_SIDE = 8
  BADGE_X = 741
  BADGE_Y = 640
  BADGE_SIZE = V[BADGE_X, BADGE_Y]

  def initialize(args)
    super

    @side_count = args.fetch(:side_count)

    @rotation = 0
    @rotation_speed = Math.rand - 0.5
    @velocity = V[Math.rand * 50 - 25, Math.rand * 50 - 25]
    @image = Image.new('images/trueability_badge.png')
  end

  def update(elapsed, game)
    move(elapsed)
    wrap(game)
  end

  def move(elapsed)
    @position += @velocity * elapsed
    @rotation += @rotation_speed * elapsed
  end

  def wrap(game)
    if (left_overlap = -@position.x - radius) > 0
      @position.x = game.display.width - left_overlap + radius
    elsif (right_overlap = @position.x - radius - game.display.width) > 0
      @position.x = right_overlap - radius
    end

    if (top_overlap = -@position.y - radius) > 0
      @position.y = game.display.height - top_overlap + radius
    elsif (bottom_overlap = @position.y - radius - game.display.height) > 0
      @position.y = bottom_overlap - radius
    end
  end

  def colliding?(point)
    @position.distance_to(point) < radius
  end

  def die(game)
    game.things.reject! { |t| t == self }

    if @side_count > 3
      game.things << Asteroid.new(position: @position,
                                  side_count: @side_count - 1,
                                  velocity: V[-@velocity.y, @velocity.x] * 2)

      game.things << Asteroid.new(position: @position,
                                  side_count: @side_count - 1,
                                  velocity: V[@velocity.y, -@velocity.x] * 2)
    end
  end

  def draw(display)
    display.stroke_color = COLOR

    display.push
      display.translate(@position)
      display.scale(V[(@side_count-3)/15.0, (@side_count-3)/15.0])
      
      display.rotate(@rotation)
      display.image_cropped(@image, V[0, 0], V[0, 0], BADGE_SIZE)
    display.pop
  end

  private

  def radius
    ((BADGE_X+BADGE_Y/2.0) * ((@side_count-3)/15.0)) / 2.0
  end

  def draw_polygon(d, position, rotation, side_count, radius)
    angle_per = Math::PI * 2 / side_count

    d.push
      d.translate @position
      d.rotate @rotation

      d.begin_shape
        d.move_to V[radius, 0]

        side_count.times do |i|
          d.line_to V[radius * Math.cos(angle_per * i),
                      radius * Math.sin(angle_per * i)]
        end
      d.end_shape

      d.stroke_shape
    d.pop
  end
end
