exports = async function () {
  try {
    const coll = await context.functions.execute(
      "util_db_get_courses_collection"
    );
    return await coll.find().toArray();
  } catch (e) {
    return Error(e.message);
  }
};
