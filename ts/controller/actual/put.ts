import { Response } from "express";
import { updateActualDB } from "../../db/actual";
import { sendResponse } from "../../common/common";

export default async function actualUpdate(request: any, response: Response) {
  return await v0(request, response);
}

async function v0(request: any, response: Response) {
  try {
    const data = {
      id: request.body.id,
      wellnessId: request.body.wellnessId,
      value: request.body.value,
      date: request.body.date,
      lastUpdatedBy: request.user.userId,
      updatedAt: Date.now(),
    };

    let info = await updateActualDB(data);
    return sendResponse(request, response, info.statusCode, info.clientMessage);
  } catch (e) {
    return sendResponse(request, response, 400, { Message: e.message });
  }
}
