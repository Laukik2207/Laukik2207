const axios = require("axios");
const fs = require("fs");

const namespace = "laukik2207-profile";
const key = "visitors";

async function main() {

const res = await axios.get(
`https://api.countapi.xyz/hit/${namespace}/${key}`
);

const count = String(res.data.value).padStart(7,"0");

const svg = `
<svg xmlns="http://www.w3.org/2000/svg"
width="360"
height="95">

<style>
text{
font-family:'JetBrains Mono',monospace;
font-size:18px;
fill:#F59E0B;
}
</style>

<rect
x="2"
y="2"
rx="8"
width="356"
height="90"
fill="#0D1117"
stroke="#F59E0B"
stroke-width="2"/>

<text x="20" y="30">
┌────────────────────────────┐
</text>

<text x="20" y="55">
│ 👀 visitors : ${count} │
</text>

<text x="20" y="80">
└────────────────────────────┘
</text>

</svg>
`;

fs.mkdirSync("output",{recursive:true});

fs.writeFileSync("output/visitor-counter.svg",svg);

}

main();
