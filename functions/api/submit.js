/**
 * POST /api/submit
 */
import turnstilePlugin from "@cloudflare/pages-plugin-turnstile";

// This is a real secret key. In prod, we recommend you store
// your secret key(s) safely. 
const SECRET_KEY = '0x4AAAAAAAxC7KFaHGvVLTtZk7NU-QsfZC8';


export async function onRequestPost(context) {
/*  try {
    let input = await context.request.formData();

    // Convert FormData to JSON
    // NOTE: Allows multiple values per key
    let output = {};
    for (let [key, value] of input) {
      let tmp = output[key];
      if (tmp === undefined) {
        output[key] = value;
      } else {
        output[key] = [].concat(tmp, value);
      }
    } */

  turnstilePlugin({
    	secret: SECRET_KEY,
    }),
    (async (context) => {
    	// Request has been validated as coming from a human
    	const formData = await context.request.formData()

    	var tmp, outcome = {};
	for (let [key, value] of formData) {
		tmp = outcome[key];
		if (tmp === undefined) {
			outcome[key] = value;
		} else {
			outcome[key] = [].concat(tmp, value);
		}
	}

	// Attach Turnstile outcome to the response
	outcome["turnstile_outcome"] = context.data.turnstile;

    let pretty = JSON.stringify(outcome, null, 2);
    // let pretty = JSON.stringify(output, null, 2);  
    return new Response(pretty, {
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
    });
  }) catch (err) {
    return new Response("Error parsing JSON content", { status: 400 });
  }
}
//}
