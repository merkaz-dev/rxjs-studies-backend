exports = async function (courseId) {
  try {
    const coll = await context.functions.execute(
      "util_db_get_courses_collection"
    );

    return await coll.findOne({ id: parseInt(courseId) });
  } catch (e) {
    return Error(e.message);
  }
};
