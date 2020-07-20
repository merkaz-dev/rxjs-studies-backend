exports = async function () {
  try {
    const courses = [
      {
        id: 1,
        description: "RxJs",
        category: "Programming",
        level: "BEGINNER",
      },
      {
        id: 2,
        description: "RxJs Advanced",
        category: "Programming",
        level: "ADVANCED",
      },
      {
        id: 3,
        description: "C#",
        category: "OOP",
        level: "BEGINNER",
      },
      {
        id: 4,
        description: "Java",
        category: "OOP",
        level: "ADVANCED",
      },
      {
        id: 5,
        description: "Scala",
        category: "OOP",
        level: "ADVANCED",
      },
    ];
    const coll = await context.functions.execute(
      "util_db_get_courses_collection"
    );
    await coll.deleteMany({});
    return await coll.insertMany(courses);
  } catch (e) {
    return Error(e.message, e);
  }
};
