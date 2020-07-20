exports = async function () {
  try {
    const users = [
      { name: "Grisha", email: "grisha@gmail.com", password: "112233" },
    ];
    const coll = await context.functions.execute(
      "util_db_get_users_collection"
    );
    await coll.deleteMany({});
    return await coll.insertMany(users);
  } catch (e) {
    return Error(e.message, e);
  }
};
