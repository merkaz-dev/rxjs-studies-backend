exports = async function (courseId) {
  try {
    const coll = await context.functions.execute(
      "util_db_get_courses_collection"
    );

    const course = await coll.findOne({ id: parseInt(courseId) });
    return { payload: course };
  } catch (e) {
    return Error(e.message);
  }
};
