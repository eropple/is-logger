import Joi, { ValidationOptions } from "@hapi/joi";

const BASIC_LOGGER =
  Joi.object().keys({
    trace: Joi.func().required(),
    debug: Joi.func().required(),
    info: Joi.func().required(),
    error: Joi.func().required()
  });

const BUNYAN_LOGGER =
  BASIC_LOGGER.keys({
    fatal: Joi.func().required(),
    child: Joi.func().required(),
    streams: Joi.array().required()
  });

const JOI_OPTIONS: ValidationOptions = {
  allowUnknown: true
};

export function isLogger(obj: any) {
  const result = BASIC_LOGGER.validate(obj, JOI_OPTIONS);
  return !(result.error);
}

export function isBunyan(obj: any) {
  const result = BUNYAN_LOGGER.validate(obj, JOI_OPTIONS);
  return !(result.error);
}
