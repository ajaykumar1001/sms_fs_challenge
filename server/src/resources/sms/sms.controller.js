import smsService from "./sms.service"
import constants from "../../utils/constants";

export default {

    async addSms(req, res ) {
        try { 
            let sms = await smsService.addSms(req.body);
            return res.status(200).send({ success: true, message: constants.SMS_ADDED_SUCCESS, data: sms });
        } catch (err) {
            return res.status(500).send({ success: false, message: constants.SERVER_ERROR, data: JSON.stringify(err) });
        }
    },

    async editSms(req, res ) {
        try { 
            let sms = await smsService.editSms(req.params.id,req.body);
            return res.status(200).send({ success: true, message: constants.SMS_UPDATED_SUCCESS, data: sms });
        } catch (err) {
            return res.status(500).send({ success: false, message: constants.SERVER_ERROR, data: JSON.stringify(err) });
        }
    },

    async deleteSms(req, res ) {
        try { 
            let sms = await smsService.deleteSms(req.params.id);
            return res.status(200).send({ success: true, message: constants.SMS_DELETED_SUCCESS, data: sms });
        } catch (err) {
            return res.status(500).send({ success: false, message: constants.SERVER_ERROR, data: JSON.stringify(err) });
        }
    },

    async getSmsById(req, res ) {
        try { 
            let sms = await smsService.getSmsById(req.params.id);
            return res.status(200).send({ success: true, message: constants.SMS_FETCHED_SUCCESS, data: sms });
        } catch (err) {
            return res.status(500).send({ success: false, message: constants.SERVER_ERROR, data: JSON.stringify(err) });
        }
    },

    async getAllSms(req, res) {
        try {
            let {sortBy, start_date, end_date} = req.query;
            let filter = {};
            filter[sortBy] = 1;
            let query = {};
            if (start_date && end_date) {
                query = { '$and' : [{'start_date': {'$gte' : new Date(start_date) }}, {'end_date' : { '$lte' : new Date(end_date) }}]};
            } 
            let sms = await smsService.getAllSms(filter,query);
            return res.status(200).send({ success: true, message: constants.SMS_FETCHED_SUCCESS, data: sms });
        } catch (err) {
            return res.status(500).send({ success: false, message: constants.SERVER_ERROR, data: JSON.stringify(err) });
        }
    },
} 