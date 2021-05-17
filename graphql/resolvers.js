const changyeon = {
    name: "Changyeon",
    age: 27,
    gender: "male"
}

const resolvers = {
    Query: {
        person: () => changyeon
    }
};

export default resolvers;