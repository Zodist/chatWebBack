const router = require('express').Router();
const downloadController = require("../controllers/download");

/**
 * @swagger
 *  /api/download:
 *    post:
 *      tags:
 *      - images
 *      summary: 다운로드
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          fileName:
 *                              type: string
 *      responses:
 *        "200":
 *          description: 다운로드 성공
 *          content:
 *            image/png:
 *              schema:
 *                  type: string
 *                  format: binary
 */
router.post("/", downloadController.downloadFile);

module.exports = router;