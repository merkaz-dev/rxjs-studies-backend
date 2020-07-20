exports = async function (payload, response) {
  const { email } = payload.query;
  try {
    const result = await context.functions.execute(
      "f_06_get_user_by_email",
      email
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
