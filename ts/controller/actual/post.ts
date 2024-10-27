import { Response } from "express";
import { sendResponse } from "../../common/common";
import { addActualDB } from "../../db/actual";
import { generateV4uuid } from "../../common/util";

export default async function actualAdd(
  request: any,
  response: Response
) {
  return await v0(request, response);
}

async function v0(request: any, response: Response) {
  try {
   
    const userId = request.user.userId;
    const data = {
      id: generateV4uuid(),
      workspaceId: request.body.workspaceId,
      wellnessId: request.body.wellnessId,
      value: request.body.value,
      date: request.body.date,
      createdBy: userId,
    };

    const info = await addActualDB(data);
    return sendResponse(request, response, info.statusCode, info.clientMessage);
  } catch (e) {
    return sendResponse(request, response, 400, { Message: e.message });
  }
}
