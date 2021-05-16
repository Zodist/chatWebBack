const router = require('express').Router();
const photoController = require("../controllers/photo");

/**
 * @swagger
 *  /api/photolist:
 *    get:
 *      tags:
 *      - images
 *      summary: 사진 목록 조회
 *      responses:
 *        "200":
 *          description: 성공
 *          content:
 *            image/png:
 *              schema:
 *                  type: string
 *                  format: binary
 */
router.get("/", photoController.getList);

module.exports = router;