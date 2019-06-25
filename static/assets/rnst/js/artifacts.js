(function() {
  var html = d3.select(".deepdream-examples");
  var original = html.selectAll(".example .original");
  html
      .on("mouseleave", () => {
        original.each(resetReticle);
      });
  original
      .datum(function() {
        var focus = this.getAttribute("data-focus").split(",")
        return {
          zoom: focus[0],
          x: focus[1],
          y: focus[2]
        };
      })
      .on("mouseleave", resetReticle)
      .on("mousemove", updateReticle)
      .each(resetReticle);
  function updateReticle(d) {
    original.each(resetReticle);
    var x = d3.event.offsetX / this.getBoundingClientRect().width;
    var y = d3.event.offsetY / this.getBoundingClientRect().height;
    //console.log(x,y)
    setPosition(this, x, y, d.zoom, 100);
  }
  function resetReticle(d) {
    setPosition(this, d.x, d.y, d.zoom, 300);
  }
  function setPosition(element, x, y, zoom, duration) {
    var marginX = 1 / zoom / 4;
    var marginY = 1 / zoom / 2;
    x = Math.min(Math.max(marginX, x), 1 - marginX)
    y = Math.min(Math.max(marginY, y), 1 - marginY)
    var parent = d3.select(element.parentElement);
    var reticle = parent.select(".reticle");
    var closeup = parent.select(".closeup img");
    reticle
        .style("width", 50 / zoom + "%")
        .style("height", 100 / zoom + "%")
        .transition()
        .ease(d3.ease("cubic-out"))
        .duration(duration)
        .styleTween("left", function (d, i, a) {
          var from = this.style.left,
              to = x * 100 + "%";
          return d3.interpolateString(from, to);
        })
        .styleTween("top", function (d, i, a) {
          var from = this.style.top,
              to = y * 100 + "%";
          return d3.interpolateString(from, to);
        })
    closeup
        .style("width", zoom * 200 + "%")
        .style("height", zoom * 100 + "%")
        .transition()
        .ease(d3.ease("cubic-out"))
        .duration(duration)
        .styleTween("left", function (d, i, a) {
          var from = this.style.left,
              to = -x * 200 * zoom + 50 + "%";
          return d3.interpolateString(from, to);
        })
        .styleTween("top", function (d, i, a) {
          var from = this.style.top,
              to = -y * 100 * zoom + 50 + "%";
          return d3.interpolateString(from, to);
        })
  }
  })();
  