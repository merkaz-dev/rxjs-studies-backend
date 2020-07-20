exports = async function (email) {
  try {
    const coll = await context.functions.execute(
      "util_db_get_users_collection"
    );

    const result = await coll.findOne({ email: email });
    return result;
  } catch (e) {
    return Error(e.message);
  }
};
