'use strict';function f(a) {
  throw a;
}
var i = !0, l = null, m = !1;
function aa(a) {
  return function() {
    return this[a]
  }
}
var o, ba = this;
Math.floor(2147483648 * Math.random()).toString(36);
function p(a, b) {
  var c = a.split("."), d = ba;
  !(c[0] in d) && d.execScript && d.execScript("var " + c[0]);
  for(var e;c.length && (e = c.shift());) {
    !c.length && void 0 !== b ? d[e] = b : d = d[e] ? d[e] : d[e] = {}
  }
}
function r(a, b) {
  function c() {
  }
  c.prototype = b.prototype;
  a.F = b.prototype;
  a.prototype = new c
}
;function ca(a, b) {
  this.width = a;
  this.height = b
}
ca.prototype.toString = function() {
  return"(" + this.width + " x " + this.height + ")"
};
ca.prototype.floor = function() {
  this.width = Math.floor(this.width);
  this.height = Math.floor(this.height);
  return this
};
function t(a) {
  this.length = a.length || a;
  for(var b = 0;b < this.length;b++) {
    this[b] = a[b] || 0
  }
}
t.prototype.BYTES_PER_ELEMENT = 8;
t.prototype.set = function(a, b) {
  for(var b = b || 0, c = 0;c < a.length && b + c < this.length;c++) {
    this[b + c] = a[c]
  }
};
t.prototype.toString = Array.prototype.join;
"undefined" == typeof Float64Array && (t.BYTES_PER_ELEMENT = 8, t.prototype.BYTES_PER_ELEMENT = t.prototype.BYTES_PER_ELEMENT, t.prototype.set = t.prototype.set, t.prototype.toString = t.prototype.toString, p("Float64Array", t));
function A(a) {
  this.length = a.length || a;
  for(var b = 0;b < this.length;b++) {
    this[b] = a[b] || 0
  }
}
A.prototype.BYTES_PER_ELEMENT = 4;
A.prototype.set = function(a, b) {
  for(var b = b || 0, c = 0;c < a.length && b + c < this.length;c++) {
    this[b + c] = a[c]
  }
};
A.prototype.toString = Array.prototype.join;
"undefined" == typeof Float32Array && (A.BYTES_PER_ELEMENT = 4, A.prototype.BYTES_PER_ELEMENT = A.prototype.BYTES_PER_ELEMENT, A.prototype.set = A.prototype.set, A.prototype.toString = A.prototype.toString, p("Float32Array", A));
function ha(a) {
  var b = new Float32Array(3);
  ia(b, a);
  return b
}
function ja(a, b, c, d) {
  a[0] = b;
  a[1] = c;
  a[2] = d;
  return a
}
function ia(a, b) {
  a[0] = b[0];
  a[1] = b[1];
  a[2] = b[2]
}
function ka(a, b) {
  var c = a[0], d = a[1], e = a[2], c = 1 / Math.sqrt(c * c + d * d + e * e);
  b[0] = a[0] * c;
  b[1] = a[1] * c;
  b[2] = a[2] * c
}
function la(a, b, c) {
  var d = a[0], e = a[1], a = a[2], g = b[0], h = b[1], b = b[2];
  c[0] = e * b - a * h;
  c[1] = a * g - d * b;
  c[2] = d * h - e * g
}
;function ma(a) {
  var b = new Float32Array(4);
  na(b, a);
  return b
}
function na(a, b) {
  a[0] = b[0];
  a[1] = b[1];
  a[2] = b[2];
  a[3] = b[3]
}
;function oa() {
  return new Float32Array(16)
}
function pa(a, b, c, d, e, g, h, j, k, n, s, q, w, x, u, y, v) {
  a[0] = b;
  a[1] = c;
  a[2] = d;
  a[3] = e;
  a[4] = g;
  a[5] = h;
  a[6] = j;
  a[7] = k;
  a[8] = n;
  a[9] = s;
  a[10] = q;
  a[11] = w;
  a[12] = x;
  a[13] = u;
  a[14] = y;
  a[15] = v;
  return a
}
function qa(a, b, c) {
  a[b] = c[0];
  a[b + 4] = c[1];
  a[b + 8] = c[2];
  a[b + 12] = c[3]
}
function ra(a) {
  a[0] = 1;
  a[1] = 0;
  a[2] = 0;
  a[3] = 0;
  a[4] = 0;
  a[5] = 1;
  a[6] = 0;
  a[7] = 0;
  a[8] = 0;
  a[9] = 0;
  a[10] = 1;
  a[11] = 0;
  a[12] = 0;
  a[13] = 0;
  a[14] = 0;
  a[15] = 1;
  return a
}
function sa(a, b, c) {
  var d = a[0], e = a[1], g = a[2], h = a[3], j = a[4], k = a[5], n = a[6], s = a[7], q = a[8], w = a[9], x = a[10], u = a[11], y = a[12], v = a[13], z = a[14], a = a[15], B = b[0], C = b[1], F = b[2], J = b[3], G = b[4], H = b[5], N = b[6], O = b[7], da = b[8], ea = b[9], fa = b[10], ga = b[11], D = b[12], Sa = b[13], Ta = b[14], b = b[15];
  c[0] = d * B + j * C + q * F + y * J;
  c[1] = e * B + k * C + w * F + v * J;
  c[2] = g * B + n * C + x * F + z * J;
  c[3] = h * B + s * C + u * F + a * J;
  c[4] = d * G + j * H + q * N + y * O;
  c[5] = e * G + k * H + w * N + v * O;
  c[6] = g * G + n * H + x * N + z * O;
  c[7] = h * G + s * H + u * N + a * O;
  c[8] = d * da + j * ea + q * fa + y * ga;
  c[9] = e * da + k * ea + w * fa + v * ga;
  c[10] = g * da + n * ea + x * fa + z * ga;
  c[11] = h * da + s * ea + u * fa + a * ga;
  c[12] = d * D + j * Sa + q * Ta + y * b;
  c[13] = e * D + k * Sa + w * Ta + v * b;
  c[14] = g * D + n * Sa + x * Ta + z * b;
  c[15] = h * D + s * Sa + u * Ta + a * b;
  return c
}
function ta(a, b, c) {
  var d = b[0], e = b[1], b = b[2];
  c[0] = d * a[0] + e * a[4] + b * a[8] + a[12];
  c[1] = d * a[1] + e * a[5] + b * a[9] + a[13];
  c[2] = d * a[2] + e * a[6] + b * a[10] + a[14];
  return c
}
function ua(a, b, c, d) {
  var e = a[1] * b + a[5] * c + a[9] * d + a[13], g = a[2] * b + a[6] * c + a[10] * d + a[14], h = a[3] * b + a[7] * c + a[11] * d + a[15];
  a[12] = a[0] * b + a[4] * c + a[8] * d + a[12];
  a[13] = e;
  a[14] = g;
  a[15] = h;
  return a
}
function va(a, b, c, d) {
  return pa(a, a[0] * b, a[1] * b, a[2] * b, a[3] * b, a[4] * c, a[5] * c, a[6] * c, a[7] * c, a[8] * d, a[9] * d, a[10] * d, a[11] * d, a[12], a[13], a[14], a[15])
}
function wa(a, b, c, d, e) {
  var g = a[0], h = a[1], j = a[2], k = a[3], n = a[4], s = a[5], q = a[6], w = a[7], x = a[8], u = a[9], y = a[10], v = a[11], z = Math.cos(b), B = Math.sin(b), C = 1 - z, b = c * c * C + z, F = c * d * C + e * B, J = c * e * C - d * B, G = c * d * C - e * B, H = d * d * C + z, N = d * e * C + c * B, O = c * e * C + d * B, c = d * e * C - c * B, e = e * e * C + z;
  return pa(a, g * b + n * F + x * J, h * b + s * F + u * J, j * b + q * F + y * J, k * b + w * F + v * J, g * G + n * H + x * N, h * G + s * H + u * N, j * G + q * H + y * N, k * G + w * H + v * N, g * O + n * c + x * e, h * O + s * c + u * e, j * O + q * c + y * e, k * O + w * c + v * e, a[12], a[13], a[14], a[15])
}
new Float64Array(3);
new Float64Array(3);
var xa = [new Float64Array(4), new Float64Array(4), new Float64Array(4)];
new Float64Array(16);
function ya(a, b) {
  this.x = void 0 !== a ? a : 0;
  this.y = void 0 !== b ? b : 0
}
ya.prototype.toString = function() {
  return"(" + this.x + ", " + this.y + ")"
};
function za(a, b) {
  this.x = a;
  this.y = b
}
r(za, ya);
var E;
HTMLCanvasElement.pb = new za(0, 0);
function Aa(a) {
  var b = Ba, c = HTMLCanvasElement.pb, d = Ca ? b.height / E : b.height;
  c.x = 0;
  c.y = 0;
  "undefined" === typeof b.__offset && (b.__offset = $(b).offset());
  a.changedTouches && (a = a.changedTouches[0]);
  c.x = a.pageX - b.__offset.left;
  c.y = d - (a.pageY - b.__offset.top);
  return c
}
var Da = window;
"undefined" === typeof Da.requestAnimationFrame && ("undefined" !== typeof Da.webkitRequestAnimationFrame ? Da.requestAnimationFrame = Da.webkitRequestAnimationFrame : "undefined" !== typeof mozRequestAnimationFrame ? Da.requestAnimationFrame = Da.mozRequestAnimationFrame : "undefined" !== typeof msRequestAnimationFrame ? Da.requestAnimationFrame = Da.msRequestAnimationFrame : "undefined" !== typeof oRequestAnimationFrame ? Da.requestAnimationFrame = Da.oRequestAnimationFrame : (console.log("using setTimeout as requestAnimationFrame"), 
Da.requestAnimationFrame = function(a) {
  window.setTimeout(a, 1E3 / 60)
}));
function Ea(a, b) {
  console.log(WebGLDebugUtils.glEnumToString(a) + " was caused by call to " + b)
}
var Fa = m;
"undefined" !== typeof runScript && (Fa = i, sa = _mat4mul, ta = _mat4mulvec3, ua = _mat4translate, wa = _mat4rotate, va = _mat4scale);
var Ga = {useGoogleAnalytics:m, projection:"3d", webglMode:i, usesOffscreenBuffer:m, basePath:""}, Ha = "3d", I = i, Ia = "", K = l, Ja = m, Ka = {}, La = l, Ma = l, Na = l, Ba = l, Oa = m, Ca = m, L = {}, Pa = {}, Qa = {}, Ra = {}, Ua = Date.now(), Va = 0, Wa = {Tb:0, Wb:1, Xb:2, Ub:3, Vb:4}, Xa = l, M = [];
function Ya(a) {
  var b = Ka[a], c = K;
  if(a != La) {
    La = a;
    c.useProgram(b);
    for(var d in b.a) {
      c.enableVertexAttribArray(b.a[d])
    }
  }
  return b
}
function Za(a, b) {
  var c = K, d = $a(a, "frag"), e = $a(a, "vert"), g = c.createShader(c.FRAGMENT_SHADER);
  c.shaderSource(g, d);
  c.compileShader(g);
  if(c.getShaderParameter(g, c.COMPILE_STATUS)) {
    d = c.createShader(c.VERTEX_SHADER);
    c.shaderSource(d, e);
    c.compileShader(d);
    if(c.getShaderParameter(d, c.COMPILE_STATUS)) {
      c = K;
      e = c.createProgram();
      c.attachShader(e, g);
      c.attachShader(e, d);
      c.linkProgram(e);
      c.getProgramParameter(e, c.LINK_STATUS) || console.log("problem linking shader");
      Ka[a] = e;
      b && b(e)
    }else {
      console.log("problem compiling vertex shader " + a + "(" + c.getShaderInfoLog(d) + "):\n" + e)
    }
  }else {
    console.log("problem compiling fragment shader " + a + "(" + c.getShaderInfoLog(g) + "):\n" + d)
  }
}
function $a(a, b) {
  var c = "", d = new XMLHttpRequest;
  d.open("GET", Ia + "shaders/" + a + "." + b, m);
  d.onreadystatechange = function() {
    d.readyState == 4 && d.status == 200 ? c = d.responseText : d.readyState == 4 && console.log("error getting the shader data")
  };
  d.send();
  return c
}
function P(a, b, c, d) {
  b = typeof b == "object" ? {dataType:b.dataType, url:b.url, name:b.name || b.url, qa:b.qa || m} : {url:b, name:c || b};
  L[a] || (L[a] = {});
  c = RegExp("@" + E + "x\\..+$");
  if(Ca && !b.qa && b.url.match(c) === l) {
    if((c = b.url.match(/(\..+$)/)) && Ca) {
      b.url = b.url.replace(/(\..+$)/, "@" + E + "x$1")
    }
  }
  var c = L[a], e = b.name;
  if(c[e]) {
    if(c[e].status == "loading") {
      d && c[e].fa.push(d)
    }else {
      if(c[e].status == "loaded") {
        d && d(c[e].data)
      }else {
        if(c[e].status == "try") {
          c[e].status = "loading";
          if(Qa[a]) {
            Qa[a](a, b)
          }else {
            Qa["default"](a, b)
          }
          d && c[e].fa.push(d)
        }
      }
    }
  }else {
    c[e] = {data:l, name:e, status:"try", fa:[]};
    d && c[e].fa.push(d);
    P(a, b)
  }
}
function ab(a, b) {
  var c = Ra[a], d, e;
  if(!c) {
    Ra[a] = [];
    c = Ra[a]
  }
  b && c.push(b);
  var g = i;
  if(a == "all") {
    for(var h in L) {
      d = L[h];
      for(e in d) {
        if(d[e].status != "loaded") {
          g = m;
          break
        }
      }
      if(!g) {
        break
      }
    }
  }else {
    d = L[a];
    for(e in d) {
      if(d[e].status != "loaded") {
        g = m;
        break
      }
    }
  }
  if(g) {
    for(;d = c.shift();) {
      d()
    }
  }
}
function bb(a, b) {
  return b ? L[a][b].data : l
}
function cb(a, b) {
  return b ? b in L[a] : m
}
function db(a) {
  var b = K, c = i;
  try {
    var d = 0;
    b.activeTexture(b.TEXTURE0);
    b.bindTexture(b.TEXTURE_2D, a.N);
    b.texImage2D(b.TEXTURE_2D, 0, b.RGBA, b.RGBA, b.UNSIGNED_BYTE, a);
    d = b.getError();
    if(d !== 0) {
      console.log("gl error " + d);
      c = m
    }
    b.texParameteri(b.TEXTURE_2D, b.TEXTURE_MAG_FILTER, b.NEAREST);
    b.texParameteri(b.TEXTURE_2D, b.TEXTURE_MIN_FILTER, b.LINEAR);
    b.texParameteri(b.TEXTURE_2D, b.TEXTURE_WRAP_S, b.CLAMP_TO_EDGE);
    b.texParameteri(b.TEXTURE_2D, b.TEXTURE_WRAP_T, b.CLAMP_TO_EDGE);
    b.bindTexture(b.TEXTURE_2D, l)
  }catch(e) {
    console.log("got some error: " + e);
    c = m
  }
  return c
}
function eb(a, b, c) {
  L[c][a.name].data = b;
  return i
}
function fb(a, b) {
  if(I && !b.N) {
    b.N = K.createTexture()
  }
  L.texture[a.name].data = b;
  return I ? db(b) : i
}
function gb(a, b) {
  var c = new Image, d = b.url, e = b.name, g = RegExp("@" + E + "x\\..+$");
  c.src = "";
  c.addEventListener("load", function() {
    var h = L.texture[e];
    if(Pa[a](b, c)) {
      h.status = "loaded";
      h.fb = d.match(g) && Ca;
      for(var j;j = h.fa.shift();) {
        j(h.data)
      }
      ab(a);
      ab("all")
    }else {
      h.status = "try";
      P(a, b)
    }
  }, m);
  c.addEventListener("error", function(a) {
    if(a.type === "error" && Ca && d.match(g)) {
      a = L.texture[e];
      b.url = d.replace("@" + E + "x", "");
      b.qa = i;
      a.status = "try";
      P("texture", b)
    }
  }, i);
  if(d.match(/^http(s)?:/)) {
    c.crossOrigin = "anonymous";
    c.src = d
  }else {
    c.src = d.match(/^data:/) ? d : Ia + d
  }
}
function hb(a, b) {
  var c = b.url, d = c, e = b.name, g = RegExp("@" + E + "x\\..+$");
  c.match(/^http(s)?:\/\//) || (d = Ia + c);
  var h = new XMLHttpRequest;
  h.open("GET", d);
  h.withCredentials = i;
  h.onreadystatechange = function() {
    var d = L[a][e];
    if(h.readyState == 4 && h.status == 200) {
      if((Pa[a] || Pa["default"])(b, h.response, a)) {
        d.status = "loaded";
        for(var k;k = d.fa.shift();) {
          k(d.data)
        }
        ab(a);
        ab("all")
      }else {
        d.status = "try";
        P(a, b)
      }
    }else {
      if(h.readyState == 4) {
        if(h.status == 404 && Ca && c.match(g)) {
          b.url = c.replace("@" + E + "x", "");
          b.qa = i;
          d.status = "try";
          P(a, b)
        }else {
          console.log("Error loading asset " + c)
        }
      }
    }
  };
  h.send()
}
function ib() {
  var a = K;
  if(I) {
    a.clear(a.COLOR_BUFFER_BIT | a.DEPTH_BUFFER_BIT)
  }else {
    a.setTransform(1, 0, 0, 1, 0, 0);
    a.fillRect(0, 0, a.za, a.ka)
  }
  if(Na) {
    Na.G();
    if(!Na.ea) {
      Na.onEnterScene()
    }
  }
  a = Date.now();
  Va = a - Ua;
  Ua = a
}
var jb = new Float32Array(3);
function kb(a) {
  var a = Aa(a), b = 0, c = M.length;
  for(jb.set([a.x, a.y, 0]);b < c;b++) {
    M[b](jb, 0)
  }
}
function lb(a) {
  var a = Aa(a), b = 0, c = M.length;
  for(jb.set([a.x, a.y, 0]);b < c;b++) {
    M[b](jb, 1)
  }
}
function mb(a) {
  var a = Aa(a), b = 0, c = M.length;
  for(jb.set([a.x, a.y, 0]);b < c;b++) {
    M[b](jb, 2)
  }
}
function nb(a) {
  var a = Aa(a), b = 0, c = M.length;
  for(jb.set([a.x, a.y, 0]);b < c;b++) {
    M[b](jb, 3)
  }
}
function ob(a) {
  var a = Aa(a), b = 0, c = M.length;
  for(jb.set([a.x, a.y, 0]);b < c;b++) {
    M[b](jb, 4)
  }
}
function pb() {
  if(!Ja) {
    requestAnimationFrame(pb, Ba);
    Xa && Xa.begin();
    ib();
    Q.Pb(Va);
    Xa && Xa.end()
  }
}
function R() {
  return Math.random() * 2 - 1
}
p("chesterGL.version", "0.3");
p("chesterGL.settings", Ga);
p("chesterGL.mouseEvents", Wa);
p("chesterGL.onFakeWebGL", Fa);
Wa.UP = 2;
Wa.DOWN = 0;
Wa.MOVE = 1;
Wa.ENTER = 3;
Wa.LEAVE = 4;
p("chesterGL.viewportSize", function() {
  return new ca(K.za, K.ka)
});
p("chesterGL.setup", function(a) {
  a = Fa ? new ChesterCanvas(innerWidth, innerHeight) : document.getElementById(a);
  Ha = Ga.projection;
  I = Ga.webglMode;
  Ia = Ga.basePath;
  var b = 0, c = 0;
  try {
    if(window.devicePixelRatio && window.devicePixelRatio > 1) {
      var d = window.devicePixelRatio;
      console.log("using HighDPI resolution (devicePixelRatio: " + d + ")");
      b = a.width;
      c = a.height;
      a.style.width = a.width + "px";
      a.style.height = a.height + "px";
      a.width = a.clientWidth * d;
      a.height = a.clientHeight * d;
      Ca = i;
      E = window.devicePixelRatio
    }else {
      b = a.width;
      c = a.height
    }
    Ba = a;
    if(I) {
      if((K = a.getContext("experimental-webgl", {alpha:m, antialias:m, preserveDrawingBuffer:i})) && typeof WebGLDebugUtils !== "undefined") {
        console.log("installing debug context");
        K = WebGLDebugUtils.makeDebugContext(K, Ea)
      }
    }
  }catch(e) {
    console.log("ERROR: " + e)
  }
  if(!K) {
    (K = a.getContext("2d")) || f("Error initializing graphic context!");
    I = Ga.webglMode = m
  }
  K.za = b;
  K.ka = c;
  if(Fa) {
    _touchBeganListeners.push(kb);
    _touchMovedListeners.push(lb);
    _touchEndedListeners.push(mb)
  }else {
    if(typeof navigator !== "undefined" && navigator.platform.match(/iPhone|iPad/)) {
      document.addEventListener("touchstart", kb, m);
      document.addEventListener("touchmove", function(a) {
        lb(a);
        a.preventDefault()
      }, m);
      document.addEventListener("touchend", mb, m)
    }else {
      $(Ba).mousedown(kb);
      $(Ba).mousemove(lb);
      $(Ba).mouseup(mb);
      $(Ba).mouseenter(nb);
      $(Ba).mouseleave(ob)
    }
  }
  if(I) {
    var g = K;
    Za("default", function(a) {
      a.D = g.getUniformLocation(a, "uMVPMatrix");
      a.a = {vertexPositionAttribute:g.getAttribLocation(a, "aVertexPosition"), vertexColorAttribute:g.getAttribLocation(a, "aVertexColor")};
      a.mvpMatrixUniform = a.D;
      a.attribs = a.a
    });
    Za("texture", function(a) {
      a.D = g.getUniformLocation(a, "uMVPMatrix");
      a.Na = g.getUniformLocation(a, "uSampler");
      a.a = {vertexColorAttribute:g.getAttribLocation(a, "aVertexColor"), textureCoordAttribute:g.getAttribLocation(a, "aTextureCoord"), vertexPositionAttribute:g.getAttribLocation(a, "aVertexPosition")};
      a.mvpMatrixUniform = a.D;
      a.samplerUniform = a.Na;
      a.attribs = a.a
    })
  }
  if(!Fa) {
    var d = window.location.search.substring(1).split("&"), h;
    for(h in d) {
      a = d[h].split("=");
      if(a[0] == "_cdbg" && a[1] == "1") {
        Oa = i;
        console.log("debug mode on")
      }
    }
  }
  Pa.texture = fb;
  Pa["default"] = eb;
  Qa.texture = gb;
  Qa["default"] = hb;
  if(typeof Stats !== "undefined") {
    console.log("chesterGL: adding stats");
    Xa = new Stats;
    Xa.setMode(1);
    if(!Fa) {
      Xa.domElement.style.position = "absolute";
      Xa.domElement.style.left = "0px";
      Xa.domElement.style.top = "0px";
      document.body.appendChild(Xa.domElement)
    }
    p("chesterGL.stats", Xa)
  }
});
p("chesterGL.canvasResized", function() {
  var a = Ba;
  K.za = a.width;
  K.ka = a.height
});
p("chesterGL.initShader", Za);
p("chesterGL.registerAssetHandler", function(a, b) {
  Pa[a] = b
});
p("chesterGL.loadAsset", P);
p("chesterGL.assetsLoaded", ab);
p("chesterGL.getAsset", bb);
p("chesterGL.hasAsset", cb);
p("chesterGL.setupPerspective", function() {
  var a = K;
  if(I) {
    a.clearColor(0, 0, 0, 1);
    a.blendFunc(a.SRC_ALPHA, a.ONE_MINUS_SRC_ALPHA);
    a.enable(a.BLEND);
    a.disable(a.DEPTH_TEST);
    var b = a.za, c = a.ka;
    a.viewport(0, 0, Ba.width, Ba.height);
    Ma = oa();
    if(Ha == "2d") {
      console.log("setting up 2d projection (" + b + "," + c + ")");
      pa(Ma, 2 / (b - 0), 0, 0, 0, 0, 2 / (c - 0), 0, 0, 0, 0, -2 / 2048, 0, -(b + 0) / (b - 0), -(c + 0) / (c - 0), -0, 1)
    }else {
      if(Ha == "3d") {
        console.log("setting up 3d projection (" + b + "," + c + ")");
        var d = c / 1.1566;
        var a = oa(), e = b / c, g = 60 * Math.PI / 180 / 2, h = Math.sin(g);
        if(!(h == 0 || e == 0)) {
          g = Math.cos(g) / h;
          a = pa(a, g / e, 0, 0, 0, 0, g, 0, 0, 0, 0, -1500.5 / 1499.5, -1, 0, 0, -1500 / 1499.5, 0)
        }
        d = [b / 2, c / 2, d];
        e = [b / 2, c / 2, 0];
        b = oa();
        c = xa[0];
        c[0] = e[0] - d[0];
        c[1] = e[1] - d[1];
        c[2] = e[2] - d[2];
        ka(c, c);
        c[3] = 0;
        e = xa[1];
        la(c, [0, 1, 0], e);
        ka(e, e);
        e[3] = 0;
        g = xa[2];
        la(e, c, g);
        ka(g, g);
        g[3] = 0;
        c[0] = -c[0];
        c[1] = -c[1];
        c[2] = -c[2];
        qa(b, 0, e);
        qa(b, 1, g);
        qa(b, 2, c);
        b[3] = 0;
        b[7] = 0;
        b[11] = 0;
        b[15] = 1;
        ua(b, -d[0], -d[1], -d[2]);
        sa(a, b, Ma)
      }else {
        f("Invalid projection: " + Ha)
      }
    }
  }
});
p("chesterGL.setRunningScene", function(a) {
  if(Na && Na != a) {
    Na.onExitScene()
  }
  a.type == S.SCENE && (Na = a)
});
p("chesterGL.drawScene", ib);
p("chesterGL.run", pb);
p("chesterGL.togglePause", function() {
  if(Ja) {
    Ja = m;
    Ua = Date.now();
    pb()
  }else {
    Ja = i
  }
});
p("chesterGL.isPaused", function() {
  return Ja
});
p("chesterGL.setPause", function(a) {
  if(Ja && !a) {
    Ja = a;
    Ua = Date.now();
    pb()
  }else {
    Ja = a
  }
});
p("chesterGL.getRunningScene", function() {
  return Na
});
p("chesterGL.getCurrentContext", function() {
  return K
});
p("chesterGL.addMouseHandler", function(a) {
  M.indexOf(a) == -1 && M.push(a)
});
p("chesterGL.removeMouseHandler", function(a) {
  a = M.indexOf(a);
  a >= 0 && M.splice(a, 1)
});
function T(a, b, c) {
  this.type = b || S.STANDALONE;
  c && (this.parent = c);
  this.children = [];
  this.i = U.DEFAULT;
  this.W(0, 0);
  this.type == S.STANDALONE && this.Oa([1, 1, 1, 1]);
  a && ("string" === typeof a && cb("texture", a) ? this.$(a) : this.X(a));
  this.Y(0, 0, 0);
  this.ha(0.5, 0.5);
  if(I && (!c || c.type != S.BLOCKGROUP)) {
    this.o = K.createBuffer(), this.m = new Float32Array(36)
  }
  this.d = oa();
  this.u = oa();
  this.d = ra(oa());
  this.Aa = [];
  this.O = []
}
var U = {DEFAULT:0, TEXTURE:1}, qb = ["default", "texture"], S = {STANDALONE:0, BLOCKGROUP:1, SCENE:2, TMXBLOCK:3, PARTICLE:4, PRIMITIVE:5}, rb = Math.PI / 180, sb = 180 / Math.PI, tb = 1 * rb, ub = new Float32Array(4);
ub[0] = 0;
ub[1] = 0;
ub[2] = 1;
ub[3] = 1;
var vb = new ca(0, 0);
o = T.prototype;
o.title = "";
o.ab = m;
o.d = l;
o.u = l;
o.visible = i;
o.ea = m;
o.g = m;
o.I = m;
o.J = m;
o.la = 0;
o.o = l;
o.m = l;
o.position = l;
o.n = l;
o.e = l;
o.color = l;
o.c = l;
o.rotation = 0;
o.V = 1;
o.ya = 1;
o.update = l;
o.frame = l;
o.parent = l;
o.children = l;
o.Aa = l;
o.O = l;
o.q = m;
o.Hb = function() {
  this.ea = i;
  for(var a in this.children) {
    this.children[a].onEnterScene()
  }
};
o.Ib = function() {
  this.ea = m;
  for(var a in this.children) {
    this.children[a].onExitScene()
  }
  for(var b in Q.v) {
    a = Q.v[b], a.b == this && Q.ob(a.H)
  }
};
o.X = function(a, b) {
  if("string" === typeof a) {
    var c = wb.ra(a);
    c || f("Invalid frame name: " + a);
    a = c.frame;
    this.$(c.c, a)
  }else {
    this.frame ? na(this.frame, a) : this.frame = ma(a), b ? this.W(a[2] / E, a[3] / E) : this.W(a[2], a[3])
  }
  this.J = i
};
o.ra = aa("frame");
o.W = function(a, b) {
  this.e = new ca(a, b);
  this.J = i
};
o.yb = aa("e");
o.Qa = function(a, b) {
  this.V = a;
  this.ya = 2 == arguments.length ? b : this.V;
  this.g = i
};
o.Bb = aa("V");
o.Oa = function(a) {
  this.color ? na(this.color, a) : this.color = ma(a);
  this.I = i
};
o.xb = aa("color");
o.Y = function(a, b, c) {
  if(this.position) {
    1 == arguments.length ? ia(this.position, a) : ja(this.position, a, b, c)
  }else {
    var d;
    1 == arguments.length ? d = ha(a) : (d = new Float32Array(3), ja(d, a, b, c));
    this.position = d
  }
  this.g = i
};
o.ha = function(a, b) {
  this.n = new za(a, b)
};
o.vb = aa("n");
o.zb = aa("position");
o.ub = function() {
  var a = ha(this.position), b = this.d, c = oa();
  c[0] = b[0];
  c[1] = b[1];
  c[2] = b[2];
  c[3] = b[3];
  c[4] = b[4];
  c[5] = b[5];
  c[6] = b[6];
  c[7] = b[7];
  c[8] = b[8];
  c[9] = b[9];
  c[10] = b[10];
  c[11] = b[11];
  c[12] = b[12];
  c[13] = b[13];
  c[14] = b[14];
  c[15] = b[15];
  for(b = this.parent;b;) {
    sa(b.d, c, c), b = b.parent
  }
  ta(c, a, a);
  return a
};
var V = [];
o = T.prototype;
o.Qb = function(a, b) {
  b = b || a;
  var c = this.d, d = c[0], e = c[1], g = c[2], h = c[3], j = c[4], k = c[5], n = c[6], s = c[7], q = c[8], w = c[9], x = c[10], u = c[11], y = c[12], v = c[13], z = c[14], c = c[15], B = d * k - e * j, C = d * n - g * j, F = d * s - h * j, J = e * n - g * k, G = e * s - h * k, H = g * s - h * n, N = q * v - w * y, O = q * z - x * y, da = q * c - u * y, ea = w * z - x * v, fa = w * c - u * v, ga = x * c - u * z, D = B * ga - C * fa + F * ea + J * da - G * O + H * N;
  0 != D && (D = 1 / D, V[0] = (k * ga - n * fa + s * ea) * D, V[1] = (-e * ga + g * fa - h * ea) * D, V[2] = (v * H - z * G + c * J) * D, V[3] = (-w * H + x * G - u * J) * D, V[4] = (-j * ga + n * da - s * O) * D, V[5] = (d * ga - g * da + h * O) * D, V[6] = (-y * H + z * F - c * C) * D, V[7] = (q * H - x * F + u * C) * D, V[8] = (j * fa - k * da + s * N) * D, V[9] = (-d * fa + e * da - h * N) * D, V[10] = (y * G - v * F + c * B) * D, V[11] = (-q * G + w * F - u * B) * D, V[12] = (-j * ea + k * 
  O - n * N) * D, V[13] = (d * ea - e * O + g * N) * D, V[14] = (-y * J + v * C - z * B) * D, V[15] = (q * J - w * C + x * B) * D);
  ta(V, a, b);
  b[0] += this.e.width * this.n.x;
  b[1] += this.e.height * this.n.y;
  return b
};
o.wb = function() {
  var a = this.position, b = this.e.width, c = this.e.height;
  return[a[0] - b / 2, a[1] - c / 2, b, c]
};
o.$ = function(a, b) {
  a != this.c && (this.c = a, this.i = U.TEXTURE, P("texture", a, l, function(a) {
    this.X(b || [0, 0, a.width, a.height], Ca && L.texture[this.c].fb)
  }.bind(this)))
};
o.Cb = aa("c");
o.Pa = function(a) {
  this.rotation = a;
  this.g = i
};
o.Ab = aa("rotation");
o.kb = function(a) {
  this.update = a
};
o.Ob = function(a) {
  this.visible = a
};
o.Fb = aa("visible");
o.z = function(a) {
  for(var b in arguments) {
    var c = arguments[b];
    c.parent && f("can't add a block twice!");
    this.q ? this.Aa.push(c) : (this.children.push(c), c.parent = this);
    if(this.ea) {
      c.onEnterScene()
    }
  }
};
o.removeChild = function(a) {
  (!a.parent || a.parent != this) && f("not our child!");
  if(this.q) {
    this.O.push(a)
  }else {
    var b = this.children.indexOf(a);
    0 <= b && (this.children.splice(b, 1), a.parent = l)
  }
  if(this.ea) {
    a.onExitScene()
  }
};
o.detach = function() {
  this.parent && this.parent.removeChild(this)
};
o.xa = function() {
  if(this.q) {
    this.O.push("all")
  }else {
    for(var a = 0, a = 0;a < this.children.length;a++) {
      this.children[a].parent = l
    }
    this.children.length = 0
  }
};
var xb = [new Float32Array(3), new Float32Array(3), new Float32Array(3), new Float32Array(3)];
T.prototype.transform = function() {
  var a = K, b, c, d = this.parent && this.parent.type == S.BLOCKGROUP, e = this.e ? (0.5 - this.n.x) * this.e.width : 0, g = this.e ? (0.5 - this.n.y) * this.e.height : 0;
  if(this.g || this.parent && this.parent.g) {
    this.g = i, b = this.position[0], c = this.position[1], ra(this.d), ua(this.d, b, c, this.position[2]), wa(this.d, -1 * this.rotation, 0, 0, 1), va(this.d, this.V, this.ya, 1), (b = this.parent ? this.parent.d : l) && !d && sa(b, this.d, this.d)
  }
  if(!(this.type == S.BLOCKGROUP || this.type == S.PRIMITIVE)) {
    if(b = this.m, I) {
      !d && (this.J || this.I) && a.bindBuffer(a.ARRAY_BUFFER, this.o);
      if(this.J || this.g) {
        var h = 0.5 * this.e.width, j = 0.5 * this.e.height, k = this.position[2];
        c = 36 * this.la;
        if(d) {
          var n = ja(xb[0], h + e, j + g, k), s = ja(xb[1], -h + e, j + g, k), q = ja(xb[2], h + e, -j + g, k), e = ja(xb[3], -h + e, -j + g, k);
          ta(this.d, n, n);
          ta(this.d, s, s);
          ta(this.d, e, e);
          ta(this.d, q, q);
          b[c] = e[0];
          b[c + 1] = e[1];
          b[c + 2] = k;
          b[c + 9] = s[0];
          b[c + 1 + 9] = s[1];
          b[c + 2 + 9] = k;
          b[c + 18] = q[0];
          b[c + 1 + 18] = q[1];
          b[c + 2 + 18] = k;
          b[c + 27] = n[0];
          b[c + 1 + 27] = n[1]
        }else {
          b[c] = -h + e, b[c + 1] = -j + g, b[c + 2] = k, b[c + 9] = -h + e, b[c + 1 + 9] = j + g, b[c + 2 + 9] = k, b[c + 18] = h + e, b[c + 1 + 18] = -j + g, b[c + 2 + 18] = k, b[c + 27] = h + e, b[c + 1 + 27] = j + g
        }
        b[c + 2 + 27] = k;
        this.i == U.TEXTURE && (e = bb("texture", this.c), k = e.width, n = e.height, e = this.frame[0] / k, g = this.frame[1] / n, k = this.frame[2] / k, n = this.frame[3] / n, c += 3, b[c] = e, b[c + 1] = g + n, b[c + 9] = e, b[c + 1 + 9] = g, b[c + 18] = e + k, b[c + 1 + 18] = g + n, b[c + 27] = e + k, b[c + 1 + 27] = g)
      }
      if(this.I) {
        c = 5 + 36 * this.la;
        e = this.color;
        for(g = 0;4 > g;g++) {
          b[c + 9 * g] = e[0], b[c + 1 + 9 * g] = e[1], b[c + 2 + 9 * g] = e[2], b[c + 3 + 9 * g] = e[3]
        }
      }
      I && (!d && (this.J || this.I)) && a.bufferData(a.ARRAY_BUFFER, this.m, a.STATIC_DRAW)
    }
  }
};
T.prototype.G = function() {
  this.q = i;
  if(Oa && !this.ab) {
    if(0 < this.e.width) {
      var a = new W(1, 1);
      this.z(a);
      a.Eb = this.parent && this.parent.type == S.BLOCKGROUP ? 1 : 0;
      a.kb(function() {
        var a = this.parent.e, b = a.width / 2, a = a.height / 2, b = [[-b, -a, 0], [-b, a, 0], [b, a, 0], [b, -a, 0]];
        this.Eb ? this.na(b, [1, 0, 0, 1], i) : this.na(b, [1, 1, 1, 1], i)
      })
    }
    this.ab = i
  }
  this.update && this.update(Va);
  if(this.visible) {
    this.transform();
    (!this.parent || this.parent.type != S.BLOCKGROUP) && this.U();
    for(var a = this.children, b = a.length, c = 0;c < b;c++) {
      a[c].G()
    }
    for(this.q = this.J = this.I = this.g = m;a = this.Aa.shift();) {
      this.z(a)
    }
    for(;a = this.O.shift();) {
      "all" === a ? this.xa() : this.removeChild(a)
    }
  }else {
    this.q = m
  }
};
T.prototype.U = function() {
  if(this.type != S.SCENE) {
    var a, b;
    if(I) {
      a = K;
      var c = Ya(qb[this.i]);
      a.bindBuffer(a.ARRAY_BUFFER, this.o);
      a.vertexAttribPointer(c.a.vertexPositionAttribute, 3, a.FLOAT, m, 36, 0);
      a.vertexAttribPointer(c.a.vertexColorAttribute, 4, a.FLOAT, m, 36, 20);
      this.i != U.DEFAULT && this.i == U.TEXTURE && (b = bb("texture", this.c), a.vertexAttribPointer(c.a.textureCoordAttribute, 2, a.FLOAT, m, 36, 12), a.activeTexture(a.TEXTURE0), a.bindTexture(a.TEXTURE_2D, b.N), a.uniform1i(c.Na, 0));
      (this.g || this.parent && this.parent.g) && sa(Ma, this.d, this.u);
      a.uniformMatrix4fv(c.D, m, this.u);
      a.drawArrays(a.TRIANGLE_STRIP, 0, 4)
    }else {
      a = K;
      b = this.d;
      var d = c = 0;
      this.e && (c = this.e.width, d = this.e.height);
      a.globalAlpha = this.color[3];
      a.setTransform(b[0], b[4], b[1], b[5], b[12] + (0.5 - this.n.x) * c, a.ka - (b[13] + (0.5 - this.n.y) * d));
      if(1 == this.i) {
        b = bb("texture", this.c);
        var e = this.frame;
        a.drawImage(b, e[0], b.height - (e[1] + d), e[2], e[3], -c / 2, -d / 2, c, d)
      }else {
        b = [];
        for(e = 0;4 > e;e++) {
          b[e] = 255 * this.color[e]
        }
        a.fillStyle = "rgba(" + b.join(",") + ")";
        a.fillRect(-c / 2, -d / 2, c, d)
      }
    }
  }
};
p("chesterGL.Block", T);
p("chesterGL.Block.FullFrame", ub);
p("chesterGL.Block.SizeZero", vb);
p("chesterGL.Block.TYPE", S);
p("chesterGL.Block.PROGRAM", U);
p("chesterGL.Block.PROGRAM_NAME", qb);
p("chesterGL.Block.DEG_TO_RAD", rb);
p("chesterGL.Block.RAD_TO_DEG", sb);
p("chesterGL.Block.ONE_DEG", tb);
T.prototype.title = T.prototype.title;
T.prototype.onEnterScene = T.prototype.Hb;
T.prototype.onExitScene = T.prototype.Ib;
T.prototype.children = T.prototype.children;
T.prototype.addChild = T.prototype.z;
T.prototype.removeChild = T.prototype.removeChild;
T.prototype.removeAllChildren = T.prototype.xa;
T.prototype.detach = T.prototype.detach;
T.prototype.getBoundingBox = T.prototype.wb;
T.prototype.setPosition = T.prototype.Y;
T.prototype.getPosition = T.prototype.zb;
T.prototype.toLocal = T.prototype.Qb;
T.prototype.setAnchorPoint = T.prototype.ha;
T.prototype.getAnchorPoint = T.prototype.vb;
T.prototype.getAbsolutePosition = T.prototype.ub;
T.prototype.setRotation = T.prototype.Pa;
T.prototype.getRotation = T.prototype.Ab;
T.prototype.setColor = T.prototype.Oa;
T.prototype.getColor = T.prototype.xb;
T.prototype.setFrame = T.prototype.X;
T.prototype.getFrame = T.prototype.ra;
T.prototype.setContentSize = T.prototype.W;
T.prototype.getContentSize = T.prototype.yb;
T.prototype.setTexture = T.prototype.$;
T.prototype.getTexture = T.prototype.Cb;
T.prototype.setScale = T.prototype.Qa;
T.prototype.getScale = T.prototype.Bb;
T.prototype.setUpdate = T.prototype.kb;
T.prototype.setVisible = T.prototype.Ob;
T.prototype.isVisible = T.prototype.Fb;
function X(a, b) {
  I || f("BlockGroup only works on WebGL mode");
  T.call(this, l, S.BLOCKGROUP);
  a ? (this.c = a, this.i = U.TEXTURE) : this.i = U.DEFAULT;
  this.S = b || 10;
  yb(this)
}
r(X, T);
o = X.prototype;
o.S = 0;
o.ta = m;
o.sa = l;
o.s = l;
function yb(a, b, c) {
  var d = K;
  a.o || (a.o = d.createBuffer());
  a.sa || (a.sa = d.createBuffer());
  var d = new Float32Array(36 * a.S), e = new Uint16Array(6 * a.S);
  b && d.set(b);
  c && e.set(c);
  a.m = d;
  a.s = e
}
o.Ca = function(a) {
  var b = new T(a, S.STANDALONE, this);
  this.c && b.$(this.c, a);
  return b
};
o.z = function(a) {
  for(var b in arguments) {
    var c = arguments[b];
    c.parent != this && f("Invalid child: can only add children created with BlockGroup.create");
    this.children.length >= this.S && (this.S *= 2, yb(this, this.m, this.s));
    this.c ? this.c != c.c && f("Invalid child: only can add child with the same texture") : this.c = c.c;
    this.children.push(c);
    c.la = this.children.length - 1;
    c.m = this.m;
    this.ta = i
  }
};
o.removeChild = function(a) {
  a.parent != this && f("Invalid child");
  if(this.q) {
    this.O.push(a)
  }else {
    var b = this.children.indexOf(a);
    if(0 < b) {
      a = this.children.splice(b, 1);
      for(a[0].parent = l;b < this.Yb;b++) {
        a = this.children[b], a.la = b, a.g = i, a.I = i
      }
    }
    this.ta = i
  }
};
o.G = function() {
  this.q = i;
  this.update && this.update(Va);
  if(this.visible) {
    this.transform();
    for(var a = this.children, b = a.length, c = 0;c < b;c++) {
      a[c].G()
    }
    a = K;
    a.bindBuffer(a.ARRAY_BUFFER, this.o);
    a.bufferData(a.ARRAY_BUFFER, this.m, a.STATIC_DRAW);
    if(this.ta) {
      var d, a = (this.s[-1] || -1) + 1;
      d = d || Math.max(this.children.length, 1);
      for(b = 0;b < d;b++) {
        c = 6 * b, this.s[c + 0] = a, this.s[c + 1] = a + 1, this.s[c + 2] = a + 2, this.s[c + 3] = a + 2, this.s[c + 4] = a + 1, this.s[c + 5] = a + 3, a += 4
      }
      d = K;
      d.bindBuffer(d.ELEMENT_ARRAY_BUFFER, this.sa);
      d.bufferData(d.ELEMENT_ARRAY_BUFFER, this.s, d.STATIC_DRAW);
      this.ta = m
    }
    this.U();
    for(this.q = this.J = this.I = this.g = m;d = this.O.shift();) {
      "all" === d ? this.xa() : this.removeChild(d)
    }
  }else {
    this.q = m
  }
};
o.U = function(a) {
  var b = K, c = Ya(qb[this.i]), a = a || this.children.length;
  b.bindBuffer(b.ARRAY_BUFFER, this.o);
  b.vertexAttribPointer(c.a.vertexPositionAttribute, 3, b.FLOAT, m, 36, 0);
  if(this.i != U.DEFAULT && this.i == U.TEXTURE) {
    var d = bb("texture", this.c);
    b.vertexAttribPointer(c.a.textureCoordAttribute, 2, b.FLOAT, m, 36, 12);
    b.activeTexture(b.TEXTURE0);
    b.bindTexture(b.TEXTURE_2D, d.N);
    b.uniform1i(c.Na, 0)
  }
  b.vertexAttribPointer(c.a.vertexColorAttribute, 4, b.FLOAT, m, 36, 20);
  b.bindBuffer(b.ELEMENT_ARRAY_BUFFER, this.sa);
  (this.g || this.parent && this.parent.g) && sa(Ma, this.d, this.u);
  b.uniformMatrix4fv(c.D, m, this.u);
  b.drawElements(b.TRIANGLES, 6 * a, b.UNSIGNED_SHORT, 0)
};
p("chesterGL.BlockGroup", X);
X.prototype.createBlock = X.prototype.Ca;
X.prototype.addChild = X.prototype.z;
X.prototype.removeChild = X.prototype.removeChild;
function zb(a, b) {
  X.call(this, b + ".png", Math.max(100, a.length));
  this.Oa([0, 0, 0, 0]);
  var c, d = bb("txt", b + ".fnt").split(/\n|\r/), e, g, h;
  this.aa = {};
  this.K = {};
  for(e in d) {
    if(c = d[e].match(/chars count=(\d+)/), !c) {
      if(c = d[e].split(/\s+/), "common" === c[0]) {
        var j = {};
        for(g = 1;g < c.length;g++) {
          h = c[g].split("="), 2 == h.length && (j[h[0]] = parseInt(h[1], 10))
        }
        this.Jb = j
      }else {
        if("char" === c[0]) {
          j = {};
          for(g = 1;g < c.length;g++) {
            h = c[g].split("="), 2 == h.length && (j[h[0]] = parseInt(h[1], 10))
          }
          j.id ? this.aa[j.id] = j : console.log("BMFontLabel: invalid char at line " + (e + 1))
        }else {
          if("kerning" === c[0]) {
            j = {};
            for(g = 1;g < c.length;g++) {
              h = c[g].split("="), 2 == h.length && (j[h[0]] = parseInt(h[1], 10))
            }
            this.K[j.first] = this.K[j.first] || {};
            this.K[j.first][j.second] = j.amount
          }
        }
      }
    }
  }
  this.Z(a)
}
r(zb, X);
zb.prototype.ha = function(a, b) {
  zb.F.ha.call(this, a, b);
  this.Z(this.text)
};
zb.prototype.Z = function(a) {
  var b, c;
  if(!(a === l || void 0 === a)) {
    this.text = a;
    this.xa();
    b = a;
    var d = 0, e = 0;
    c = 1;
    var g, h = 0;
    for(g = 0;g < b.length;g++) {
      var j = b.charCodeAt(g);
      if(10 == j || 13 == j) {
        d = Math.max(d, e), e = 0, c++
      }else {
        if(this.aa[j]) {
          var k = this.aa[j], n = 0;
          0 < h && this.K[h] && (n = this.K[h][j] || 0);
          e += k.xadvance + n;
          h = j
        }
      }
    }
    b = d = Math.max(d, e);
    d = this.Jb.lineHeight;
    n = 0;
    g = -b * this.n.x;
    h = -(c * d * this.n.y);
    a = a.split(/\n|\r/).reverse().join("\n");
    for(e = 0;e < a.length;e++) {
      if(j = a.charCodeAt(e), 10 == j || 13 == j) {
        g = -b * this.n.x, h += d
      }else {
        if(this.aa[j]) {
          k = 0;
          0 < n && this.K[n] && (k = this.K[n][j] || 0);
          var n = this.aa[j], s = this.Ca([n.x, n.y, n.width, n.height]);
          s.Y(~~(g + n.xoffset + 0.5 * n.width + k), ~~(h + (d - n.yoffset) - 0.5 * n.height), 0);
          g += n.xadvance + k;
          this.z(s)
        }else {
          f("Invalid charcode " + j + " for text " + a)
        }
        n = j
      }
    }
    Ca && L.texture[this.c].fb ? this.W(b, c * d / E) : this.W(b, c * d)
  }
};
p("chesterGL.BMFontLabelBlock", zb);
p("chesterGL.BMFontLabelBlock.loadFont", function(a) {
  P("texture", a + ".png");
  P("txt", a + ".fnt")
});
zb.prototype.setText = zb.prototype.Z;
zb.prototype.setAnchorPoint = zb.prototype.ha;
function Ab(a) {
  T.call(this, l, 4);
  var b = this;
  P("texture", a.texture, l, function() {
    b.hb(a)
  })
}
r(Ab, T);
var Bb = m;
function Cb() {
  Za("particles", function(a) {
    var b = K;
    a.D = b.getUniformLocation(a, "uMVPMatrix");
    a.Rb = b.getUniformLocation(a, "uSampler");
    a.Sb = b.getUniformLocation(a, "u_time");
    a.a = {a_startPosition:b.getAttribLocation(a, "a_startPosition"), a_lifetime:b.getAttribLocation(a, "a_lifetime"), a_startTime:b.getAttribLocation(a, "a_startTime"), a_startSize:b.getAttribLocation(a, "a_startSize"), a_endSize:b.getAttribLocation(a, "a_endSize"), a_speed:b.getAttribLocation(a, "a_speed"), a_startColor:b.getAttribLocation(a, "a_startColor"), a_endColor:b.getAttribLocation(a, "a_endColor")};
    a.Ya = m;
    a = b.getError();
    0 !== a && console.log("gl error: " + a)
  });
  Bb = i
}
o = Ab.prototype;
o.p = i;
o.ib = l;
o.bb = 0;
o.Q = 0;
o.M = 0;
o.L = 0;
o.duration = 0;
o.Ha = 0;
o.gb = 0;
o.ia = l;
o.ja = l;
o.wa = l;
o.ba = l;
o.ca = l;
o.ua = l;
o.va = l;
o.mb = 0;
o.nb = 0;
o.cb = 0;
o.eb = 0;
o.Ma = m;
o.elapsedTime = 0;
o.Ba = ["SRC_ALPHA", "ONE_MINUS_SRC_ALPHA"];
o.hb = function(a) {
  this.i = -1;
  Bb || Cb();
  this.ib = a.texture;
  this.L = a.maxParticles;
  this.duration = 1E3 * parseFloat(a.duration);
  this.Ha = 1E3 * parseFloat(a.lifetime);
  this.gb = 1E3 * parseFloat(a.lifetimeVariance);
  this.ia = ma(a.startColor);
  this.ja = ma(a.startColorVariance);
  this.ba = ma(a.endColor);
  this.ca = ma(a.endColorVariance);
  this.wa = ha(a.positionVariance);
  this.ua = ha(a.speed);
  this.va = ha(a.speedVariance);
  this.mb = parseFloat(a.startSize);
  this.nb = parseFloat(a.startSizeVariance);
  this.cb = parseFloat(a.endSize);
  this.eb = parseFloat(a.endSizeVariance);
  this.elapsedTime = 0;
  this.Ba = a.blendOptions.slice(0);
  this.p = i;
  this.o || (this.o = K.createBuffer());
  this.m = new Float32Array(18 * this.L);
  for(var a = Ya("particles"), b = K, c = 0;c < this.L;c++) {
    Db(this, c)
  }
  b.uniform1i(a.Rb, 0);
  Eb(this, a);
  this.M = this.Q = this.elapsedTime = 0;
  this.bb = this.L / Math.abs(this.Ha)
};
function Db(a, b, c, d) {
  var e = a.m;
  e[18 * b + 0] = c || -1;
  e[18 * b + 1] = d || 0;
  e[18 * b + 2] = a.mb + a.nb * R();
  e[18 * b + 3] = a.cb + a.eb * R();
  e[18 * b + 4] = a.ua[0] + a.va[0] * R();
  e[18 * b + 5] = a.ua[1] + a.va[1] * R();
  e[18 * b + 6] = a.ua[2] + a.va[2] * R();
  e[18 * b + 7] = R() * a.wa[0];
  e[18 * b + 8] = R() * a.wa[1];
  e[18 * b + 9] = R() * a.wa[2];
  e[18 * b + 10] = Math.max(0, Math.min(1, a.ia[0] + R() * a.ja[0]));
  e[18 * b + 11] = Math.max(0, Math.min(1, a.ia[1] + R() * a.ja[1]));
  e[18 * b + 12] = Math.max(0, Math.min(1, a.ia[2] + R() * a.ja[2]));
  e[18 * b + 13] = Math.max(0, Math.min(1, a.ia[3] + R() * a.ja[3]));
  e[18 * b + 14] = Math.max(0, Math.min(1, a.ba[0] + R() * a.ca[0]));
  e[18 * b + 15] = Math.max(0, Math.min(1, a.ba[1] + R() * a.ca[1]));
  e[18 * b + 16] = Math.max(0, Math.min(1, a.ba[2] + R() * a.ca[2]));
  e[18 * b + 17] = Math.max(0, Math.min(1, a.ba[3] + R() * a.ca[3]))
}
function Eb(a, b) {
  var c = K;
  c.bindBuffer(c.ARRAY_BUFFER, a.o);
  b.Ya || (c.vertexAttribPointer(b.a.a_lifetime, 1, c.FLOAT, m, 72, 0), c.vertexAttribPointer(b.a.a_startTime, 1, c.FLOAT, m, 72, 4), c.vertexAttribPointer(b.a.a_startSize, 1, c.FLOAT, m, 72, 8), c.vertexAttribPointer(b.a.a_endSize, 1, c.FLOAT, m, 72, 12), c.vertexAttribPointer(b.a.a_speed, 3, c.FLOAT, m, 72, 16), c.vertexAttribPointer(b.a.a_startPosition, 3, c.FLOAT, m, 72, 28), c.vertexAttribPointer(b.a.a_startColor, 4, c.FLOAT, m, 72, 40), c.vertexAttribPointer(b.a.a_endColor, 4, c.FLOAT, m, 72, 
  56), b.Ya = i);
  c.bufferData(c.ARRAY_BUFFER, a.m, c.STATIC_DRAW)
}
var Fb = new Float32Array(18);
Ab.prototype.update = function(a) {
  if(Ya("particles")) {
    this.elapsedTime += a;
    var b = 1 / this.bb;
    for(this.Q += a;this.M < this.L && this.Q > b && this.p;) {
      a = Math.abs(this.Ha + this.gb * R()), Db(this, this.M++, a, this.elapsedTime), this.Ma = i, this.Q -= b
    }
    for(b = 0;b < this.L;b++) {
      var a = this.m, c = 18 * b;
      if(0 < a[c] && a[c] + a[c + 1] <= this.elapsedTime && b != this.M - 1) {
        var d = a.subarray(c, c + 18);
        Fb.set(d);
        Fb[0] = -1;
        d = a.subarray(c + 18, 18 * this.M);
        a.set(d, c);
        a.set(Fb, 18 * (this.M - 1));
        this.M--
      }
    }
    0 < this.duration && this.elapsedTime > this.duration && (this.p = m)
  }
};
Ab.prototype.U = function() {
  var a = Ya("particles");
  if(a) {
    var b = K, c = bb("texture", this.ib);
    b.blendFunc(b[this.Ba[0]], b[this.Ba[1]]);
    b.uniform1f(a.Sb, this.elapsedTime);
    b.activeTexture(b.TEXTURE0);
    b.bindTexture(b.TEXTURE_2D, c.N);
    this.Ma ? (Eb(this, a), this.Ma = m) : b.bindBuffer(b.ARRAY_BUFFER, this.o);
    (this.g || this.parent && this.parent.g) && sa(Ma, this.d, this.u);
    b.uniformMatrix4fv(a.D, m, this.u);
    b.drawArrays(b.POINTS, 0, this.L);
    b.blendFunc(b.SRC_ALPHA, b.ONE_MINUS_SRC_ALPHA)
  }
};
p("chesterGL.GPUParticleSystem", Ab);
Ab.loadShaders = Cb;
Ab.prototype.loadProperties = Ab.prototype.hb;
function Y(a, b) {
  this.totalTime = a;
  this.b = b;
  this.l = 0
}
o = Y.prototype;
o.H = 0;
o.b = l;
o.totalTime = 0;
o.l = 0;
o.r = m;
o.p = m;
o.update = function(a) {
  this.l += a;
  0 <= this.totalTime && this.l >= this.totalTime && this.stop()
};
o.Nb = function(a) {
  this.p || (this.totalTime = a)
};
o.j = function() {
  this.p = i
};
o.stop = function() {
  this.r = i;
  this.p = m
};
o.pause = function() {
  this.p = m
};
o.Lb = function() {
  this.p = i
};
o.reset = function() {
  this.r = this.p = m;
  this.l = 0
};
function Z(a, b, c, d) {
  Y.call(this, b, d);
  this.ma = ha(a);
  this.R = void 0 !== c ? c === i : i;
  this.Ra = new Float32Array(3);
  this.da = new Float32Array(3)
}
r(Z, Y);
Z.prototype.ma = l;
Z.prototype.da = l;
Z.prototype.R = i;
Z.prototype.Ra = l;
var Gb = new Float32Array(3);
Z.prototype.update = function(a) {
  Y.prototype.update.call(this, a);
  var a = this.b, b = Math.min(1, this.l / this.totalTime), c = this.Ra, d = this.da, e = c[0], g = c[1], c = c[2];
  Gb[0] = (d[0] - e) * b + e;
  Gb[1] = (d[1] - g) * b + g;
  Gb[2] = (d[2] - c) * b + c;
  a.Y(Gb[0], Gb[1], Gb[2])
};
Z.prototype.j = function() {
  Y.prototype.j.call(this);
  this.b || f("invalid move action! - no block");
  if(this.R) {
    var a = this.ma, b = this.b.position, c = this.da;
    c[0] = a[0] + b[0];
    c[1] = a[1] + b[1];
    c[2] = a[2] + b[2]
  }else {
    ia(this.da, this.ma)
  }
  ia(this.Ra, this.b.position)
};
Z.prototype.stop = function() {
  Y.prototype.stop.call(this);
  this.l >= this.totalTime && this.b.Y(this.da)
};
Z.prototype.reverse = function() {
  this.R || f("This only works on relative movements");
  var a = [], b = this.ma;
  a[0] = -b[0];
  a[1] = -b[1];
  a[2] = -b[2];
  return new Z(a, this.totalTime, i)
};
function Hb(a, b, c, d, e) {
  Y.call(this, c, e);
  this.R = d;
  this.Da = a;
  this.Ea = b;
  this.Ta = this.Sa = this.pa = this.oa = 0
}
r(Hb, Y);
o = Hb.prototype;
o.j = function() {
  Hb.F.j.call(this);
  this.b || f("invalid scale action - no block provided");
  this.R ? (this.oa = this.b.V + this.Da, this.pa = this.b.ya + this.Ea) : (this.oa = this.Da, this.pa = this.Ea);
  this.Sa = this.b.V;
  this.Ta = this.b.ya
};
o.update = function(a) {
  Hb.F.update.call(this, a);
  var a = this.b, b = Math.min(1, this.l / this.totalTime);
  a.Qa(this.Sa + b * (this.oa - this.Sa), this.Ta + b * (this.pa - this.Ta))
};
o.stop = function() {
  Hb.F.stop.call(this);
  this.l >= this.totalTime && this.b.Qa(this.oa, this.pa)
};
o.reset = function() {
  Hb.F.reset.call(this)
};
o.reverse = function() {
  this.R || f("This only works on relative movements");
  return new Hb(-this.Da, -this.Ea, this.totalTime, i)
};
function Ib(a, b, c) {
  this.Za = a;
  this.Xa = c;
  Y.call(this, b || 0)
}
r(Ib, Y);
Ib.prototype.Za = l;
Ib.prototype.Xa = l;
Ib.prototype.update = function(a) {
  Y.prototype.update.call(this, a);
  this.r && this.Za.call(l, this.Xa)
};
function Jb(a) {
  1 > arguments.length && f("you need at least one action to create a sequence");
  var b = 0;
  this.k = [];
  for(var c in arguments) {
    b += arguments[c].totalTime, this.k.push(arguments[c])
  }
  this.ga = this.k[0].totalTime;
  Y.call(this, b)
}
r(Jb, Y);
o = Jb.prototype;
o.k = l;
o.A = 0;
o.j = function() {
  Jb.F.j.call(this);
  this.ga = this.k[0].totalTime;
  this.k[0].b = this.b;
  this.k[0].j()
};
o.reset = function() {
  Jb.F.reset.call(this);
  this.A = 0;
  this.ga = this.k[0].totalTime;
  for(var a = this.totalTime = 0;a < this.k.length;a++) {
    this.k[a].reset(), this.totalTime += this.k[a].totalTime
  }
};
o.update = function(a) {
  Jb.F.update.call(this, a);
  var b = this.k[this.A];
  b.update(a);
  if(this.l >= this.ga) {
    b.r || b.update(1E3);
    for(this.A++;this.A < this.k.length;) {
      b = this.k[this.A];
      b.b = this.b;
      b.j();
      this.ga += b.totalTime;
      if(0 < b.totalTime) {
        break
      }
      b.update(1);
      if(0 === this.A) {
        break
      }
      this.A += 1
    }
  }
};
function Kb(a, b) {
  this.Ka = b || 1;
  this.Va = 0;
  this.action = a;
  Y.call(this, a.totalTime)
}
r(Kb, Y);
o = Kb.prototype;
o.Ka = 0;
o.Va = 0;
o.action = l;
o.j = function() {
  Y.prototype.j.call(this);
  this.action.b = this.b;
  this.action.j()
};
o.update = function(a) {
  Y.prototype.update.call(this, a);
  this.action.update(a);
  if(this.r && this.action.r && (0 > this.Ka || this.Va < this.Ka)) {
    this.Va++, this.reset(), this.action.reset(), this.j()
  }
};
function Lb(a, b, c, d) {
  this.delay = a;
  a *= b.length;
  c === i && (a = -1);
  Y.call(this, a, d);
  this.lb = c === i;
  this.frames = b.slice(0)
}
r(Lb, Y);
o = Lb.prototype;
o.P = 0;
o.delay = 0;
o.frames = l;
o.lb = m;
o.update = function(a) {
  Y.prototype.update.call(this, a);
  a = this.b;
  this.r ? (this.P = this.frames.length - 1, a.X(this.frames[this.P])) : this.l >= this.delay * this.P && (a.X(this.frames[this.P++]), this.P == this.frames.length && (this.lb ? this.l = this.P = 0 : this.r = i))
};
function Mb(a, b, c, d) {
  this.Wa = a;
  this.$a = b;
  Y.call(this, c, d)
}
r(Mb, Y);
Mb.prototype.Wa = 0;
Mb.prototype.$a = 0;
Mb.prototype.update = function(a) {
  Y.prototype.update.call(this, a);
  this.r ? this.b.Pa(0) : this.b.Pa(this.Wa * Math.sin(2 * (this.l / 1E3 * this.$a) * Math.PI / (this.totalTime / 1E3)))
};
var Q = {v:{}, Db:0, jb:function(a) {
  if(!a.H || !Q.v.hasOwnProperty(a.H)) {
    a.H = Q.Db++, Q.v[a.H] = a
  }
  a.j();
  return a.H
}, ob:function(a) {
  Q.v.hasOwnProperty(a) && delete Q.v[a]
}, Pb:function(a) {
  for(var b in Q.v) {
    var c = Q.v[b];
    c.p && c.update(a);
    c.r && delete Q.v[c.H]
  }
}};
T.prototype.Mb = function(a) {
  a.b = this;
  return Q.jb(a)
};
p("chesterGL.ActionManager", Q);
p("chesterGL.MoveAction", Z);
p("chesterGL.ScaleAction", Hb);
p("chesterGL.CallbackAction", Ib);
p("chesterGL.SequenceAction", Jb);
p("chesterGL.RepeatAction", Kb);
p("chesterGL.AnimateAction", Lb);
p("chesterGL.WiggleAction", Mb);
Q.scheduleAction = Q.jb;
Q.unscheduleAction = Q.ob;
T.prototype.runAction = T.prototype.Mb;
Y.prototype.stop = Y.prototype.stop;
Y.prototype.reset = Y.prototype.reset;
Y.prototype.begin = Y.prototype.j;
Y.prototype.pause = Y.prototype.pause;
Y.prototype.resume = Y.prototype.Lb;
Y.prototype.setTotalTime = Y.prototype.Nb;
Z.prototype.reverse = Z.prototype.reverse;
Hb.prototype.reverse = Hb.prototype.reverse;
var wb = {frames:{}, Kb:function(a) {
  "string" === typeof a && (a = JSON.parse(a));
  if(a.meta && "1.0" == a.meta.version) {
    var b = a.meta.image;
    P("texture", b, l, function() {
      var c = a.frames, d;
      for(d in c) {
        var e = c[d], g = {frame:{}, c:""};
        g.frame = [e.frame.x, e.frame.y, e.frame.w, e.frame.h];
        g.c = b;
        wb.frames[d] = g
      }
    })
  }else {
    f("Unkown json data")
  }
}, tb:function(a, b) {
  L.frameset[a.name].data = b;
  return i
}, ra:function(a) {
  return wb.frames[a]
}, Gb:function(a) {
  console.log("loadFrames: will fetch " + a);
  P("frameset", {url:a, dataType:"json"}, l, function(a) {
    wb.Kb(a)
  })
}};
Pa.frameset = wb.tb;
p("chesterGL.BlockFrames", wb);
wb.getFrame = wb.ra;
wb.loadFrames = wb.Gb;
function W(a, b) {
  I || f("PrimitiveBlock only works on WebGL mode");
  this.Ja = a || 500;
  this.Ia = b || 500;
  T.call(this, l, S.PRIMITIVE);
  var c = K;
  this.Ga = c.createBuffer();
  this.t = new Float32Array(7 * this.Ja);
  this.Fa = c.createBuffer();
  this.f = new Float32Array(14 * this.Ia);
  this.i = U.DEFAULT
}
r(W, T);
o = W.prototype;
o.Ga = l;
o.t = l;
o.Fa = l;
o.f = l;
o.Ia = 0;
o.B = 0;
o.Ja = 0;
o.C = 0;
o.T = [];
o.rb = function(a, b, c) {
  if(this.C < this.Ja) {
    var d = 7 * this.C, c = c || [1, 1, 1, 1];
    this.t[d + 0] = a;
    this.t[d + 1] = b;
    this.t[d + 2] = 0;
    this.t[d + 3] = c[0];
    this.t[d + 4] = c[1];
    this.t[d + 5] = c[2];
    this.t[d + 6] = c[3];
    this.C++
  }else {
    f("too many points!")
  }
};
o.qb = function(a, b, c, d, e) {
  if(this.B < this.Ia) {
    var g = 14 * this.B, e = e || [1, 1, 1, 1];
    this.f[g + 0] = a;
    this.f[g + 1] = b;
    this.f[g + 2] = 0;
    this.f[g + 3] = e[0];
    this.f[g + 4] = e[1];
    this.f[g + 5] = e[2];
    this.f[g + 6] = e[3];
    this.f[g + 7] = c;
    this.f[g + 8] = d;
    this.f[g + 9] = 0;
    this.f[g + 10] = e[0];
    this.f[g + 11] = e[1];
    this.f[g + 12] = e[2];
    this.f[g + 13] = e[3];
    this.B++
  }else {
    f("too many lines!")
  }
};
o.na = function(a, b, c, d) {
  for(var b = b || [1, 1, 1, 1], c = c || m, d = d || m, e = a.length, g = K, h = new Float32Array(7 * a.length), j = g.createBuffer(), k = 0;k < e;k++) {
    var n = a[k];
    h[7 * k + 0] = n[0];
    h[7 * k + 1] = n[1];
    h[7 * k + 2] = n[2];
    h[7 * k + 3] = b[0];
    h[7 * k + 4] = b[1];
    h[7 * k + 5] = b[2];
    h[7 * k + 6] = b[3]
  }
  g.bindBuffer(g.ARRAY_BUFFER, j);
  g.bufferData(g.ARRAY_BUFFER, h, g.STATIC_DRAW);
  this.T.unshift([h, j, c, d])
};
o.sb = function(a, b, c, d, e, g) {
  c /= 2;
  d /= 2;
  this.na([[a - c, b - d, 0], [a - c, b + d, 0], [a + c, b + d, 0], [a + c, b - d, 0]], e, i, g)
};
o.G = function() {
  this.B = this.C = 0;
  0 < this.T.length && (this.T = []);
  T.prototype.G.call(this)
};
o.U = function() {
  var a = K, b = Ya(qb[this.i]);
  if(0 < this.C || 0 < this.B || 0 < this.T.length) {
    sa(Ma, this.d, this.u), a.uniformMatrix4fv(b.D, m, this.u)
  }
  if(0 < this.C) {
    var c = K, d = 7 * this.C;
    c.bindBuffer(c.ARRAY_BUFFER, this.Ga);
    c.bufferData(c.ARRAY_BUFFER, this.t.subarray(0, d), c.STATIC_DRAW);
    a.bindBuffer(a.ARRAY_BUFFER, this.Ga);
    a.vertexAttribPointer(b.a.vertexPositionAttribute, 3, a.FLOAT, m, 28, 0);
    a.vertexAttribPointer(b.a.vertexColorAttribute, 4, a.FLOAT, m, 28, 12);
    a.drawArrays(a.POINTS, 0, this.C)
  }
  0 < this.B && (c = K, d = 14 * this.B, c.bindBuffer(c.ARRAY_BUFFER, this.Fa), c.bufferData(c.ARRAY_BUFFER, this.f.subarray(0, d), c.STATIC_DRAW), a.bindBuffer(a.ARRAY_BUFFER, this.Fa), a.vertexAttribPointer(b.a.vertexPositionAttribute, 3, a.FLOAT, m, 28, 0), a.vertexAttribPointer(b.a.vertexColorAttribute, 4, a.FLOAT, m, 28, 12), a.drawArrays(a.LINES, 0, 2 * this.B));
  c = this.T.length;
  if(0 < c) {
    for(d = 0;d < c;d++) {
      var e = this.T[d];
      a.bindBuffer(a.ARRAY_BUFFER, e[1]);
      a.vertexAttribPointer(b.a.vertexPositionAttribute, 3, a.FLOAT, m, 28, 0);
      a.vertexAttribPointer(b.a.vertexColorAttribute, 4, a.FLOAT, m, 28, 12);
      e[2] ? a.drawArrays(a.LINE_LOOP, 0, e[0].length / 7) : a.drawArrays(a.LINE_STRIP, 0, e[0].length / 7)
    }
  }
};
p("chesterGL.PrimitiveBlock", W);
W.prototype.drawPoint = W.prototype.rb;
W.prototype.drawLine = W.prototype.qb;
W.prototype.drawPolygon = W.prototype.na;
W.prototype.drawRectangle = W.prototype.sb;
var Nb, Ob, Pb, Qb;
function Rb() {
  return ba.navigator ? ba.navigator.userAgent : l
}
Qb = Pb = Ob = Nb = m;
var Sb;
if(Sb = Rb()) {
  var Tb = ba.navigator;
  Nb = 0 == Sb.indexOf("Opera");
  Ob = !Nb && -1 != Sb.indexOf("MSIE");
  Pb = !Nb && -1 != Sb.indexOf("WebKit");
  Qb = !Nb && !Pb && "Gecko" == Tb.product
}
var Ub = Ob, Vb = Qb, Wb = Pb;
var Xb;
if(Nb && ba.opera) {
  var Yb = ba.opera.version;
  "function" == typeof Yb && Yb()
}else {
  Vb ? Xb = /rv\:([^\);]+)(\)|;)/ : Ub ? Xb = /MSIE\s+([^\);]+)(\)|;)/ : Wb && (Xb = /WebKit\/(\S+)/), Xb && Xb.exec(Rb())
}
;var Zb = l, $b = l;
function ac(a) {
  (a = bc[a]) || f("Invalid map - make sure you call loadTMX first");
  T.call(this, l, S.TMXBLOCK);
  for(var b = 0;b < a.layers.length;b++) {
    for(var c = a.layers[b], d = I ? new X(l, c.blocks.length) : new T, e = l, g = 0;g < c.blocks.length;g++) {
      var h = c.blocks[g];
      e || (e = cc(a.tilesets, h.gid), d.$(e.texture));
      var j;
      I ? j = d.Ca(h.frame) : (j = new T(h.frame), j.$(e.texture));
      j.Y(h.position);
      d.z(j)
    }
    this.z(d)
  }
}
r(ac, T);
ac.prototype.U = function() {
};
var bc = {};
function cc(a, b) {
  for(var c = a[0], d = 1;d < a.length;d++) {
    var e = a[d];
    b >= e.firstgid && (c = e)
  }
  return c
}
Pa.tmx = function(a, b) {
  L.tmx[a.name].data = b;
  return i
};
p("chesterGL.TMXBlock", ac);
ac.loadTMX = function(a) {
  P("tmx", {url:a, dataType:"xml"}, l, function(b) {
    var c = {}, b = $(b).find("map"), d = b.attr("orientation");
    c.tilesets = [];
    b.find("tileset").each(function(a, b) {
      var d = $(b);
      if("obstruction" != d.attr("name")) {
        var j = {};
        j.tileSize = new ca(parseInt(d.attr("tilewidth"), 10), parseInt(d.attr("tileheight"), 10));
        d.attr("spacing") && (j.spacing = parseInt(d.attr("spacing"), 10));
        d.attr("margin") && (j.margin = parseInt(d.attr("margin"), 10));
        var k = d.find("image").first();
        j.imgSize = new ca(parseInt(k.attr("width"), 10), parseInt(k.attr("height"), 10));
        j.texture = k.attr("source");
        j.firstgid = parseInt(d.attr("firstgid"), 10);
        c.tilesets.push(j)
      }
    });
    c.mapTileSize = new ca(parseInt(b.attr("tilewidth"), 10), parseInt(b.attr("tileheight"), 10));
    c.layers = [];
    b.find("layer").each(function(a, b) {
      if("0" != $(b).attr("visible")) {
        var h = {blocks:[]}, j = new ca(parseInt($(b).attr("width"), 10), parseInt($(b).attr("height"), 10)), k = $(b).find("data").first();
        if(k) {
          ("base64" != k.attr("encoding") || k.attr("compression")) && f("Invalid TMX Data");
          var n = k.text().trim();
          if(!Zb) {
            Zb = {};
            $b = {};
            for(k = 0;65 > k;k++) {
              Zb[k] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(k), $b[Zb[k]] = k
            }
          }
          for(var s = $b, k = [], q = 0;q < n.length;) {
            var w = s[n.charAt(q++)], x = q < n.length ? s[n.charAt(q)] : 0;
            ++q;
            var u = q < n.length ? s[n.charAt(q)] : 0;
            ++q;
            var y = q < n.length ? s[n.charAt(q)] : 0;
            ++q;
            (w == l || x == l || u == l || y == l) && f(Error());
            k.push(w << 2 | x >> 4);
            64 != u && (k.push(x << 4 & 240 | u >> 2), 64 != y && k.push(u << 6 & 192 | y))
          }
          n = 0;
          s = l;
          for(q = 0;q < j.height;q++) {
            for(w = 0;w < j.width;w++) {
              var v = k[n + 3] << 24 | k[n + 2] << 16 | k[n + 1] << 8 | k[n + 0] >>> 0;
              if(0 !== v) {
                s || (s = cc(c.tilesets, v));
                x = {};
                x.gid = v;
                var z = s.margin || 0, B = s.spacing || 0, u = s.tileSize, C = s.imgSize, y = c.mapTileSize, F = parseInt((C.width - 2 * z + B) / (u.width + B), 10), v = v - s.firstgid, J = v % F * (u.width + B) + z, C = C.height - u.height - z - B - parseInt(v / F, 10) * (u.height + B) + z, F = u.width, B = u.height, z = v = new Float32Array(4);
                z[0] = J;
                z[1] = C;
                z[2] = F;
                z[3] = B;
                x.frame = v;
                var G, H;
                "orthogonal" == d ? (G = w * y.width + u.width / 2, H = (j.height - q - 1) * y.height + u.height / 2) : "isometric" == d ? (G = y.width / 2 * (j.width + w - q - 1) + u.width / 2, H = y.height / 2 * (2 * j.height - w - q - 2) + u.height / 2) : f("Invalid orientation");
                x.position = [G, H, 0];
                h.blocks.push(x)
              }
              n += 4
            }
          }
        }else {
          f("No data for layer!")
        }
        c.layers.push(h)
      }
    });
    bc[a] = c
  })
};
function dc(a, b, c) {
  var b = b || "20px sans-serif", c = c || "White", d = document.createElement("canvas");
  this.canvas = d;
  this.context = d.getContext("2d");
  this.context.textBaseline = "bottom";
  this.font = b;
  this.fillStyle = c;
  (b = b.match(/(\d+)px/)) ? this.Ua = parseInt(b[1], 10) : f("Invalid text height - use the form NNpx");
  this.c = Math.random() + ".canvas";
  L.texture || (L.texture = {});
  L.texture[this.c] = d;
  T.call(this, ec(this, a));
  this.Z(a, m);
  this.i = U.TEXTURE
}
r(dc, T);
o = dc.prototype;
o.canvas = l;
o.context = l;
o.La = m;
o.text = "";
o.Ua = 0;
o.font = "";
o.fillStyle = "";
o.Z = function(a, b) {
  this.text = a;
  fc(this);
  b || (this.X(ec(this)), this.La = i)
};
function fc(a) {
  var b = a.context, c = a.canvas;
  b.clearRect(0, 0, c.width, c.height);
  b.fillText(a.text, 0, c.height);
  c.N || (c.N = K.createTexture(), L.texture[a.c].data = c);
  db(c);
  a.La = m
}
function ec(a, b) {
  var c = a.context, d = a.canvas;
  c.font = a.font;
  c.fillStyle = a.fillStyle;
  b && (a.text = b);
  var e = c.measureText(a.text).width;
  d.width = e;
  d.height = a.Ua;
  c.font = a.font;
  c.fillStyle = a.fillStyle;
  c.textBaseline = "bottom";
  return[0, 0, e, a.Ua]
}
o.G = function() {
  this.La && fc(this);
  T.prototype.G.call(this)
};
p("chesterGL.LabelBlock", dc);
dc.prototype.setText = dc.prototype.Z;

//@ sourceMappingURL=chester.js.map
