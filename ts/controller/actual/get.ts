import { Response } from "express";

import { getActualByWellnessIdDB } from "../../db/actual";
import { sanitizeString } from "../../common/util";
import { sendResponse } from "../../common/common";

export default async function actualGet(
  request: any,
  response: Response,
) {
  return await v0(request, response);
}

async function v0(request: any, response: Response) {
  try {
    const wellnessId = sanitizeString(request.headers.parentid) as string;
    const info = await getActualByWellnessIdDB( wellnessId);
    return sendResponse(request, response, 200, info);
  } catch (e) {
    return sendResponse(request, response, 400, { Message: e.message });
  }
}
