const router = require('express').Router();
const uploadController = require("../controllers/upload");

/**
 * @swagger
 *  /api/upload:
 *    post:
 *      tags:
 *      - images
 *      summary: 업로드
 *      requestBody:
 *          required: true
 *          content:
 *              multipart/form-data:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          file:
 *                              type: string
 *                              format: binary
 *      responses:
 *        "200":
 *          description: 업로드 성공
 *          content:
 *            application/json:
 *              schema:
 *                      type: object
 *                      properties:
 *                          filename:
 *                              type: string
 */
router.post("/", uploadController.uploadFile);

module.exports = router;