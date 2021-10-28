Vue.createApp({
  data() {
    return {
      users: [
        {
          name: "Joe",
          age: 37,
          hometown: "Lüneburg",
        },
        {
          name: "Franz",
          age: 25,
          hometown: "Berlin",
        },
        {
          name: "Norbert",
          age: 42,
          hometown: "Hannover",
        },
        {
          name: "Sven",
          age: 47,
          hometown: "München",
        },
      ],
    };
  },
}).mount("#nix-app");
