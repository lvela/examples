/* Generated by Opal 0.7.0.dev */
Opal.modules["math"] = function($opal) {
  $opal.dynamic_require_severity = "error";
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
    })(self, $scope.get('StandardError'));

    $opal.cdecl($scope, 'E', Math.E);

    $opal.cdecl($scope, 'PI', Math.PI);

    def.$acos = function(x) {
      var self = this;

      
      if (!$scope.get('Numeric')['$==='](x)) {
        self.$raise($scope.get('Opal').$type_error(x, $scope.get('Float')));
      }

      x = x.$to_f();

      if (x < -1 || x > 1) {
        self.$raise($scope.get('DomainError'), "acos");
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
      var self = this;

      
      if (!$scope.get('Numeric')['$==='](x)) {
        self.$raise($scope.get('Opal').$type_error(x, $scope.get('Float')));
      }

      return Math.acosh(x.$to_f());
    ;
    };

    def.$asin = function(x) {
      var self = this;

      
      if (!$scope.get('Numeric')['$==='](x)) {
        self.$raise($scope.get('Opal').$type_error(x, $scope.get('Float')));
      }

      x = x.$to_f();

      if (x < -1 || x > 1) {
        self.$raise($scope.get('DomainError'), "asin");
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
      var self = this;

      
      if (!$scope.get('Numeric')['$==='](x)) {
        self.$raise($scope.get('Opal').$type_error(x, $scope.get('Float')));
      }

      return Math.asinh(x.$to_f());
    ;
    };

    def.$atan = function(x) {
      var self = this;

      
      if (!$scope.get('Numeric')['$==='](x)) {
        self.$raise($scope.get('Opal').$type_error(x, $scope.get('Float')));
      }

      return Math.atan(x.$to_f());
    ;
    };

    def.$atan2 = function(x, y) {
      var self = this;

      
      if (!$scope.get('Numeric')['$==='](x)) {
        self.$raise($scope.get('Opal').$type_error(x, $scope.get('Float')));
      }

      if (!$scope.get('Numeric')['$==='](y)) {
        self.$raise($scope.get('Opal').$type_error(y, $scope.get('Float')));
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
      var self = this;

      
      if (!$scope.get('Numeric')['$==='](x)) {
        self.$raise($scope.get('Opal').$type_error(x, $scope.get('Float')));
      }

      x = x.$to_f();

      if (x < -1 || x > 1) {
        self.$raise($scope.get('DomainError'), "atanh");
      }

      return Math.atanh(x);
    ;
    };

    def.$cbrt = function(x) {
      var self = this;

      return Math.cbrt(x);
    };

    def.$cos = function(x) {
      var self = this;

      
      if (!$scope.get('Numeric')['$==='](x)) {
        self.$raise($scope.get('Opal').$type_error(x, $scope.get('Float')));
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
      var self = this;

      
      if (!$scope.get('Numeric')['$==='](x)) {
        self.$raise($scope.get('Opal').$type_error(x, $scope.get('Float')));
      }

      return Math.cosh(x.$to_f());
    ;
    };

    def.$erf = function(x) {
      var self = this;

      return self.$raise($scope.get('NotImplementedError'));
    };

    def.$erfc = function(x) {
      var self = this;

      return self.$raise($scope.get('NotImplementedError'));
    };

    def.$exp = function(x) {
      var self = this;

      
      if (!$scope.get('Numeric')['$==='](x)) {
        self.$raise($scope.get('Opal').$type_error(x, $scope.get('Float')));
      }

      return Math.exp(x.$to_f());
    ;
    };

    def.$frexp = function(x) {
      var self = this;

      return self.$raise($scope.get('NotImplementedError'));
    };

    def.$gamma = function(x) {
      var self = this;

      return self.$raise($scope.get('NotImplementedError'));
    };

    if ((($a = (typeof(Math.hypot) !== "undefined")) !== nil && (!$a._isBoolean || $a == true))) {
      } else {
      
      Math.hypot = function(x, y) {
        return Math.sqrt(x * x + y * y)
      }
    ;
    };

    def.$hypot = function(x, y) {
      var self = this;

      
      if (!$scope.get('Numeric')['$==='](x)) {
        self.$raise($scope.get('Opal').$type_error(x, $scope.get('Float')));
      }

      if (!$scope.get('Numeric')['$==='](y)) {
        self.$raise($scope.get('Opal').$type_error(y, $scope.get('Float')));
      }

      return Math.hypot(x.$to_f(), y.$to_f());
    ;
    };

    def.$ldexp = function(flt, int$) {
      var self = this;

      return self.$raise($scope.get('NotImplementedError'));
    };

    def.$lgamma = function(x) {
      var self = this;

      return self.$raise($scope.get('NotImplementedError'));
    };

    def.$log = function(num, base, method) {
      var $a, self = this;

      if (base == null) {
        base = $scope.get('E')
      }
      if (method == null) {
        method = nil
      }
      
      if (!$scope.get('Numeric')['$==='](num)) {
        self.$raise($scope.get('Opal').$type_error(num, $scope.get('Float')));
      }

      if (!$scope.get('Numeric')['$==='](base)) {
        self.$raise($scope.get('Opal').$type_error(base, $scope.get('Float')));
      }

      num  = num.$to_f();
      base = base.$to_f();

      if (num < 0) {
        self.$raise($scope.get('DomainError'), ((($a = method) !== false && $a !== nil) ? $a : "log"));
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
        var self = this;

        
        if (!$scope.get('Numeric')['$==='](num)) {
          self.$raise($scope.get('Opal').$type_error(num, $scope.get('Float')));
        }

        num = num.$to_f();

        if (num < 0) {
          self.$raise($scope.get('DomainError'), "log2");
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
        var self = this;

        
        if (!$scope.get('Numeric')['$==='](num)) {
          self.$raise($scope.get('Opal').$type_error(num, $scope.get('Float')));
        }

        num = num.$to_f();

        if (num < 0) {
          self.$raise($scope.get('DomainError'), "log2");
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
      var self = this;

      
      if (!$scope.get('Numeric')['$==='](x)) {
        self.$raise($scope.get('Opal').$type_error(x, $scope.get('Float')));
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
      var self = this;

      
      if (!$scope.get('Numeric')['$==='](x)) {
        self.$raise($scope.get('Opal').$type_error(x, $scope.get('Float')));
      }

      return Math.sinh(x.$to_f());
    ;
    };

    def.$sqrt = function(x) {
      var self = this;

      
      if (!$scope.get('Numeric')['$==='](x)) {
        self.$raise($scope.get('Opal').$type_error(x, $scope.get('Float')));
      }

      x = x.$to_f();

      if (x < 0) {
        self.$raise($scope.get('DomainError'), "log2");
      }

      return Math.sqrt(x);
    ;
    };

    def.$tan = function(x) {
      var self = this;

      
      if (!$scope.get('Numeric')['$==='](x)) {
        self.$raise($scope.get('Opal').$type_error(x, $scope.get('Float')));
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
      var self = this;

      
      if (!$scope.get('Numeric')['$==='](x)) {
        self.$raise($scope.get('Opal').$type_error(x, $scope.get('Float')));
      }

      return Math.tanh(x.$to_f());
    ;
    };

    (function(self) {
      var $scope = self._scope, def = self._proto;

      return self.$include($scope.get('Math'))
    })(self.$singleton_class());
        ;$opal.donate(self, ["$acos", "$acosh", "$asin", "$asinh", "$atan", "$atan2", "$atanh", "$cbrt", "$cos", "$cosh", "$erf", "$erfc", "$exp", "$frexp", "$gamma", "$hypot", "$ldexp", "$lgamma", "$log", "$log10", "$log10", "$log2", "$log2", "$sin", "$sinh", "$sqrt", "$tan", "$tanh"]);
  })(self)
};

/* Generated by Opal 0.7.0.dev */
Opal.modules["owl"] = function($opal) {
  $opal.dynamic_require_severity = "error";
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
      var self = this;

      self.image = $scope.get('Image').$new("images/brown-owl.jpg");
      self.position = $scope.get('V')['$[]'](0, 0);
      self.direction = $scope.get('V')['$[]'](1, 1);
      return self.rotation = 0;
    };

    def.$update = function(elapsed, game) {
      var self = this;

      self.$move(elapsed);
      return self.$bounce(game.$display());
    };

    def.$move = function(elapsed) {
      var self = this;

      self.position = self.position['$+'](self.direction['$*']($scope.get('SPEED'))['$*'](elapsed));
      return self.rotation = self.rotation['$+']($scope.get('ROTATE_SPEED')['$*'](elapsed));
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
      var self = this;

      d.$push();
      d.$translate(self.position);
      d.$scale($scope.get('V')['$[]']($scope.get('Math').$sin(self.rotation)['$+'](2), $scope.get('Math').$sin(self.rotation)['$+'](2)));
      d.$rotate(self.rotation);
      d.$image_cropped(self.image, $scope.get('V')['$[]'](-67.5, -40), $scope.get('V')['$[]'](80, 70), $scope.get('V')['$[]'](135, 80));
      return d.$pop();
    }, nil) && 'draw';
  })(self, null)
};

/* Generated by Opal 0.7.0.dev */
Opal.modules["game"] = function($opal) {
  $opal.dynamic_require_severity = "error";
  var self = $opal.top, $scope = $opal, nil = $opal.nil, $breaker = $opal.breaker, $slice = $opal.slice, $klass = $opal.klass;

  $opal.add_stubs(['$attr_reader', '$new', '$pressed?', '$keyboard', '$!', '$fill_color=', '$[]', '$d', '$clear', '$draw_assorted_shapes_and_text', '$update', '$draw', '$display', '$stroke_color=', '$stroke_width=', '$font_size=', '$fill_text', '$fill_rectangle', '$stroke_rectangle', '$stroke_line', '$begin_shape', '$move_to', '$curve_to', '$curve2_to', '$line_to', '$end_shape', '$stroke_shape', '$fill_shape', '$fill_ellipse', '$stroke_ellipse']);
  return (function($base, $super) {
    function $RandomGame(){};
    var self = $RandomGame = $klass($base, $super, 'RandomGame', $RandomGame);

    var def = self._proto, $scope = self._scope;

    def.paused = def.owl = nil;
    self.$attr_reader("image", "position");

    $opal.defn(self, '$d', def.$display);

    def.$setup = function() {
      var self = this;

      self.owl = $scope.get('Owl').$new();
      return self.paused = false;
    };

    def.$update = function(elapsed) {
      var $a, $b, self = this;

      if ((($a = self.$keyboard()['$pressed?']("p")) !== nil && (!$a._isBoolean || $a == true))) {
        self.paused = self.paused['$!']()};
      if ((($a = self.paused) !== nil && (!$a._isBoolean || $a == true))) {
        return nil};
      (($a = [$scope.get('C')['$[]']("#936")]), $b = self.$d(), $b['$fill_color='].apply($b, $a), $a[$a.length-1]);
      self.$d().$clear();
      self.$draw_assorted_shapes_and_text();
      self.owl.$update(elapsed, self);
      return self.owl.$draw(self.$display());
    };

    return (def.$draw_assorted_shapes_and_text = function() {
      var $a, $b, self = this;

      (($a = [$scope.get('C')['$[]']("#fedcba")]), $b = self.$d(), $b['$fill_color='].apply($b, $a), $a[$a.length-1]);
      (($a = [$scope.get('C')['$[]']("#abcdef")]), $b = self.$d(), $b['$stroke_color='].apply($b, $a), $a[$a.length-1]);
      (($a = [1.5]), $b = self.$d(), $b['$stroke_width='].apply($b, $a), $a[$a.length-1]);
      (($a = [54]), $b = self.$d(), $b['$font_size='].apply($b, $a), $a[$a.length-1]);
      self.$d().$fill_text("Wuzzuzzuzuuzuzuzuzuzu", $scope.get('V')['$[]'](150, 50));
      (($a = [$scope.get('C')['$[]']("#630")]), $b = self.$d(), $b['$fill_color='].apply($b, $a), $a[$a.length-1]);
      (($a = [$scope.get('C')['$[]']("#ff0000")]), $b = self.$d(), $b['$stroke_color='].apply($b, $a), $a[$a.length-1]);
      (($a = [5]), $b = self.$d(), $b['$stroke_width='].apply($b, $a), $a[$a.length-1]);
      self.$d().$fill_rectangle($scope.get('V')['$[]'](300, 300), $scope.get('V')['$[]'](100, 100));
      self.$d().$stroke_rectangle($scope.get('V')['$[]'](300, 300), $scope.get('V')['$[]'](100, 100));
      (($a = [$scope.get('C')['$[]']("#eee")]), $b = self.$d(), $b['$stroke_color='].apply($b, $a), $a[$a.length-1]);
      (($a = [20]), $b = self.$d(), $b['$stroke_width='].apply($b, $a), $a[$a.length-1]);
      self.$d().$stroke_line($scope.get('V')['$[]'](700, 700), $scope.get('V')['$[]'](935, 666));
      self.$d().$begin_shape();
      self.$d().$move_to($scope.get('V')['$[]'](600, 600));
      self.$d().$curve_to($scope.get('V')['$[]'](1000, 500), $scope.get('V')['$[]'](700, 700));
      self.$d().$curve2_to($scope.get('V')['$[]'](837, 181), $scope.get('V')['$[]'](500, 500), $scope.get('V')['$[]'](300, 300));
      self.$d().$line_to($scope.get('V')['$[]'](300, 300));
      self.$d().$end_shape();
      (($a = [$scope.get('C')['$[]']("#990")]), $b = self.$d(), $b['$stroke_color='].apply($b, $a), $a[$a.length-1]);
      (($a = [8]), $b = self.$d(), $b['$stroke_width='].apply($b, $a), $a[$a.length-1]);
      (($a = [$scope.get('C')['$[]']("#099")]), $b = self.$d(), $b['$fill_color='].apply($b, $a), $a[$a.length-1]);
      self.$d().$stroke_shape();
      self.$d().$fill_shape();
      (($a = [$scope.get('C')['$[]']("#907050")]), $b = self.$d(), $b['$fill_color='].apply($b, $a), $a[$a.length-1]);
      self.$d().$fill_ellipse($scope.get('V')['$[]'](200, 200), $scope.get('V')['$[]'](36, 36));
      (($a = [$scope.get('C')['$[]']("#507090")]), $b = self.$d(), $b['$stroke_color='].apply($b, $a), $a[$a.length-1]);
      self.$d().$stroke_ellipse($scope.get('V')['$[]'](200, 200), $scope.get('V')['$[]'](24, 24));
      return self.$d().$stroke_ellipse($scope.get('V')['$[]'](200, 200), $scope.get('V')['$[]'](12, 12));
    }, nil) && 'draw_assorted_shapes_and_text';
  })(self, $scope.get('Game'))
};

/* Generated by Opal 0.7.0.dev */
(function($opal) {
  $opal.dynamic_require_severity = "error";
  var self = $opal.top, $scope = $opal, nil = $opal.nil, $breaker = $opal.breaker, $slice = $opal.slice;

  $opal.add_stubs(['$require']);
  self.$require("math");
  self.$require("owl");
  return self.$require("game");
})(Opal);

//# sourceMappingURL=code.map
;