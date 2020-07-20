exports = async function (search) {
  try {
    const coll = await context.functions.execute(
      "util_db_get_lessons_collection"
    );

    const result = await coll
      .find({ description: { $regex: BSON.BSONRegExp(search, "i") } })
      .toArray();
    return result;
  } catch (e) {
    return Error(e.message);
  }
};
