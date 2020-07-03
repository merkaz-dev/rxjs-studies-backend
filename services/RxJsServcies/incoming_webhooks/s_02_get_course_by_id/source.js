exports = async function (payload, response) {
  const { courseId } = payload.query;

  try {
    const result = await context.functions.execute(
      "f_02_get_course_by_id",
      courseId
    );

    if (result.message) {
      response.setStatusCode(422);
    } else {
      response.setStatusCode(200);
    }

    response.setHeader("Content-Type", ["application/json"]);
    response.setBody(JSON.stringify(result));
  } catch (e) {
    response.setStatusCode(400);
    response.setHeader("Content-Type", ["application/json"]);
    response.setBody(JSON.stringify(e));
  }
};
