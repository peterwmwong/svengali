System.register([], function($__export) {
  "use strict";
  return {
    setters: [],
    execute: function() {
      (function() {
        register(System);
        window.__karma__.loaded = function() {};
        Promise.all(Object.keys(window.__karma__.files).reduce(function(imports, file) {
          if (/spec_build\/.*(spec|test)\.js$/i.test(file)) {
            imports.push(System.import(/^\/(.*)\.js$/.exec(file)[1]));
          }
          return imports;
        }, [])).then(window.__karma__.start);
        if (/debug.html$/.test(window.location.pathname))
          document.write("<script src='http://" + (location.host || 'localhost').split(':')[0] + ":35729/livereload.js?snipver=1'></" + "script>");
      })();
    }
  };
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkB0cmFjZXVyL2dlbmVyYXRlZC9UZW1wbGF0ZVBhcnNlci8zIiwiQHRyYWNldXIvZ2VuZXJhdGVkL1RlbXBsYXRlUGFyc2VyLzIiLCJib290c3RyYXAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsS0FBSyxTQUFTLEFBQUMsSUFBb0IsVUFBUyxTQUFROztBQ0FwRCxPQUFPO0FBQ0QsVUFBTSxJQUFtQjtBQUN6QixVQUFNO0FDQ1osTUFBQyxTQUFRLEFBQUMsQ0FBQztBQUdYLGVBQU8sQUFBQyxDQUFDLE1BQUssQ0FBQyxDQUFDO0FBR2hCLGFBQUssVUFBVSxPQUFPLEVBQUksVUFBUSxBQUFDLENBQUMsR0FBQyxDQUFDO0FBR3RDLGNBQU0sSUFBSSxBQUFDLENBQ1QsTUFBSyxLQUFLLEFBQUMsQ0FBQyxNQUFLLFVBQVUsTUFBTSxDQUFDLE9BQU8sQUFBQyxDQUFDLFNBQVMsT0FBTSxDQUFHLENBQUEsSUFBRyxDQUFFO0FBRWhFLGFBQUksaUNBQWdDLEtBQUssQUFBQyxDQUFDLElBQUcsQ0FBQyxDQUFFO0FBRS9DLGtCQUFNLEtBQUssQUFBQyxDQUFDLE1BQUssT0FBTyxBQUFDLENBQUMsY0FBYSxLQUFLLEFBQUMsQ0FBQyxJQUFHLENBQUMsQ0FBRSxDQUFBLENBQUMsQ0FBQyxDQUFDLENBQUM7VUFDM0Q7QUFBQSxBQUNBLGVBQU8sUUFBTSxDQUFDO1FBQ2hCLENBQUUsR0FBQyxDQUFDLENBQ04sS0FBSyxBQUFDLENBQUMsTUFBSyxVQUFVLE1BQU0sQ0FBQyxDQUFDO0FBRzlCLFdBQUksYUFBWSxLQUFLLEFBQUMsQ0FBQyxNQUFLLFNBQVMsU0FBUyxDQUFDO0FBQzdDLGlCQUFPLE1BQU0sQUFBQyxDQUFDLHNCQUFxQixFQUFJLENBQUEsQ0FBQyxRQUFPLEtBQUssR0FBSyxZQUFVLENBQUMsTUFBTSxBQUFDLENBQUMsR0FBRSxDQUFDLENBQUUsQ0FBQSxDQUFDLENBQUEsQ0FBSSxxQ0FBbUMsQ0FBQSxDQUFJLFVBQVEsQ0FBQyxDQUFDO0FBQUEsTUFFMUksQ0FBQyxBQUFDLEVBQUMsQ0FBQztJRHpCMkI7RUFDM0IsQ0FBQTtBRERJLENBQUMsQ0FBQztBRTBCViIsImZpbGUiOiJib290c3RyYXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJTeXN0ZW0ucmVnaXN0ZXIoJF9fcGxhY2Vob2xkZXJfXzAsIGZ1bmN0aW9uKCRfX2V4cG9ydCkge1xuICAgICAgICAgICRfX3BsYWNlaG9sZGVyX18xXG4gICAgICAgIH0pOyIsInJldHVybiB7XG4gICAgICBzZXR0ZXJzOiAkX19wbGFjZWhvbGRlcl9fMCxcbiAgICAgIGV4ZWN1dGU6ICRfX3BsYWNlaG9sZGVyX18xXG4gICAgfSIsIi8vIFRoaXMgZmlsZSBib290c3RyYXBzIHRoZSBLYXJtYSB0ZXN0cyBieS4uLlxuLy8gICAtIExvYWRpbmcgYWxsIHNwZWMgZmlsZXNcbi8vICAgLSBTdGFydHMgdGhlIEthcm1hIHRlc3RzIG9uY2UgYm90aCBzcGVjcyBhcmUgbG9hZGVkXG4oZnVuY3Rpb24oKXtcblxuLy8gdGhpcyBuZWVkcyB0byBiZSBhZGRlZCB0byBhcHBseSB0aGUgZXh0ZW5zaW9uXG5yZWdpc3RlcihTeXN0ZW0pO1xuXG4vLyBNYWtlIGthcm1hIHdhaXRcbndpbmRvdy5fX2thcm1hX18ubG9hZGVkID0gZnVuY3Rpb24oKXt9O1xuXG4vLyBXYWl0IGZvciBhbGwgc3BlYyBtb2R1bGVzIHRvIGJlIGltcG9ydGVkLCB0aGVuIHN0YXJ0IHRlc3QgcnVuXG5Qcm9taXNlLmFsbChcbiAgT2JqZWN0LmtleXMod2luZG93Ll9fa2FybWFfXy5maWxlcykucmVkdWNlKGZ1bmN0aW9uKGltcG9ydHMsIGZpbGUpe1xuICAgIC8vIElzb2xhdGUgc3BlYyBtb2R1bGVzXG4gICAgaWYgKC9zcGVjX2J1aWxkXFwvLiooc3BlY3x0ZXN0KVxcLmpzJC9pLnRlc3QoZmlsZSkpe1xuICAgICAgLy8gTm9ybWFsaXplIHBhdGhzIHRvIG1vZHVsZSBhbmQgaW1wb3J0XG4gICAgICBpbXBvcnRzLnB1c2goU3lzdGVtLmltcG9ydCgvXlxcLyguKilcXC5qcyQvLmV4ZWMoZmlsZSlbMV0pKTtcbiAgICB9XG4gICAgcmV0dXJuIGltcG9ydHM7XG4gIH0sW10pXG4pLnRoZW4od2luZG93Ll9fa2FybWFfXy5zdGFydCk7XG5cbi8vIEF1dG8tcmVydW5zIHNwZWNzIHdpdGggTGl2ZVJlbG9hZFxuaWYgKC9kZWJ1Zy5odG1sJC8udGVzdCh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpKVxuICBkb2N1bWVudC53cml0ZShcIjxzY3JpcHQgc3JjPSdodHRwOi8vXCIgKyAobG9jYXRpb24uaG9zdCB8fCAnbG9jYWxob3N0Jykuc3BsaXQoJzonKVswXSArIFwiOjM1NzI5L2xpdmVyZWxvYWQuanM/c25pcHZlcj0xJz48L1wiICsgXCJzY3JpcHQ+XCIpO1xuXG59KSgpO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
