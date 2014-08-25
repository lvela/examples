require 'math'
require 'things'

class AsteroidsGame < Game
  BG_COLOR = C['#013']

  attr_accessor :things

  # Pass 720x720 size to Display on initialization.
  config[:display][:size] = V[720, 720]

  def setup
    @things = []

    # Spawn player ship.
    @things << Ship.new(position: display.size / 2)

    # Spawn 6 six-sided asteroids.
    6.times do
      @things << Asteroid.new(position: V[Math.rand * display.width,
                                          Math.rand * display.height],
                              side_count: 6)
    end

    # Everything is made of 4-pixel-width lines.
    display.stroke_width = 4
  end

  def update(elapsed)
    # Clear with background color
    display.fill_color = BG_COLOR
    display.clear

    # Update & draw all things.
    @things.each do |t|
      next if t.nil? # TODO: obviate w/ sturdier solution
      t.update(elapsed, self)
      t.draw(display)
    end

    draw_help(display)
  end

  private

  # Draw helpful instructions.
  def draw_help(d)
    d.font_size = 16
    d.fill_color = C['#999999']

    d.fill_text("Left/Right - Turn", V[500, 100])
    d.fill_text("Up - Thrust", V[500, 120])
    d.fill_text("z - Shoot", V[500, 140])
  end
end
