class Asteroid < Thing
  COLOR = C['#ffffff']
  RADIUS_PER_SIDE = 8
  DEATH_SOUND = Sound['split.wav']
  BADGE_X = 150
  BADGE_Y = 130 
  BADGE_SIZE = V[BADGE_X, BADGE_Y]

  def initialize(args)
    super

    @side_count = args.fetch(:side_count)

    @rotation = 0
    @rotation_speed = rand - 0.5 # random rotation speed
    @velocity = V[rand(50) - 25, rand(50) - 25] # random velocity
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

  # Wrap to other edge of space as needed.
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

  # Distance-based collision detection
  def colliding?(point)
    @position.distance_to(point) < radius
  end

  def die(game)
    # Remove self from game.
    game.things.reject! { |t| t == self }

    DEATH_SOUND.play

    # Spawn two lesser asteroids in place.
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
      display.scale(V[(@side_count-3)/3.0, (@side_count-3)/3.0])

      display.rotate(@rotation)
      display.image_cropped(@image, V[-BADGE_X/2.0, -BADGE_Y/2.0], V[0, 0], BADGE_SIZE)
    display.pop
  end

  private

  # The more sides, the larger the radius.
  def radius
    ((((BADGE_X+BADGE_Y)/2.0) * ((@side_count-3)/3.0)) / 1.9) + 15
  end

  # Draw a regular polygon.
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
