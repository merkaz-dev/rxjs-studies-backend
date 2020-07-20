exports = async function () {
  try {
    const lessons = [
      { description: "Angular advanced", duration: "1:22" },
      { description: "Angular beginner", duration: "7:54" },
      { description: "Angular intermediate", duration: "3:13" },
      { description: "MongoDb advanced", duration: "6:53" },
      { description: "MongoDb beginner", duration: "3:32" },
      { description: "MongoDb intermediate", duration: "7:54" },
      { description: "JS advanced", duration: "2:13" },
      { description: "JS beginner", duration: "3:43" },
      { description: "JS intermediate", duration: "14:56" },
    ];
    const coll = await context.functions.execute(
      "util_db_get_lessons_collection"
    );
    await coll.deleteMany({});
    return await coll.insertMany(lessons);
  } catch (e) {
    return Error(e.message, e);
  }
};
