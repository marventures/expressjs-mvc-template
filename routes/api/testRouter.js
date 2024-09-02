import { Router } from 'express';
import { CtrlWrapper } from '../../helpers/CtrlWrapper.js';
import { test } from '../../controllers/testController.js';

export const router = Router();

router.get('/', CtrlWrapper(test));
