Vue.createApp({
  data() {
    return {
      searchQuery: "",
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
  computed: {
    filteredUsers() {
      return this.users.filter((user) =>
        user.name.toLowerCase().startsWith(this.searchQuery.toLowerCase())
      );
    },
    userTotalCount() {
      return this.filteredUsers.length;
    },
  },
}).mount("#userlist-app");
