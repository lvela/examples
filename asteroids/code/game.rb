class AsteroidsGame < Game
  BG_COLOR = C['#001133']

  attr_accessor :input, :things

  config[:display][:size] = V[720, 720]

  def setup
    @things = []
    @things << Ship.new(position: display.size / 2)
    6.times do
      @things << Asteroid.new(position: V[Math.rand * display.width,
                                          Math.rand * display.height],
                              side_count: 6)
    end

    @input = {}

    @shot = false

    display.stroke_color = C['#dddddd']
    display.stroke_width = 4
    display.fill_color = BG_COLOR
  end

  def update(elapsed)
    @input[:left] = keyboard.pressing? :left
    @input[:right] = keyboard.pressing? :right
    @input[:up] = keyboard.pressing? :up

    @input[:shoot] = keyboard.pressed? :z

    display.fill_color = BG_COLOR
    display.clear

    @things.each do |t|
      next if t.nil? # TODO: obviate w/ sturdier solution
      t.update(elapsed, self)
      t.draw(display)
    end

    draw_help(display)
  end

  private

  def draw_help(d)
    d.font_size = 16
    d.fill_color = C['#999999']

    d.fill_text("Left/Right - Turn", V[500, 100])
    d.fill_text("Up - Thrust", V[500, 120])
    d.fill_text("z - Shoot", V[500, 140])
  end
end
