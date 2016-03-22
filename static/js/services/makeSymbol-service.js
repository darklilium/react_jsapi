function makeSymbol(){
  return {
    makePoint(){
      var mySymbol = new esri.symbol.SimpleMarkerSymbol(
        esri.symbol.SimpleMarkerSymbol.STYLE_CIRCLE,
        20,
        new esri.symbol.SimpleLineSymbol(
          esri.symbol.SimpleLineSymbol.STYLE_SOLID,
          new esri.Color([0, 40, 255, 0.9]),
          1
        ),
        new esri.Color([0, 255, 255, 0.5])
      );

      return mySymbol;
    },
    makePointRelated(){
      mySymbol = new esri.symbol.SimpleMarkerSymbol(
        esri.symbol.SimpleMarkerSymbol.STYLE_CIRCLE,
        10,
        new esri.symbol.SimpleLineSymbol(
          esri.symbol.SimpleLineSymbol.STYLE_SOLID,
          new esri.Color([255, 89, 0, 0.9]),
          1
        ),
        new esri.Color([255, 89, 0, 0.5])
      );
      return mySymbol;
    },
    makeLine(){
      var mySymbol = new esri.symbol.CartographicLineSymbol(
        esri.symbol.CartographicLineSymbol.STYLE_SOLID,
        new esri.Color([255,0,0]), 5,
        esri.symbol.CartographicLineSymbol.CAP_ROUND,
        esri.symbol.CartographicLineSymbol.JOIN_MITER, 5
      );

      return mySymbol;
    },
    makePolygon(){
      console.log("still not defined");
      return mySymbol;
    }
  }
}

export default makeSymbol();