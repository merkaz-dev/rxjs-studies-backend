exports = async function (course) {
  try {
    const coll = await context.functions.execute(
      "util_db_get_courses_collection"
    );

    const query = { id: course.id };
    const update = {
      id: course.id,
      description: course.description,
      level: course.level,
      category: course.category,
    };
    const updatedCourse = await coll.updateOne(query, update);
    return updatedCourse;
  } catch (e) {
    return Error(e.message);
  }
};
