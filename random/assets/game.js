/* Generated by Opal 0.6.2 */
(function($opal) {
  var self = $opal.top, $scope = $opal, nil = $opal.nil, $breaker = $opal.breaker, $slice = $opal.slice, $module = $opal.module, $klass = $opal.klass;

  $opal.add_stubs(['$===', '$raise', '$type_error', '$to_f', '$log', '$include']);
  return (function($base) {
    var self = $module($base, 'Math');

    var def = self._proto, $scope = self._scope, $a;

    (function($base, $super) {
      function $DomainError(){};
      var self = $DomainError = $klass($base, $super, 'DomainError', $DomainError);

      var def = self._proto, $scope = self._scope, TMP_1;

      return ($opal.defs(self, '$new', TMP_1 = function(method) {
        var self = this, $iter = TMP_1._p, $yield = $iter || nil;

        TMP_1._p = null;
        return $opal.find_super_dispatcher(self, 'new', TMP_1, null, $DomainError).apply(self, ["Numerical argument is out of domain - \"" + (method) + "\""]);
      }), nil) && 'new'
    })(self, (($a = $scope.StandardError) == null ? $opal.cm('StandardError') : $a));

    $opal.cdecl($scope, 'E', Math.E);

    $opal.cdecl($scope, 'PI', Math.PI);

    def.$acos = function(x) {
      var $a, self = this;

      
      if (!(($a = $scope.Numeric) == null ? $opal.cm('Numeric') : $a)['$==='](x)) {
        self.$raise((($a = $scope.Opal) == null ? $opal.cm('Opal') : $a).$type_error(x, (($a = $scope.Float) == null ? $opal.cm('Float') : $a)));
      }

      x = x.$to_f();

      if (x < -1 || x > 1) {
        self.$raise((($a = $scope.DomainError) == null ? $opal.cm('DomainError') : $a), "acos");
      }

      return Math.acos(x);
    ;
    };

    if ((($a = (typeof(Math.acosh) !== "undefined")) !== nil && (!$a._isBoolean || $a == true))) {
      } else {
      
      Math.acosh = function(x) {
        return Math.log(x + Math.sqrt(x * x - 1));
      }
    
    };

    def.$acosh = function(x) {
      var $a, self = this;

      
      if (!(($a = $scope.Numeric) == null ? $opal.cm('Numeric') : $a)['$==='](x)) {
        self.$raise((($a = $scope.Opal) == null ? $opal.cm('Opal') : $a).$type_error(x, (($a = $scope.Float) == null ? $opal.cm('Float') : $a)));
      }

      return Math.acosh(x.$to_f());
    ;
    };

    def.$asin = function(x) {
      var $a, self = this;

      
      if (!(($a = $scope.Numeric) == null ? $opal.cm('Numeric') : $a)['$==='](x)) {
        self.$raise((($a = $scope.Opal) == null ? $opal.cm('Opal') : $a).$type_error(x, (($a = $scope.Float) == null ? $opal.cm('Float') : $a)));
      }

      x = x.$to_f();

      if (x < -1 || x > 1) {
        self.$raise((($a = $scope.DomainError) == null ? $opal.cm('DomainError') : $a), "asin");
      }

      return Math.asin(x);
    ;
    };

    if ((($a = (typeof(Math.asinh) !== "undefined")) !== nil && (!$a._isBoolean || $a == true))) {
      } else {
      
      Math.asinh = function(x) {
        return Math.log(x + Math.sqrt(x * x + 1))
      }
    ;
    };

    def.$asinh = function(x) {
      var $a, self = this;

      
      if (!(($a = $scope.Numeric) == null ? $opal.cm('Numeric') : $a)['$==='](x)) {
        self.$raise((($a = $scope.Opal) == null ? $opal.cm('Opal') : $a).$type_error(x, (($a = $scope.Float) == null ? $opal.cm('Float') : $a)));
      }

      return Math.asinh(x.$to_f());
    ;
    };

    def.$atan = function(x) {
      var $a, self = this;

      
      if (!(($a = $scope.Numeric) == null ? $opal.cm('Numeric') : $a)['$==='](x)) {
        self.$raise((($a = $scope.Opal) == null ? $opal.cm('Opal') : $a).$type_error(x, (($a = $scope.Float) == null ? $opal.cm('Float') : $a)));
      }

      return Math.atan(x.$to_f());
    ;
    };

    def.$atan2 = function(x, y) {
      var $a, self = this;

      
      if (!(($a = $scope.Numeric) == null ? $opal.cm('Numeric') : $a)['$==='](x)) {
        self.$raise((($a = $scope.Opal) == null ? $opal.cm('Opal') : $a).$type_error(x, (($a = $scope.Float) == null ? $opal.cm('Float') : $a)));
      }

      if (!(($a = $scope.Numeric) == null ? $opal.cm('Numeric') : $a)['$==='](y)) {
        self.$raise((($a = $scope.Opal) == null ? $opal.cm('Opal') : $a).$type_error(y, (($a = $scope.Float) == null ? $opal.cm('Float') : $a)));
      }

      return Math.atan2(x.$to_f(), y.$to_f());
    ;
    };

    if ((($a = (typeof(Math.atanh) !== "undefined")) !== nil && (!$a._isBoolean || $a == true))) {
      } else {
      
      Math.atanh = function(x) {
        return 0.5 * Math.log((1 + x) / (1 - x));
      }
    
    };

    def.$atanh = function(x) {
      var $a, self = this;

      
      if (!(($a = $scope.Numeric) == null ? $opal.cm('Numeric') : $a)['$==='](x)) {
        self.$raise((($a = $scope.Opal) == null ? $opal.cm('Opal') : $a).$type_error(x, (($a = $scope.Float) == null ? $opal.cm('Float') : $a)));
      }

      x = x.$to_f();

      if (x < -1 || x > 1) {
        self.$raise((($a = $scope.DomainError) == null ? $opal.cm('DomainError') : $a), "atanh");
      }

      return Math.atanh(x);
    ;
    };

    def.$cbrt = function(x) {
      var self = this;

      return Math.cbrt(x);
    };

    def.$cos = function(x) {
      var $a, self = this;

      
      if (!(($a = $scope.Numeric) == null ? $opal.cm('Numeric') : $a)['$==='](x)) {
        self.$raise((($a = $scope.Opal) == null ? $opal.cm('Opal') : $a).$type_error(x, (($a = $scope.Float) == null ? $opal.cm('Float') : $a)));
      }

      return Math.cos(x.$to_f());
    ;
    };

    if ((($a = (typeof(Math.cosh) !== "undefined")) !== nil && (!$a._isBoolean || $a == true))) {
      } else {
      
      Math.cosh = function(x) {
        return (Math.exp(x) + Math.exp(-x)) / 2;
      }
    
    };

    def.$cosh = function(x) {
      var $a, self = this;

      
      if (!(($a = $scope.Numeric) == null ? $opal.cm('Numeric') : $a)['$==='](x)) {
        self.$raise((($a = $scope.Opal) == null ? $opal.cm('Opal') : $a).$type_error(x, (($a = $scope.Float) == null ? $opal.cm('Float') : $a)));
      }

      return Math.cosh(x.$to_f());
    ;
    };

    def.$erf = function(x) {
      var $a, self = this;

      return self.$raise((($a = $scope.NotImplementedError) == null ? $opal.cm('NotImplementedError') : $a));
    };

    def.$erfc = function(x) {
      var $a, self = this;

      return self.$raise((($a = $scope.NotImplementedError) == null ? $opal.cm('NotImplementedError') : $a));
    };

    def.$exp = function(x) {
      var $a, self = this;

      
      if (!(($a = $scope.Numeric) == null ? $opal.cm('Numeric') : $a)['$==='](x)) {
        self.$raise((($a = $scope.Opal) == null ? $opal.cm('Opal') : $a).$type_error(x, (($a = $scope.Float) == null ? $opal.cm('Float') : $a)));
      }

      return Math.exp(x.$to_f());
    ;
    };

    def.$frexp = function(x) {
      var $a, self = this;

      return self.$raise((($a = $scope.NotImplementedError) == null ? $opal.cm('NotImplementedError') : $a));
    };

    def.$gamma = function(x) {
      var $a, self = this;

      return self.$raise((($a = $scope.NotImplementedError) == null ? $opal.cm('NotImplementedError') : $a));
    };

    if ((($a = (typeof(Math.hypot) !== "undefined")) !== nil && (!$a._isBoolean || $a == true))) {
      } else {
      
      Math.hypot = function(x, y) {
        return Math.sqrt(x * x + y * y)
      }
    ;
    };

    def.$hypot = function(x, y) {
      var $a, self = this;

      
      if (!(($a = $scope.Numeric) == null ? $opal.cm('Numeric') : $a)['$==='](x)) {
        self.$raise((($a = $scope.Opal) == null ? $opal.cm('Opal') : $a).$type_error(x, (($a = $scope.Float) == null ? $opal.cm('Float') : $a)));
      }

      if (!(($a = $scope.Numeric) == null ? $opal.cm('Numeric') : $a)['$==='](y)) {
        self.$raise((($a = $scope.Opal) == null ? $opal.cm('Opal') : $a).$type_error(y, (($a = $scope.Float) == null ? $opal.cm('Float') : $a)));
      }

      return Math.hypot(x.$to_f(), y.$to_f());
    ;
    };

    def.$ldexp = function(flt, int$) {
      var $a, self = this;

      return self.$raise((($a = $scope.NotImplementedError) == null ? $opal.cm('NotImplementedError') : $a));
    };

    def.$lgamma = function(x) {
      var $a, self = this;

      return self.$raise((($a = $scope.NotImplementedError) == null ? $opal.cm('NotImplementedError') : $a));
    };

    def.$log = function(num, base, method) {
      var $a, self = this;

      if (base == null) {
        base = (($a = $scope.E) == null ? $opal.cm('E') : $a)
      }
      if (method == null) {
        method = nil
      }
      
      if (!(($a = $scope.Numeric) == null ? $opal.cm('Numeric') : $a)['$==='](num)) {
        self.$raise((($a = $scope.Opal) == null ? $opal.cm('Opal') : $a).$type_error(num, (($a = $scope.Float) == null ? $opal.cm('Float') : $a)));
      }

      if (!(($a = $scope.Numeric) == null ? $opal.cm('Numeric') : $a)['$==='](base)) {
        self.$raise((($a = $scope.Opal) == null ? $opal.cm('Opal') : $a).$type_error(base, (($a = $scope.Float) == null ? $opal.cm('Float') : $a)));
      }

      num  = num.$to_f();
      base = base.$to_f();

      if (num < 0) {
        self.$raise((($a = $scope.DomainError) == null ? $opal.cm('DomainError') : $a), ((($a = method) !== false && $a !== nil) ? $a : "log"));
      }

      num = Math.log(num);

      if (base != Math.E) {
        num /= Math.log(base);
      }

      return num
    ;
    };

    if ((($a = (typeof(Math.log10) !== "undefined")) !== nil && (!$a._isBoolean || $a == true))) {
      def.$log10 = function(num) {
        var $a, self = this;

        
        if (!(($a = $scope.Numeric) == null ? $opal.cm('Numeric') : $a)['$==='](num)) {
          self.$raise((($a = $scope.Opal) == null ? $opal.cm('Opal') : $a).$type_error(num, (($a = $scope.Float) == null ? $opal.cm('Float') : $a)));
        }

        num = num.$to_f();

        if (num < 0) {
          self.$raise((($a = $scope.DomainError) == null ? $opal.cm('DomainError') : $a), "log2");
        }

        return Math.log10(num);
      ;
      }
      } else {
      def.$log10 = function(num) {
        var self = this;

        return self.$log(num, 10, "log10");
      }
    };

    if ((($a = (typeof(Math.log2) !== "undefined")) !== nil && (!$a._isBoolean || $a == true))) {
      def.$log2 = function(num) {
        var $a, self = this;

        
        if (!(($a = $scope.Numeric) == null ? $opal.cm('Numeric') : $a)['$==='](num)) {
          self.$raise((($a = $scope.Opal) == null ? $opal.cm('Opal') : $a).$type_error(num, (($a = $scope.Float) == null ? $opal.cm('Float') : $a)));
        }

        num = num.$to_f();

        if (num < 0) {
          self.$raise((($a = $scope.DomainError) == null ? $opal.cm('DomainError') : $a), "log2");
        }

        return Math.log2(num);
      ;
      }
      } else {
      def.$log2 = function(num) {
        var self = this;

        return self.$log(num, 2, "log2");
      }
    };

    def.$sin = function(x) {
      var $a, self = this;

      
      if (!(($a = $scope.Numeric) == null ? $opal.cm('Numeric') : $a)['$==='](x)) {
        self.$raise((($a = $scope.Opal) == null ? $opal.cm('Opal') : $a).$type_error(x, (($a = $scope.Float) == null ? $opal.cm('Float') : $a)));
      }

      return Math.sin(x.$to_f());
    ;
    };

    if ((($a = (typeof(Math.sinh) !== "undefined")) !== nil && (!$a._isBoolean || $a == true))) {
      } else {
      
      Math.sinh = function(x) {
        return (Math.exp(x) - Math.exp(-x)) / 2;
      }
    
    };

    def.$sinh = function(x) {
      var $a, self = this;

      
      if (!(($a = $scope.Numeric) == null ? $opal.cm('Numeric') : $a)['$==='](x)) {
        self.$raise((($a = $scope.Opal) == null ? $opal.cm('Opal') : $a).$type_error(x, (($a = $scope.Float) == null ? $opal.cm('Float') : $a)));
      }

      return Math.sinh(x.$to_f());
    ;
    };

    def.$sqrt = function(x) {
      var $a, self = this;

      
      if (!(($a = $scope.Numeric) == null ? $opal.cm('Numeric') : $a)['$==='](x)) {
        self.$raise((($a = $scope.Opal) == null ? $opal.cm('Opal') : $a).$type_error(x, (($a = $scope.Float) == null ? $opal.cm('Float') : $a)));
      }

      x = x.$to_f();

      if (x < 0) {
        self.$raise((($a = $scope.DomainError) == null ? $opal.cm('DomainError') : $a), "log2");
      }

      return Math.sqrt(x);
    ;
    };

    def.$tan = function(x) {
      var $a, self = this;

      
      if (!(($a = $scope.Numeric) == null ? $opal.cm('Numeric') : $a)['$==='](x)) {
        self.$raise((($a = $scope.Opal) == null ? $opal.cm('Opal') : $a).$type_error(x, (($a = $scope.Float) == null ? $opal.cm('Float') : $a)));
      }

      return Math.tan(x.$to_f());
    ;
    };

    if ((($a = (typeof(Math.tanh) !== "undefined")) !== nil && (!$a._isBoolean || $a == true))) {
      } else {
      
      Math.tanh = function(x) {
        if (x == Infinity) {
          return 1;
        }
        else if (x == -Infinity) {
          return -1;
        }
        else {
          return (Math.exp(x) - Math.exp(-x)) / (Math.exp(x) + Math.exp(-x));
        }
      }
    
    };

    def.$tanh = function(x) {
      var $a, self = this;

      
      if (!(($a = $scope.Numeric) == null ? $opal.cm('Numeric') : $a)['$==='](x)) {
        self.$raise((($a = $scope.Opal) == null ? $opal.cm('Opal') : $a).$type_error(x, (($a = $scope.Float) == null ? $opal.cm('Float') : $a)));
      }

      return Math.tanh(x.$to_f());
    ;
    };

    (function(self) {
      var $scope = self._scope, def = self._proto;

      return self.$include((($a = $scope.Math) == null ? $opal.cm('Math') : $a))
    })(self.$singleton_class());
        ;$opal.donate(self, ["$acos", "$acosh", "$asin", "$asinh", "$atan", "$atan2", "$atanh", "$cbrt", "$cos", "$cosh", "$erf", "$erfc", "$exp", "$frexp", "$gamma", "$hypot", "$ldexp", "$lgamma", "$log", "$log10", "$log10", "$log2", "$log2", "$sin", "$sinh", "$sqrt", "$tan", "$tanh"]);
  })(self)
})(Opal);

//# sourceMappingURL=/__opal_source_maps__/math.js.map
;
/* Generated by Opal 0.6.2 */
(function($opal) {
  var self = $opal.top, $scope = $opal, nil = $opal.nil, $breaker = $opal.breaker, $slice = $opal.slice, $klass = $opal.klass;

  $opal.add_stubs(['$new', '$[]', '$move', '$bounce', '$display', '$+', '$*', '$<', '$y', '$>', '$size', '$y=', '$x', '$x=', '$push', '$translate', '$scale', '$sin', '$rotate', '$image_cropped', '$pop']);
  return (function($base, $super) {
    function $Owl(){};
    var self = $Owl = $klass($base, $super, 'Owl', $Owl);

    var def = self._proto, $scope = self._scope;

    def.position = def.direction = def.rotation = def.image = nil;
    $opal.cdecl($scope, 'SPEED', 50);

    $opal.cdecl($scope, 'ROTATE_SPEED', 2.5);

    def.$initialize = function() {
      var $a, self = this;

      self.image = (($a = $scope.Image) == null ? $opal.cm('Image') : $a).$new("images/brown-owl.jpg");
      self.position = (($a = $scope.V) == null ? $opal.cm('V') : $a)['$[]'](0, 0);
      self.direction = (($a = $scope.V) == null ? $opal.cm('V') : $a)['$[]'](1, 1);
      return self.rotation = 0;
    };

    def.$update = function(elapsed, game) {
      var self = this;

      self.$move(elapsed);
      return self.$bounce(game.$display());
    };

    def.$move = function(elapsed) {
      var $a, self = this;

      self.position = self.position['$+'](self.direction['$*']((($a = $scope.SPEED) == null ? $opal.cm('SPEED') : $a))['$*'](elapsed));
      return self.rotation = self.rotation['$+']((($a = $scope.ROTATE_SPEED) == null ? $opal.cm('ROTATE_SPEED') : $a)['$*'](elapsed));
    };

    def.$bounce = function(display) {
      var $a, $b, self = this;

      if ((($a = ((($b = self.position.$y()['$<'](0)) !== false && $b !== nil) ? $b : self.position.$y()['$+'](self.image.$size().$y())['$>'](display.$size().$y()))) !== nil && (!$a._isBoolean || $a == true))) {
        ($a = self.direction, $a['$y=']($a.$y()['$*'](-1)))};
      if ((($a = ((($b = self.position.$x()['$<'](0)) !== false && $b !== nil) ? $b : self.position.$x()['$+'](self.image.$size().$x())['$>'](display.$size().$x()))) !== nil && (!$a._isBoolean || $a == true))) {
        return ($a = self.direction, $a['$x=']($a.$x()['$*'](-1)))
        } else {
        return nil
      };
    };

    return (def.$draw = function(d) {
      var $a, self = this;

      d.$push();
      d.$translate(self.position);
      d.$scale((($a = $scope.V) == null ? $opal.cm('V') : $a)['$[]']((($a = $scope.Math) == null ? $opal.cm('Math') : $a).$sin(self.rotation)['$+'](2), (($a = $scope.Math) == null ? $opal.cm('Math') : $a).$sin(self.rotation)['$+'](2)));
      d.$rotate(self.rotation);
      d.$image_cropped(self.image, (($a = $scope.V) == null ? $opal.cm('V') : $a)['$[]'](-67.5, -40), (($a = $scope.V) == null ? $opal.cm('V') : $a)['$[]'](80, 70), (($a = $scope.V) == null ? $opal.cm('V') : $a)['$[]'](135, 80));
      return d.$pop();
    }, nil) && 'draw';
  })(self, null)
})(Opal);

//# sourceMappingURL=/__opal_source_maps__/owl.js.map
;
/* Generated by Opal 0.6.2 */
(function($opal) {
  var $a, self = $opal.top, $scope = $opal, nil = $opal.nil, $breaker = $opal.breaker, $slice = $opal.slice, $klass = $opal.klass;

  $opal.add_stubs(['$attr_reader', '$new', '$pressed?', '$keyboard', '$!', '$fill_color=', '$d', '$[]', '$clear', '$draw_assorted_shapes_and_text', '$update', '$draw', '$display', '$stroke_color=', '$stroke_width=', '$font_size=', '$fill_text', '$fill_rectangle', '$stroke_rectangle', '$stroke_line', '$begin_shape', '$move_to', '$curve_to', '$curve2_to', '$line_to', '$end_shape', '$stroke_shape', '$fill_shape', '$fill_ellipse', '$stroke_ellipse']);
  ;
  ;
  return (function($base, $super) {
    function $RandomGame(){};
    var self = $RandomGame = $klass($base, $super, 'RandomGame', $RandomGame);

    var def = self._proto, $scope = self._scope;

    def.paused = def.owl = nil;
    self.$attr_reader("image", "position");

    $opal.defn(self, '$d', def.$display);

    def.$setup = function() {
      var $a, self = this;

      self.owl = (($a = $scope.Owl) == null ? $opal.cm('Owl') : $a).$new();
      return self.paused = false;
    };

    def.$update = function(elapsed) {
      var $a, self = this;

      if ((($a = self.$keyboard()['$pressed?']("p")) !== nil && (!$a._isBoolean || $a == true))) {
        self.paused = self.paused['$!']()};
      if ((($a = self.paused) !== nil && (!$a._isBoolean || $a == true))) {
        return nil};
      self.$d()['$fill_color=']((($a = $scope.C) == null ? $opal.cm('C') : $a)['$[]']("#936"));
      self.$d().$clear();
      self.$draw_assorted_shapes_and_text();
      self.owl.$update(elapsed, self);
      return self.owl.$draw(self.$display());
    };

    return (def.$draw_assorted_shapes_and_text = function() {
      var $a, self = this;

      self.$d()['$fill_color=']((($a = $scope.C) == null ? $opal.cm('C') : $a)['$[]']("#fedcba"));
      self.$d()['$stroke_color=']((($a = $scope.C) == null ? $opal.cm('C') : $a)['$[]']("#abcdef"));
      self.$d()['$stroke_width='](1.5);
      self.$d()['$font_size='](54);
      self.$d().$fill_text("Wuzzuzzuzuuzuzuzuzuzu", (($a = $scope.V) == null ? $opal.cm('V') : $a)['$[]'](150, 50));
      self.$d()['$fill_color=']((($a = $scope.C) == null ? $opal.cm('C') : $a)['$[]']("#630"));
      self.$d()['$stroke_color=']((($a = $scope.C) == null ? $opal.cm('C') : $a)['$[]']("#ff0000"));
      self.$d()['$stroke_width='](5);
      self.$d().$fill_rectangle((($a = $scope.V) == null ? $opal.cm('V') : $a)['$[]'](300, 300), (($a = $scope.V) == null ? $opal.cm('V') : $a)['$[]'](100, 100));
      self.$d().$stroke_rectangle((($a = $scope.V) == null ? $opal.cm('V') : $a)['$[]'](300, 300), (($a = $scope.V) == null ? $opal.cm('V') : $a)['$[]'](100, 100));
      self.$d()['$stroke_color=']((($a = $scope.C) == null ? $opal.cm('C') : $a)['$[]']("#eee"));
      self.$d()['$stroke_width='](20);
      self.$d().$stroke_line((($a = $scope.V) == null ? $opal.cm('V') : $a)['$[]'](700, 700), (($a = $scope.V) == null ? $opal.cm('V') : $a)['$[]'](935, 666));
      self.$d().$begin_shape();
      self.$d().$move_to((($a = $scope.V) == null ? $opal.cm('V') : $a)['$[]'](600, 600));
      self.$d().$curve_to((($a = $scope.V) == null ? $opal.cm('V') : $a)['$[]'](1000, 500), (($a = $scope.V) == null ? $opal.cm('V') : $a)['$[]'](700, 700));
      self.$d().$curve2_to((($a = $scope.V) == null ? $opal.cm('V') : $a)['$[]'](837, 181), (($a = $scope.V) == null ? $opal.cm('V') : $a)['$[]'](500, 500), (($a = $scope.V) == null ? $opal.cm('V') : $a)['$[]'](300, 300));
      self.$d().$line_to((($a = $scope.V) == null ? $opal.cm('V') : $a)['$[]'](300, 300));
      self.$d().$end_shape();
      self.$d()['$stroke_color=']((($a = $scope.C) == null ? $opal.cm('C') : $a)['$[]']("#990"));
      self.$d()['$stroke_width='](8);
      self.$d()['$fill_color=']((($a = $scope.C) == null ? $opal.cm('C') : $a)['$[]']("#099"));
      self.$d().$stroke_shape();
      self.$d().$fill_shape();
      self.$d()['$fill_color=']((($a = $scope.C) == null ? $opal.cm('C') : $a)['$[]']("#907050"));
      self.$d().$fill_ellipse((($a = $scope.V) == null ? $opal.cm('V') : $a)['$[]'](200, 200), (($a = $scope.V) == null ? $opal.cm('V') : $a)['$[]'](36, 36));
      self.$d()['$stroke_color=']((($a = $scope.C) == null ? $opal.cm('C') : $a)['$[]']("#507090"));
      self.$d().$stroke_ellipse((($a = $scope.V) == null ? $opal.cm('V') : $a)['$[]'](200, 200), (($a = $scope.V) == null ? $opal.cm('V') : $a)['$[]'](24, 24));
      return self.$d().$stroke_ellipse((($a = $scope.V) == null ? $opal.cm('V') : $a)['$[]'](200, 200), (($a = $scope.V) == null ? $opal.cm('V') : $a)['$[]'](12, 12));
    }, nil) && 'draw_assorted_shapes_and_text';
  })(self, (($a = $scope.Game) == null ? $opal.cm('Game') : $a));
})(Opal);

//# sourceMappingURL=/__opal_source_maps__/game.js.map
;