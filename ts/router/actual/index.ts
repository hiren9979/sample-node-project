import { Router } from "express";
import actualDelete from "../../controller/actual/delete";
import actualAdd from "../../controller/actual/post";
import actualUpdate from "../../controller/actual/put";
import actualGet from "../../controller/actual/get";


const router = Router();

router.get("", actualGet);
router.post("", actualAdd);
router.put("", actualUpdate);
router.delete("", actualDelete);

export default router;
