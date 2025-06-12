// amapa
// para
// roraima

function isInRange({ start, end }, code) {
  code = code.toUpperCase();
  start = start.toUpperCase();
  end = end.toUpperCase();
  return code >= start && code <= end;
}

const states = [
  {
    state: "Amapa",
    ranges: [
      {
        start: "NEI",
        end: "NFB",
      },
      {
        start: "QLN",
        end: "QLT",
      },
      {
        start: "SAK",
        end: "SAM",
      },
    ],
  },
  {
    state: "Pará",
    ranges: [
      {
        start: "JTA",
        end: "JWE",
      },
      {
        start: "NSE",
        end: "NTC",
      },
      {
        start: "OBT",
        end: "OCA",
      },
      {
        start: "OFI",
        end: "OFW",
      },
      {
        start: "OSW",
        end: "OTZ",
      },
      {
        start: "QDA",
        end: "QEZ",
      },
      {
        start: "QVA",
        end: "QVZ",
      },
      {
        start: "RWK",
        end: "RXD",
      },
    ],
  },
  {
    state: "Roraima",
    ranges: [
      {
        start: "NAH",
        end: "NBA",
      },
      {
        start: "NUH",
        end: "NUL",
      },
      {
        start: "RZA",
        end: "RZD",
      },
    ],
  },
];

const input = "JTB";

const result = states.find((state) => {
  return state.ranges.some((range) => {
    return isInRange(range, input);
  });
});

console.log(result.state);
