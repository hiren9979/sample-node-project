import { Response } from "express";
import { sanitizeString } from "../../common/util";
import { sendResponse } from "../../common/common";
import { deleteActualDB } from "../../db/actual";

export default async function actualDelete(request: any, response: Response) {
  return await v0(request, response);
}

async function v0(request: any, response: Response) {
  try {
    const data = {
      isDeleted: true,
      deletedBy: request.user.userId,
      deletedAt: Date.now(),
      id: sanitizeString(request.headers.id) as string,
      workspaceId: sanitizeString(request.headers.workspaceid) as string,
    };
    let info = await deleteActualDB(data);
    return sendResponse(request, response, info.statusCode, info.clientMessage);
  } catch (e:any) {
    return sendResponse(request, response, 400, { Message: e.message });
  }
}