exports = async function (payload, response) {
  const course = EJSON.parse(payload.body.text());
  try {
    const result = await context.functions.execute("f_03_edit_course", course);

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
