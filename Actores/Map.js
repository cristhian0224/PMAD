<div id="observablehq-chart-18b3f321"></div>
<div id="observablehq-graph-18b3f321"></div>
<p>Credit: <a href="https://observablehq.com/@cristhian0224/bilevel-edge-bundling">Bilevel Edge Bundling by Cristhian</a></p>

<script type="module">
import {Runtime, Inspector} from "https://cdn.jsdelivr.net/npm/@observablehq/runtime@4/dist/runtime.js";
import define from "https://api.observablehq.com/@cristhian0224/bilevel-edge-bundling.js?v=3";
new Runtime().module(define, name => {
  if (name === "chart") return new Inspector(document.querySelector("#observablehq-chart-18b3f321"));
  if (name === "graph") return new Inspector(document.querySelector("#observablehq-graph-18b3f321"));
  return ["data"].includes(name);
});
</script>
