exports = async function (payload, response) {
  const { search } = payload.query;

  try {
    const result = await context.functions.execute(
      "f_04_search_lessons_by_expression",
      search
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
