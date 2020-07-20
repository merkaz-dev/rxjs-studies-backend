exports = async function () {
  try {
    const coll = await context.functions.execute(
      "util_db_get_courses_collection"
    );
    const courses = await coll.find().toArray();
    return {
      payload: courses,
    };
  } catch (e) {
    return Error(e.message);
  }
};
