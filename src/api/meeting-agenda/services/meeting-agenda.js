'use strict';

/**
 * meeting-agenda service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::meeting-agenda.meeting-agenda');
