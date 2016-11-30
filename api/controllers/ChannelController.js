/**
 * ChannelController
 *
 * @description :: Server-side logic for managing channels
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	destroy: function(req, res) {
        var id = req.param('id');

        if (!id) {
            return res.badRequest('No id passed.');
        }

        msg.update(id, {
            isEnabled: false
        }).exec(function(err, msg) {
            if (err) {
                res.serverError(err);
            }

            return res.jsonx(msg);
        });
    },

    create: function(req, res) {
        if (!req.body) {
            return res.badRequest('No body data passed.');
        }

        msg.create(req.body).exec(function(err, msg) {
            if (err) {
                return res.serverError(err);
            }

            return res.jsonx(msg);
        });
    },

    update: function(req, res) {
        if (!req.body) {
            return res.badRequest('No body data passed.');
        }

        var id = req.param('id');

        if (!id) {
            return res.badRequest('No id passed.');
        }

        msg.update(id, req.body).exec(function(err, msg) {
            if (err) {
                return res.serverError(err);
            }

            return res.jsonx(msg);
        });
    }
};
